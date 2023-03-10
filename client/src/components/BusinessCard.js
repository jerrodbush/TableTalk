import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styling/businesscard.css';

export default function BusinessCard({ restaurant })
{
    // console.log(restaurant)
    const { id, name, address, capacity, avg_rating, close_time, open_time, phone, price, reservation_count, rest_image, website } = restaurant

    const navigate = useNavigate();
    function handleClick()
    {
        navigate(`/business/${id}`)
    }


    return (
        <>
            <div id="business-details-2" className='business-details'>
                <img src={rest_image} id='business-image'></img>
                <p id="price-indicator">{price}</p>
                <h3 id="bc-name">{name}</h3>
                <p id="bc-minor-text"><b>Cuisine:</b> {restaurant.cuisines[0].cuz_name}</p>
                <p id="bc-minor-text"><b>{address}</b></p>
                <p id="bc-minor-text"><b>{phone}</b></p>
                <p id="bc-minor-text"><a href={website}>Website</a></p>
                <p id="top-left"><b>Rating: {avg_rating} ⭐️</b></p>
                <button id="bc-btn" onClick={handleClick}>Go to Restaurant</button>
            </div>
        </>
    )
}