'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import TarefaDisplay from "./tarefaDisplay";
import { Navbar } from "./navbar";
import { TarefaTracker } from "./tarefaTracker";

export default function Home() {
  const [inputTarefa, setInputTarefa] = useState('');

  const [tarefas, setTarefas] = useState([]);
  const [filterMenu, setFilterMenu] = useState(false);

  const [numberIsDone, setNumberIsDone] = useState(0);

  const [barraTarefas, setBarraTarefas] = useState('');
  const [filtroEscolhido, setFiltroEscolhido] = useState(0);

  const handleTarefa = (tarefa, index) => {
    if (tarefa.isDone) {
      setNumberIsDone(numberIsDone - 1);
    } else {
      setNumberIsDone(numberIsDone + 1)
    }

    const newTarefas = tarefas
    newTarefas[index] = {isDone: !tarefa.isDone, label:tarefa.label}
    setTarefas(newTarefas);
    setBarraTarefas(`bg-secondary h-full rounded-full w-[${(numberIsDone / tarefas.length) * 100}%]`);

  }

  const criarTarefa = () => {
    setInputTarefa(''); 
    setTarefas([...tarefas, {isDone: false, label:inputTarefa}])
  }

  const deletarTarefa = (tarefaIndex) => {
    setTarefas(tarefas.filter((tarefa, index) => index !== tarefaIndex))
  }

  const limparTarefas = () => {
    setNumberIsDone(0);
    setTarefas(tarefas.filter((tarefa) => tarefa.isDone === false))
  }

  useEffect(() => {
    setBarraTarefas(`bg-secondary h-full rounded-full w-[${(numberIsDone / tarefas.length) * 100}%]`);
    
  }, [numberIsDone, tarefas]) 
  
  return (
    <main className="flex h-screen min-h-screen  bg-primary">
      <div className="flex flex-col items-center w-full p-2 md:p-24">
        <div className="flex justify-start w-full md:w-4/5 lg:w-4/5 xl:w-1/3 px-3 pb-3">
          <h1 className="text-secondary font-black text-6xl mr-6">Focado!</h1>
              <Image
                src="/Vector.svg"
                alt="Imagem Foca"
                
                width={50}
                height={24}
                priority
              />
        </div>
        <div className="flex max-h-[90%] h-[90%] gap-y-3 p-3 flex-col w-full  md:w-4/5 lg:w-4/5 xl:w-1/3  md:rounded-2xl md:border md:border-secondary bg- text-gray-600">
          
            <Navbar 
              criarTarefa={criarTarefa} 
              filterMenu={filterMenu} 
              inputTarefa={inputTarefa}
              limparTarefas={limparTarefas}
              setFilterMenu={setFilterMenu}
              setFiltroEscolhido={setFiltroEscolhido}
              setInputTarefa={setInputTarefa}  
            />
            <TarefaTracker 
              numberIsDone={numberIsDone}
              tarefas={tarefas}
            />
            <div className="flex w-full min-h-[65%] max-h-full h-full text-center items-center ">
              <div className="overflow-auto w-full max-h-full h-full">
                <TarefaDisplay 
                  handleTarefa={handleTarefa} 
                  tarefas={tarefas} 
                  deletarTarefa={deletarTarefa} 
                  filtroEscolhido={filtroEscolhido} 
                  numberIsDone={numberIsDone}
                  setNumberIsDone={setNumberIsDone}
                />
              </div>
            </div>    
        </div>
      </div>
    </main>
  );
}
