import React, {useState, useEffect} from 'react'
import '../App.css';
import '../styling/reservationCard.css'

export default function ReservationCard( { reservations }  ) {
  
    const [reserveState, setReserveState] = useState();

    const handleReserve = (e) => {
        setReserveState({
            reservation_id: 1,
            user_id: 1,
            guest_check_type: "Host pays"
        })
        e.preventDefault();
        fetch(`http://localhost:9292/members`,{
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reserveState)
      })
      .then(res => res.json())
    }

  return (
    <div id="reservation-card-container">
        <div id="reservation-card-image-container">
            <img src={reservations.restaurant.rest_image}/>
            <div id="reservation-user-info-wrapper">
                <h5 id="top-left">Dylan Rhinehart</h5>
                <h6 id="top-left-check">{reservations.check_type}</h6>
                <div id="top-right">
                    <h4 id="card-date">{reservations.date}</h4>
                    <h5>{reservations.time}:00PM</h5>
                </div>
            </div>
        </div>
        <div id="reservation-card-bottom-container">
            <h3>{reservations.restaurant.name}</h3>
            <h5>{reservations.restaurant.address}</h5>
            <button onClick={handleReserve}>Reserve</button>
        </div>
    </div>
  )
}