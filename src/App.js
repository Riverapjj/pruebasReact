import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <p>
          Aqui haremos nuestro TO-DO list
        </p>
        <Form/>
      </div>
    </div>
  );
}

export default App;
