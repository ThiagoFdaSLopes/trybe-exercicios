//body
let bodyBack = document.getElementById("container");
bodyBack.style.backgroundColor = "gray";

//Header
let headerTop = document.getElementById("header-container");
headerTop.style.backgroundColor = "green";

//footer
let footerBack = document.getElementById("footer-container");
footerBack.style.backgroundColor = "darkgreen";

//div esquerda
let divEsquerda = document.getElementsByClassName("emergency-tasks")[0];
divEsquerda.style.backgroundColor = "burlywood";

//caixa de texto esquerda
let esquerdaCaixaDeTexto = document.querySelectorAll("div h3")[0];
esquerdaCaixaDeTexto.style.backgroundColor = "black";
let esquerdaCaixaDeTextoBaixa = document.querySelectorAll("div h3")[1];
esquerdaCaixaDeTextoBaixa.style.backgroundColor = "black";


//div direita no-emergency-tasks
let divDireita = document.getElementsByClassName("no-emergency-tasks")[0];
divDireita.style.backgroundColor = "red";

//caixa de texto direita
let diretaCaixaDeTexto = document.querySelectorAll("div h3")[2];
diretaCaixaDeTexto.style.backgroundColor = "indigo";
let direitaCaixaDeTextoBaixa = document.querySelectorAll("div h3")[3];
direitaCaixaDeTextoBaixa.style.backgroundColor = "indigo";
