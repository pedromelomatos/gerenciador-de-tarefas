const user = {
    nome: 'Walter',
    sobrenome: 'White'
}

//const nome = user.nome
// mesma coisa que:
// const {nome, sobrenome} = user

// console.log(sobrenome)

 const personagem = {...user, profissao: 'Cozinheiro'}

 const {profissao} = personagem
console.log(profissao)

