import { useId, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams, useNavigate, useMatch } from 'react-router'
import { Modal } from '@/components/modal'
import { WidgetType } from '@/constants/widget'
import { WidgetForm as ConfigureWidgetModalForm } from '@/components/widget-form'
import { Button } from '@/elements/button'
import { cn } from '@/utils/general'
import {
  useConfigureWidgetModalForm,
  type ConfigureWidgetFormData,
} from '@/hooks/useConfigureWidgetModalForm'
import { getWidgetTitle, getWidgetDescription } from '@/utils/widget'
import { addWidget } from '@/stores/slices/dashboard.slice'
import { ADMIN_PATH, NEW_PATH } from '@/constants/routes'
import { notify } from '@/utils/toast'
import { ToastMessage } from '@/components/toast-message'

export function ConfigureWidgetModal() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const newPath = useMatch(`${ADMIN_PATH}${NEW_PATH}`)
  const widgetType = searchParams.get('widgetType') as WidgetType | null
  const dispatch = useDispatch()
  const form = useConfigureWidgetModalForm()
  const formId = useId()

  const isOpen = newPath !== null && !!widgetType

  const onClose = () => {
    navigate(ADMIN_PATH)
    form.reset()
  }

  const onBack = () => {
    navigate(`${ADMIN_PATH}${NEW_PATH}`)
    form.reset()
  }

  const onSubmit = (data: ConfigureWidgetFormData) => {
    if (widgetType) {
      dispatch(
        addWidget({
          type: widgetType,
          title: data.title,
          description: data.description,
        })
      )
      notify.success(
        <ToastMessage message="New metric widget added successfully" />
      )
      onClose()
    }
  }

  useEffect(() => {
    if (widgetType) {
      form.reset({
        title: getWidgetTitle(widgetType),
        description: getWidgetDescription(widgetType),
      })
    }
  }, [form, widgetType])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Configure widget"
      description="Add a title and select data to display on the overview page."
      footer={
        <>
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className={cn(
              'border-border text-foreground font-inter',
              'cursor-pointer rounded-sm font-medium',
              'flex-1'
            )}
          >
            Back
          </Button>
          <Button
            type="submit"
            form={formId}
            disabled={!form.formState.isValid}
            className={cn('cursor-pointer rounded-sm font-medium', 'flex-1')}
          >
            Add
          </Button>
        </>
      }
    >
      {widgetType && (
        <ConfigureWidgetModalForm<ConfigureWidgetFormData>
          form={form}
          id={formId}
          onSubmit={onSubmit}
          type={widgetType}
        />
      )}
    </Modal>
  )
}
