const button = document.querySelector('#button');
const tagP = document.querySelector('#contador');
let contador = 0;

button.addEventListener('click', () => {
    tagP.innerText = contador += 1;
});