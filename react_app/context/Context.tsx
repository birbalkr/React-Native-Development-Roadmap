import React, { createContext, useState } from 'react';

// Create the context
export const AppContexts = createContext();

// Create and export the provider component
export const AppProvider = ({ children }) => {
    const [userDetail, setUserDetail] = useState([
        { key: 0, title: 'Aditya' },
        { key: 1, title: 'Priya' },
        { key: 2, title: 'Rohan' },
        { key: 3, title: 'Sneha' },
        { key: 4, title: 'Amit' },
        { key: 5, title: 'Kiran' },
    ]);

    return (
        <AppContexts.Provider value={{ userDetail, setUserDetail }}>
            {children}
        </AppContexts.Provider>
    );
};
