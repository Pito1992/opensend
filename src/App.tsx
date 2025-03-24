import { store, persistor } from '@/stores'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { AppRoutes } from '@/app/routes'
import { ThemeProvider } from '@/providers/theme.provider'
import { Theme, THEME_STORAGE_KEY } from '@/constants/theme'

function App() {
  return (
    <ThemeProvider defaultTheme={Theme.LIGHT} storageKey={THEME_STORAGE_KEY}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </ReduxProvider>
    </ThemeProvider>
  )
}

export default App
