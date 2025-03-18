import type { ComponentProps } from 'react'
import { cn } from '@/utils/general'
import { HOME_PATH } from '@/constants/routes'
import logo from '@/assets/logo.svg'

type LogoProps = ComponentProps<'a'>

export function Logo({ className, ...restProps }: LogoProps) {
  return (
    <a
      href={HOME_PATH}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('block w-45', className)}
      {...restProps}
    >
      <img src={logo} alt="logo" className="h-auto w-full dark:invert" />
    </a>
  )
}
