import { cn } from '@/utils/general'
import { Logo } from '@/components/logo'
import { LogoutButton } from '@/components/logout-button'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 z-10',
        'flex items-center justify-between',
        'border-border/50 bg-background/95',
        'supports-[backdrop-filter]:bg-background/60 backdrop-blur',
        'border-b border-solid',
        'h-16 w-full px-6 py-4'
      )}
    >
      <Logo className="w-38" />
      <div>
        <ThemeToggleButton />
        <LogoutButton />
      </div>
    </header>
  )
}
