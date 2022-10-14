// ./components/ColorBox.js
import React from 'react';
import MyContext from '../Context/MyContext';
import '../styles/box.css';
import Rectangle from './Rectangle';
class ColorBox extends React.Component {
  state = {
    color: 'blue'
  }
  render() {
    const obj = {
     cor: this.state.color,
    }
    return(
      <div>
      <MyContext.Consumer>
      { (value) => (
      <button
      type="button"
      className="box"
      style={ { backgroundColor: `${value.cor}` } }
      onClick={ value.changeColor }
    >
      Click me to change my color!
    </button>
      )}
      </MyContext.Consumer>
      <MyContext.Provider value={obj}>
        <Rectangle />
      </MyContext.Provider>
      </div>
    )
  }
}
export default ColorBox;