import { createApi } from '@reduxjs/toolkit/query/react'
import type {
  LoginRequest,
  LoginResponse,
  RefreshRequest,
  RefreshResponse,
  LogoutRequest,
  LogoutResponse,
} from '@/types/auth'
import { AuthEndpoint, HTTPMethod } from '@/constants/apis'
import { apiConfig } from '@/lib/api-config'

export const authApi = createApi({
  reducerPath: 'authApi',
  ...apiConfig,
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: AuthEndpoint.LOGIN,
        method: HTTPMethod.POST,
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation<LogoutResponse, LogoutRequest>({
      query: () => ({
        url: AuthEndpoint.LOGOUT,
        method: HTTPMethod.POST,
      }),
      invalidatesTags: ['Auth'],
    }),
    refresh: builder.mutation<RefreshResponse, RefreshRequest>({
      query: (refreshToken) => ({
        url: AuthEndpoint.REFRESH,
        method: HTTPMethod.POST,
        body: {
          refreshToken,
        },
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useRefreshMutation } =
  authApi
