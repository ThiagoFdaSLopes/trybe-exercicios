// const n = 8;

// let resultado = 100;
// for(let i = 0; i <= n; i += 1){
//     resultado -= i;
// }
// console.log(resultado);
// let valor = 10;
// for(let i = 10; i <= valor; i -= 1){
//     valor = i * i;
//     console.log(valor)


// }

// let fatorial = 10;
// let resultado = fatorial;
// for(let i = 9; i > 1; i-= 1){
//     resultado *= i;
// }
// console.log(resultado);

//  let nome = 'Banana';
//  let result = '';

//  for(let i = nome.length - 1; i >= 0; i -= 1){
//     result += nome[i];
//  }
//  console.log(result);
// let num = -10;
// if (num > 0){
//     console.log(num);
//   }
//   else{
//     console.log(-num);
// }
// let array = ['java', 'javascript', 'python', 'html', 'css', 'testedoamigothalis'];
// let maior = array[0];

// for(let i = 0; i < array.length; i += 1){
//     if(array[i].length > maior.length){
//         maior = array[i];
//     }
// }
// console.log(maior);
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = array[0];

// for(let i = 0; i < array.length; i += 1){
//     if(array[i].length > maior.length){
//         maior = array[i];
//     }
// }
// console.log(maior);






// Exercicios 2 do bonnus
// let n = 5;

let asterisco = "";

for(let linha = 1; linha <= n; linha+=1 ){
    for(let coluna = 1; coluna <= linha; coluna+=1){
        asterisco += "*"
    }
    console.log(asterisco);
    asterisco = "";
}
