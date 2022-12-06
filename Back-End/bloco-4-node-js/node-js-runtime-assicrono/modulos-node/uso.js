const { brl, usdToBrl } = require('./index.js');
const { readFileSync } = require('fs');

readFileSync('./meuArquivo.txt');

console.log(usdToBrl(10));