 
import styles from './styles.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: 'primary' | 'red';
} & React.ComponentProps<'button'>;


export function DefaultButton({icon,color = 'primary', ...props }: DefaultButtonProps ) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props} >
            {icon}    
            </button>
        </>
    );

}
 