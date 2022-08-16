import {useState} from 'react';


export function PostForm() {

    const [userID, setUserID] = useState('')
    const [titel, setTitel] = useState('')
    const [body, setBody] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: titel,
                body: body,
                userId: userID,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return <form onSubmit = {submitHandler}>
        <div>
            <input type="text" placeholder='User ID' value={userID} onChange={event => setUserID(event.target.value)}/>
        </div>
        <div>
            <input type="text" placeholder='Titel' value={titel} onChange={event => setTitel(event.target.value)}/>
        </div>
        <div>
            <input type="text" placeholder='Body' value={body} onChange={event => setBody(event.target.value)}/>
        </div>
        <button type="submit">Submit</button>
    </form>
}