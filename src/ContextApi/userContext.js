import React from 'react'
import { createContext } from 'react'

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const user = {
        firstName:"Snehil",
        lastName:"Sah",
    };
    return <AppContext.Provider value={user}>{children}</AppContext.Provider>
}

export {AppContext,AppProvider};