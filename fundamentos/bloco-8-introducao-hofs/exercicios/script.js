// const newUser = (nome) => {
//     const obj = {
//         nomecompleto: nome,
//         email: `${email}@trybe.com`,
//     };
//     return obj;
// }


// const newEmployees = (func) => {
//     const employees = {
//       id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: func('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
// };

// console.log(newEmployees(newUser));

// const numberAle = (number, numberAleatorio) => number > numberAleatorio || number < numberAleatorio ? "Tente novamente" :  "Parabéns você ganhou";

// const sorteio = (number, func) => {

//     const numberAleatorio = Math.ceil(Math.random() * 5)

//     return func(number, numberAleatorio);
// }

// console.log(sorteio(4, numberAle));
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDE_ANSWERS = ['A', 'N', 'B', 'D', 'A', 'C', 'N', 'A', 'D', 'B'];

// const compareResult = (gabarito, resposta) =>{
//     let soma = 0;
//     for(let i in gabarito){
//         let first = gabarito[i];
//         for(let ind in resposta){
//             if(i === ind){
//             resposta[ind] === first ? soma += 1 : soma -0.5;
//             }
//         }
//     }
//     return soma;
// };
// console.log(compareResult(RIGHT_ANSWERS, STUDE_ANSWERS))

// const myHof =(gabarito, resposta, func) => {

// };
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compareResult = (gabarito, resposta) => {
//     if (gabarito === resposta) {
//         return 1
//     } if (resposta === 'N.A') {
//         return 0
//     }
//     return -0.5;
// }

// const myHof = (gabarito, resposta, callback)=> {

//     let soma = 0;
//     for(let i = 0; i < gabarito.length; i += 1) {
//         const guardaReturn = callback(gabarito[i], resposta[i]);
//         soma += guardaReturn;
//     }

//     return `A sua pontução foi ${soma}`
// }

// console.log(myHof(RIGHT_ANSWERS, STUDENT_ANSWERS, compareResult))

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const returnDanoDragon = (dragon) => {
    const danoMin = 15;
    const damageMaxim = Math.floor(Math.random() * (dragon.strength - danoMin + 1)) + danoMin;
    return damageMaxim;
}

//2 - Crie uma função que retorna o dano causado pelo warrior.
//O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const returnDanoWarrior = (warrior) => {
    const danoMin = warrior.strength;
    const weaponDmgKey = warrior.weaponDmg;
    const damageMaxim = Math.floor(Math.random() * ((danoMin * weaponDmgKey)  - danoMin + 1)) + danoMin;
    return damageMaxim;
}
//3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const returnObj = (mago) => {

    const danoMin = mago.intelligence;
    const danoMax = danoMin * 2;
    
    const obj = {
        dano: () => {
            const dano = Math.floor(Math.random() * (danoMax - danoMin + 1)) + danoMin;
            if( mago.mana < 15) {
                return "Não possui mana suficiente";
            }
            return dano;       
        },
        mana: 15,
    };
    return obj;
}

const gameActions = {
    // Crie as HOFs neste objeto.
    turnoWarrir: (returnWarrior) =>{
        const danoDoWarrior = returnWarrior(warrior);
        const vidaQueSobrou = dragon.healthPoints - danoDoWarrior;
        dragon.healthPoints = vidaQueSobrou;
        warrior.damage = danoDoWarrior;

        return `A vida do dragon agora é ${dragon.healthPoints} e o dano causado foi ${danoDoWarrior}`;
    },
    turnoMage: (func) => {
        const objDaFunc = func;
        const danoDoMage = objDaFunc.dano();
        const vidaQueSobrouDragon = dragon.healthPoints - danoDoMage;
        dragon.healthPoints = vidaQueSobrouDragon;
        const manaMage = objDaFunc.mana;
        mage.mana = mage.mana - manaMage;
        mage.damage = danoDoMage;

        return `A Vida do dragão é ${dragon.healthPoints} o dano causado foi ${danoDoMage} e sobrou ${mage.mana} de mana na maga`
    }
};

console.log(gameActions.turnoMage(returnObj(mage)))
