const a = 60;
const b = -40;
const c = 60;

let soma = a + b + c;

console.log(soma)
if(soma == 180){
    soma = true;
    console.log(soma);
}
else if(soma < 180 || soma < 0){
    soma = false;
    console.log(soma +" A soma não é igual 180 ou Triangulo não tem angulo negativo");
}

// Outra resolução

const f = 60;
const g = 60;
const h = -65;

let allanglessoma = f + g + h;

let allAnglesArePositives = f > 00 && g > 0 && h > 0;

if(allAnglesArePositives){
    if(allanglessoma == 180){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
else{
    console.log("Erro: ângulo invalido");
}

