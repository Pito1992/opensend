import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { Button } from '@/elements/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/elements/dropdown-menu'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils/general'
import { Theme } from '@/constants/theme'

type ThemeToggleButtonProps = React.ComponentProps<typeof Button>

export function ThemeToggleButton({
  className,
  ...props
}: ThemeToggleButtonProps) {
  const { setTheme } = useTheme()

  const applyTheme = (theme: Theme) => () => {
    setTheme(theme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn('text-gray-9', className)}
          {...props}
        >
          <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={applyTheme(Theme.LIGHT)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={applyTheme(Theme.DARK)}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={applyTheme(Theme.SYSTEM)}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
