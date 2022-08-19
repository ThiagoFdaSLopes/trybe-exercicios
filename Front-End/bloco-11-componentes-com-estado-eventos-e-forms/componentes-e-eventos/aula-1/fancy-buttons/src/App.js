import React, { Component } from 'react';

const handleClick = () => console.log('Ola');
const click = () => console.log('Thiago');
const clickDuplo = () => console.log('Lopes');

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>BOTAO</button>
        <button onClick={click}>BOTAO1</button>
        <button onClick={clickDuplo}>BOTAO2</button>
      </div>
    );
  }
}

export default App;
