// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

// function palindromo(palavra){
//     let resultado = '';
//     for(let i = palavra.length - 1; i >= 0; i -= 1){
//         resultado += palavra[i];
//     }
//     if(palavra === resultado){
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// console.log(palindromo('teste'));

// function inverteArray(valor){
//     valor.reverse();
//     return valor;
// }

// console.log(inverteArray([1, 2, 3, 4, 5]));

//------------------------------------------------

// function maiorIndice(valor){
//     let result = 0;
//     let comparador = valor[0];
//     for(let i = 0; i < valor.length; i += 1){
//         if(valor[i] > comparador){
//             comparador = valor[i];
//             result = i;
//         }
//     }
//     return result;
// }

// console.log(maiorIndice([2, 1, 29, 66, 3, 1]));

// function maiorIndice(valor){
//     let result = 0;
//     let comparador = valor[0];
//     for(let i in valor){
//         if(valor[i] > comparador){
//             comparador = valor[i];
//             result = i;
//         }
//     }
//     return result;
// }

// console.log(maiorIndice([2, 1, 78, 66, 3, 1]));

// function maiorIndice(valor){
//     let result = 0;
//     let comparador = valor[0];
//     for(let i = 0; i < valor.length; i += 1){
//         if(valor[i] < comparador){
//             comparador = valor[i];
//             result = i;
//         }
//     }
//     return result;
// }

// console.log(maiorIndice([2, 4, 6, -23, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.
// function maiorNomeNaArray(valor){
//     let compara = valor[0];
//     for(let i = 0; i < valor.length; i += 1){
//         if(valor[i].length > compara.length){
//             compara = valor[i];
//         }
//     }
//     return compara;
// }
// console.log(maiorNomeNaArray(['José', 'Lucas', 'ueuahuehauhea', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

// function maiorInteiro(inteiro){
//     let comparador = inteiro[0];
//     for(let i = 0; i < inteiro.length; i += 1){
//         if(inteiro[i] === comparador){
//             comparador = inteiro[i];
//         }
//     }
//     return comparador;
// }

// console.log(maiorInteiro([5, 5, 2, 5, 8, 2, 3]))

// function maiorNumeroNaArray(numeros){


// }

//Duas formas de resolver o exercício
// function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;
//     for (let index in numeros) {
//       let verificaNumero = numeros[index];
//       for (let index2 in numeros) {
//         if (verificaNumero === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }
//     return numeros[indexNumeroRepetido];
// }

// console.log(maisRepetido([5, 5, 2, 5, 8, 2, 3]));
// function maiorNumeroArray(numeros){
//     let count = 0;
//     let somaDoRepetido = 0;
//     let indexDoRepetido = 0;
//     for(let index in numeros){
//         let valorRepetido = numeros[index];
//         for(let index2 in numeros){
//             if(valorRepetido === numeros[index2]){
//                 count += 1;
//             }
//         }
//         if(count > somaDoRepetido){
//             somaDoRepetido = count;
//             indexDoRepetido = index;
//         }
//         count = 0;
//     }
//     return numeros[indexDoRepetido];
// }
// console.log(maiorNumeroArray([5, 2, 3, 5, 3, 2, 3]));



// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.
// function somaFatorial(valor){
//     let soma = 0;
//     for(let i = valor; i >= 1; i -= 1){
//         soma += i;
//     }
//     return soma;
// }

// console.log(somaFatorial(5));

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false
// function comparaEnding(word, ending){
//     let palavra = word.split(' ');
//     let fimdaPalavra = ending.split(' ');
//     let result;
//     for(let i = palavra; i < word.length; i += 1){
//         for(let idois = fimdaPalavra; idois < i; i += 1){
//             if(idois[i] === i[i]){
//                 result += i[i];
//             }
//         }
//         if(result === ending){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

// }
// console.log(comparaEnding('teste', 'ste'));

// function operadorEE(teste, teste2){
//     return teste && teste2;
// }
// console.log(operadorEE(false, true));
