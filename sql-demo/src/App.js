import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action='/login' method='POST'>
          Name: <input type='text'></input>
          <input type='submit'></input>
        </form>
      </header>
    </div>
  );
}

export default App;
