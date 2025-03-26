import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { env } from '@/config/env'
import type { RootState } from '@/stores'

export const apiConfig = {
  baseQuery: fetchBaseQuery({
    baseUrl: env.API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState
      const { accessToken, clientToken } = state.auth?.tokens || {}

      if (accessToken) {
        headers.set('Access-Token', `Bearer ${accessToken}`)
      }
      if (clientToken) {
        headers.set('Client-Token', clientToken)
      }
      return headers
    },
  }),
}

export const publicApiConfig = {
  baseQuery: fetchBaseQuery({
    baseUrl: env.API_PUBLIC_URL,
  }),
}
