import React, { Component } from 'react';

class App extends Component {
  state = {
    numeroCliques: 0,
  }

  handleClick = () => {
    this.setState((antes, _props) => ({
      numeroCliques: antes.numeroCliques + 1
    }));
    const { numeroCliques } = this.state;

    if(numeroCliques % 2 === 0) {
      console.log(numeroCliques)
      console.log('PAR')
      console.log(this)
    }
  }
  render() {
    const { numeroCliques } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>{numeroCliques}</button>
      </div>
    );
  }
}

export default App;
