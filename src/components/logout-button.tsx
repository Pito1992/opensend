import React from 'react'
import { Button } from '@/elements/button'
import { SignOut } from '@phosphor-icons/react'
import { notify } from '@/utils/toast'
import { cn } from '@/utils/general'
import { useDispatch } from 'react-redux'
import { logout } from '@/stores/slices/auth.slice'
import { ToastMessage } from '@/components/toast-message'

type LogoutButtonProps = React.ComponentProps<typeof Button>

export function LogoutButton({ className, ...props }: LogoutButtonProps) {
  const dispatch = useDispatch()

  const handleLogout = () => {
    const confirmLogout = confirm(
      'Are you sure you want to logout?\nYou will lose all your data after logout.'
    )
    if (confirmLogout) {
      dispatch(logout())
      notify.success(
        <ToastMessage message="You have been logged out successfully." />
      )
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLogout}
      className={cn(
        'cursor-pointer text-gray-900 hover:bg-transparent dark:text-gray-100 dark:hover:bg-transparent',
        className
      )}
      {...props}
    >
      <SignOut className="h-5 w-5" />
      Log out
    </Button>
  )
}
