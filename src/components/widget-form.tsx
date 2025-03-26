import React, { type HTMLAttributes } from 'react'
import type { UseFormReturn, Path } from 'react-hook-form'
import { Input } from '@/elements/input'
import { Textarea } from '@/elements/textarea'
import { WidgetType } from '@/constants/widget'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/elements/form'
import {
  getWidgetTypeText,
  getWidgetLabel,
  getWidgetDescription,
  getWidgetIcon,
  getWidgetTextColor,
} from '@/utils/widget'
import { cn } from '@/utils/general'
import { Label } from '@/elements/label'

type FormData = {
  title: string
  description: string
}

interface WidgetFormProps<T extends FormData>
  extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  form: UseFormReturn<T>
  onSubmit: (data: T) => void
  type: WidgetType
}

export function WidgetForm<T extends FormData>({
  type,
  form,
  onSubmit,
  ...props
}: WidgetFormProps<T>) {
  const icon = getWidgetIcon(type)
  const label = getWidgetLabel(type)
  const textColor = getWidgetTextColor(type)
  const description = getWidgetDescription(type)

  return (
    <Form {...form}>
      <form {...props} onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
        <div
          className={cn('grid grid-cols-1 gap-2', 'sm:grid-cols-2 sm:gap-6')}
        >
          <div>
            <div
              className={cn(
                'block overflow-hidden rounded-sm',
                'border-border ring-border border ring-1'
              )}
            >
              <div className="bg-background flex flex-col gap-2 px-4 pt-4 pb-6 sm:gap-6">
                <h3 className="text-foreground text-xs font-bold text-gray-500 uppercase">
                  {label}
                </h3>
                <div className="flex items-end gap-1.5">
                  <div className="flex items-center justify-center rounded-md">
                    {icon &&
                      React.createElement(icon, {
                        className: cn('text-primary size-8', textColor),
                        weight: 'duotone',
                      })}
                  </div>
                  <span className="text-foreground text-xl font-semibold">
                    0
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground px-4 py-2 text-xs">
                {description}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-6">
            <div
              className={cn(
                'block overflow-hidden rounded-sm',
                'border-border ring-border border ring-1'
              )}
            >
              <div className="bg-background flex flex-col gap-1 p-4">
                <h3 className="text-foreground text-muted-foreground text-xs font-bold">
                  Widget type
                </h3>
                <p className="text-foreground text-sm font-medium">
                  {getWidgetTypeText(type)}
                </p>
              </div>
            </div>
            <div
              className={cn(
                'block overflow-hidden rounded-sm',
                'border-border ring-border border ring-1'
              )}
            >
              <div className="bg-background flex flex-col gap-2 p-4 sm:gap-6">
                <FormField
                  control={form.control}
                  name={'title' as Path<T>}
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-foreground text-muted-foreground text-xs font-bold">
                        Title <span className="text-destructive">*</span>
                      </Label>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full text-xs md:text-sm"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={'description' as Path<T>}
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-foreground text-muted-foreground text-xs font-bold">
                        Description <span className="text-destructive">*</span>
                      </Label>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="h-28 w-full resize-none text-xs md:text-sm"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-xs" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}
