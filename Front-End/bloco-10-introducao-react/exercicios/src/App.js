// import logo from './logo.svg';
import './App.css';
const compromissos = ['Thiago', 'Estudar', 'React']
const Task = (value) => value.map((element) => <li>{ element }</li>)

function App() {
  return (
    <div className="App">
      <ol>{ Task(compromissos) }</ol>
    </div>
  );
}

export default App;
