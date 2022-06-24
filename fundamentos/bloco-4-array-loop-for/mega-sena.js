let megaSena = [];

let escolhaMega= [];

for(let i = 0; i < 6; i += 1){
    megaSena.push(Math.floor(Math.random() * 60) + 1);
    escolhaMega.push(Math.floor(Math.random() * 60) + 1);
    if(teste){
        megaSena.pop();
        escolhaMega.pop();
    }
}
console.log(megaSena);
console.log(escolhaMega);

let count = 0;
for(let i = 0; i < megaSena.length; i += 1){
    for(let iDois = 0; iDois < escolhaMega.lenght; iDois += 1){
        if(megaSena[i] === megaSena[iDois]){
            count += 1;
        }
    }
}
console.log(count);