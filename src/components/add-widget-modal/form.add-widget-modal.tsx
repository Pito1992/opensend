import React, { type HTMLAttributes } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/elements/form'
import { cn } from '@/utils/general'
import { Label } from '@/elements/label'
import type { UseFormReturn } from 'react-hook-form'
import type { AddWidgetFormData } from '@/hooks/useAddWidgetModalForm'
import { WidgetType } from '@/constants/widget'
import {
  getWidgetIcon,
  getWidgetTitle,
  getWidgetTextColor,
} from '@/utils/widget'

interface AddWidgetModalFormProps
  extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  form: UseFormReturn<AddWidgetFormData>
  onSubmit: (data: AddWidgetFormData) => void
}

export function AddWidgetModalForm({
  form,
  onSubmit,
  ...props
}: AddWidgetModalFormProps) {
  return (
    <>
      <h2 className="font-darkerGrotesque text-foreground mb-4 text-lg font-bold">
        Overview
      </h2>
      <Form {...form}>
        <form {...props} onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {Object.values(WidgetType).map((type) => {
                    const icon = getWidgetIcon(type)
                    const title = getWidgetTitle(type)
                    const textColor = getWidgetTextColor(type)
                    const isSelected = field.value === type
                    const onChange = () => field.onChange(type)

                    return (
                      <Label
                        key={type}
                        className={cn(
                          'flex flex-col items-center',
                          'group bg-background cursor-pointer',
                          'ring-border border-border rounded-sm border ring-1',
                          'transition-all duration-200',
                          {
                            'border-primary ring-primary': isSelected,
                            'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-500':
                              !isSelected,
                          }
                        )}
                      >
                        <FormControl>
                          <input
                            type="radio"
                            className="sr-only"
                            value={type}
                            checked={isSelected}
                            onChange={onChange}
                          />
                        </FormControl>
                        <div className="flex w-full flex-col items-center justify-center p-4 lg:p-6">
                          <div
                            className={cn(
                              'flex items-center justify-center',
                              'rounded-sm border border-gray-400',
                              'bg-background mb-4 aspect-square w-8',
                              'lg:w-30',
                              'group-hover:border-gray-600 dark:group-hover:border-gray-300'
                            )}
                          >
                            {icon &&
                              React.createElement(icon, {
                                weight: 'duotone',
                                className: cn(
                                  'size-8 text-gray-600 lg:size-10 dark:text-gray-300',
                                  textColor
                                ),
                              })}
                          </div>
                          <p className="text-center text-xs text-gray-700 lg:text-sm dark:text-gray-300">
                            {title}
                          </p>
                        </div>
                      </Label>
                    )
                  })}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  )
}
