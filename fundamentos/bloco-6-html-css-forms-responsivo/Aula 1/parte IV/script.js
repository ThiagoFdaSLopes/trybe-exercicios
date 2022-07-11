const input = document.querySelector('#input-name');
const button = document.querySelector('#buttonSubmit');
let tagP = document.querySelector('#nameUser');

function getUserValue(event){
    event.preventDefault();
    tagP.innerHTML = input.value;
}

button.addEventListener('click', getUserValue);