import React from 'react';

const UserContext = React.createContext();

function UserProvider({ children })
{
    const state = {
        isLoggedIn: false,
        user_id: null,
        page: null,
        username: null,
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        phone: null,
        user_image: null
    }

    return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };