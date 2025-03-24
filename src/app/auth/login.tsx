import { LoginForm } from '@/components/login-form'
import { Logo } from '@/components/logo'

export function LoginPage() {
  return (
    <div className="bg-gray-2 @container flex h-screen flex-col items-center justify-center gap-6">
      <Logo className="h-8 w-auto" />
      <div className="bg-card text-card-foreground w-full space-y-8 rounded-none border border-none p-12 shadow-none @md:w-[480px] @md:rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <h4 className="font-darkerGrotesque text-3xl leading-normal font-semibold text-gray-900 dark:text-gray-100">
            Welcome back!
          </h4>
          <p className="font-sans text-sm font-normal text-gray-900 dark:text-gray-100">
            Log in to continue with Opensend
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
