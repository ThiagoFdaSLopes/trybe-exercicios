// const data = require('../data/zoo_data');

// const { species } = data;

// const animalsInObj = () => {
//   const obj = {
//     NE: species.filter((element) => element.location === 'NE').map((element) => element.name),
//     NW: species.filter((element) => element.location === 'NW').map((element) => element.name),
//     SE: species.filter((element) => element.location === 'SE').map((element) => element.name),
//     SW: species.filter((element) => element.location === 'SW').map((element) => element.name),
//   };
//   return obj;
// };

// const objctAnimals = (location) => {
//   const filtered = species.reduce((acc, curr) => {
//     if (curr.location === location) {
//       const obj = { [curr.name]: curr.residents.map((element) => element.name) };
//       acc.push(obj);
//     }
//     return acc;
//   }, []);
//   return filtered;
// };

// const sortedTrue = (location) => {
//   const filtered = species.reduce((acc, curr) => {
//     if (curr.location === location) {
//       const obj = { [curr.name]: curr.residents.map((element) => element.name).sort() };
//       acc.push(obj);
//     }
//     return acc;
//   }, []);
//   return filtered;
// };

// const filterInclude = (options) => {
//     const semfiltro = species.reduce((acc, curr) => {
//       if (!acc[curr.location]) {
//         acc[curr.location] = objctAnimals(curr.location);
//       }
//       return acc;
//     }, {});
//     return semfiltro;
// }

// // retorna filtro com nomes em ordem alfabetica
// const sortedNames = (options) => {
//   const { sorted } = options;
//   if (sorted === true) {
//     const semfiltro = species.reduce((acc, curr) => {
//       if (!acc[curr.location]) {
//         acc[curr.location] = sortedTrue(curr.location);
//       }
//       return acc;
//     }, {});
//     return semfiltro;
//   }
// };

// // console.log(sortedNames({ sorted: true }));

// function getAnimalMap(options) {

// }

// const data = require('../data/zoo_data');

// const { species } = data;

// const animalsObj = () => {
//   const obj = {
//     NE: species.filter((element) => element.location === 'NE').map((element) => element.name),
//     NW: species.filter((element) => element.location === 'NW').map((element) => element.name),
//     SE: species.filter((element) => element.location === 'SE').map((element) => element.name),
//     SW: species.filter((element) => element.location === 'SW').map((element) => element.name),
//   };
//   return obj;
// };

// const objctAnimals = (location) => {
//   const filtered = species.reduce((acc, curr) => {
//     if (curr.location === location) {
//       const obj = { [curr.name]: curr.residents.map((element) => element.name) };
//       acc.push(obj);
//     }
//     return acc;
//   }, []);
//   return filtered;
// };

// const sortedTrue = (location) => {
//   const filtered = species.reduce((acc, curr) => {
//     if (curr.location === location) {
//       const obj = { [curr.name]: curr.residents.map((element) => element.name).sort() };
//       acc.push(obj);
//     }
//     return acc;
//   }, []);
//   return filtered;
// };

// const teste = () => {
//   const filtered = species.reduce((acc, curr) => {
//     if (!acc[curr.location]) {
//       acc[curr.location] = sortedTrue(curr.location);
//     }
//     return acc;
//   }, {});
//   return filtered;
// };

// const filterInclude = (sorted) => {
//   if (sorted) {
//     return teste();
//   }
//   const semfiltro = species.reduce((acc, curr) => {
//     if (!acc[curr.location]) {
//       acc[curr.location] = objctAnimals(curr.location);
//     }
//     return acc;
//   }, {});
//   return semfiltro;
// };

// // console.log(filterInclude({ sorted: true }));

// function getAnimalMap(options) {
//   const animais = animalsObj();
//   if (!options || !options.includeNames) return animais;
//   if (options.includeNames) {
//     if (!options.sex && !options.sorted)
//       return filterInclude();
//     if (options.sorted && !options.sex) {
//       return filterInclude(true);
//     }
//   }
// }

// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// module.exports = getAnimalMap;