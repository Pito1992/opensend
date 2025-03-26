import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { WidgetType } from '@/constants/widget'

export const addWidgetSchema = z.object({
  type: z.enum([
    WidgetType.IDENTITIES,
    WidgetType.ITERABLE,
    WidgetType.YOTPO,
  ] as const),
})

export type AddWidgetFormData = z.infer<typeof addWidgetSchema>

export function useAddWidgetModalForm() {
  const form = useForm<AddWidgetFormData>({
    resolver: zodResolver(addWidgetSchema),
    defaultValues: {
      type: undefined,
    },
  })

  return form
}
