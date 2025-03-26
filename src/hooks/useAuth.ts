import { type RootState } from '@/stores'
import { useSelector } from 'react-redux'

export function useAuth() {
  const { isAuthenticated, userRole, tokens } = useSelector(
    (state: RootState) => state.auth
  )

  return { isAuthenticated, userRole, tokens }
}
