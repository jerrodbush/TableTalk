import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import BusinessPage from './components/BusinessPage';
import ReservationsPage from './components/ReservationsPage';
import BusinessSearch from './components/BusinessSearch';
import ProfileSettings from './components/ProfileSettings';
import { UserProvider } from './context/user.js';

function App()
{
const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if(res.ok){
        console.log("Res OK")
        console.log(res)
        res.json().then(user => setUser(user))
      } else {
        console.log("Res NOT")
        setUser(null)
      }
    })
  }, [])

  const updateUser = (user) => setUser(user)

  if(!user) return (
    <div className="App">
      <UserProvider>
          <Login updateUser={updateUser}/>
          <Signup updateUser={updateUser}/>
          {/* hi, dylan! we'd like the signup/login to be a ternary and only show the login upon page load and show the signup when you click the button which will also make the login form go away. does that make sense? call me, beep me. */}
      </UserProvider>
    </div>
  )

  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route
            path="/"
            element={<Login updateUser={updateUser}/>}
          />
          <Route
            path="/signup"
            element={<Signup updateUser={updateUser}/>}
          />
          <Route
            path="/home"
            element={<HomePage updateUser={updateUser}/>}
          />
          <Route
            path="/profile/:username"
            element={<ProfilePage />}
          />
          <Route
            path="/business"
            element={<BusinessSearch />}
          />
          <Route
            path="/business/:businessid"
            element={<BusinessPage />}
          />
          <Route
            path="/reservations"
            element={<ReservationsPage />}
          />
          <Route
            path="/profile/:username/settings"
            element={<ProfileSettings />}
          />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
