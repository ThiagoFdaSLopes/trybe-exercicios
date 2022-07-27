const acorda = () => 'Acordando';
const coffe = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(acorda);
doingThings(coffe);
doingThings(sleep);

// // Ao chamar a função doingThings:
// doingThings(acorda);

// // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// // Acordando!!