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
function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

module.exports = myFizzBuzz;