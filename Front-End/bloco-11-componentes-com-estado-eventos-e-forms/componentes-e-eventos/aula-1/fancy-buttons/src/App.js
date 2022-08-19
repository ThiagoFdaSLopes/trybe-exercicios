import React, { Component } from 'react';

class App extends Component {
  state = {
    numeroCliques: 0,
  }

  handleClick = () => {
    this.setState((antes, _props) => ({
      numeroCliques: antes.numeroCliques + 1
    }));
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
