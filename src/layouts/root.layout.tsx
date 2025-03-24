import { Outlet } from 'react-router'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

export function RootLayout() {
  return (
    <div>
      <ThemeToggleButton className="fixed top-4 right-4 z-10" />
      <Outlet />
    </div>
  )
}
