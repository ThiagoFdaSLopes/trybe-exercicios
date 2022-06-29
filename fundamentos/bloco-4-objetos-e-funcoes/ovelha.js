function OvelhaMaldita(num){
    let stringSheep = '';
    for(let i = 1; i <= num; i+= 1){
        stringSheep += i + ' ' + 'Sheep...'
    }
    return stringSheep;
}

console.log(OvelhaMaldita(10)); 