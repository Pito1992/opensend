import { useDispatch } from 'react-redux'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { updateLayouts } from '@/stores/slices/dashboard.slice'
import { MetricWidget } from '@/components/metric-widget'
import { Layout } from 'react-grid-layout'
import { useDashboard } from '@/hooks/useDashboard'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import '@/styles/grid-layout.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

export function DashboardMain() {
  const dispatch = useDispatch()
  const { widgets, layouts } = useDashboard()

  const handleLayoutChange = (
    _layout: Layout[],
    allLayouts: { [key: string]: Layout[] }
  ) => {
    dispatch(updateLayouts(allLayouts))
  }

  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
        onLayoutChange={handleLayoutChange}
        containerPadding={[0, 0]}
        margin={[16, 16]}
        draggableCancel=".no-drag"
      >
        {widgets.map((widget) => (
          <div key={widget.id}>
            <MetricWidget {...widget} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}
