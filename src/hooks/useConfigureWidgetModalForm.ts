import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const configureWidgetSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
})

export type ConfigureWidgetFormData = z.infer<typeof configureWidgetSchema>

export function useConfigureWidgetModalForm() {
  const form = useForm<ConfigureWidgetFormData>({
    resolver: zodResolver(configureWidgetSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
    },
  })
  return form
}
