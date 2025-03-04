import React, { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container-fluid">
                <p className="display-6 primary">UseState Demo</p>
                <p className="display-5">{count}</p>
                <button
                    type="button"
                    className="btn btn-success btn-md"
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-md"
                    onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
                >
                    Decrement
                </button>
            </div>
        </>
    );
};

export default UseState;
