import React, {useState, useEffect} from 'react'
import ReservationCard from './ReservationCard'

export default function RenderReservations() {
    const [reservation, setReservation] = useState([])

    useEffect(() => {
      fetch(`http://localhost:9292/reservations`)
        .then( (resp) => resp.json() )
        .then( (data) => setReservation(data) )
    }, [])

    const renderReservations = reservation.map((item) => {
      return <ReservationCard reservations={item} />
    })

  return (
    <>
        <div>
          {renderReservations}
        </div>
    </>
  )
}
