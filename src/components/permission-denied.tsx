import { XCircle } from '@phosphor-icons/react'

export function PermissionDenied() {
  return (
    <div className="bg-gray-2 flex min-h-screen w-screen items-center justify-center">
      <div className="bg-card text-card-foreground w-full max-w-md rounded-lg px-6 py-8 text-center shadow-md">
        <div className="mb-6 flex justify-center">
          <XCircle className="text-destructive size-16" weight="bold" />
        </div>

        <h1 className="font-darkerGrotesque mb-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Permission Denied
        </h1>

        <p className="font-sans text-sm text-gray-900 dark:text-gray-100">
          Sorry, you don't have permission to access this page. Please contact
          your administrator if you believe this is a mistake.
        </p>
      </div>
    </div>
  )
}
