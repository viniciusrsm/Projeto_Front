'use client';

export const CriarTarefa: React.FC<{}> = () => {
    var tarefas = new Map<string, number>();
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        tarefas.set(formData.values().next().value, 0);
        console.log(tarefas);
      };
  
    return (
      <div className="flex h-[20%] text-center items-center justify-between">
        <form id="criarTarefa" onSubmit={handleSubmit} className="max-w-4/5 w-4/5">   
            <input type="text" name="tarefa" className="border border-secondary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5" placeholder="Nova tarefa" required />
        </form>
        <button type="submit" form="criarTarefa" className="max-w-1/6 w-1/6 text-center hover:bg-opacity-90 focus:outline-none text-white bg-secondary focus:ring-1 focus:ring-gray-500 font-medium rounded-lg text-sm py-2.5">Criar</button>
      </div>
    );
  };