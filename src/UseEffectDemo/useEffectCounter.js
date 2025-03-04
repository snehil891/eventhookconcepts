import React, { useState, useEffect } from "react";

const useEffectCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Counter updated: ${count}`);
    }, [count]);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Counter: {count}</h2>
            <button className="btn btn-success btn-md" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-danger btn-block
            " onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrement</button>
        </div>
    );
};

export default useEffectCounter;
