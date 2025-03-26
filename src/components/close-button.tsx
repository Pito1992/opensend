import React from 'react'
import { X } from '@phosphor-icons/react'
import { cn } from '@/utils/general'

type CloseButtonProps = React.ComponentProps<'button'> & {
  icon?: React.ReactNode
}

export function CloseButton({ className, icon, ...props }: CloseButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'text-foreground cursor-pointer outline-none',
        'hover:text-foreground/80',
        'absolute top-2 right-2',
        className
      )}
      {...props}
    >
      {icon ?? <X size={16} weight="bold" />}
    </button>
  )
}
