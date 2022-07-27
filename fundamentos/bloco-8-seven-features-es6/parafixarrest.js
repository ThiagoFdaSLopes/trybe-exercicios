// function quantosParams(...args) {
//     console.log('parâmetros:', args);
//     return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

const criandoFilter = (...args) => {
    const retorno = args.filter((element) => element.idade > 60).map((element) => element)
    return retorno;
}

console.log(criandoFilter({nome: 'Thiago', idade: 62}, {nome: 'Thay', idade: 65}, {nome: 'Pedro', idade: 33}));