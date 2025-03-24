import { Outlet, Navigate, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '@/stores'
import { HOME_PATH } from '@/constants/routes'

export function AuthLayout() {
  const location = useLocation()
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  if (isAuthenticated) {
    return <Navigate to={HOME_PATH} replace state={{ from: location }} />
  }

  return <Outlet />
}
