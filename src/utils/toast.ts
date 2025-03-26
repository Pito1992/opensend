import { type ReactNode } from 'react'
import { ToastType, TOAST_DEFAULT_CONFIG } from '@/constants/toast'
import { toast, type ToastOptions } from 'react-toastify'
import { type NotifyFunction } from '@/types/toast'

function createToast(type: ToastType) {
  return (message: ReactNode, options?: ToastOptions) =>
    toast(message, {
      ...TOAST_DEFAULT_CONFIG,
      ...options,
      type,
    })
}

const notifyFn = (message: ReactNode, options?: ToastOptions) =>
  toast(message, {
    ...TOAST_DEFAULT_CONFIG,
    ...options,
  })

export const notify = Object.assign(notifyFn, {
  success: createToast(ToastType.SUCCESS),
  error: createToast(ToastType.ERROR),
  warning: createToast(ToastType.WARNING),
  info: createToast(ToastType.INFO),
}) as NotifyFunction
