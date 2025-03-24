import { useGetUserProfileQuery } from '@/services/user.service'

export function AdminPage() {
  // Get user profile
  const { data: userProfile } = useGetUserProfileQuery()
  console.log('🚀 ~ AdminPage ~ userProfile:', userProfile)

  return (
    <div>
      <h1 className="text-primary">Admin Page</h1>
    </div>
  )
}
