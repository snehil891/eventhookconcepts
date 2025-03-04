import React from 'react';

const Child = ({ firstName, lastName }) => {
    return (
        <div>
            <h1 className='display-2 text-success'>Child</h1>
            <h3>Hello once again from child, {firstName} {lastName}, Good Day {new Date().toLocaleString()} </h3>
        </div>
    );
}

export default Child;
