const valorA = 100;
const valorB = 0;

const quantidade = 1000;

const imposto = 100 * (20 / 100);

const valorCustoTotal = 100 + imposto;

const lucro = valorB - valorCustoTotal;

const total = quantidade * lucro;

if(valorA < 0 || valorB <= 0){
    console.log("Valores incorretos");

}
else{
    console.log("O resultado de lucro é: " + total);
}
