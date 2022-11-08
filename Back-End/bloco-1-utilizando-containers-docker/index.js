// Iniciando Docker

// plusMinus HackerRank
// const arr = [-4, 3, -9, 0, 4, 1];

// function plusMinus(array) {
//   const tamanho = arr.length;
//   const positivo = (arr.filter((e) => e > 0).length / tamanho).toFixed(6);
//   const negativo = (arr.filter((e) => e < 0).length / tamanho).toFixed(6);
//   const zero = (arr.filter((e) => e === 0).length / tamanho).toFixed(6);
//   console.log(positivo)
//   console.log(negativo)
//   console.log(zero)
// }

// plusMinus(arr);

// Staircase

// function stairCase(n) {
//   let escada = '';

//   for(let i = 1; i <= n; i ++ ){
//     for(let s = n - 1; s >= i; s--){
//       escada += ' ';
//     }
//     for(let h = 1; h <= i; h++){
//       escada += '#';
//     }
//     escada += '\n';
//   }
//   console.log(escada);
// }

// stairCase(6)

// const arr = [1, 2, 3, 4, 5];

// function miniMaxSum(arr) {
//   const maior = Math.max(...arr);
//   const menor = Math.min(...arr);
//   const somaMax = arr.reduce((acc, curr) => acc + curr, 0) - menor;
//   const somaMin = (somaMax - maior) + menor;
//   console.log(somaMin, somaMax)
// }

// miniMaxSum(arr);

