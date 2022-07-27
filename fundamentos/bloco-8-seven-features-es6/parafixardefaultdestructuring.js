// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
// };

// const { nationality } = person;

// console.log(nationality) // return Undefined

// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
// };

// const { nationality = 'Brazilian' } = person; // < < DEFAULT DESTRUCTURING
// console.log(nationality); // Brazilian  

/*Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. 
Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.*/

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));