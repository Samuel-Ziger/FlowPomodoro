import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from "lucide-react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = 
    (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIco = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault(); //não segue o link
    //console.log('Clicado', Date.now());

    setTheme(prevTheme => {
    const nexTheme = prevTheme === 'dark' ? 'light' : 'dark';
    return nexTheme;
  });

}
/*
useEffect(() =>
    { console.log('useEffect sem dependência',Date.now());
     }); //Executado toda vez que o componente renderiza na tela

useEffect(() =>
    { console.log('useEffect',Date.now()); 
},[]); //Executa apenas quando o react monta o componente na tela a primeira vez
*/
useEffect(() =>
    { console.log('theme mudou', theme, Date.now()); 
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme',theme );
    },[theme]);//Executa apenas quando o valor de theme muda.

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label="Ir para Home" title="Ir para Home">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label="Ver histórico" title="Ver histórico">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label="Configurações" title="Configurações">
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
{nextThemeIco[theme]}

        </a>
    </nav>
  );
}
