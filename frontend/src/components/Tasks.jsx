import { ChevronsRightIcon, DeleteIcon } from "lucide-react"

export default function Tasks(props){
    return(

        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow" >
            {props.tasks.map((task_especifica) => 
                <li key={task_especifica.id} className="flex gap-2">
                    <button className={`bg-slate-400 p-2 text-white rounded-md w-full text-left ${task_especifica.status && 'line-through'}`} onClick={() => props.onTaskClick(task_especifica.id)}>
                        {task_especifica.titulo}
                        </button>
                    <button className="bg-slate-400"><ChevronsRightIcon/></button>
                    <button className="bg-slate-400" onClick={() => props.deletarTask(task_especifica.id)}><DeleteIcon/></button>
                </li>
            )
            }
        </ul>
    )
}