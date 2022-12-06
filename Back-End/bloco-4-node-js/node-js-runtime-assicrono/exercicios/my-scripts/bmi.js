const readline = require('readline-sync');

const weight = readline.questionInt(` What’ your weight? `);
const  height = readline.questionFloat(`What’ your height? `);

function calculateBmi(weight, height) {
  const result = weight / ( height * height );

  switch(result > 0) {
    case result < 18.5:
      console.log(`Sua massa corporal é ${result.toFixed(2)} e está Abaixo do peso (magreza)`);
      break;
    case result >= 18.5 && result <= 24.9:
      console.log(`Sua massa corporal é ${result.toFixed(2)} e está com Peso normal`);
      break;
    case result >= 25.0 && result <= 29.9:
      console.log(`Sua massa corporal é ${result.toFixed(2)} e está Acima do peso (sobrepeso)`);
      break;
    case result >= 30.0 && result <= 34.9:
      console.log(`Sua massa corporal é ${result.toFixed(2)} e está com Obesidade grau I`);
      break;
    case result >= 35.0 && result <= 39.9:
      console.log(`Sua massa corporal é ${result.toFixed(2)} e está com Obesidade grau II`);
      break;
    case result >= 40.0:
      console.log(`Sua massa corporal é ${result.toFixed(2)} e está com Obesidade grau III`);
      break;
    default:
      console.log('Valor fora das proporcoes');
  };
}

calculateBmi(weight, height);