// // const customer = {
// //     name: 'Thiago',
// //     age: '26',
// //     job: 'FullStack',
// // };

// // let newKey = 'lastName';
// // const lastName = 'Ferreira';
// // customer[newKey] = lastName;
// // newKey = 'fullName';
// // const fullName = `${customer.name} ${customer.lastName}`;
// // customer[newKey] = fullName;
// // console.log(customer);

// // const criaOb = (objeto, chave, valor) => {
// //     objeto[chave] = valor;
// //     return objeto;
// // }

// // console.log(criaOb(customer, 'lastname', 'Lopes'));

// // console.log(Object.keys(customer));

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
// };

// const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
// };

// /* Tente criar uma função que exiba as habilidades do objeto student. 
// Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".*/

// const pegaObj = (objeto) => {
//     for(let index in objeto){
//         console.log(`Nome da Habilidade: ${index} Nivel: ${objeto[index]}`);
//     }
// }

// console.log(pegaObj(student1));