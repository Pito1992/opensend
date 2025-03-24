import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { LOGIN_PATH } from '@/constants/routes'
import { useNavigateByRole } from '@/hooks/useNavigateByRole'
import { type RootState } from '@/stores'

export function HomePage() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  const { view, accesses } = useSelector((state: RootState) => state.user)
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
