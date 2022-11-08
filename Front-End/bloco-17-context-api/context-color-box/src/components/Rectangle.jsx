// ./components/ColorBox.js
import React from 'react';
import MyContext from '../Context/MyContext';
import '../styles/box.css';
class Rectangle extends React.Component {
  render() {
    return(
      <MyContext.Consumer>
      { (value) => (
      <div
      className="box"
      style={ { backgroundColor: `${value.cor}` } }
    >
      Click me to change my color!
    </div>
      )}
      </MyContext.Consumer>
    )
  }
}
export default Rectangle;