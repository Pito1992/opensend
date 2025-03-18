export interface User {
  id: string
  email: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: User
}

export interface AuthState {
  token: string | null
  user: User | null
  isAuthenticated: boolean
}
