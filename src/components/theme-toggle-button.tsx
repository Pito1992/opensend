import { Moon, Sun } from '@phosphor-icons/react'
import React from 'react'
import { Button } from '@/elements/button'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils/general'
import { Theme } from '@/constants/theme'

type ThemeToggleButtonProps = React.ComponentProps<typeof Button>

export function ThemeToggleButton({
  className,
  ...props
}: ThemeToggleButtonProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        'relative cursor-pointer text-gray-900 hover:bg-transparent dark:text-gray-100 dark:hover:bg-transparent',
        className
      )}
      {...props}
    >
      <Sun className="h-5 w-5 scale-100 rotate-0 transition-[rotate] duration-200 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-[rotate] duration-200 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
