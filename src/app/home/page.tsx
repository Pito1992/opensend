import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { LOGIN_PATH } from '@/constants/routes'
import { useNavigateByRole } from '@/hooks/useNavigateByRole'
import { useAuth } from '@/hooks/useAuth'
import { useUserProfile } from '@/hooks/useUserProfile'

export function HomePage() {
  const { isAuthenticated } = useAuth()
  const { view, accesses } = useUserProfile()
  const navigate = useNavigate()
  const { handleNavigation } = useNavigateByRole()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(LOGIN_PATH, { replace: true })
    } else {
      handleNavigation({
        viewType: view?.type,
        storeId: accesses?.[0]?.store_id,
      })
    }
  }, [view, accesses, handleNavigation, isAuthenticated, navigate])

  return null
}
