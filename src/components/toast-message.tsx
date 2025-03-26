import { type ReactNode } from 'react'
import { cn } from '@/utils/general'

interface ToastMessageProps {
  message: ReactNode
  icon?: ReactNode
  className?: string
}

export function ToastMessage({ message, icon, className }: ToastMessageProps) {
  return (
    <div className={cn('flex items-start gap-3', className)}>
      {icon && (
        <span className="flex-shrink-0 text-neutral-400 dark:text-neutral-500">
          {icon}
        </span>
      )}
      <div className="font-darkerGrotesque flex-1 text-lg leading-6 text-gray-900 dark:text-gray-100">
        {message}
      </div>
    </div>
  )
}
