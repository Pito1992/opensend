import { IdentificationCard, ChartLine, Envelope } from '@phosphor-icons/react'

export enum WidgetType {
  IDENTITIES = 'IDENTITIES',
  ITERABLE = 'ITERABLE',
  YOTPO = 'YOTPO',
}

export enum WidgetLabel {
  IDENTITIES = 'Identities Provided',
  YOTPO = 'Clicked',
  ITERABLE = 'Opened Message',
}

export const WidgetIcon = {
  IDENTITIES: IdentificationCard,
  YOTPO: ChartLine,
  ITERABLE: Envelope,
} as const

export enum WidgetTitle {
  IDENTITIES = 'Identities Provided',
  YOTPO = 'Yotpo Metric',
  ITERABLE = 'Iterable Metric',
}

export enum WidgetDescription {
  IDENTITIES = 'Number of provided identities during the selected time period',
  YOTPO = 'Number of provided identities who clicked on emails for the selected time period',
  ITERABLE = 'Number of provided identities who opened emails during the selected time period',
}

export enum WidgetCreation {
  WIDTH = 2,
  HEIGHT = 2,
  X = 0,
  Y = Infinity,
}

export const METRIC_WIDGET_TYPES = [
  {
    value: WidgetType.IDENTITIES,
    label: WidgetLabel.IDENTITIES,
    icon: WidgetIcon.IDENTITIES,
  },
  {
    value: WidgetType.ITERABLE,
    label: WidgetLabel.ITERABLE,
    icon: WidgetIcon.ITERABLE,
  },
  {
    value: WidgetType.YOTPO,
    label: WidgetLabel.YOTPO,
    icon: WidgetIcon.YOTPO,
  },
]
