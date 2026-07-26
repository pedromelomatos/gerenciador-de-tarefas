import { useState, useEffect } from "react"
import Tasks from "./components/Tasks";
import CriarTask from "./components/CriarTask";


export default function App(){
 // const [nome, setNome] = useState("Pedro") //criando um estado — sempre que for alterado o componente é renderizado novamente. o nome dela é "nome" e uma função set nome, pra quando formos modificar o valor dela.
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      async function buscarNoBackend(){
        const dadosJson = await fetch("http://localhost:3000/")
        const dados = await dadosJson.json()
        console.log(dados)
        setTasks(dados)
      }
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

    function deletarTask(taskId){
      const novasTasks = tasks.filter((task) => task.id != taskId)
      setTasks(novasTasks)
    }

    function onAddNewTaskClick(titulo, desc){
      const novaTask = {
        id: tasks.length + 1,
        titulo: titulo,
        desc: desc,
        status: false
      }
      setTasks([...tasks, novaTask])
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

