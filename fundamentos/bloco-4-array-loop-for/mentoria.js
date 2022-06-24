// 1. Descubra a idade mínima
// Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.
// Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:
// --------------------------------------------------
// "x é a pessoa mais jovem e possui y anos de idade"
// --------------------------------------------------

const marina = 25;
const silvia = 26;
const iza = 22;

if(marina < silvia && marina < iza){
    console.log("Marina é a pessoa mais jovem e possui, " + marina, "anos de idade")
}
else if(silvia < marina && silvia < iza){
    console.log("Silvia é a pessoa mais jovem e possui, " + silvia, "anos de idade");
}
else{
    console.log("Iza é a pessoa mais jovem e possui, " + iza, "anos de idade");
}