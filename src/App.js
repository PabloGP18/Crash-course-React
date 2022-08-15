import './App.css';
import {Greet} from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name="PGP"/>
      <Greet name="Iron-man"/>
      <Greet name="Thor"/>
    </div>
  );
}

export default App;
