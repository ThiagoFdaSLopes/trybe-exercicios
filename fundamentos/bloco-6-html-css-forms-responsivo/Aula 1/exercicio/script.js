// -- VARIAVEIS --

// -- ENVIAR preventDefault
// function eventDefault(event){
//     event.preventDefault();
// }

// window.onload = function (){
//     const enviar = document.querySelector('#button-enviar');
//     enviar.addEventListener('click', eventDefault);
// }

// -- Botao Enviar --
const button = document.querySelector('#button-enviar');
const checked = document.querySelector('#checkbox-h');
function enableSubmit() {
    button.disabled = !checked.checked;
}
checked.addEventListener('click', enableSubmit);
