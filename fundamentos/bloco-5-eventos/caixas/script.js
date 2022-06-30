let criaMain = document.createElement('main');
function criaMainRed(){
    criaMain.className = 'main-center';
    document.body.appendChild(criaMain); 
}

let caixaAzul = document.createElement('div');
function criaCaixaAzul(){
    caixaAzul.className = 'caixa-azul';
    criaMain.appendChild(caixaAzul);
}

let caixaYellow = document.createElement('div');
function criaCaixaAmarela(){
    caixaYellow.className = 'caixa-amarela';
    caixaAzul.appendChild(caixaYellow);
}

let caixaGreen = document.createElement('div');
function criaCaixaVerde(){
    caixaGreen.className = 'caixa-verde';
    caixaYellow.appendChild(caixaGreen);
}




window.onload = alert('Tela Carregada!');