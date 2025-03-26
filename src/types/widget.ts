import { Layout } from 'react-grid-layout'
import { WidgetType } from '@/constants/widget'

export type WidgetId = string
export type WidgetTitle = string
export type WidgetDescription = string
export type WidgetValue = number | string

export interface Widget extends Omit<Layout, 'i'> {
  id: WidgetId
  title: WidgetTitle
  description: WidgetDescription
  type: WidgetType
  value?: WidgetValue
}

export type WidgetCreatePayload = {
  title: WidgetTitle
  description: WidgetDescription
  type: WidgetType
}

export type WidgetUpdatePayload = {
  id: WidgetId
  title?: WidgetTitle
  description?: WidgetDescription
}

export type WidgetRemovePayload = WidgetId

export type WidgetLayoutUpdatePayload = {
  [key: string]: Layout[]
}
