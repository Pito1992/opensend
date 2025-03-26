import { useId } from 'react'
import { useSearchParams, useNavigate, useMatch } from 'react-router'
import { Modal } from '@/components/modal'
import { Button } from '@/elements/button'
import { cn } from '@/utils/general'
import { AddWidgetModalForm } from '@/components/add-widget-modal/form.add-widget-modal'
import {
  useAddWidgetModalForm,
  type AddWidgetFormData,
} from '@/hooks/useAddWidgetModalForm'
import { ADMIN_PATH, NEW_PATH } from '@/constants/routes'
import { WidgetType } from '@/constants/widget'

export function AddWidgetModal() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const newPath = useMatch(`${ADMIN_PATH}${NEW_PATH}`)
  const widgetType = searchParams.get('widgetType') as WidgetType | null
  const form = useAddWidgetModalForm()
  const formId = useId()
  const onSubmit = (data: AddWidgetFormData) => {
    const newSearchParams = new URLSearchParams()
    newSearchParams.set('widgetType', data.type)
    setSearchParams(newSearchParams)
    setTimeout(() => {
      form.reset()
    })
    navigate(`${ADMIN_PATH}${NEW_PATH}?${newSearchParams.toString()}`)
  }
  const isOpen = newPath !== null && !widgetType

  const onClose = () => {
    form.reset()
    navigate(ADMIN_PATH)
  }

  const selectedType = form.watch('type')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add a Metric"
      description="Select a widget type to add to the overview page."
      footer={
        <>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className={cn(
              'border-border text-foreground font-inter',
              'cursor-pointer rounded-sm font-medium',
              'flex-1'
            )}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form={formId}
            disabled={!selectedType}
            className={cn('cursor-pointer rounded-sm font-medium', 'flex-1')}
          >
            Next
          </Button>
        </>
      }
    >
      <AddWidgetModalForm form={form} id={formId} onSubmit={onSubmit} />
    </Modal>
  )
}
