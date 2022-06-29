// // function hydrate(lineA, lineB, lineC) {
// //     if(lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineA + lineB){
// //       return false;
// //     }
// //     else if(lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)){
// //       return false;
// //     }
// //     else{
// //       return true;
// //     }
// // }
// // console.log(hydrate(10, 14, 8))
// // Implemente a função techList que recebe um array e uma string e retorna um array de objetos.

// // A função techList recebe dois parâmetros:

// // Um array com nomes de tecnologias ;
// // Um nome referente ao nome de uma pessoa.
// // A função deverá retornar:

// // 'Vazio!' se não receber parâmetro algum ;
// // Um objeto para cada tecnologia do array, com a seguinte estrutura:

// function techList(array, string){
//     let arrayReturn = [];
//     array.sort();

//     for(let i of array){
//        arrayReturn.push({tech: i, name: string});
//     }
//     if(array === 0){
//         return 'Vazio!';
//     }
//     return arrayReturn;
// }

// console.log(techList('Thiago'));
// function encode(string){
// for (let index = 0; index < string.length; index += 1) {
//     string = string.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4).replace('u', 5);
//   }
// return string;
//

// function digitize(n) {
  
//     return n.toString().split('').reverse().map(Number);
// }