import { useNavigate } from 'react-router'
import { Button } from '@/elements/button'
import { UserRole } from '@/constants/user'
import { cn } from '@/utils/general'
import { ADMIN_PATH, NEW_PATH } from '@/constants/routes'
import { Authorization } from '@/components/authorization'

export function AddMetricWidgetButton() {
  const navigate = useNavigate()
  const handleAddWidget = () => {
    navigate(`${ADMIN_PATH}${NEW_PATH}`)
  }

  return (
    <Authorization allowedRoles={[UserRole.ADMIN]}>
      <Button
        variant="default"
        onClick={handleAddWidget}
        className={cn('cursor-pointer')}
      >
        Add Widget
      </Button>
    </Authorization>
  )
}
