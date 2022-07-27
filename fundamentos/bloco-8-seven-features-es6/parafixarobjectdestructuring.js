/*
E como exatamente funciona a desestruturação de objeto? Vamos voltar ao exemplo do objeto product.
 A sintaxe da desestruturação de objetos pede para passarmos o 
 nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:
*/

// definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//         specieName: 'Human',
//         jedi: true,
//     },
//     homeWorld: {
//         name: 'Tatooine',
//         population: '200000',
//     },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// // Forma para definir novas Keys
// const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

// PARA FIXAR ->


/*
1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa 
trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.
*/


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const newObj = {
    ...user,
    ...jobInfos,
}

console.log(newObj)

/*
2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação 
de objetos em conjunto com template literals.
*/

const { name, age, nationality, profession, squad, squadInitials } = newObj;

console.log(`"Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}"`)
