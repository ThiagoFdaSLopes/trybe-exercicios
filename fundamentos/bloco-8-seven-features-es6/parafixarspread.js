const specialFruit = ['Maça', 'Abacate', 'Abacaxi']
const additionalItens = ['Uva', 'Mamão', 'Laranja']

const fruitSalad = (specialFruit, additionalItens) => {
    const newFruits = [...specialFruit, ...additionalItens]
    return newFruits
}

console.log(fruitSalad(specialFruit, additionalItens))


// SPREAD TEM SEMELHANÇA COM O OBJECT ASSIGN
// const objPessoaUm = {
//     nome: 'Thiago',
//     sobrenome: 'Lopes',
//     idade: 26,
// }

// const objPessoaDois = {
//     pessoaDois: 'Thay',
//     sobrenomePessoaDois: 'Quintanilha',
//     releaseYear: 26,
// }

// const newPessoas = {...objPessoaDois, ...objPessoaUm}

// console.log(newPessoas)