import { AddWidgetModal } from '@/components/add-widget-modal'
import { ConfigureWidgetModal } from '@/components/configure-widget-modal'
import { EditWidgetModal } from '@/components/edit-widget-modal'
import { UserRole } from '@/constants/user'
import { Authorization } from '@/components/authorization'

export function DashboardWidgets() {
  return (
    <Authorization allowedRoles={[UserRole.ADMIN]}>
      <AddWidgetModal />
      <ConfigureWidgetModal />
      <EditWidgetModal />
    </Authorization>
  )
}
