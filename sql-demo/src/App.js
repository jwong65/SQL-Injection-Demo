import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <form action='/login' method='POST'>
            <div className='container'>
              Name: <input type='text'></input>
              Password: <input type='text'></input>
              <button>Submit</button>
            </div>
          </form>
  
      </header>
    </div>
  );
}

export default App;
