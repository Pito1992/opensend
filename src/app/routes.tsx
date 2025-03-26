import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import {
  LOGIN_PATH,
  DASHBOARD_PATH,
  ONBOARDING_PATH,
  ADMIN_PATH,
} from '@/constants/routes'
import { UserRole } from '@/constants/user'

// Pages
import { LoginPage } from '@/app/auth/login'
import { HomePage } from '@/app/home/page'
import { AdminPage } from '@/app/admin/page'
import { DashboardPage } from '@/app/dashboard/page'
import { OnboardingPage } from '@/app/onboarding/page'
import { NotFound } from '@/app/not-found/page'

// Layouts
import { RootLayout } from '@/layouts/root.layout'
import { ProtectedLayout } from '@/layouts/protected.layout'
import { AuthLayout } from '@/layouts/auth.layout'

// Components
import { ProtectedRoute } from '@/components/protected-route'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<AuthLayout />}>
            <Route path={LOGIN_PATH} element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route
              path={ADMIN_PATH}
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <Outlet />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminPage />} />
              <Route path="new" element={<AdminPage />} />
              <Route path="edit" element={<AdminPage />} />
            </Route>
            <Route
              path={DASHBOARD_PATH}
              element={
                <ProtectedRoute allowedRoles={[UserRole.CLIENT]}>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={ONBOARDING_PATH}
              element={
                <ProtectedRoute allowedRoles={[UserRole.CLIENT_ONBOARDING]}>
                  <OnboardingPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
