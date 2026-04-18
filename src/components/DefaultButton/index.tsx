import styles from './styles.module.css'

type DefaultButtonProps = {
  icon: React.ReactNode
  color?: 'primary' | 'red'
} & React.ComponentProps<'button'>

export function DefaultButton({
  icon,
  color = 'primary',
  className,
  type = 'button',
  ...props
}: DefaultButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.button} ${styles[color]} ${className ?? ''}`.trim()}
    >
      {icon}
    </button>
  )
}
 