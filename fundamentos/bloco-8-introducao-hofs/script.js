// Exemplo inicial de First Class Functions
// const sumFixAmount = (amount) => {
//     return (number) => amount + number;
// }

// const initialSum = sumFixAmount(15);
// console.log(initialSum(5))


// // Inicial Hof's
// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
// };
  
// repeat(5, (number) => {
//     if(number % 2 === 0){
//         console.log(number, 'is even');
//     }
// });

const numberGenerator = () => {
    return Math.random() * 100;
  }
  
console.log(numberGenerator);