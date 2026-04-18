import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react'
import { useAppNavigation } from '../../context/AppNavigationContext'

type AvailableThemes = 'dark' | 'light'

export function Menu() {
  const { view, goHome, goHistory, goSettings } = useAppNavigation()

  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark'
    return storageTheme
  })

  const nextThemeIco = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  function handleThemeChange() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const navBtn = (active: boolean) =>
    `${styles.menuLink} ${active ? styles.menuLinkActive : ''}`.trim()

  return (
    <nav className={styles.menu}>
      <button
        type="button"
        className={navBtn(view === 'home')}
        aria-label="Ir para Home"
        title="Ir para Home"
        aria-current={view === 'home' ? 'page' : undefined}
        onClick={goHome}
      >
        <HouseIcon />
      </button>
      <button
        type="button"
        className={navBtn(view === 'history')}
        aria-label="Ver histórico"
        title="Ver histórico"
        aria-current={view === 'history' ? 'page' : undefined}
        onClick={goHistory}
      >
        <HistoryIcon />
      </button>
      <button
        type="button"
        className={navBtn(view === 'settings')}
        aria-label="Configurações"
        title="Configurações"
        aria-current={view === 'settings' ? 'page' : undefined}
        onClick={goSettings}
      >
        <SettingsIcon />
      </button>
      <button
        type="button"
        className={styles.menuLink}
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIco[theme]}
      </button>
    </nav>
  )
}
