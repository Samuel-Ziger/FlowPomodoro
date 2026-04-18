import styles from './styles.module.css'
import { usePomodoro } from '../../context/PomodoroContext'
import { CYCLE_STEPS, getPhaseKind } from '../../pomodoro/model'

export function Cycles() {
  const { cycleIndex, status } = usePomodoro()

  return (
    <div className={styles.cycles}>
      <span>Ciclos (4 focos + pausas)</span>
      <div className={styles.cycleDots}>
        {Array.from({ length: CYCLE_STEPS }, (_, i) => {
          const kind = getPhaseKind(i)
          const tone =
            kind === 'work'
              ? styles.workTime
              : kind === 'shortBreak'
                ? styles.shortBreakTime
                : styles.longBreakTime
          const isDone = i < cycleIndex
          const isCurrent = i === cycleIndex
          const stateClass = isDone
            ? styles.cycleDotDone
            : isCurrent
              ? styles.cycleDotActive
              : ''
          const pulse =
            isCurrent && status === 'running' ? styles.cycleDotPulse : ''

          return (
            <span
              key={i}
              className={`${styles.cycleDot} ${tone} ${stateClass} ${pulse}`.trim()}
              title={
                kind === 'work'
                  ? 'Foco'
                  : kind === 'shortBreak'
                    ? 'Pausa curta'
                    : 'Pausa longa'
              }
              aria-hidden
            />
          )
        })}
      </div>
    </div>
  )
}