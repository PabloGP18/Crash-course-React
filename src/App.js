import './App.css';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'

import {Greet} from './components/Greet'
import {Message} from './components/Message';
import {ClickHandler} from "./components/ClickHandler";
import {ParentComponent} from "./components/ParentComponent";
import {UserGreeting} from "./components/UserGreeting";
import {NameList} from "./components/NameList";
import {StyleSheet} from './components/StyleSheet';
import {Inline} from "./components/Inline";
import {Form} from "./components/Form";


function App() {
  return (
    <div className="App">
        <Message /> <br />
        <ClickHandler />
      <Greet name="PGP" age={34} />
        <Greet name="Iron-man" age={58}>
            <button>Iron-button</button>
        </Greet>
        <Greet name="Thor" age={42}>
            I'm the God of thunder, and also a children prop!

        </Greet> <br />

        <Form /> <br />

        <ParentComponent /> <br />

        <UserGreeting /> <br />

        <NameList /> <br />

        <StyleSheet />  <br />
        <Inline />  <br />

        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>

    </div>
  );
}

export default App;
