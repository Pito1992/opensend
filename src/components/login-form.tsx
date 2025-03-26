import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Eye, EyeClosed, Envelope, Lock } from '@phosphor-icons/react'
import { Button } from '@/elements/button'
import { Input } from '@/elements/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/elements/form'
import { useLoginMutation } from '@/services/auth.service'
import { cn } from '@/utils/general'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { HOME_PATH } from '@/constants/routes'
import { notify } from '@/utils/toast'
import { ToastMessage } from '@/components/toast-message'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password should have at least 8 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [login, { isLoading, error }] = useLoginMutation()
  const navigate = useNavigate()
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data).unwrap()
      notify.success(<ToastMessage message="Successfully logged in!" />)
      await navigate(HOME_PATH)
    } catch (error) {
      const errorData = (error as FetchBaseQueryError)?.data as SerializedError
      notify.error(errorData?.message || 'An error occurred during login')
    }
  }

  useEffect(() => {
    const errorData = (error as FetchBaseQueryError)?.data as SerializedError
    if (errorData?.code) {
      if (/^AUTH_EMAIL/i.test(errorData.code)) {
        form.setError('email', { message: errorData.message })
      } else {
        form.setError('password', { message: errorData.message })
      }
    }
  }, [form, error])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem className="gap-0.5">
              <FormControl>
                <div
                  className={cn(
                    'bg-background relative flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm leading-6 transition-colors',
                    {
                      'shadow-inputDestructiveBorder': fieldState.error,
                      'shadow-inputBorder hover:shadow-inputHoverBorder focus-within:shadow-inputActiveBorder':
                        !fieldState.error,
                    }
                  )}
                >
                  <Envelope
                    className="h-4 w-4 flex-shrink-0 text-neutral-400"
                    weight="duotone"
                  />
                  <Input
                    placeholder="Email address"
                    type="email"
                    className={cn(
                      'placeholder:text-muted-foreground h-6 w-0 grow border-0 bg-transparent p-0 text-sm shadow-none focus:outline-none focus-visible:ring-0',
                      'dark:bg-transparent'
                    )}
                    aria-invalid={!!fieldState.error}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-destructive text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem className="gap-0.5">
              <FormControl>
                <div
                  className={cn(
                    'bg-background relative flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm leading-6 transition-colors',
                    {
                      'shadow-inputDestructiveBorder': fieldState.error,
                      'shadow-inputBorder hover:shadow-inputHoverBorder focus-within:shadow-inputActiveBorder':
                        !fieldState.error,
                    }
                  )}
                >
                  <Lock
                    className="h-4 w-4 flex-shrink-0 text-neutral-400"
                    weight="duotone"
                  />
                  <Input
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    className={cn(
                      'placeholder:text-muted-foreground h-6 w-0 grow border-0 bg-transparent p-0 text-sm shadow-none focus:outline-none focus-visible:ring-0',
                      'dark:bg-transparent'
                    )}
                    aria-invalid={!!fieldState.error}
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="border-none bg-transparent p-0"
                  >
                    {showPassword ? (
                      <Eye className="h-4 w-4 text-neutral-400" />
                    ) : (
                      <EyeClosed className="h-4 w-4 text-neutral-400" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage className="text-destructive text-sm" />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2">
          <Button
            type="submit"
            variant="default"
            size="lg"
            className={cn(
              'w-full cursor-pointer rounded-sm font-medium',
              'dark:text-primary-foreground'
            )}
            disabled={!form.formState.isValid || isLoading}
          >
            Login
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={cn(
              'border-border w-full cursor-pointer rounded-sm font-medium',
              'hover:shadow-inputBorder hover:bg-transparent'
            )}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              // TODO: Implement forgot password functionality
            }}
          >
            Forgot Your Password?
          </Button>
        </div>
      </form>
    </Form>
  )
}
