import { type HTMLAttributes } from 'react'
import { Navigate, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '@/stores'
import { LOGIN_PATH } from '@/constants/routes'
import { UserRole } from '@/constants/user'
import { PermissionDenied } from '@/components/permission-denied'

interface ProtectedRouteProps extends HTMLAttributes<HTMLElement> {
  allowedRoles: UserRole[]
}

export function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const location = useLocation()
  const { isAuthenticated, userRole } = useSelector(
    (state: RootState) => state.auth
  )

  if (!isAuthenticated) {
    return <Navigate to={LOGIN_PATH} replace state={{ from: location }} />
  }

  if (
    isAuthenticated &&
    allowedRoles &&
    userRole &&
    !allowedRoles.includes(userRole)
  ) {
    return <PermissionDenied />
  }

  return <>{children}</>
}
