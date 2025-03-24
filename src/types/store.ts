export interface Store {
  id: number
  name: string
  url: string
  onboarding_procedure: {
    onboarding_status: string
    [key: string]: unknown
  }
}

export type StoreRequest = string

export type StoreResponse = {
  store: Store
}
