"use strict";
// ANTES
const peopleInput = {
    name: 'Rui',
    age: 23,
};
const createSimpleSentence = (param) => {
    return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
};
console.log(createSimpleSentence(peopleInput));
