import React, { useState } from "react";

const UseStateUser = () => {
    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Register User</h2>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Name"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Username"
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your E-mail Address"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Phone Number"
                            name="phone"
                            value={userData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Website Name"
                            name="website"
                            value={userData.website}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <button className="btn btn-danger btn-block">Create Account</button>
                </form>
                <br />
                <h3>Entered Data:</h3>
                <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
        </div>
    );
};

export default UseStateUser;
