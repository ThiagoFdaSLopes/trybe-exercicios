/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.*/

// // muda o tamanho dos P
// let modificaTexto = document.getElementsByTagName("p")[0];
// modificaTexto.style.textTransform = "Uppercase";
// // muda o tamanho dos P
// let modificaTextoDois = document.getElementsByTagName("p")[1];
// modificaTextoDois.style.textTransform = "Uppercase";
// // muda o tamanho dos P
// let modificaTextoTres = document.getElementsByTagName("p")[2];
// modificaTextoTres.style.textTransform = "Uppercase";

 // mudar texto p.
function mudaTagP(){
 document.getElementsByTagName("p")[1].innerHTML = "Me vejo conquistando uma vaga de emprego mais de 10K";
 }

 //mudar cor do quadro amarelo para verde
function mudaCorBackground(){
 document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
 }
 //mudar a cor do quadrado vermelho para branco
function redToWhite(){
 document.getElementsByTagName("section")[0].style.backgroundColor = "White";
 }

 // muda o texto do titulo
function mudaTitleHeader(){
 document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";
}
// modificar os p
function modificaAllP(){
let modificaTextoP = document.getElementsByTagName("p");
for(let i of modificaTextoP){
        i.style.textTransform = "Uppercase";
   }
}

//mostrar os conteudo
function mostraContentP(){
let exibirP = document.getElementsByTagName("p");
for(let i of exibirP){
        console.log(i.innerText);
   }
}