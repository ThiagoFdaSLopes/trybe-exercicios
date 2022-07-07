const checkin = document.querySelector('.inputCheckin');
const checkout = document.querySelector('.inputCheckout');
const bedroom = document.querySelectorAll('.bedroom');
const select = document.querySelector('.nPessoas');
const textArea = document.querySelector('.obs');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getQuarto() {
	for (let i = 0; i < bedroom.length; i++) {
		if (bedroom[i].checked) {
			return bedroom[i].value;
		}
	}
}

function getPessoas() {
	return select.options[select.selectedIndex].value;
}

function getData(value) {
	const valueDate = value + 'T03:00:00.000Z';
	data = new Date(valueDate);
	dataFormatada = data.toLocaleDateString('pt-BR');
	return dataFormatada;
}

// Criando as LI-----
function criaAsLi(){
	const cLi = document.createElement('li');

	cLi.innerText = ' Reserva para o dia: ' + checkin.value + ' Até o dia: ' + checkout.value + ' Quarto: ' + bedroom.value + ' Para: ' + select.value + ' Pessoas' + ' obs: ' + textArea.value;
	ol.appendChild(cLi);
}
btnSubmit.addEventListener('click', function(event){
	event.preventDefault();
	criaAsLi();
	
})