import styles from './styles.module.css'
import { usePomodoro } from '../../context/PomodoroContext'

function formatTime(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds)
  const m = Math.floor(safe / 60)
  const s = safe % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function CountDown() {
  const { timeLeftSec, phaseLabel, task, status } = usePomodoro()

  return (
    <div className={styles.wrapper}>
      <p className={styles.phase}>{phaseLabel}</p>
      <div className={styles.container}>{formatTime(timeLeftSec)}</div>
      {task.trim() !== '' && status !== 'idle' && (
        <p className={styles.taskName}>{task}</p>
      )}
    </div>
  )
}