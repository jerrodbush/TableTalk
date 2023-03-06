import React from 'react'
import '../App.css';

export default function ReservationCard() {
  return (
    <div id="reservation-card-container">
        <div id="reservation-card-image-container">
            <img src="http://placehold.it/250X250"/>
            <div id="reservation-user-info-wrapper">
                <h5 id="top-left">Dylan Rhinehart</h5>
                <div id="top-right">
                    <h4>12/2/22</h4>
                    <h5>7:30PM</h5>
                </div>
            </div>
        </div>
        <div id="reservation-card-bottom-container">
            <h3>Business Name</h3>
            <h5>Location</h5>
            <button>Reserve</button>
        </div>
    </div>
  )
}