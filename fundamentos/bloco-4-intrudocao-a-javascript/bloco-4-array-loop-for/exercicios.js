//bubble sort

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 1; i < numbers.length; i+= 1){
    for(let iDois = 0; iDois < i; iDois+= 1){
        if(numbers[i] > numbers[iDois]){
            let position = numbers[i];
            numbers[i] = numbers[iDois];
            numbers[iDois] = position;
        }
    }
}
console.log(numbers);
