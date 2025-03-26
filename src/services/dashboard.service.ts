import { createApi } from '@reduxjs/toolkit/query/react'
import type { DashboardResponse, DashboardRequest } from '@/types/dashboard'
import { publicApiConfig } from '@/lib/api-config'
import { DashboardEndpoint, HTTPMethod } from '@/constants/apis'

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  ...publicApiConfig,
  tagTypes: ['Dashboard'],
  endpoints: (builder) => ({
    getDashboardWidgets: builder.query<DashboardResponse, DashboardRequest>({
      query: () => ({
        url: `${DashboardEndpoint.GET_WIDGETS}/widgets.json`,
        method: HTTPMethod.GET,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }),
      providesTags: ['Dashboard'],
    }),
  }),
})

export const { useGetDashboardWidgetsQuery, useLazyGetDashboardWidgetsQuery } =
  dashboardApi
