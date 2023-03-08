import { React, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../index.css"

export default function NavBar() {
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
          navigate('/')
        }
      })
    }

  return (
    <>
      <Menu right>
              <div className="nav-link">
                <NavLink to="/home">Home</NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/profile/user1">Profile</NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/reservations">Reservations</NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/business">Businesses</NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/profile/user1/settings">Settings</NavLink>
              </div>
              <div id="logout-nav" className="nav-link">
                <NavLink to="/" onClick={handleLogout}>Log Out</NavLink>
              </div>
      </Menu>
      <h1 id="logo">TableTalk</h1>
    </>
  )
}
