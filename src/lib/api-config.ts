import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '@/constants/apis'
import type { RootState } from '@/stores'

export const apiConfig = {
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
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
