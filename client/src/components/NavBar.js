import { React, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import "../index.css"

export default function NavBar() {
    const [menuState, setMenuState] = useState(false)

    const handleOpen = () => {
        const newState = !menuState
        setMenuState(newState);
    }

  return (
    <>
      <Menu right>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/profile/user1">Profile</NavLink>
              <NavLink to="/reservations">Reservations</NavLink>
              <NavLink to="/business">Businesses</NavLink>
              <NavLink to="/profile/user1/settings">Settings</NavLink>
              <NavLink to="/">Log Out</NavLink>
      </Menu>
      <h1 id="logo">TableTalk</h1>
    </>
  )
}
