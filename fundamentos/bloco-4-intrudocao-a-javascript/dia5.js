/*
_______________________________________________________________________________________________________________
1. Encontre o index através do valor de um elemento
Escreva uma algoritmo que recebe 2 parâmetros:
 - Um array contendo um conjunto de números
 - O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.
Caso não o encontre, imprima:
-----------------------------------
"Elemento não encontrado no array"
-----------------------------------
*/
/*
let array = [5, 6, 8, 34, 56, 3];
let elemento = 3;

for(let i = 0; i < array.length; i += 1){
    if(array[i] === elemento){
        console.log("index é: " + i)
    }
}
*/
/*_______________________________________________________________________________________________________________
2. Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura na impressão:
----------------
"x, y, z, ...n"
----------------
*/
// for(let i = 1; i < 51; i += 1){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }

// let numeros = '';
// for(let i = 1; i < 51; i += 1){
//     if(i % 2 !== 0){
//      numeros += i +", ";
//     }
// }

// console.log(numeros.slice(0, numeros.length-2));





/*_______________________________________________________________________________________________________________
3. Números divisíveis por 3
Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo
deve receber antes de criar essa sequência, o valor inicial e final.
Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:
Se houver 50 ou mais:
---------------------------------------
"Há 50 ou mais números diviseis por 3"
---------------------------------------
Caso o contrário:
--------------------------
"Sequência muito pequena."
--------------------------
_______________________________________________________________________________________________________________
*/

// let valorUm = 1;
// let valorDois = 99;
// let contador = 0;
// for(valorUm; valorUm < valorDois; valorUm += 1){
//     if(valorUm % 3 === 0){
//         contador += 1;
//     }
// }
// if(contador >= 50){
//     console.log("Há 50 ou mais números diviseis por 3");
// }else{
//     console.log("Sequência muito pequena.");
// }