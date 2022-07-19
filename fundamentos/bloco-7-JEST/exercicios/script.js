// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         throw new Error('parameters must be numbers');
//     }

//     return a + b;
// }

// module.exports = {
//     sum,
// }

//exercicio2
// function myRemove(arr, item) {
//     let newArr = [];
//     for (let index = 0; index < arr.length; index += 1) {
//         if (item !== arr[index]) {
//             newArr.push(arr[index]);
//         }
//     }
//     return newArr;
// }

// module.exports = myRemove;

// Exercicio 3
// function myFizzBuzz(num) {
//     if (typeof num !== 'number') return false;
//     if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//     if (num % 3 === 0) return 'fizz';
//     if (num % 5 === 0) return 'buzz';
//     return num;
// }

// console.log(myFizzBuzz(2));

// module.exports = myFizzBuzz;

// Exercicio 4


// const encode = (string) => {
//     if(!string || typeof string !== 'string') return false;
//     let newString = string;
//     for(let i = 0; i < newString.length; i += 1){
//         newString = newString.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4).replace('u', 5);
//     }
//     return newString
// }
// const decode = (string) => {
//     let newString = string;
//     for(let i = 0; i < newString.length; i += 1){
//         newString = newString.replace(1, 'a').replace(2, 'e').replace(3, 'i').replace(4, 'o').replace(5, 'u');
//     }
//     return newString
// }

// module.exports = {
//     encode,
//     decode,
// }

// // Exercicio 5 
// function techList(array, nome) {
//     let arrayNova = [];
//     array = array.sort();

//     for (let i in array) {
//         arrayNova.push({ tech: array[i], name: nome });
//     }
//     if (array.length === 0) {
//         return 'Vazio!'
//     }
//     return arrayNova;
// }
// module.exports = techList;

function hydrate(string) {
    let valor = string.match(/\d+/g).map(Number);
    let novaString = 0;
    for (let i = 0; i < valor.length; i += 1) {
        novaString += valor[i];
    }

    if (novaString === 1) {
        return novaString + ' copo de água';
    }
    if (novaString > 1) {
        return novaString + ' copos de água';
    }
}

module.exports = hydrate;