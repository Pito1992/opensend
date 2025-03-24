import { createSlice } from '@reduxjs/toolkit'
import type { UserState } from '@/types/user'
import { authApi } from '@/services/auth.service'
import { userApi } from '@/services/user.service'

const initialState: UserState = {
  user: null,
  view: null,
  accesses: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user
        state.view = payload.view
        state.accesses = payload.accesses
      }
    )
    builder.addMatcher(
      userApi.endpoints.getUserProfile.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user
      }
    )
  },
})

export default userSlice.reducer
