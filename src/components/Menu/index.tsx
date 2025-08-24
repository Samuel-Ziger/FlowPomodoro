import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, } from "lucide-react";


export function Menu() {
    return <nav className={styles.menu}>
        <a className={styles.menuLink} href='#'>
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href='#'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href='#'>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href='#'>
            <SunIcon/>
        </a>
    </nav>;



}