import Image from "next/image";
import { CriarTarefa } from "./criarTarefa";

export default function Home() {
  var tarefas = new Map<string, number>();
  return (
    <main className="flex h-screen min-h-screen flex-col items-center md:p-24 bg-primary">
      <span className="flex justify-start w-full md:w-4/5 lg:w-1/3 px-3 pb-3">
        <h1 className="text-secondary font-black text-6xl">Focado!</h1>
        {" "}
            <Image
              src="/Vector.svg"
              alt="Vercel Logo"
              
              width={50}
              height={24}
              priority
            />
      </span>
      <div className="flex justify-center max-h-full gap-y-3 flex-col w-full md:w-4/5 lg:w-1/3 h-full px-3 py-3 md:rounded-2xl md:border md:border-secondary py-0 bg- text-gray-600">
        <CriarTarefa tarefas={tarefas} />  
        <div className="w-full bg-gray-200 rounded-full h-[5%] dark:bg-gray-200">
          <div className="bg-secondary h-full rounded-full w-[45%]"></div>
        </div>
        <div className="flex min-h-[65%] max-h-[65%] h-[65%] text-center items-center ">
          <div className="overflow-auto max-h-full h-full">
          
          <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-secondary bg-secondary border-gray-300 rounded focus:ring-secondary" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-500">Uma tarefa</label>
          </div>
          
          
          </div>
        </div>
        <div className="h-[10%] text-sm font-medium">
          <hr></hr>
          <ul className="flex-row flex justify-between h-full items-center">
            <li>
              <a href="#" className="block py-2 px-3 focus:text-secondary focus:font-bold md:p-0 " aria-current="page">Todas</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 focus:text-secondary focus:font-bold md:p-0 " aria-current="page">Ativas</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 focus:text-secondary focus:font-bold md:p-0 " aria-current="page">Completas</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 focus:text-secondary focus:font-bold md:p-0 " aria-current="page">Limpar as completas</a>
            </li>
          </ul>
          
        </div>
      </div>
    </main>
  );
}
