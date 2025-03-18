import { LoginForm } from '@/components/login-form'
import { Logo } from '@/components/logo'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

export function LoginPage() {
  return (
    <div className="bg-gray-2 @container relative flex h-screen flex-col items-center justify-center gap-6">
      <ThemeToggleButton className="absolute top-4 right-4" />
      <Logo className="h-8 w-auto" />
      <div className="bg-card text-card-foreground w-full space-y-8 rounded-none border border-none p-12 shadow-none @md:w-[480px] @md:rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <h4 className="font-darkerGrotesque text-gray-9 text-3xl leading-normal font-semibold">
            Welcome back!
          </h4>
          <p className="text-gray-9 font-sans text-sm font-normal">
            Log in to continue with Opensend
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
