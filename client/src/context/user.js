import React from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
    const state = {
        isLoggedIn: false,
        userId: null,
        page: null,
        username: null,
        name: null,
        email: null,
        password: null,
        phonenumber: null,
        pfpUrl: null,
        interests: {},
    }

    return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };