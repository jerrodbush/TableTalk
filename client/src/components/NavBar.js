import { React, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../index.css"

export default function NavBar({updateUser}) {
    const [menuState, setMenuState] = useState(false)

    //allow navigation
    const navigate = useNavigate();

    const handleOpen = () => {
        const newState = !menuState
        setMenuState(newState);
    }

    const handleLogout = () => {
      fetch('http://localhost:9292/logout', {
        method: 'DELETE',
      })
      .then(res => {
        if(res.ok){
          updateUser(null)
          navigate('/')
        }
      })
    }

  return (
    <>
      <Menu right>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/profile/user1">Profile</NavLink>
              <NavLink to="/reservations">Reservations</NavLink>
              <NavLink to="/business">Businesses</NavLink>
              <NavLink to="/profile/user1/settings">Settings</NavLink>
              <NavLink to="/" onClick={handleLogout}>Log Out</NavLink>
      </Menu>
      <h1 id="logo">TableTalk</h1>
    </>
  )
}
