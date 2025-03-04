import React from 'react'

const HandlingEventWithState = () => {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("");
    const [displayName,setDisplayName] = React.useState("");
    const handleClick = () => {
        setDisplayName(name);
    }
    return (
        <div>
            <p className='display-5'>Handling Event With State</p>
            <p>Count: {count}</p>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Click here to Increment the count</button>
            <br />
            <br />
            <strong>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name to display'></input>
            </strong>
            <br />
            <br />
            <button className='btn btn-primary' onClick={handleClick}>Click here to display the name</button>
            <h5>Name: {displayName}</h5>
        </div>
    )
}

export default HandlingEventWithState
