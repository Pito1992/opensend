import { env } from '@/config/env'

export const API_BASE_URL = env.API_BASE_URL

export enum AuthEndpoint {
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
}
