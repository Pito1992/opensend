import { type HTMLAttributes } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { UserRole } from '@/constants/user'

interface AuthorizationProps extends HTMLAttributes<HTMLElement> {
  allowedRoles: UserRole[]
}

export function Authorization({ allowedRoles, children }: AuthorizationProps) {
  const { userRole } = useAuth()

  if (userRole && allowedRoles.includes(userRole)) {
    return children
  }

  return null
}
