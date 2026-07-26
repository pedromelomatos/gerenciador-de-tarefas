import express from 'express'

import cors from 'cors'

const app =  express()

app.use(cors({origin: "http://localhost:5173"})) //usando cors pra identificar quem pode acessar nossa api de backend

app.use(express.json()) // 

let dados = [{id: 1, titulo: "Aprender React", desc: "Aprender React para se sair melhor em uma entrevista futura", status: false},{id: 2, titulo: "Aprender Express", desc: "Aprender Express para se sair melhor em uma entrevista futura", status: true}]

app.get('', (req, res) =>{
    console.log('Requisição feita!')
    return res.send(JSON.stringify(dados))
})

app.post('/criarTarefa', (req, res) => {
    const tarefaEnviada = req.body
    dados.push(tarefaEnviada)
    const resposta = {resultado: "Tarefa Adicionada", tarefa: tarefaEnviada}
    return res.status(201).json(resposta)
})

app.delete("/deletarTarefa/:id", (req, res) => {
    const idTarefa = req.params.id
    console.log(idTarefa)
    const novaLista = dados.filter((task) => task.id != idTarefa)
    dados = novaLista
    return res.status(200).send(JSON.stringify(dados))
})

app.listen(3000)