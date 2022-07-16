const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'Noite',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// const addTurn = (objeto, valor) => {
//     objeto.turno = valor;
//     return lesson2
// }
// // console.log(addTurn(lesson2,'Noite'));

// const listKeys = (obj) => Object.keys(obj);

// console.log(listKeys(lesson3))

// const lengthObj = (obj) => Object.keys(obj).length;

// console.log(lengthObj(lesson1));

// const listObjt = (obj) => Object.values(obj);

// console.log(listObjt(lesson3));

// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);

// const numberTotal = (obj) => {
//     return `Numero total de Estudante é: ${obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes}`
// }

// console.log(numberTotal(allLessons));

// const getValue = (obj, valor) => {
//     const entrie = Object.entries(obj)
//     return entrie[valor][1];
// }
// console.log(getValue(lesson1, 0));

const verifyPair = (obj, chave, valor) => {
    const key = Object.keys(obj).includes(chave);
    const value = Object.values(obj).includes(valor);
    return key === true && value === true ? true : false;
    // if(key === true && value === true){
    //     return true;
    // } else {
    //     return false
    // }
}

console.log(verifyPair(lesson3, 'materia', 'Matemática'));