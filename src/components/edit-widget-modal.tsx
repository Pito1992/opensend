import { useId, useEffect } from 'react'
import { useSearchParams, useMatch, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { ADMIN_PATH, EDIT_PATH } from '@/constants/routes'
import { useDashboard } from '@/hooks/useDashboard'
import { WidgetForm as EditWidgetModalForm } from '@/components/widget-form'
import { Modal } from '@/components/modal'
import { Button } from '@/elements/button'
import { cn } from '@/utils/general'
import {
  useEditWidgetModalForm,
  type EditWidgetFormData,
} from '@/hooks/useEditWidgetModalForm'
import { updateWidget } from '@/stores/slices/dashboard.slice'
import { WidgetId } from '@/types/widget'
import { notify } from '@/utils/toast'
import { ToastMessage } from '@/components/toast-message'

export function EditWidgetModal() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { widgets } = useDashboard()
  const editPath = useMatch(`${ADMIN_PATH}${EDIT_PATH}`)
  const [searchParams] = useSearchParams()
  const formId = useId()
  const form = useEditWidgetModalForm()

  const widgetId = searchParams.get('widgetId') as WidgetId | null
  const widget = widgets.find((widget) => widget.id === widgetId)
  const widgetType = widget?.type
  const isOpen = !!widgetId && editPath !== null && !!widgetType

  const onClose = () => {
    form.reset()
    navigate(ADMIN_PATH)
  }

  const onSubmit = (data: EditWidgetFormData) => {
    if (widgetId) {
      dispatch(
        updateWidget({
          id: widgetId,
          title: data.title,
          description: data.description,
        })
      )
      notify.success(
        <ToastMessage message="Metric widget updated successfully" />
      )
      onClose()
    }
  }

  useEffect(() => {
    if (widget) {
      form.reset({
        title: widget.title,
        description: widget.description,
      })
    }
  }, [form, widget])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Metric"
      description="Update the metric details below."
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
            disabled={!form.formState.isValid || !form.formState.isDirty}
            className={cn('cursor-pointer rounded-sm font-medium', 'flex-1')}
          >
            Save Changes
          </Button>
        </>
      }
    >
      {widgetType && (
        <EditWidgetModalForm<EditWidgetFormData>
          id={formId}
          form={form}
          onSubmit={onSubmit}
          type={widgetType}
        />
      )}
    </Modal>
  )
}
