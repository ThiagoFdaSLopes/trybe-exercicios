// import logo from './logo.svg';
import './App.css';
// import Teste from './Teste';
import Image from './Img';

function App() {
  return (
    <div className="App">
      {/* <Teste name='Thiago' lastName='Lopes'/> */}
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
    </div>
  );
}

export default App;
