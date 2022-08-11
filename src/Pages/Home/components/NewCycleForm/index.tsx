import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from 'react';
import { CyclesContext } from './../../Index';

export function NewCycleForm() {
  const {activeCycle} = useContext(CyclesContext)
  const {register} = useFormContext()

    return (
      <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="Dê um nome para o seu projeto"
            id="task"
            type="text"
            list="task-suggestions"
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
            <option value="Projeto 6" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            placeholder="00"
            id="minutesAmount"
            type="number"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', {valueAsNumber: true})}
          />

          <span>minutos.</span>
      </FormContainer>
    )
}