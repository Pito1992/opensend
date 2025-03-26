import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { DashboardState } from '@/types/dashboard'
import type {
  WidgetCreatePayload,
  WidgetUpdatePayload,
  WidgetRemovePayload,
  WidgetLayoutUpdatePayload,
} from '@/types/widget'
import { dashboardApi } from '@/services/dashboard.service'
import { createWidget, getWidgetLayout } from '@/utils/widget'

const initialData: DashboardState = {
  widgets: [],
  layouts: {
    lg: [],
    md: [],
    sm: [],
  },
  isFetched: false,
}

const initialState: DashboardState = initialData

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<WidgetCreatePayload>) => {
      const newWidget = createWidget({
        title: action.payload.title,
        description: action.payload.description,
        type: action.payload.type,
      })
      state.widgets.push(newWidget)

      const widgetLayout = getWidgetLayout(newWidget)
      Object.keys(state.layouts).forEach((breakpoint) => {
        state.layouts[breakpoint].push(widgetLayout)
      })
    },
    updateWidget: (state, action: PayloadAction<WidgetUpdatePayload>) => {
      const widget = state.widgets.find((w) => w.id === action.payload.id)
      if (widget) {
        if (action.payload.title) widget.title = action.payload.title
        if (action.payload.description)
          widget.description = action.payload.description
      }
    },
    removeWidget: (state, action: PayloadAction<WidgetRemovePayload>) => {
      state.widgets = state.widgets.filter((w) => w.id !== action.payload)
      Object.keys(state.layouts).forEach((breakpoint) => {
        state.layouts[breakpoint] = state.layouts[breakpoint].filter(
          (l) => l.i !== action.payload
        )
      })
    },
    updateLayouts: (
      state,
      action: PayloadAction<WidgetLayoutUpdatePayload>
    ) => {
      state.layouts = action.payload
      Object.values(action.payload)
        .flat()
        .forEach((layout) => {
          const widget = state.widgets.find((w) => w.id === layout.i)
          if (widget) {
            widget.x = layout.x
            widget.y = layout.y
            widget.w = layout.w
            widget.h = layout.h
          }
        })
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      dashboardApi.endpoints.getDashboardWidgets.matchFulfilled,
      (state, { payload }) => {
        if (state.isFetched) return

        state.widgets = payload.widgets
        state.layouts = payload.layouts
        state.isFetched = true
      }
    )
  },
})

export const { addWidget, updateWidget, removeWidget, updateLayouts } =
  dashboardSlice.actions

export default dashboardSlice.reducer
