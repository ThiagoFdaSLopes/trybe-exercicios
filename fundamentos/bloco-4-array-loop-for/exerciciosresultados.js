// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
}
*/

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
    
}
console.log(soma);
*/

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
for(let i = 0; i < numbers.length; i += 1){
    media += numbers[i] / numbers.length;
}
console.log(media.toFixed(2))
*/


// /Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
for(let i = 0; i < numbers.length; i += 1){
    media += numbers[i] / numbers.length;
}
console.log(media.toFixed(2));

if(media > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor que 20");
}
*/
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = numbers[0];
// for(let i = 1; i < numbers.length; i+= 1){
//     if(numbers[i] > maior){
//         maior = numbers[i];
//     }
// }
// console.log("O maior valor é: " + maior)


// /Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] % 2 !== 0){
//         result += 1;
//     }
// }
// if(result === 0){
//     console.log("Nenhum valor impar encontrado");
// }
// else{
//     console.log(result);
// }

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i] < menor){
        menor = numbers[i];
    }
}
console.log(menor);*/

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
/*let array = [];
for(let i = 1; i <= 25; i+=1){
    array.push(i);
    array
}
console.log(array);*/

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for(let i = 0; i < array.length; i+= 1){
    array[i] = array[i] / 2;
}
console.log(array);*/
// BONUS 1

//Ordene o array numbers em ordem crescente e imprima seus valores;
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 1; i < numbers.length; i+= 1){
    for(let iDois = 0; iDois < i; iDois += 1){
        if(numbers[i] < numbers[iDois]){
            let position = numbers[i];
            numbers[i] = numbers[iDois];
            numbers[iDois] = position;
        }
    }
}
console.log(numbers);*/

//BONUS 2

//Ordene o array numbers em ordem decrescente e imprima seus valores;
/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 1; i < numbers.length; i+= 1){
    for(let iDois = 0; iDois < i; iDois += 1){
        if(numbers[i] > numbers[iDois]){
            let position = numbers[i];
            numbers[i] = numbers[iDois];
            numbers[iDois] = position;
        }
    }
}
console.log(numbers);*/

//Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArray = [];
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers.length > i + 1){
//         newArray.push(numbers[i] * numbers[i + 1]);
//     }
//     else{  
//         newArray.push(numbers[i] * 2);
//     }
// }

// console.log(newArray);
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArray = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i+1]) {
//     newArray.push(numbers[i] * numbers[i+1]);
//   } else {
//     newArray.push(numbers[i] * 2);
//   }
// };
// console.log(newArray);


// function dice () { 
//     return Math.ceil(Math.random() * 6);
// }
// let d1 = dice();
// let d2 = dice();
// while (d1 === d2) {
//     d2 = dice();
// }

// console.log(d2);