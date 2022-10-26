# React Meme Generator

Have fun with this dynamic meme generator built with React.js.

**Key features**:

- Utilization of React.js with dynamic elements
- A well-organized website with a professional folder system
- A responsive, modern design

- Effective use of Routing, Components and Pagination
- Utilization of Prism.js to show highlighted code
- Hooks: useState(), useEffect()
- published on Netlify through GitHub repo

**Skills**:

- Effective use of an external API and integration of Prism.js
- Clear, maintainable, and scalable code with responsive layout and architecture

### Demo More projects by Sloan Crawford on his [Portfolio Website](https://sloan-crawford-professional-portfolio.netlify.app/)

## **Notes**:

### **Goals**

1. when the app loads for the first time:

- makes an API call to image flip
- returns an array of 100 meme images that are the most popular at that time

2. clicking the 'get a new meme image button':

- randomly selects one of those 100 images
- displays the text from top and bottom inputs on top of the image

### Guide to accomplish this:

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

### **_-------example-----------_**

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

### **Props vs. State**

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

### **_-------example-----------_**

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

### **_-------example-----------_**

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

### **_-------example-----------_**

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

### **_-------example-----------_**

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

### **_-------example-----------_**

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

### **_-------example-----------_**

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

### **_-------example-----------_**

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

### **_-------example-----------_**

A better way to set state: Derived

- If we find ourselves initializing state with a prop value, stop! There's a better way...

### **_-------example-----------_**

**Conditional rendering with &&:**

- used when we want something to display or not display

```
{props.setup && <h3>{props.setup}</h3>}
{isShown && <p>{props.punchline}</p>}
```

If props.setup evaluates to true, the h3 element will be rendered.
If isShown evaluates to true, the p element will be rendered.

**Conditional rendering with ternary:**

- used when we want something to toggle what is displayed

```
<button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
```

If isShown evaluates to true, the button will display "Hide Punchline"
If isShown evaluates to false, the button will display "Show Punchline"

- if situation is more complex than two or three simple options use a separate if statement with a series of if else blocks or a switch block.

**Conditional rendering with nested ternaries:**

- a better way to show multiple options using one code black and multiple ternaries

```
import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])

    return (
        <div>
            {
                messages.length === 0 ?
                <h1>You're all caught up!</h1> :
                <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"} </h1>
            }
        </div>
    )
}
```

If messages.length is 0, it renders "You're all caught up"
If messages.length is 1, it renders "You have 1 message"
If messages.length is > 1, it renders "You have n messages"

### **_-------example-----------_**

**Forms**

- for up to three or four inputs to a form, we can save state this way:

```
import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}
```

**Forms**

- for more than three or four inputs, save state as an object:

steps:

- create state for formData and initialize it to an object with properties and empty string values
- in the returned jsx form, add a name for each input that matches the state property names
- add an onChange attribute that calls a reference to a handleChange function
- create a handleChange function above that takes an event as a param...
- and calls setFormData using prevFormData as a param for a callback function. open the body up...
- return an object that first spreads the prevFormData and then changes one event prop:
- use the object prop chain event.target.name and set the value to event.target.value
- trick: surround the event.target.name with [] to remove syntax error (new for ES6)
- important to make it a CONTROLLED COMPONENT, so that its State is the single source of truth, the single thing driving what occurs in the form inputs. To do this:
- add a value attribute to each input. in curly braces, assign it to state.propName

```
import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    )

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}

            />
        </form>
    )
}
```

- It's best practice to modify the event handler function like this:
- destructure the event name and value from event.target
- add the destructured name and value after the copied return content...

```
function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
```

**Forms**

Some other differences for forms in React:

- the text area element is changed to be self-closing and the value is set in curly braces

```
<textarea
    type="textarea"
    placeholder="comments"
    onChange={handleChange}
    name="comments"
    value={formData.comments}
/>
```

**Checkboxes and Labels**

- checkboxes are weird. They are a type of input, not their own form element.
- they take in boolean values in an attribute called checked
- to use checkboxes in React, we need to:
- add a default value of true or false in state
- destructure type and checked in setter event function.
- add ternary to the return to assign name to either checked or value

- For Labels:
- best practice is to keep the label separate from the element its tied to, but tie them together by setting the label's htmlFor attribute to the id of the element ("isFriendly), as opposed to nesting the label within the children of the element.

```
function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

<input
    type="checkbox"
    id="isFriendly"
    checked={formData.isFriendly}
    onChange={handleChange}
    name="isFriendly"
/>
<label htmlFor="isFriendly">Are you friendly?</label>
```

**Radio Buttons**

- pay attention to the value for radio buttons
  [radio buttons scrimba tutorial](https://scrimba.com/learn/learnreact/forms-in-react-radio-buttons-co14c423dbc2026a7a2b997a2)
- radio buttons are controlled in the same way that checkboxes are controlled but we need to make the value of checked equate as a boolean by comparing the object property name to the value property value. yeah.

**Select Box**

- pay attention to the way to update State and the first option from the dropdown list
  [select box scrimba tutorial](https://scrimba.com/learn/learnreact/forms-in-react-select-option-co83b466d859cf1d6c4b3efaf)

**Submitting the form**

- in html5 a button element inside of a form acts like an input element with the type submit. yay.
- this will default to having type="submit" if it's a child of a form element:

```
<button>Submit</button>
```

- now we can add a handleSubmit event handler function reference at the top of the form

```
<form onSubmit={handleSubmit}>
```

- then create the handleSubmit event handler function above the component return.
- pass in the event object so that we can prevent the default action of refreshing and adding all the values as query strings in the url. not what we want.
- this is then where we would have a submit to API function, and we would pass in the whole formData since it has been updating already with each key stroke in the form inputs.

```
function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)
}
```

### **_-------example-----------_**

**Form Test**

```
import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        cPassword: "",
        okayToEmail : false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData.password === formData.cPassword ? "Successfully Signed Up" : "passwords do not match")
        formData.okayToEmail && formData.password === formData.cPassword ? console.log("Thanks for signing up!"): ""
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="cPassword"
                    onChange={handleChange}
                    value={formData.cPassword}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        onChange={handleChange}
                        checked={formData.okayToEmail}

                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
```

<!-- Added branch to work on TS update -->
