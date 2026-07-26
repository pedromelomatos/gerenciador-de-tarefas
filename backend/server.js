import express from 'express'

import cors from 'cors'

const app =  express()

app.use(cors({origin: "http://localhost:5173"})) //usando cors pra identificar quem pode acessar nossa api de backend


const dados = [{id: 1, titulo: "Aprender React", desc: "Aprender React para se sair melhor em uma entrevista futura", status: false},{id: 2, titulo: "Aprender Express", desc: "Aprender Express para se sair melhor em uma entrevista futura", status: true}]

app.get('', (req, res) =>{
    console.log('Requisição feita!')
    return res.send(JSON.stringify(dados))
})

app.listen(3000)