import { useSelector } from 'react-redux'
import type { RootState } from '@/stores'

export function useUserProfile() {
  const { view, accesses } = useSelector((state: RootState) => state.user)

  return { view, accesses }
}
