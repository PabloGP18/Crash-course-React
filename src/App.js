import './App.css';
import {Greet} from './components/Greet'
import {Message} from './components/Message';

function App() {
  return (
    <div className="App">
        <Message />
      <Greet name="PGP" age={34} />
        <Greet name="Iron-man" age={58}>
            <button>Iron-button</button>
        </Greet>
        <Greet name="Thor" age={42}>
            I'm the God of thunder, and also a children prop!
        </Greet>
    </div>
  );
}

export default App;
