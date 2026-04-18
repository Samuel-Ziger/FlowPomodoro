export const WORK_DURATION_SEC = 25 * 60
export const SHORT_BREAK_SEC = 5 * 60
export const LONG_BREAK_SEC = 15 * 60

export const CYCLE_STEPS = 8 as const

export function getDurationForCycleIndex(index: number): number {
  if (index === 7) return LONG_BREAK_SEC
  if (index % 2 === 0) return WORK_DURATION_SEC
  return SHORT_BREAK_SEC
}

export function getPhaseKind(
  index: number,
): 'work' | 'shortBreak' | 'longBreak' {
  if (index === 7) return 'longBreak'
  if (index % 2 === 0) return 'work'
  return 'shortBreak'
}
