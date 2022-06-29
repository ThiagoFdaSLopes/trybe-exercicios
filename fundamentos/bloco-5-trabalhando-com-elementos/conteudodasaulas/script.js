// document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red';

// console.log(document.getElementById('elementoOndeVoceEsta').parentNode);

// document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = 'Filho do Filho';

// console.log(document.getElementById('pai').firstElementChild);

// console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

// 1
let irmaoOndeVoceEsta = document.getElementById('pai');
let criaSection = document.createElement('section');
criaSection.innerText = 'FilhosDeDeus';

irmaoOndeVoceEsta.appendChild(criaSection);


//2 

let filhoProOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let criaSectionFilho = document.createElement('section');

criaSectionFilho.innerText = 'FilhosDeDeus';

filhoProOndeVoceEsta.appendChild(criaSectionFilho);

//3
let filhoDoPrimeiroFilho = document.getElementById('primeiroFilhoDoFilho');
let criaSectionFilhoDoPrimeiroFilho = document.createElement('section');

criaSectionFilhoDoPrimeiroFilho.innerText = 'FilhosDeDeus';

filhoDoPrimeiroFilho.appendChild(criaSectionFilhoDoPrimeiroFilho);

// //4

// console.log(document.getElementById('primeiroFilhoDoFilho').parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling)
