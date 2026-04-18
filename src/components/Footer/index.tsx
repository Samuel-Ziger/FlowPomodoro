import styles from './styles.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro"
                target="_blank"
                rel="noreferrer noopener"
            >
                Entenda como funciona a técnica Pomodoro
            </a>
            <a href="#">
                FlowPomodoro &copy; {new Date().getFullYear()} - Feito com Amor
            </a>
        </footer>
    );
}
