interface TarefaTrackerProps {
    tarefas: any[];
    numberIsDone: number;
  }

export const TarefaTracker: React.FC<TarefaTrackerProps> = ({tarefas, numberIsDone}) => {
    return (
        <>
            <p className="text-secondary font-bold text-sm">
              {tarefas.length - numberIsDone === 0 ? 'Você não tem nenhuma tarefa ;)' : `${tarefas.length - numberIsDone} tarefas restantes`}
            </p>              
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
              <div 
                style={{width: numberIsDone ? `${(numberIsDone / tarefas.length) * 100}%` : "0"}} 
                className={`bg-secondary h-full rounded-full`} 
              />
            </div>
        </>
    )
}