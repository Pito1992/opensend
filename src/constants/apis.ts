import { env } from '@/config/env'

export const API_BASE_URL = env.API_BASE_URL
export const API_PUBLIC_URL = env.API_PUBLIC_URL

export enum AuthEndpoint {
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  REFRESH = '/auth/refresh-token',
}

export enum StoreEndpoint {
  GET_STORE = '/store',
}

export enum UserEndpoint {
  GET_USER_PROFILE = '/self/profile',
}

export enum DashboardEndpoint {
  GET_WIDGETS = '/dashboard',
}

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
