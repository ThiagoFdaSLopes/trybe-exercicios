import React, { Component } from "react";

class Forms extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            suco: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        let valornovo = value;

        if(name === 'nome') valornovo = value.toUpperCase();
        this.setState(() => ({
            [name]: valornovo,
        }))
    }

    render() {
        const { name, suco } = this.state;
        return (
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={ name }
                onChange={this.handleChange}
              />
            </label>
            <label>
              Quais bebidas você gosta?
              <select name="suco" value={ suco } onChange={this.handleChange}>
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
