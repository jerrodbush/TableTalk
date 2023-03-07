import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'
import MapContainer from './MapContainer';
import { useParams } from 'react-router-dom';

export default function BusinessPage()
{
  let { businessid } = useParams()
  const [business, setBusiness] = useState([])

  useEffect(function ()
  {
    fetch(`http://localhost:9292/restaurants/${businessid}`)
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {
        console.log(data)
        return setBusiness(data)
      })
  }, [])

  return (
    <>
      <NavBar />
      <div className='businessContainer'>
        <div className='businessTopContainer'>
          <div className='business-details'>
            <img src={business.rest_image} id='business-image'></img>
            <h3>{business.name} {business.price}</h3>
            <p>Address: {business.address}</p>
            <p>Phone Number: {business.phone}</p>
            <p>Website: {business.website}</p>
          </div>
        </div>
        <div className='businessMapContainer'>
          <MapContainer business={business} longitude={business.longitude} latitude={business.latitude} />
          Container 2
        </div>
      </div>
      <div className='bottomBusinessContainer'>Container 3 - Bottom</div>
    </>
  )
}
