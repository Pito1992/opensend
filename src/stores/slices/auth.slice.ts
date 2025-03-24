import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AuthState, RefreshResponse } from '@/types/auth'
import { authApi } from '@/services/auth.service'
import { storeApi } from '@/services/store.service'
import { UserRole } from '@/constants/user'

const initialState: AuthState = {
  tokens: null,
  isAuthenticated: false,
  userRole: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.tokens = null
      state.isAuthenticated = false
    },
    refreshTokens: (state, action: PayloadAction<RefreshResponse>) => {
      state.tokens = {
        ...state.tokens,
        ...action.payload.tokens,
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.tokens = payload.tokens
        state.isAuthenticated = true
        state.userRole = payload.view?.type
      }
    )
    builder.addMatcher(
      storeApi.endpoints.getStoreInfoByStoreId.matchFulfilled,
      (state, { payload }) => {
        if (
          payload?.store?.onboarding_procedure?.onboarding_status !== 'DONE'
        ) {
          state.userRole = UserRole.CLIENT_ONBOARDING
        }
      }
    )
  },
})

export const { logout, refreshTokens } = authSlice.actions
export default authSlice.reducer
