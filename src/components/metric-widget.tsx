import React from 'react'
import { UserRole } from '@/constants/user'
import type { Widget } from '@/types/widget'
import {
  getWidgetLabel,
  getWidgetIcon,
  getWidgetTextColor,
} from '@/utils/widget'
import { cn } from '@/utils/general'
import { RemoveMetricWidgetButton } from '@/components/remove-metric-widget-button'
import { EditMetricWidgetButton } from '@/components/edit-metric-widget-button'
import { Authorization } from '@/components/authorization'

type MetricWidgetProps = Widget

export function MetricWidget({
  id: widgetId,
  title,
  description,
  value,
  type: widgetType,
}: MetricWidgetProps) {
  const label = getWidgetLabel(widgetType)
  const icon = getWidgetIcon(widgetType)
  const textColor = getWidgetTextColor(widgetType)

  return (
    <div
      className={cn(
        'flex size-full flex-col',
        'border-border ring-border rounded-sm border',
        'bg-background p-4 shadow-sm'
      )}
    >
      <div className="mb-2 flex flex-col font-bold">
        <div className="flex items-center justify-between">
          {icon &&
            React.createElement(icon, {
              weight: 'duotone',
              className: cn('size-8', textColor),
            })}
          <Authorization allowedRoles={[UserRole.ADMIN]}>
            <div className="flex gap-0">
              <EditMetricWidgetButton widgetId={widgetId} />
              <RemoveMetricWidgetButton widgetId={widgetId} />
            </div>
          </Authorization>
        </div>
        <h4 className="font-darkerGrotesque text-foreground text-base font-bold">
          {title}
        </h4>
      </div>
      <p className="line-clamp-3 text-xs text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <div className="mt-auto text-center">
        <span className={cn('text-2xl font-bold', textColor)}>{value}</span>
        <p className="text-muted-foreground text-xs lowercase">{label}</p>
      </div>
    </div>
  )
}
