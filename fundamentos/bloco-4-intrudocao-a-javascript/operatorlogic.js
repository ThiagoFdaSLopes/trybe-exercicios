const currentHour = 16;
let message;

if(currentHour >= 22){
    message = "Não deveriamos comer nada, é hora de dormir";
}
else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
}
else if(currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if(currentHour >= 11 && currentHour < 14){
    message = "Hora do Almoço";
}
else if(currentHour >= 4 && currentHour < 11){
    message = "Hmmm, Cheiro de café recém passado";
}


let weekDay = "Sabado";

if(weekDay == "Segunda-Feira" || weekDay == "Terça-Feira" || weekDay == "Quarta-Feira" || weekDay == "Quinta-Feira" || weekDay == "Sexta-Feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if(weekDay == "Sabado" || weekDay == "Domingo"){
    console.log("FINALMENTE, descanso merecido UwU");
}


