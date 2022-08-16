import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        const hello = (nome) => {
            return `Hello World, ${nome}`;
        }
        
        const thiago = <h1 className="hello">{ hello('Thiago') }</h1>
        return thiago;
    }
}

export default HelloWorld