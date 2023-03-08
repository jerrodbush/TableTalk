import React from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
    const state = {
        isLoggedIn: false,
        user_id: null,
        page: null,
        full_name: null,
        phone: null,
        age: null,
        username: null,
        email: null,
        location: null,
        // password: null,
        user_image: null
        // interests: {},
    }

    return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };