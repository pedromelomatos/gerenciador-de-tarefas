import { useState, useEffect } from "react"
import Tasks from "./components/Tasks";
import CriarTask from "./components/CriarTask";


export default function App(){
 // const [nome, setNome] = useState("Pedro") //criando um estado — sempre que for alterado o componente é renderizado novamente. o nome dela é "nome" e uma função set nome, pra quando formos modificar o valor dela.
    const [tasks, setTasks] = useState([])

    async function buscarNoBackend(){
      const dadosJson = await fetch("http://localhost:3000/")
      const dados = await dadosJson.json()
      setTasks(dados)
      }

    useEffect(() => {
      buscarNoBackend()
    }, [])
 

    function onTaskClick(taskId){

      const novasTasks = tasks.map((task) =>
      {
        if (taskId == task.id){
          return {...task, status: !task.status}
        }
        return task
      })
      setTasks(novasTasks)
      
    }

    async function deletarTask(taskId){
      const requisicaoDelete = await fetch(`http://localhost:3000/deletarTarefa/${taskId}`, {method: "DELETE"})
      const resposta = await requisicaoDelete.json()
      console.log(resposta)
      await buscarNoBackend()
    }

    async function onAddNewTaskClick(titulo, desc){
      const novaTask = {
        id: tasks.length + 1,
        titulo: titulo,
        desc: desc,
        status: false
      }

      const requisicaoPost = await fetch("http://localhost:3000/criarTarefa", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(novaTask)
      })

      await buscarNoBackend()
      
    }


    return (
    <div className="w-screen h-screen bg-slate-800 flex justify-center p-6">
      <div className="w-[500px] text-center space-y-4" >
        <h2 className="text-3xl">Gerenciador de Tarefas</h2>  
        <CriarTask onAddNewTaskClick={onAddNewTaskClick}/> 
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deletarTask={deletarTask} />
      </div>
     </div>)
}

