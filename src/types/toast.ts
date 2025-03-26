import { Theme } from '@/constants/theme'
import { type ReactNode } from 'react'
import { type ToastOptions } from 'react-toastify'

export type ToastTheme = Theme

export interface NotifyFunction {
  (message: ReactNode, options?: ToastOptions): void
  success: (message: ReactNode, options?: ToastOptions) => void
  error: (message: ReactNode, options?: ToastOptions) => void
  warning: (message: ReactNode, options?: ToastOptions) => void
  info: (message: ReactNode, options?: ToastOptions) => void
}
