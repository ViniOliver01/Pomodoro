import { HistoryContainer, HistoryList, Status } from './Styles'
import { useContext } from 'react';
import { CyclesContext } from './../../contexts/CyclesContext';
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function History() {
  const {cycles} = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <pre>
        {JSON.stringify(cycles, null, 2)}
      </pre>
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

            {cycles.map(task => {
              return(
                <tr key={task.id}>
                <td>{task.task}</td>
                <td>{task.minutesAmount} Minutos</td>
                <td>{formatDistanceToNow(task.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                </td>
                <td>
                  {task.finishedDate && <Status statusColor="green">Concluído</Status>}
                  {task.interruptedDate && <Status statusColor="red">Interrompido</Status>}
                  {!task.finishedDate && !task.interruptedDate && 
                  <Status statusColor="yellow">Em andamento</Status>}
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
