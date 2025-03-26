import { type ComponentProps } from 'react'
import { cn } from '@/utils/general'
import { DashboardHeader } from '@/components/dashboard/header.dashboard'
import { DashboardMain } from '@/components/dashboard/main.dashboard'
import { DashboardWidgets } from '@/components/dashboard/widgets.dashboard'

type DashboardProps = ComponentProps<'div'> & {
  title: string
}

export function Dashboard({ className, title }: DashboardProps) {
  return (
    <div className={cn('container mx-auto px-4 py-8', className)}>
      <DashboardHeader title={title} />
      <DashboardMain />
      <DashboardWidgets />
    </div>
  )
}
