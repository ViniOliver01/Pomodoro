import { createContext, ReactNode, useReducer, useState } from "react"

export const CyclesContext = createContext({} as CyclesContextType)

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CreateCycleData {
    task: string;
    minutesAmount: number;
}

interface CyclesContextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: String | null;
    markCurrentCycleAsFinished: () => void;
    amountSecondsPassed: number;
    setSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCycle: () => void;
}

interface CyclesContextProviderProps {
    children: ReactNode
}

interface CyclesState {
    cycles: Cycle[];
    activeCycleId: string | null;
}

export function CyclesContextProvider({children}: CyclesContextProviderProps) {

    const [cyclesState, dispatch] = useReducer((state: CyclesState, action: any) => {

        switch (action.type){

            case "ADD_NEW_CYCLE":
                return {
                    ...state,
                    cycles: [...state.cycles, action.payload.newCycle],
                    activeCycleId: action.payload.newCycle.id,
                }
            
            case "INTERRUPT_CURRENT_CYCLE":
                return {
                    ...state,
                    cycles: state.cycles.map((cycle) => {
                        if(cycle.id == state.activeCycleId) {
                          return { ...cycle , interruptedDate: new Date()}
                        } else {
                          return cycle
                        }
                      }),
                    activeCycleId: null,
                }
    
            case "MARK_CURRENT_CYCLE_AS_FINISHED":
                return {
                    ...state,
                    cycles: state.cycles.map((cycle) => {
                        if(cycle.id == state.activeCycleId) {
                          return { ...cycle , finishedDate: new Date()}
                        } else {
                          return cycle
                        }
                      }),
                    activeCycleId: null,
                }
            default:
                return state
        }

        
    }, {
        cycles: [],
        activeCycleId: null,
    })

    const {cycles, activeCycleId} = cyclesState;
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const activeCycle = cycles.find(cycle => cycle.id == activeCycleId)

    function markCurrentCycleAsFinished(){
        dispatch({
            type: "MARK_CURRENT_CYCLE_AS_FINISHED",
            payload: {
                activeCycleId,
            },
        })
      }

    function setSecondsPassed(seconds: number){
        setAmountSecondsPassed(seconds)
      }
    
    function createNewCycle(data: CreateCycleData){
        const newCycle: Cycle = {
          id: String(new Date().getTime()),
          task: data.task,
          minutesAmount: data.minutesAmount,
          startDate: new Date(),
        }
        dispatch({
            type: "ADD_NEW_CYCLE",
            payload: {
                newCycle,
            },
        })
        // setCycles((state) => [...state, newCycle])
        setAmountSecondsPassed(0)
      }
    
    function interruptCycle(){
        dispatch({
            type: "INTERRUPT_CURRENT_CYCLE",
            payload: {
                activeCycleId,
            },
        })
      }
    
    return(
        <CyclesContext.Provider value={
            {activeCycle, 
            activeCycleId, 
            markCurrentCycleAsFinished, 
            amountSecondsPassed, 
            setSecondsPassed,
            createNewCycle,
            interruptCycle,
            cycles,
            }}
            >
            {children}
            </CyclesContext.Provider>
    )
}