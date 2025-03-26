import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from '@/services/auth.service'
import { userApi } from '@/services/user.service'
import { storeApi } from '@/services/store.service'
import { dashboardApi } from '@/services/dashboard.service'
import authReducer from '@/stores/slices/auth.slice'
import userReducer from '@/stores/slices/user.slice'
import dashboardReducer from '@/stores/slices/dashboard.slice'
import { authMiddleware } from '@/middleware/auth.middleware'
import type { AuthState } from '@/types/auth'
import type { UserState } from '@/types/user'
import type { DashboardState } from '@/types/dashboard'

const authPersistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage,
}

const userPersistConfig: PersistConfig<UserState> = {
  key: 'user',
  storage,
}

const dashboardPersistConfig: PersistConfig<DashboardState> = {
  key: 'dashboard',
  storage,
}

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [storeApi.reducerPath]: storeApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    auth: persistReducer<AuthState>(authPersistConfig, authReducer),
    user: persistReducer<UserState>(userPersistConfig, userReducer),
    dashboard: persistReducer<DashboardState>(
      dashboardPersistConfig,
      dashboardReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(
      authApi.middleware,
      userApi.middleware,
      storeApi.middleware,
      dashboardApi.middleware,
      authMiddleware
    ),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
