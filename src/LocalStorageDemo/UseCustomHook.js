import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const UseCustomHook = () => {
    const [count, setCount] = useLocalStorage("count", 5);
    const [input, setInput] = useState(5)
    return (
        <div>
            <p><strong>Count:</strong>{count}</p>
            <input type='number' placeholder='Enter the number'
                value={input} onChange={(e) => setInput(e.target.value)}>
            </input>
            <br/>
            <br/>   
            <button className='btn btn-primary' onClick={() => setCount(input)}>Save to Local Storage</button>
            <button className='btn btn-warning' onClick={() => setCount()}>Clear Storage</button>
        </div>
    )
}

export default UseCustomHook
