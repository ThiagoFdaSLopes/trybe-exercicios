// ANTES

// const peopleInput = {
//   name: 'Rui',
//   age: 23,
// };

// const createSimpleSentence = (param) => {
//   return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
// }

// console.log(createSimpleSentence(peopleInput));

// DEPOIS

type Person = {
  name: string,
  age: number
};

const peopleInput = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param: Person):string => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));