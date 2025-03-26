import {
  isRejectedWithValue,
  type Middleware,
  type UnknownAction,
  type ThunkDispatch,
  type AnyAction,
  type SerializedError,
} from '@reduxjs/toolkit'
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { logout, refreshTokens } from '@/stores/slices/auth.slice'
import { authApi } from '@/services/auth.service'
import type { AuthState } from '@/types/auth'
import { notify } from '@/utils/toast'

interface RejectedError {
  status: number
}

type MiddlewareDispatch = ThunkDispatch<
  { auth: AuthState },
  undefined,
  AnyAction
>

export const authMiddleware: Middleware<unknown, { auth: AuthState }> =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (
      isRejectedWithValue(action) &&
      (action.payload as unknown as RejectedError)?.status === 401
    ) {
      try {
        const refreshToken = getState().auth.tokens?.refreshToken
        if (refreshToken) {
          const refreshResponse = await (dispatch as MiddlewareDispatch)(
            authApi.endpoints.refresh.initiate(refreshToken)
          ).unwrap()
          dispatch(refreshTokens(refreshResponse))
          const retryAction = action.meta.arg as UnknownAction
          return dispatch(retryAction)
        } else {
          throw new Error('No refresh token found')
        }
      } catch (error) {
        const errorData = (error as FetchBaseQueryError)
          ?.data as SerializedError
        notify.error(errorData?.message || 'Error refreshing tokens')
        dispatch(logout())
      }
    }
    return next(action)
  }
