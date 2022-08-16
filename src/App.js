import './App.css';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import NAMES from './components/data.json';
import {startTransition, useState, useTransition} from 'react'

import {Greet} from './components/Greet'
import {Message} from './components/Message';
import {ClickHandler} from "./components/ClickHandler";
import {ParentComponent} from "./components/ParentComponent";
import {UserGreeting} from "./components/UserGreeting";
import {NameList} from "./components/NameList";
import {StyleSheet} from './components/StyleSheet';
import {Inline} from "./components/Inline";
import {Form} from "./components/Form";
import {PostList} from "./components/PostList";
import {PostForm, postForm} from "./components/PostForm";

function App() {
    const [query, setQuery] = useState ('')

    const [inputValue, setInputValue] = useState ('')
    const [isPending, start] = useTransition()


    const changeHandler = (event) => {
        setInputValue(event.target.value)
        startTransition(() => setQuery(event.target.value))
    }
    const filteredNames = NAMES.filter(item => {
        return item.first_name.includes(query) || item.last_name.includes(query)
    })


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

        <PostForm /> <br />

        <Form /> <br />

        <PostList /> <br />

        <ParentComponent /> <br />

        <UserGreeting /> <br />

        <NameList /> <br />

        <StyleSheet />  <br />
        <Inline />  <br />

        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>


            <input type="text" value={inputValue} onChange={changeHandler} />
            {isPending && <p>Updating list...</p>}
             {filteredNames.map((item) => (
                <p key={item.id}>{item.first_name} {item.last_name}</p>
            ))}
    </div>
  );
}

export default App;
