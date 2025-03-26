import { Button } from '@/elements/button'
import { useSearchParams, useNavigate } from 'react-router'
import { cn } from '@/utils/general'
import { PencilSimpleLine } from '@phosphor-icons/react'
import { ADMIN_PATH, EDIT_PATH } from '@/constants/routes'

interface EditMetricWidgetButtonProps {
  widgetId: string
}

export function EditMetricWidgetButton({
  widgetId,
}: EditMetricWidgetButtonProps) {
  const [, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const onEdit = () => {
    const newSearchParams = new URLSearchParams()
    newSearchParams.set('widgetId', widgetId)
    setSearchParams(newSearchParams)
    navigate(`${ADMIN_PATH}${EDIT_PATH}?${newSearchParams.toString()}`)
  }
  return (
    <Button
      onClick={onEdit}
      variant="ghost"
      className={cn('no-drag cursor-pointer', 'rounded-full')}
    >
      <PencilSimpleLine className="size-4" />
    </Button>
  )
}
