import { useState } from "react"

export default function CriarTask(props){
    const [titulo, setTitulo] = useState("")
    const [desc, setDesc] = useState("")
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col" >
            <input type="text" name="" placeholder="Digite o título da tarefa..." id="" className="bg-white text-black border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={titulo} onChange={() => {setTitulo(event.target.value)}}/>

            <input type="text" name="" placeholder="Digite a descrição da tarefa..." id="" className="bg-white text-black border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={desc} onChange={() => {setDesc(event.target.value)}}/>

            {/* event → objeto que descreve a alteração no input
            event.target → o próprio <input>
            event.target.value → o texto atualmente digitado             */}
            <button className="bg-slate-500 text-white px-4 py-2" onClick={() => {
                if (titulo.trim() == "" || desc.trim() == ""){
                    return alert("Preencha os campos obrigatórios.")
                }else{  
                    props.onAddNewTaskClick(titulo, desc)
                }
            }
            }>Adicionar</button>
        </div>
    )
}