import React from "react";

const ButtonClickDemo = () => {
    //function without parameter
    const handleClick = () => {
        alert("Button Clicked");
    };

    return (
        <div>
            <p className="display-5">Function Without Parameter</p>
            <button className="btn btn-primary" onClick={handleClick}>Click Me!!</button>
        </div>
    );
};

export default ButtonClickDemo;
