import { Navigate, Outlet, useLocation } from 'react-router'
import { LOGIN_PATH } from '@/constants/routes'
import { Header } from '@/components/header'
import { useAuth } from '@/hooks/useAuth'

export function ProtectedLayout() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={LOGIN_PATH} replace state={{ from: location }} />
  }

  return (
    <div className="border-grid flex h-screen w-screen flex-1 flex-col overflow-x-hidden overflow-y-auto">
      <Header />
      <main className="bg-gray-2 flex-1">
        <Outlet />
      </main>
    </div>
  )
}
