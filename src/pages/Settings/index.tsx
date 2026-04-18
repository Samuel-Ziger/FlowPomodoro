import { Container } from '../../components/Container'
import { GenericHtml } from '../../components/GenereicHTML'
import { Heading } from '../../components/Heading'
import { MainTemplate } from '../../templates/Maintemplate'
import {
  LONG_BREAK_SEC,
  SHORT_BREAK_SEC,
  WORK_DURATION_SEC,
} from '../../pomodoro/model'

function formatMin(sec: number): string {
  return String(Math.round(sec / 60))
}

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>Configurações</Heading>
          <p>
            Tempos atuais do ciclo:{' '}
            <strong>{formatMin(WORK_DURATION_SEC)} min</strong> de foco,{' '}
            <strong>{formatMin(SHORT_BREAK_SEC)} min</strong> de pausa curta e{' '}
            <strong>{formatMin(LONG_BREAK_SEC)} min</strong> de pausa longa.
          </p>
          <p>
            O tema claro ou escuro pode ser alterado pelo ícone sol/lua no menu.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  )
}
