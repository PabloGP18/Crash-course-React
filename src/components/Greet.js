import React from 'react';

export function Greet(props) {
    return(
    <div>
    <h1>Hello {props.name}, you are {props.age} old.</h1>
        {props.children}
    </div>
    )
}

// this is another way to create a function using arrow.
/*const Greet = () => {
    return <h1>Hello PGP</h1>
}*/
/*
export default Greet;*/
