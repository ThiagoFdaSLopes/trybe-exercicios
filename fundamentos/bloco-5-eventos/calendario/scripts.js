function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


// CRIADO OS DIAS DOS CALENDARIO
const tagUL = document.querySelector('#days');
function criaDatasDias(){
for(let i of decemberDaysList){
  let diasLista = i;

  let criaALista = document.createElement('li');

  if(diasLista === 24 || diasLista === 31){
    criaALista.className = 'day holiday';
    tagUL.appendChild(criaALista);
  }
  else if(diasLista === 4 || diasLista === 11 || diasLista === 18){
    criaALista.className = 'day friday';
    tagUL.appendChild(criaALista);
  }
  else if(diasLista === 25){
    criaALista.classList.add('friday', 'day', 'holiday');
    tagUL.appendChild(criaALista);
  }
  else{
    criaALista.className = 'day';
    tagUL.appendChild(criaALista);
  }
  criaALista.innerText = diasLista;
  }
}
criaDatasDias();

let divContainer = document.getElementsByClassName('buttons-container')[0];
let criaButton = document.createElement('button');
//CRIAR O BOTAO DO FERIADO
function criaFeriado(){
  criaButton.id = 'btn-holiday';
  criaButton.innerText = 'Feriados'

  divContainer.appendChild(criaButton);

}
criaFeriado();

let diaHoliday = document.getElementById('btn-holiday');

diaHoliday.addEventListener('click', function (string){
  let holidays = document.querySelectorAll('.holiday');
  for(let i = 0; i < holidays.length; i += 1){
    if(holidays[i].style.backgroundColor === 'yellow'){
      holidays[i].style.backgroundColor = '#eee';
    }
    else{
      holidays[i].style.backgroundColor = 'yellow';
    }
  }
})

// function trocaCor(){
//   for(let i of diaHoliday){
//   i.style.backgroundColor = 'yellow';
//   }
// }
// function voltaCor(){
//   for(let i of diaHoliday){
//     i.style.backgroundColor = 'rgb(238,238,238)';
//   }
// }

// criaButton.addEventListener('click', trocaCor);
// criaButton.addEventListener('dblclick', voltaCor);
let buttonSextou = document.createElement('button');
//BOTAO SEXTOU!
function criaBotaoSextou(){

  buttonSextou.id = 'btn-friday';
  buttonSextou.innerText = 'Sexta-Feira'
  divContainer.appendChild(buttonSextou); 
}
criaBotaoSextou();

//sextou 2
diasDeFriday = [4,11,18,25];
let btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', function(string){
  let daysFriday = document.getElementsByClassName('friday');
  for(let i = 0; i < daysFriday.length; i += 1){
    if(daysFriday[i].innerHTML !== 'SEXTOU'){
      daysFriday[i].innerHTML = 'SEXTOU';
    }
    else{
      daysFriday[i].innerHTML = diasDeFriday[i];
    }
  }
})

//efeitoZOOM
function zoomIn(evento){
  evento.target.style.transform = 'scale(1.5)';
}
function zoomOut(evento){
  evento.target.style.transform = 'scale(1.0)';
}
function colocaEmZoom(){
let diasDoZoom = document.getElementsByClassName('day');
for(let i = 0; i<diasDoZoom.length; i +=1){
  diasDoZoom[i].addEventListener('mouseover', zoomIn);
  diasDoZoom[i].addEventListener('mouseout', zoomOut);
  }
}
colocaEmZoom();

//7
function addTarefa(string){
  let tarefasSpan = document.querySelector('.my-tasks');
  let criaSpan = document.createElement('span');
  criaSpan.innerHTML = string;
  tarefasSpan.appendChild(criaSpan);
}
addTarefa('projeto');
//8
function novaTarefaDiv(color){
  let tarefasDois = document.querySelector('.my-tasks');

  let novaTarefa = document.createElement('div');

  novaTarefa.className = 'task';
  novaTarefa.style.backgroundColor = color;
  tarefasDois.appendChild(novaTarefa);
}
novaTarefaDiv('green');

function tarefaSelecionada(){
  let tarefasSelec = document.getElementsByClassName('task selected');
  let minhasTarefas = document.querySelector('.task');

  minhasTarefas.addEventListener('click', function(evento){
    if(tarefasSelec.length === 0){
      evento.target.className = 'task selected';
    }
    else{
      evento.target.className = 'task';
    }
  })
}
tarefaSelecionada();

function tarefasPintada(){
  let tarefasSelec = document.getElementsByClassName('task selected');
  let minhasTarefas = document.querySelector('#days');
  let divTarefa = document.querySelector('.task');
  let cor = divTarefa.style.backgroundColor;

  minhasTarefas.addEventListener('click', function(evento){
    let eventoMudaCor = evento.target.style.color;
    if(tarefasSelec.length > 0 && eventoMudaCor !== cor){
      let color = tarefasSelec[0].style.backgroundColor;
      evento.target.style.color = color;
    }else if(eventoMudaCor === cor){
      evento.target.style.color = 'rgb(119, 119, 119)';
    }

  });
}
tarefasPintada();