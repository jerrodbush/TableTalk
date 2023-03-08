import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import ReservationCard from './ReservationCard'

export default function ReservationsPage() {

  const [reservations, setReservations] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/reservations`)
      .then( (resp) => resp.json() )
      .then( (data) => setReservations(data) )
  }, [])



  const renderReservations = () => {
     return reservations.map((reservation) => {
        <ReservationCard reservation={reservation} />
      })
  }

  return (
    <>
      <NavBar/>
      <div className="reservation-page-container">
          {renderReservations}
      </div>
    </>
  )
}
