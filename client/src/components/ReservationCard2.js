import React, {useState, useEffect, useContext} from 'react'
import '../App.css';
import '../styling/reservationCard.css'
import '../context/user.js';
import { UserContext } from "../context/user";
import '../styling/reservationcard2.css';


export default function ReservationCard2( { reservations }  ) {
      // initialize User Context
      const { userState, setUserState } = useContext(UserContext);

  return (
    <div id="reservation-card-container">
        <div id="reservation-card-image-container">
            <img src={reservations.rest_image}/>
            <div id="reservation-user-info-wrapper">
                <h5 id="top-left2">{reservations.host_name}</h5>
                <h6 id="top-left-check2">{reservations.check_type}</h6>
                <h6 id="top-left-members2">{"Seats: " + (reservations.members.length + 1) + '/' + reservations.number_of_seats}</h6>
                <div id="top-right2">
                    <h4 id="card-date">{reservations.date}</h4>
                    <h5>{reservations.time}:00PM</h5>
                </div>
            </div>
        </div>
        <div id="reservation-card-bottom-container">
            <h3>{reservations.restaurant}</h3>
            <h5>{reservations.address}</h5>
        </div>
    </div>
  )
}