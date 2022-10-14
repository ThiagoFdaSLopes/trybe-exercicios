// ./components/ColorBox.js
import React from 'react';
import MyContext from '../Context/MyContext';
import '../styles/box.css';
class ColorBox extends React.Component {
  render() {
    return(
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
    )
  }
}
export default ColorBox;