import React, { useState, useEffect } from 'react'

export default function BusinessCard({ restaurant })
{
    // console.log(restaurant)
    const { name, address, capacity, avg_rating, close_time, open_time, phone, price, reservation_count, rest_image, website } = restaurant



    return (
        <>
            <div className='business-details'>
                <img src={rest_image} id='business-image'></img>
                <h3>{name} {price}</h3>
                <p><b>Cuisine:</b> {restaurant.cuisines}</p>
                <p><b>Address:</b> {address}</p>
                <p><b>P:</b> {phone}</p>
                <p><a href={website}>Website</a></p>
                <p><b>Rating:</b> {avg_rating} ⭐️</p>
            </div>
        </>
    )
}