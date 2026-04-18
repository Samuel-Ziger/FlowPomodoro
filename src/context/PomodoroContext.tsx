/* eslint-disable react-refresh/only-export-components -- hook e provider compartilham estado */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from 'react'
import {
  WORK_DURATION_SEC,
  getDurationForCycleIndex,
  getPhaseKind,
} from '../pomodoro/model'

type SessionStatus = 'idle' | 'running' | 'paused'

type PomodoroState = {
  status: SessionStatus
  cycleIndex: number
  timeLeftSec: number
}

type PomodoroAction =
  | { type: 'TICK' }
  | { type: 'TOGGLE'; canStart: boolean }
  | { type: 'RESET' }

const initialTimerState: PomodoroState = {
  status: 'idle',
  cycleIndex: 0,
  timeLeftSec: WORK_DURATION_SEC,
}

function pomodoroReducer(
  state: PomodoroState,
  action: PomodoroAction,
): PomodoroState {
  switch (action.type) {
    case 'TICK': {
      if (state.status !== 'running') return state
      if (state.timeLeftSec > 1) {
        return { ...state, timeLeftSec: state.timeLeftSec - 1 }
      }
      if (state.cycleIndex >= 7) {
        return {
          ...state,
          status: 'idle',
          cycleIndex: 0,
          timeLeftSec: WORK_DURATION_SEC,
        }
      }
      const nextIdx = state.cycleIndex + 1
      return {
        ...state,
        cycleIndex: nextIdx,
        timeLeftSec: getDurationForCycleIndex(nextIdx),
      }
    }
    case 'TOGGLE': {
      if (state.status === 'idle') {
        if (!action.canStart) return state
        return { ...state, status: 'running' }
      }
      if (state.status === 'running') {
        return { ...state, status: 'paused' }
      }
      return { ...state, status: 'running' }
    }
    case 'RESET':
      return { ...initialTimerState }
  }
}

function getPhaseLabel(timer: PomodoroState): string {
  if (timer.status === 'idle') {
    return 'Comece quando estiver pronto'
  }
  const kind = getPhaseKind(timer.cycleIndex)
  if (kind === 'work') return 'Tempo de foco'
  if (kind === 'shortBreak') return 'Pausa curta'
  return 'Pausa longa'
}

type PomodoroContextValue = {
  task: string
  setTask: (value: string) => void
  timeLeftSec: number
  status: SessionStatus
  cycleIndex: number
  phaseLabel: string
  canStart: boolean
  toggleTimer: () => void
  resetSession: () => void
}

const PomodoroContext = createContext<PomodoroContextValue | null>(null)

export function PomodoroProvider({ children }: { children: ReactNode }) {
  const [task, setTask] = useState('')
  const [timer, dispatch] = useReducer(pomodoroReducer, initialTimerState)

  useEffect(() => {
    if (timer.status !== 'running') return
    const id = window.setInterval(() => {
      dispatch({ type: 'TICK' })
    }, 1000)
    return () => window.clearInterval(id)
  }, [timer.status])

  const canStart = task.trim().length > 0

  const toggleTimer = useCallback(() => {
    dispatch({ type: 'TOGGLE', canStart })
  }, [canStart])

  const resetSession = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [])

  const value = useMemo<PomodoroContextValue>(
    () => ({
      task,
      setTask,
      timeLeftSec: timer.timeLeftSec,
      status: timer.status,
      cycleIndex: timer.cycleIndex,
      phaseLabel: getPhaseLabel(timer),
      canStart,
      toggleTimer,
      resetSession,
    }),
    [task, timer, canStart, toggleTimer, resetSession],
  )

  return (
    <PomodoroContext.Provider value={value}>
      {children}
    </PomodoroContext.Provider>
  )
}

export function usePomodoro(): PomodoroContextValue {
  const ctx = useContext(PomodoroContext)
  if (!ctx) {
    throw new Error('usePomodoro deve ser usado dentro de PomodoroProvider')
  }
  return ctx
}
