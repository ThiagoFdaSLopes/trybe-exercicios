// Essa função é responsável por validar se o formato do e-mail está correto.


//ANTES 
// const emailInput = 'email@email.com';

// const validateEmailFormat = (param) => {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(param);
// };

// console.log(validateEmailFormat(emailInput))

// DEPOIS

const emailInput = 'email@email.com';

const validateEmailFormat = (param: string):boolean => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))