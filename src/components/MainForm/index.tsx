import { PauseCircleIcon, PlayCircleIcon, RotateCcwIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import { usePomodoro } from '../../context/PomodoroContext'

export function MainForm() {
  const { task, setTask, status, canStart, toggleTimer, resetSession } =
    usePomodoro()

  const showReset = status !== 'idle'

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault()
        toggleTimer()
      }}
    >
      <div className="formRow">
        <DefaultInput
          labelText="Tarefa"
          id="task"
          type="text"
          placeholder="O que você vai focar agora?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          autoComplete="off"
          disabled={status === 'running'}
        />
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow formActions">
        <DefaultButton
          type="submit"
          icon={
            status === 'running' ? (
              <PauseCircleIcon />
            ) : (
              <PlayCircleIcon />
            )
          }
          disabled={status === 'idle' ? !canStart : false}
          aria-label={
            status === 'running' ? 'Pausar cronômetro' : 'Iniciar cronômetro'
          }
        />
        {showReset && (
          <DefaultButton
            type="button"
            color="red"
            icon={<RotateCcwIcon />}
            onClick={resetSession}
            aria-label="Reiniciar sessão"
          />
        )}
      </div>
    </form>
  )
}