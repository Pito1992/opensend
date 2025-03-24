import { createApi } from '@reduxjs/toolkit/query/react'
import type { UserRequest, UserResponse } from '@/types/user'
import { apiConfig } from '@/lib/api-config'
import { UserEndpoint, HTTPMethod } from '@/constants/apis'

export const userApi = createApi({
  reducerPath: 'userApi',
  ...apiConfig,
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserResponse, UserRequest>({
      query: () => ({
        url: UserEndpoint.GET_USER_PROFILE,
        method: HTTPMethod.GET,
      }),
      providesTags: ['Profile'],
    }),
  }),
})

export const { useGetUserProfileQuery } = userApi
