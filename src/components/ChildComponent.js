import React from 'react';

export function ChildComponent(props) {
    return(
        <div>
            <button onClick={() => props.greetHanlder('child')}>Greet parent</button>
        </div>
    )
}