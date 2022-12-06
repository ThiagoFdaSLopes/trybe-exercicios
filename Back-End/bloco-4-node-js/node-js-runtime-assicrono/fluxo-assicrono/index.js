const somaDoisNumeros = (num1, num2) => {
  const promisse = new Promise( (resolve, reject) => {
    if(num1 === 0 || num2 === 0) reject(new Error("Todo valor somado com 0 é ele mesmo"));

    const result = num1 + num2;

    resolve(result);
  });

  return promisse;
}

somaDoisNumeros(2, 0)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))