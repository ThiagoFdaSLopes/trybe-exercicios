import React from "react";
import ColorBox from "./components/ColorBox";
import MyContext from './Context/MyContext';

class App extends React.Component {
  state = {
    cor: '',
  }

  returnNewColor = () => {
    this.setState({ cor: `#${Math.floor(Math.random()*16777215).toString(16)}`})
  }
  render(){
    const { cor } = this.state;
    const obj = { changeColor: this.returnNewColor, cor };
  return (
    <div>
    <MyContext.Provider value={ obj }>
      <ColorBox />
    </MyContext.Provider>
    </div>
  );
  }
}

export default App;
