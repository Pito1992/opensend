import { type FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { type SerializedError } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router'
import { useLazyGetStoreInfoByStoreIdQuery } from '@/services/store.service'
import { UserRole } from '@/constants/user'
import { ADMIN_PATH, DASHBOARD_PATH, ONBOARDING_PATH } from '@/constants/routes'
import { notify } from '@/utils/toast'
interface NavigateByRoleProps {
  viewType?: UserRole
  storeId?: string
}

export function useNavigateByRole() {
  const navigate = useNavigate()
  const [getStoreInfo] = useLazyGetStoreInfoByStoreIdQuery()

  const handleNavigation = async ({
    viewType,
    storeId,
  }: NavigateByRoleProps) => {
    if (viewType === UserRole.ADMIN) {
      return navigate(ADMIN_PATH)
    }

    if (viewType === UserRole.CLIENT) {
      try {
        if (storeId) {
          const response = await getStoreInfo(storeId).unwrap()
          const onboardingStatus =
            response?.store?.onboarding_procedure?.onboarding_status
          if (onboardingStatus !== 'DONE') {
            return navigate(ONBOARDING_PATH)
          }
        }

        navigate(DASHBOARD_PATH)
      } catch (error) {
        const errorData = (error as FetchBaseQueryError)
          ?.data as SerializedError
        notify.error(errorData?.message || 'Error fetching store info')
      }
    }
  }

  return { handleNavigation }
}
