"use strict";
// função que converte de string para json
function stringToJson(str) {
    const result = JSON.parse(str);
    return result;
}
// utilizando o "as" para converter de unknown para User
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');
// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
const address = stringToJson('{"street":"Rua Tamarindo","number":1}');
user.name;
address.street;
const str = 'texto'; // simulando um valor supostamente desconhecido
// str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
str.split(''); // Corrigindo o erro acima usando o 'as'
const num = '2';
// num as number // dispara um erro, pois não é possível usar Type Assertions com tipos incompatíveis
num; // Corrigindo o erro acima convertendo primeiramente para unknown
