import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const editWidgetSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
})

export type EditWidgetFormData = z.infer<typeof editWidgetSchema>

export function useEditWidgetModalForm() {
  const form = useForm<EditWidgetFormData>({
    resolver: zodResolver(editWidgetSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
    },
  })
  return form
}
