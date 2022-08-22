import React, { Component } from "react";

class Forms extends Component {
    constructor(){
        super()

        this.state = {}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState(() => ({
            [name]: value,
        }))
        console.log(this.state.value);
    }

    render() {
        return (
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </label>
            <label>
              Quais comidas você gosta?
              <select name="suco" onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
          </form>
        );
    }
}

export default Forms;
