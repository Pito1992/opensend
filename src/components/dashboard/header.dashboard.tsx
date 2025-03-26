import React from 'react'
import { AddMetricWidgetButton } from '@/components/add-metric-widget-button'

type DashboardHeaderProps = React.ComponentProps<'div'> & {
  title: string
}

export function DashboardHeader({ title, children }: DashboardHeaderProps) {
  return (
    <div className="mb-8 flex items-center gap-2 sm:gap-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <AddMetricWidgetButton />
      {children}
    </div>
  )
}
