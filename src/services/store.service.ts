import { createApi } from '@reduxjs/toolkit/query/react'
import type { StoreRequest, StoreResponse } from '@/types/store'
import { apiConfig } from '@/lib/api-config'
import { StoreEndpoint, HTTPMethod } from '@/constants/apis'

export const storeApi = createApi({
  reducerPath: 'storeApi',
  ...apiConfig,
  tagTypes: ['Store'],
  endpoints: (builder) => ({
    getStoreInfoByStoreId: builder.query<StoreResponse, StoreRequest>({
      query: (storeId) => ({
        url: `${StoreEndpoint.GET_STORE}/${storeId}`,
        method: HTTPMethod.GET,
      }),
      providesTags: ['Store'],
    }),
  }),
})

export const {
  useGetStoreInfoByStoreIdQuery,
  useLazyGetStoreInfoByStoreIdQuery,
} = storeApi
