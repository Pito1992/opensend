import { createSlice } from '@reduxjs/toolkit'
import type { AuthState } from '@/types/auth'
import { authApi } from '@/services/auth.service'

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.user = null
      state.isAuthenticated = false
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.user = payload.user
        state.isAuthenticated = true
      }
    )
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
