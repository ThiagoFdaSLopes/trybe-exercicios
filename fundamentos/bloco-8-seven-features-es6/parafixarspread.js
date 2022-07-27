const specialFruit = ['Maça', 'Abacate', 'Abacaxi']
const additionalItens = ['Uva', 'Mamão', 'Laranja']

const fruitSalad = (specialFruit, additionalItens) => {
    const newFruits = [...specialFruit, ...additionalItens]
    return newFruits
}

console.log(fruitSalad(specialFruit, additionalItens))