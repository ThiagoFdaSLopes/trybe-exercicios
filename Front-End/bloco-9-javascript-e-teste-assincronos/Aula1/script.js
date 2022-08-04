// // setTimeout(() => {
// //     console.log('Comprar parafusos') // Comprar parafusos
// //     console.log('Adicionar ao estoque') // Adicionar ao estoque
// // }, 2000);

// // console.log('1 - Receber roda'); // 1 - Receber roda
// // console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// // console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// // const pushNumber = (list, number) => list.push(number);

// // let numbers = [];
// // const nome = 'Thiago';

// // setTimeout(() => numbers.push(nome), 500);
// // pushNumber(numbers, 2);
// // pushNumber(numbers, 3);

// // console.log(numbers);

// // const name = 'Thiago';
// // const sobrenome = 'Lopes';

// // const nome = () => {
// //     setTimeout(() => {
// //         console.log(name)
// //     }, 1500);
// //     console.log(sobrenome);
// // }

// // nome();

// const despesas = [
//     {
//         gym: 99,
//     },
//     {
//         ifood: 200,
//     },
//     {
//         phone: 60,
//     },
//     {
//         internet: 100,
//     },
// ];

// const renda = 1000;


// const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//     return despesaTotal;
// };

// const returno = somaDespesas(despesas);

// console.log(returno)