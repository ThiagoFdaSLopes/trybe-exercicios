// console.log(document.getElementsByClassName("piloto-f1-atual"));

//Quando trabalhamos com getElementsByClassName estamos trabalhando com um aray de objetos

//

// let pilotoF1Atual = document.getElementsByClassName("piloto-f1-atual");

// for(let i = 0; i < pilotoF1Atual.length; i +=1){
//     console.log(pilotoF1Atual[i]);
// }

let pilotoF1Atual = document.getElementsByClassName("piloto-f1-atual")[1];
pilotoF1Atual.style.color = "red";


let pilotoF1AtualTagDois = document.getElementsByTagName("p")[3];

pilotoF1AtualTagDois.style.backgroundColor = "green";