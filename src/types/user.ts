import type { Store } from '@/types/store'
import { UserRole } from '@/constants/user'

export interface User {
  id: string
  email: string
}

export interface Tokens {
  accessToken: string
  refreshToken: string
  clientToken: string
}

export interface Role {
  id: number
  name: string
}

export interface Access {
  store_id: string
  user_id: number
  role_id: number
  role: Role
  store: Store
}

export interface ViewToggles {
  id: number
  role_id: number
  view_type: string
  [key: string]: unknown
}

export interface View {
  type: UserRole
  access: Access
  accesses: Access[]
  viewToggles: ViewToggles
}

export type UserRequest = void

export interface UserResponse {
  user: User
}

export interface UserState {
  user: User | null
  view: View | null
  accesses: Access[]
}
