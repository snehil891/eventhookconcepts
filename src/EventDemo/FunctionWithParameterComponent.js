import React from 'react'

const FunctionWithParameter = () => {
  const handleGreet = (name) =>{
    alert(`Hello!! ${name}`);
  };
  return (
    <div>
      <p className='display-5'>Function With Parameter</p>
      <button className='btn btn-primary' onClick={() => handleGreet("Snehil")}>Click me!!</button>
    </div>
  )
}

export default FunctionWithParameter
