import { Layout } from 'react-grid-layout'
import { WidgetType } from '@/constants/widget'
import type { Widget } from '@/types/widget'

export interface DashboardState {
  widgets: Widget[]
  layouts: {
    [key: string]: Layout[]
  }
  isFetched: boolean
}

export interface AddWidgetFormData {
  type: WidgetType
  title: string
  description: string
}

export interface EditWidgetFormData {
  title: string
  description: string
}

export interface DashboardResponse {
  widgets: Widget[]
  layouts: {
    [key: string]: Layout[]
  }
}

export type DashboardRequest = void
