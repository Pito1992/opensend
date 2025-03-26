import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import { CloseButton } from '@/components/close-button'
import { ToastContainer, type ToastContainerProps } from 'react-toastify'
import { TOAST_DEFAULT_CONFIG } from '@/constants/toast'
import { cn } from '@/utils/general'
import '@/styles/toast.css'

type ToastProviderProps = ToastContainerProps & {
  children: React.ReactNode
}

export function ToastProvider({ children, ...restProps }: ToastProviderProps) {
  const { theme } = useTheme()

  return (
    <>
      {children}
      <ToastContainer
        {...restProps}
        {...TOAST_DEFAULT_CONFIG}
        theme={theme}
        closeButton={({ closeToast }) => <CloseButton onClick={closeToast} />}
        toastClassName={cn(
          'relative flex p-4 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer',
          'bg-background text-foreground',
          'shadow-inputBorder hover:shadow-inputHoverBorder',
          'border border-border transition-colors mb-3',
          'dark:bg-background dark:text-primary-foreground dark:border-border'
        )}
        progressClassName={cn(
          'Toastify__progress-bar--animated Toastify__progress-bar--default',
          'h-[2px] bg-primary dark:bg-primary'
        )}
      />
    </>
  )
}
