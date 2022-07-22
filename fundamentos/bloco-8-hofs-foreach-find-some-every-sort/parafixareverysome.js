// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   return arr.some((element) => element === name)
// }

// console.log(hasName(names, 'Thiago'))

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 18 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

console.log(Object.values(people[0]))

// const verifyAges = (arr, minimumAge) => {
//     //Adicione seu código aqui
//     return Object.values(arr.age).every((element) => element >= minimumAge);
// }

// console.log(verifyAges(people, 18));