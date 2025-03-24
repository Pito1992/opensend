import type { User, Tokens, Access, View } from '@/types/user'
import { UserRole } from '@/constants/user'

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  message: string
  user: User
  view: View
  accesses: Access[]
  tokens: Tokens
}

export type LogoutRequest = void
export type LogoutResponse = void
export type RefreshRequest = Tokens['refreshToken']

export interface RefreshResponse {
  message: string
  user: User
  tokens: Tokens
}

export interface AuthState {
  tokens: Tokens | null
  isAuthenticated: boolean
  userRole: UserRole | null
}
