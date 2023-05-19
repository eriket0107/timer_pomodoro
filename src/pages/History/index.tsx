import { HistoryContainer, HistoryList, Status } from './styles'
import { useCycleContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useCycleContext()
  console.log(formatDistanceToNow)
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <pre>{JSON.stringify(cycles, null, 2)}</pre>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              const {
                id,
                task,
                minutesAmount,
                startDate,
                finishedDate,
                interruptedDate,
              } = cycle

              return (
                <tr key={id}>
                  <td>{task}</td>
                  <td>{minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!finishedDate && !interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
