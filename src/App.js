import logo from './logo.svg';
import './App.css';
import Encabezado from './componentes/header/header.js';

function App() {
  return (
    <div className="App">
      <Encabezado/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo con React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo sobre React
        </a>
      </header>
    </div>
  );
}

export default App;
