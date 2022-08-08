// const asyncSum = require('./parafixarparte3')

// test('Não deveria passar!', () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//     }, 500);
// });

// test('Não deveria passar!', (done) => {
    
//     setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//         done(error);
//     }
//     }, 500);
// });

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//     asyncSum(5, 10, (result) => {
//       try {
//         expect(result).toBe(15);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
// });

// test('verify matcher toBe', () => {
//   const food = 'Coxinha';
//   expect(food).toBe('Coxinha');
// });

// test('verify matcher toBe', () => {
//   expect(10).toBe('10');
// });
// test('verify matcher toEqual', () => {
//   const name = 'Anna'
//   expect(name).toEqual(['Anna']);
// });
// test('verify matcher toEqual', () => {
//   expect(5).toEqual('5');
// });
// test('verify matcher toEqual', () => {
//   const character = { name: 'Alice' }
//   const movie = { name: 'Alice in Wonderland' }

//   expect(character).toEqual(movie);
// });
// test('verify matcher toEqual', () => {
//   const animal = { type: 'Cat' }
//   const animalName = 'Cat';

//   expect(animal).toEqual(animalName);
// });

test('verify matcher toEqual', () => {
  const character = { name: 'Ariel' };
  const person = { name: 'Ariel' };

  expect(character).toEqual(person);
});