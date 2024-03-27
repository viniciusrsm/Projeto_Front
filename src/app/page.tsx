'use client'
import Image from "next/image";
import { CriarTarefa } from "./criarTarefa";
import { useEffect, useState } from "react";

export default function Home() {
  const [inputTarefa, setInputTarefa] = useState('');

  const [tarefas, setTarefas] = useState([]);
  const [filterMenu, setFilterMenu] = useState(false);

  const [numberIsDone, setNumberIsDone] = useState(0);

  const [barraTarefas, setBarraTarefas] = useState('');
  let barraClassName = '';

  console.log(tarefas.length);
  console.log(barraTarefas);

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

  useEffect(() => {
    setBarraTarefas(`bg-secondary h-full rounded-full w-[${(numberIsDone / tarefas.length) * 100}%]`);
    
  }, [numberIsDone, tarefas]) 
  
  return (
    <main className="flex h-screen min-h-screen  bg-primary">
      <div className="flex flex-col items-center w-full md:p-24">
        <div className="flex justify-start w-full md:w-4/5 lg:w-4/5 xl:w-1/3 px-3 pb-3">
          <h1 className="text-secondary font-black text-6xl">Focado!</h1>
          {" "}
              <Image
                src="/Vector.svg"
                alt="Vercel Logo"
                
                width={50}
                height={24}
                priority
              />
        </div>
        <div className="flex max-h-[90%] h-[90%] gap-y-3 p-3 flex-col w-full  md:w-4/5 lg:w-4/5 xl:w-1/3  md:rounded-2xl md:border md:border-secondary bg- text-gray-600">
          
            <div className='flex items-center justify-between gap-5'>
              <div className=" w-full">   
                  <input id="criar-tarefa-input"  
                    onKeyDown={e => e.key === "Enter" ? document.getElementById('criar-tarefa-button').click() : ''} 
                    value={inputTarefa} 
                    onChange={e => setInputTarefa(e.target.value)} 
                    type="text" 
                    name="tarefa" 
                    className="border border-secondary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5" placeholder="Nova tarefa" required />
              </div>
              <button id="criar-tarefa-button" onClick={() => {
                setInputTarefa(''); 
                setTarefas([...tarefas, {isDone: false, label:inputTarefa}]);}
                } className="max-w-1/4 w-1/4 text-center hover:bg-opacity-90 focus:outline-none text-white bg-secondary focus:ring-1 focus:ring-gray-500 font-medium rounded-lg text-sm py-2.5">Criar</button>
              <button onClick={() => {setFilterMenu(!filterMenu)}} className="h-10 w-auto" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#de6c5c" viewBox="0 0 256 256"><path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"></path></svg>
              </button>
              <span className="relative">
                <div className={`${filterMenu ? 'scale-y-100' : 'scale-y-0'} transition-all duration-200 top-5 transform origin-top-right absolute right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1 font-medium" role="none">
                    <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Todas</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Ativas</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Completas</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Limpar completas</button>
                  </div>
                </div>
              </span>
            </div>
              <p className="text-secondary font-bold text-sm">
                {tarefas.length === 0 ? 'Você não tem nenhuma tarefa ;)' : `${tarefas.length} tarefas restantes`}
              </p>              
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
                
                
              <div className={barraTarefas} />

                
              
            </div>
            <div className="flex w-full min-h-[65%] max-h-full h-full text-center items-center ">
              <div className="overflow-auto w-full max-h-full h-full">
              
              {tarefas.map((tarefa, index)  => {
                  return (
                    <div key={index} className="flex items-center mb-4">
                      <input onChange={() => {handleTarefa(tarefa, index)}} id={`tarefas-checkbox${index}`} type="checkbox" value="" className="w-4 h-4 text-secondary bg-secondary border-gray-300 rounded focus:ring-secondary" />
                      <label htmlFor={`tarefas-checkbox${index}`} className="ms-2 text-sm font-medium text-gray-500">{tarefa.label}</label>
                    </div>
                  )
                })}
              
              
              
              </div>
            </div>
                   
        </div>
      </div>
      
      
    </main>
  );
}
