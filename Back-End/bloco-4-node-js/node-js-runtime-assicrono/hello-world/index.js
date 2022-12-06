const readline = require('readline-sync');

const name = readline.question('Digite seu Nome: ');
const sobrenome = readline.question('Digite seu Sobrenome: ');

console.log(`Hello World ${name} ${sobrenome}`);