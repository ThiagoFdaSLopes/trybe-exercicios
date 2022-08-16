// import logo from './logo.svg';
import './App.css';

function App() {
  const hello = (nome) => {
    return `Hello World, ${nome}`;
  }

  const thiago = <h1 className="hello">{ hello('Thiago') }</h1>
  return thiago;
}

export default App;
