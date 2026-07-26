const pessoas = []

const pessoa1 = {nome: 'Pedro', idade: 20, profissao: 'TI'}
const pessoa2 = {nome: 'Joana', idade: 17, profissao: 'Vendedora'}
const pessoa3 = {nome: 'Leonardo', idade: 24, profissao: 'Motorista'}
const pessoa4 = {...pessoa1, nome: 'Eduardo'} //copiando todas infos de um objeto pra outro e sobrescrevendo algumas infos

pessoas.push(pessoa1, pessoa2, pessoa3)

//const maioresIdade = pessoas.filter((pessoa) => pessoa.idade > 19)

//console.log(maioresIdade)

//ou 

pessoas.forEach(pessoa => {
    pessoa.idade > 18? console.log(pessoa):console.log('')
});