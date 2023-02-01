// ANTES
// const numberInput = 7;

// const isItAPrime = (param) => {
//   for (let i = 2; i < param; i++)
//     if (param % i === 0) {
//       return false;
//     }
//   return param > 1;
// };

// isItAPrime(numberInput)
//   ? console.log(`${numberInput} é primo`)
//   : console.log(`${numberInput} não é primo`);


// DEPOIS 
const numberInput = 7;

const isItAPrime = (param: number):boolean => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);