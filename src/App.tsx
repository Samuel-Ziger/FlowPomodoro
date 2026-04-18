import {
  AppNavigationProvider,
  useAppNavigation,
} from './context/AppNavigationContext'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings'

import './styles/theme.css'
import './styles/global.css'

function AppRoutes() {
  const { view } = useAppNavigation()
  if (view === 'history') return <History />
  if (view === 'settings') return <Settings />
  return <Home />
}

export function App() {
  return (
    <AppNavigationProvider>
      <AppRoutes />
    </AppNavigationProvider>
  )
}