/* eslint-disable react-refresh/only-export-components -- hook e provider juntos */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type AppView = 'home' | 'history' | 'settings'

type AppNavigationValue = {
  view: AppView
  goHome: () => void
  goHistory: () => void
  goSettings: () => void
}

const AppNavigationContext = createContext<AppNavigationValue | null>(null)

export function AppNavigationProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<AppView>('home')

  const goHome = useCallback(() => setView('home'), [])
  const goHistory = useCallback(() => setView('history'), [])
  const goSettings = useCallback(() => setView('settings'), [])

  const value = useMemo(
    () => ({ view, goHome, goHistory, goSettings }),
    [view, goHome, goHistory, goSettings],
  )

  return (
    <AppNavigationContext.Provider value={value}>
      {children}
    </AppNavigationContext.Provider>
  )
}

export function useAppNavigation(): AppNavigationValue {
  const ctx = useContext(AppNavigationContext)
  if (!ctx) {
    throw new Error(
      'useAppNavigation deve ser usado dentro de AppNavigationProvider',
    )
  }
  return ctx
}
