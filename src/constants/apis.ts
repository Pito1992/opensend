import { env } from '@/config/env'

export const API_BASE_URL = env.API_BASE_URL

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

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
