// EM VEZ DISSO
// const newUser = (id, name, email) => {
//     return {
//         id: id,
//         name: name,
//         email: email,
//     };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// FAZEMOS ISSO
// const newUser = (id, name, email) => {
//     return {
//         id,
//         name,
//         email,
//     };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
// const newPerson = (nome, sobrenome, email) => {
//     return {
//         nome,
//         sobrenome,
//         email,
//     }
// }

// console.log(newPerson('Thiago', 'Lopes', 'programadorthiagolopes@gmail.com'))

// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});

console.log(getPosition(-19.8157, -43.9542));