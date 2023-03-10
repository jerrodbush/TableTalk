import React, { useEffect, useState, useContext } from 'react'
import NavBar from './NavBar'
import RenderReservations from './RenderReservations'
import '../styling/reservation.css'
import {UserContext} from '../context/user.js'
import { useNavigate } from 'react-router-dom'

export default function ReservationsPage() {

      // initialize User Context
      const { userState, setUserState } = useContext(UserContext);

      //allow for navigation
    const navigate = useNavigate();

      useEffect(() =>{
        if (userState.isLoggedIn === true) {
          setUserState({...userState,
            page: 'reservations',
          })
        }
    }, [10])

  return (
   userState.isLoggedIn ? <>
      <NavBar/>
      <div className="reservations-container">
        <div id="top-half-reserve">
          <h2>Reservations</h2>
          {/* <select>
            <option value="All">All</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
            <option value="I Pay">I Pay</option>
            <option value="You Pay">You Pay</option>
            <option value="We Pay">We Pay</option>
          </select> */}
        </div>
        <RenderReservations/>
      </div>
    </>  : <div className="not-loggedin"><p>You are not logged in!</p> <button onClick={() => navigate('/')}>Login</button></div>
  )
}
