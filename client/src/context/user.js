import React, { useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const defaultState = {
    isLoggedIn: false,
    user_id: '',
    page: '',
    first_name: '',
    last_name: '',
    phone: '',
    age: '',
    username: '',
    email: '',
    location: '',
    user_image: ''
  };

  const [userState, setUserState] = React.useState(() => {
    // Load state from local storage on component mount
    const storedState = localStorage.getItem('userState');
    return storedState ? JSON.parse(storedState) : defaultState;
  });

  useEffect(() => {
    // Save state to local storage whenever it changes
    localStorage.setItem('userState', JSON.stringify(userState));
  }, [userState]);

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };