const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

//Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.

const flatten = (arr) => {
    return arr.reduce((element, currentElement) => element.concat(currentElement))
}

console.log(flatten(arrays))