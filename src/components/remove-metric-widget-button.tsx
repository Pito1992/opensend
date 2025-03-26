import { useDispatch } from 'react-redux'
import { Button } from '@/elements/button'
import { cn } from '@/utils/general'
import { Trash } from '@phosphor-icons/react'
import { removeWidget } from '@/stores/slices/dashboard.slice'
import { type WidgetId } from '@/types/widget'
import { notify } from '@/utils/toast'
import { ToastMessage } from '@/components/toast-message'

interface RemoveMetricWidgetButtonProps {
  widgetId: WidgetId
}

export function RemoveMetricWidgetButton({
  widgetId,
}: RemoveMetricWidgetButtonProps) {
  const dispatch = useDispatch()
  const onRemove = () => {
    const confirmRemove = confirm(
      'Are you sure you want to remove this metric widget?'
    )
    if (confirmRemove) {
      dispatch(removeWidget(widgetId))
      notify.success(
        <ToastMessage message="Metric widget removed successfully." />
      )
    }
  }

  return (
    <Button
      onClick={onRemove}
      variant="ghost"
      className={cn(
        'no-drag cursor-pointer',
        'rounded-full',
        'text-destructive',
        'hover:text-destructive hover:bg-destructive/10'
      )}
    >
      <Trash className="size-4" />
    </Button>
  )
}
