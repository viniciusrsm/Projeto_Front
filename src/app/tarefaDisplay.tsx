interface TarefaDisplayProps {
    tarefas: any[];
    handleTarefa: Function;
    deletarTarefa: Function;
    filtroEscolhido: number;
  }

export const TarefaDisplay: React.FC<TarefaDisplayProps> = ({tarefas, handleTarefa, deletarTarefa, filtroEscolhido}) => {
    

    return (
        tarefas.map((tarefa, index)  => {
            return (
                filtroEscolhido === 0 || filtroEscolhido === 1 && !tarefa.isDone || filtroEscolhido === 2 && tarefa.isDone ?
                <div key={index} className="flex justify-between mb-2 min-h-6">
                    <div className="flex items-center">
                        <input onChange={() => handleTarefa(tarefa, index)} id={`tarefas-checkbox${index}`} type="checkbox" checked={tarefa.isDone} className="w-4 h-4 text-secondary bg-secondary border-gray-300 rounded focus:ring-secondary" />
                        <label htmlFor={`tarefas-checkbox${index}`} className="ms-2 text-sm font-medium text-gray-500">{tarefa.label}</label>
                    </div>
                    <button onClick={() => deletarTarefa(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#de6c5c" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>                      
                    </button>
                </div>
                : <></>
            )
          })
    )

}

export default TarefaDisplay;