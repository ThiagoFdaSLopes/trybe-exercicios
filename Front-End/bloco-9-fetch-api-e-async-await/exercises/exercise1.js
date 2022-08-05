// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  } 

    const texto = await fetch(API_URL, myObject)
    .then(responde => responde.json())
    .then(data => data.joke)

    console.log(texto)

  const element = document.getElementById('jokeContainer');
  element.innerText = texto
  
};

window.onload = () => fetchJoke();