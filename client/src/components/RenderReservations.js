import React, {useState, useEffect} from 'react'
import ReservationCard from './ReservationCard'
import '../styling/reservation.css'

export default function RenderReservations() {
    const [reservation, setReservation] = useState([])

    useEffect(() => {
      fetch(`http://localhost:9292/reservations`)
        .then( (resp) => resp.json() )
        .then( (data) => setReservation(data) )
    }, [])

    console.log(reservation);

    const renderReservations = reservation.map((item) => {
      return <div className="reservation-card-wrapper"><ReservationCard key={item.id} reservations={item} /></div>
    })

  return (
    <>
        <div id="reservation-list-wrapper" >
          {renderReservations}
        </div>
    </>
  )
}
