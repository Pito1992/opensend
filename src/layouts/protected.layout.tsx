import { Navigate, Outlet, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores'
import { LOGIN_PATH } from '@/constants/routes'

export function ProtectedLayout() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={LOGIN_PATH} replace state={{ from: location }} />
  }

  return (
    <div className="bg-gray-2 relative flex h-screen w-screen">
      <Outlet />
    </div>
  )
}
