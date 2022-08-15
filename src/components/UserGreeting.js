/*

export function UserGreeting() {
    const isLoggedIn = false

    // the ? is if and the : is else
    return <div>Welcome {isLoggedIn ? 'Yes PGP' : 'Guest' }</div>
}
*/


export function UserGreeting() {
    const isLoggedIn = true

    // the ? is if and the : is else
    return <div>Welcome {isLoggedIn && 'PGP'}</div>
}