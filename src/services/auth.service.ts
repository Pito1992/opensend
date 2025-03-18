import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { LoginRequest, LoginResponse } from '@/types/auth'
import { API_BASE_URL, AuthEndpoint } from '@/constants/api'
import type { RootState } from '@/stores'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: AuthEndpoint.LOGIN,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: AuthEndpoint.LOGOUT,
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation } = authApi
