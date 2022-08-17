import React from "react";

class Teste extends React.Component {
    render() {
        return (
            <div>
                <h1>{ `Hello ${this.props.name} ${this.props.lastName}`}</h1>
            </div>
        );
    }
}

export default Teste;
