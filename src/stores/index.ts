import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from '@/services/auth.service'
import { userApi } from '@/services/user.service'
import { storeApi } from '@/services/store.service'
import authReducer from '@/stores/slices/auth.slice'
import userReducer from '@/stores/slices/user.slice'
import { authMiddleware } from '@/middleware/auth.middleware'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user'],
}

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({
      [authApi.reducerPath]: authApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [storeApi.reducerPath]: storeApi.reducer,
      auth: authReducer,
      user: userReducer,
    })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(
      authApi.middleware,
      userApi.middleware,
      storeApi.middleware,
      authMiddleware
    ),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
