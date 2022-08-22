import React, { Component } from "react";

class Forms extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
        }
    }

    handleChange = (event) => {
        this.setState(() => ({
            name: event.target.value
        }))
    }

    render() {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </label>
            </form>
        );
    }
}

export default Forms;
