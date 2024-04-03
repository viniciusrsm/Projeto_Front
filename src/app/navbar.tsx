interface NavbarProps {
    inputTarefa: string;
    setInputTarefa: Function;
    criarTarefa: Function;
    setFilterMenu: Function;
    filterMenu: boolean;
    setFiltroEscolhido: Function;
    limparTarefas: Function;
}

export const Navbar: React.FC<NavbarProps> = ({inputTarefa, setInputTarefa, criarTarefa, setFilterMenu, filterMenu, setFiltroEscolhido, limparTarefas}) => {
    return(
        <>
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
              <button id="criar-tarefa-button" onClick={() => criarTarefa()}
                className="max-w-1/4 w-1/4 text-center hover:bg-opacity-90 focus:outline-none text-white bg-secondary focus:ring-1 focus:ring-gray-500 font-medium rounded-lg text-sm py-2.5">Criar</button>
              <button onClick={() => {setFilterMenu(!filterMenu)}} className="h-10 w-auto" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#de6c5c" viewBox="0 0 256 256"><path d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"></path></svg>
              </button>
              <span className="relative">
                <div className={`${filterMenu ? 'scale-y-100' : 'scale-y-0'} transition-all duration-200 top-5 transform origin-top-right absolute right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-1 font-medium" role="none">
                    <button onClick={() => {setFiltroEscolhido(0); setFilterMenu(false)}} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Todas</button>
                    <button onClick={() => {setFiltroEscolhido(1); setFilterMenu(false)}} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Ativas</button>
                    <button onClick={() => {setFiltroEscolhido(2); setFilterMenu(false)}} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Completas</button>
                    <button onClick={() => {limparTarefas(); setFilterMenu(false)}} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Limpar completas</button>
                  </div>
                </div>
              </span>
            </div>
        </>
    )
}