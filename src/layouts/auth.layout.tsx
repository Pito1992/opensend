import { Outlet, Navigate, useLocation } from 'react-router'
import { HOME_PATH } from '@/constants/routes'
import { useAuth } from '@/hooks/useAuth'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

export function AuthLayout() {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={HOME_PATH} replace state={{ from: location }} />
  }

  return (
    <>
      <ThemeToggleButton className="fixed top-3.5 right-4 z-50" />
      <Outlet />
    </>
  )
}
