import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/stores'
import { useLazyGetDashboardWidgetsQuery } from '@/services/dashboard.service'

export function useDashboard() {
  const [getDashboardWidgets, { isFetching, error }] =
    useLazyGetDashboardWidgetsQuery()
  const { widgets, layouts, isFetched } = useSelector(
    (state: RootState) => state.dashboard
  )

  useEffect(() => {
    if (!isFetched && !isFetching && !error) {
      getDashboardWidgets()
    }
  }, [getDashboardWidgets, isFetched, isFetching, error])

  return { widgets, layouts, isFetching, isFetched }
}
