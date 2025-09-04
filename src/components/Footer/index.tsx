import styles from './styles.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="#">Entenda como funciona a técnica Pomodoro</a>
            <a href="#">
                FlowPomodoro &copy; {new Date().getFullYear()} - Feito com Amor
            </a>
        </footer>
    );
}
