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
                <p>Address: {address}</p>
                <p>P{phone}</p>
                <p>Website: {website}</p>
            </div>
        </>
    )
}