# React AirBnb Experience Clone

Have fun with this dynamic meme generator built with React.js.

**Key features**:

- Utilization of React.js with dynamic elements
- A well-organized website with a professional folder system
- A responsive, modern design

- Effective use of Routing, custom Components and Pagination
- Utilization of Prism.js to show highlighted code
- Hooks: useState()
- published on Netlify through GitHub repo

**Skills**:

- Effective use of React library and integration of Prism.js
- Utilization of professional folder organization with src components, context, data, hooks, pages and utilities.
- Clear, maintainable, and scalable code with responsive layout and architecture

### More projects by Sloan Crawford: [Portfolio](https://sloan-crawford-professional-portfolio.netlify.app/)

**Notes**:

**Goals**

1. when the app loads for the first time:

- API call to image flip
- returns an array of 100 meme images that are the most popular at that time

2. clicking the 'get a new meme image button':

- randomly selects one of those 100 images
- displays the text from top and bottom inputs on top of the image

**Guide to accomplish this:**

1. Event listeners:

- one way is to add an event listener in JS:

```
button.addEventListener("click", function(){
 logic
})
```

- another way is with onclick in html file:
  <button onclick="function()">Click Me</button>

-this is similar to how it happens in React with minor syntax differences:
<button onClick={clickFunctionRef}>Click Me</button>
-remember to define the function above the return block within the component and only use a reference to the funtion in the button. Otherwise it runs clickFunctionRef right away.

React takes the JSX element above which returns a plain js object describing the DOM element that should be created by React and whatever properties or attributes that have been added (like onClick) inside the JSX are directly accessing the equivalent properties in js.

**_-------example-----------_**
a component with an event listener:

```
export default function MouseEvents() {
 function handleOnMouseOver() {
  console.log("mouseOver")
 }

 return (
  <div>
   <button onMouseOver={handleOnMouseOver}> MouseOver Me</button>
  </div>
 )
}
```

Challenge in React: updating the UI. When does it happen?

- we can update a variable that will then replace what we have on screen with a new value.
- when does the return run again with updated values for its elements? right now, only once.
- React is declarative so you can't just select the element & change it within the function.
- the benefits of React is that all we have to do is update our data and React will 'react' to that change and update our UI to display what has changed in the data.
- we just need to make sure the data is updated correctly.
- so we need to access STATE. State allows us to hook into the component and update it...

**Props vs. State**

**_Props:_**

- properties being passed into a component to configure it (like params for functions).
- a component receiving props is not allowed to modify those props (they are immutabale).

**_State:_**

- values that are managed by a component (like varialbes declared inside a function).
- any time we have changing values that should be saved/displayed, likely we're using state.
- values that components maintain between render cycles.

**useState()**

- useState allows us to use stateful values in function components.
- useState is used instead of a simple variable because when state is updated, our component re-renders, usually to display that updated value.
- Like all hooks, we call useState at the top of our component and can pass it an initial value to put on its state variable.
- We use array destructuring on the value returned from useState to access (1) the stored state and (2) a function to update that state.

**_-------example-----------_**
useState() syntax:

```
import { useState } from 'react';

function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}
```

In the above example, we are calling the useState function on the right. At the same time on the left, we are destructuring the array the we get when we call useState. We get back the stored state value and the function that updates the state and can work with them separately.

count + 1 - good!
count++ - never! it is short for count = count + 1 and we never want to change state directly

when using old state value to determine new state value:

- best practice is to use a callback function as a parameter to our setter function.
- this callback function should receive the old value of state as its parameter.
- this callback function should return the new value we want state to be.
- this guarantees that the value being passed into the callback func is the most updated.
- convention is to use prevStateValue and an arrow function like in add() and subtract():

**_-------example-----------_**
using a an arrow callback function with prevState:

```
import React, { useState } from "react"

export default function App() {
    const [count, setCount] = useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
```

**_-------example-----------_**
using useState to toggle boolean values with ternary operator:

```
import React from "react"

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
```

**_-------example-----------_**
working with useState to modify arrays:

```
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

    function addItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**_-------example-----------_**
applying state in the form of an object:

```
import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"


    function toggleFavorite() {
        console.log("Toggle Favorite")
    }

    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img
                        src={`../images/${starIcon}`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
```

**_-------example-----------_**
updating state objects:

- remember to use {} after return to signify returning an object
- use the spread operator to copy over the prevState object content and then override the specific prop value pair after.

```
import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite,
            }
        })
        console.log("star toggled")
    }

    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img
                        src={`../images/${starIcon}`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
```

**_-------example-----------_**
Setting state from child components:

- note: all properties from custom components that we created are custom properties...
- so the onClick attribute will not register on custom components
- event listeners like onClick only exist on native DOM elements (like main, article, div, img...)

process in this example:

- in the parent component (App), create state element (contact). Then create state setter function (toggleFavorite) and pass it to custom component (Star) via a custom prop (called handleClick), then within the component, it is receiving props and then registering a real event listener (onClick) who's functional value is the function it received through props.handleClick.

App.js:

```
import React from "react"
import Star from "./Star"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
```

Star.js:

```
import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}
```
