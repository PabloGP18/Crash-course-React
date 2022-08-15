import React from 'react';
import {useState} from 'react'

export function Message() {
    const [message, setMessage] = useState('Welcome visitor');
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thank you for subscribing')}>Subscribe</button>
        </div>

    )
}
