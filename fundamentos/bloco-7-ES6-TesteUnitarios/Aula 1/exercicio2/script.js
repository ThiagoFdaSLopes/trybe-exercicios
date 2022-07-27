const fatorial = (n) => n > 1 ? n * fatorial(n - 1) : 1;

console.log(fatorial(5));

// //

// const longestwordTeste = (string) => {
//     const palavra = string.split(' ');
//     let maiorLength = 0;
//     let maior = '';

//     for(let word of palavra){
//         if(word.length > maiorLength){
//             maiorLength = word.length;
//             maior = word;
//         }
//     }

//     return maior;
// }

// console.log(longestwordTeste('Antônio foi no banheiro e não sabemos o que aconteceu'));