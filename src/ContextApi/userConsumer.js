import React, { useContext } from 'react';
import { AppContext } from './userContext';

const UserConsumer = () => {
    const userData = useContext(AppContext);

    return (
        <h3>Welcome, {userData.firstName} {userData.lastName}</h3>
    );
};

export default UserConsumer;