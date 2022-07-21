const acorda = () => 'Acordando';
const coffe = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(acorda);
doingThings(coffe);
doingThings(sleep);
