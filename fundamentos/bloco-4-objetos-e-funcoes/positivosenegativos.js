function countPositivesSumNegatives(input) {
    let positivos = 0;
    let negativos = 0;
    let array = [];
  
      for (index of input) {
        if (index > 0) {
          positivos += 1;
        } else if(index < 0) {
          negativos += index;
        }
    }
    array.push(positivos);
    array.push(negativos);
    return array;
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));