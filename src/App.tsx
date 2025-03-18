import { store } from '@/stores'
import { Provider as StoreProvider } from 'react-redux'
import { LoginPage } from '@/app/auth/login'
import { ThemeProvider } from '@/providers/theme.provider'
import { Theme } from '@/constants/theme'

function App() {
  return (
    <ThemeProvider defaultTheme={Theme.LIGHT} storageKey="vite-ui-theme">
      <StoreProvider store={store}>
        <LoginPage />
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App
