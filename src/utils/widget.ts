import { nanoid } from 'nanoid'
import type { Widget, WidgetValue } from '@/types/widget'
import type { Layout } from 'react-grid-layout'
import type { Icon } from '@phosphor-icons/react'
import type { WidgetCreatePayload } from '@/types/widget'
import {
  WidgetCreation,
  WidgetTitle,
  WidgetDescription,
  WidgetType,
  WidgetIcon,
  WidgetLabel,
} from '@/constants/widget'
import { formatCompactNumber, formatPercent } from '@/utils/number'
export function createWidget({
  title,
  description,
  type,
}: WidgetCreatePayload): Widget {
  return {
    id: nanoid(),
    title: title,
    description: description,
    type: type,
    value: 0,
    x: WidgetCreation.X,
    y: WidgetCreation.Y,
    w: WidgetCreation.WIDTH,
    h: WidgetCreation.HEIGHT,
  }
}

export function getWidgetLayout({ id, x, y, w, h }: Widget): Layout {
  return {
    i: id,
    x,
    y,
    w,
    h,
  }
}

export function getWidgetTitle(type: WidgetType) {
  return WidgetTitle?.[type] ?? ''
}

export function getWidgetDescription(type: WidgetType) {
  return WidgetDescription?.[type] ?? ''
}

export function getWidgetIcon(type: WidgetType) {
  return (WidgetIcon?.[type] as unknown as Icon) ?? null
}

export function getWidgetLabel(type: WidgetType) {
  return WidgetLabel?.[type] ?? ''
}

export function getWidgetTypeText(type: WidgetType) {
  const title = getWidgetTitle(type)
  return title ? `${title} - TEXT` : ''
}

export function getWidgetValue(type: WidgetType, value: WidgetValue) {
  switch (type) {
    case WidgetType.IDENTITIES:
      return value
    case WidgetType.ITERABLE:
      return formatPercent(value)
    case WidgetType.YOTPO:
      return formatCompactNumber(value)
    default:
      return 0
  }
}

export function getWidgetTextColor(type: WidgetType) {
  switch (type) {
    case WidgetType.IDENTITIES:
      return 'text-chart-1'
    case WidgetType.ITERABLE:
      return 'text-chart-2'
    case WidgetType.YOTPO:
      return 'text-chart-3'
    default:
      return ''
  }
}
