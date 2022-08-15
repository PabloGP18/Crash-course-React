import React from "react";

export function ClickHandler() {

    function clickHandler(event, count = 1) {
        console.log("button clicked",count, event)
    }
// Other way to make a function with arrow functions
/* const clickHandler = () => {
     console.log("ClickHandler")
 }*/
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
            <button onClick={(event) =>clickHandler(event, 5)}>Click 5</button>
        </div>
    )
}
