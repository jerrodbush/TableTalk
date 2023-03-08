import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import RenderReservations from './RenderReservations'
import '../styling/reservation.css'

export default function ReservationsPage() {

  return (
    <>
      <NavBar/>
      <div className="reservations-container">
        <div id="top-half-reserve">
          <h2>Reservations</h2>
          <select>
            <option value="All">All</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
            <option value="I Pay">I Pay</option>
            <option value="You Pay">You Pay</option>
            <option value="We Pay">We Pay</option>
          </select>
        </div>
      </div>
    </>
  )
}
