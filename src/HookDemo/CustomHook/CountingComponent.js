import React from 'react'
import useCounter from './useCounter'

const CountingComponent = () => {
    const { count, increment, decrement , reset } = useCounter(5)
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button className='btn btn-danger' onClick={increment}>Increment</button>
      <button className='btn btn-success' onClick={decrement}>Decrement</button>
      <button className='btn btn-danger' onClick={reset}>Reset</button>
    </div>
  )
}

export default CountingComponent
