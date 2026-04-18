import { Container } from '../../components/Container'
import { GenericHtml } from '../../components/GenereicHTML'
import { Heading } from '../../components/Heading'
import { MainTemplate } from '../../templates/Maintemplate'

export function History() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>Histórico</Heading>
          <p>
            Ainda não há sessões salvas. Quando registrarmos seus Pomodoros
            concluídos, eles aparecerão aqui.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  )
}
