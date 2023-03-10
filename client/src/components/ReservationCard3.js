import React, {useState, useEffect, useContext} from 'react'
import '../App.css';
import '../styling/reservationCard.css'
import '../context/user.js';
import { UserContext } from "../context/user";

export default function ReservationCard3( { reservations }  ) {
    console.log(reservations);
      // initialize User Context
      const { userState, setUserState } = useContext(UserContext);

    const [reserveState, setReserveState] = useState();

    const handleReserve = (e) => {
        const initialPost = {
            reservation_id: reservations.id+1,
            user_id: userState.user_id,
            guest_check_type: "Host pays"
        }
        e.preventDefault();
        fetch(`http://localhost:9292/members`,{
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(initialPost)
      })
      .then(res => res.json())
      .then()
    }

  return (
    <div id="reservation-card-container">
        <div id="reservation-card-image-container">
            <div>
                <h5>{reservations.host}</h5>
                <h6>{reservations.check_type}</h6>
                <h6>{"Seats: " + (reservations.members.length + 1) + '/' + reservations.party_size}</h6>
                <div>
                    <h4>{reservations.date}</h4>
                    <h5>{reservations.time}</h5>
                </div>
            </div>
        </div>
        <div id="reservation-card-bottom-container">
            <button onClick={handleReserve}>Reserve</button>
        </div>
    </div>
  )
}