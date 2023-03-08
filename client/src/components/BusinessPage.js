import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'
import MapContainer from './MapContainer';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

export default function BusinessPage()
{

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    }
  };

  let { businessid } = useParams()
  const [business, setBusiness] = useState([])
  //Form State
  const initialState = {
    check_type: 'Host pays',
    number_of_seats: '',
    user_id: 470,
    restaurant_id: businessid,
    date: '',
    time: 1,
  };

  //create form state
  const [formState, setFormState] = useState(initialState);


  // handle form input Change
  const handleChange = (e) =>
  {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  const handleClick = (value) =>
  {
    setFormState({ ...formState, time: value });
  }

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

  const handleSubmit = (e) =>
  {
    e.preventDefault();

    fetch(`http://localhost:9292/reservations`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formState)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const initialTimes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const mappedTimes = initialTimes.map(function (time)
  {
    return <button onClick={() => handleClick(time)}>{time}</button>
  })

  return (
    <>
      <NavBar />
      <div className='businessContainer'>
        <div className='businessTopContainer'>
          <div className='business-details'>
            <img src={business.rest_image} id='business-image'></img>
            <h3>{business.name} {business.price}</h3>
            <p>Address: {business.address}</p>
            <p>P{business.phone}</p>
            <p>Website: {business.website}</p>
          </div>
        </div>
        <div className='businessMapContainer'>
          <MapContainer business={business} longitude={business.longitude} latitude={business.latitude} />
          Container 2
        </div>
      </div>
      <div className='bottomBusinessContainer'>
        <form onSubmit={handleSubmit}>
          <input type="date" id='date' name='date' value={formState.date} onChange={handleChange}></input>
          <label for="party-size">Party Size: </label>
          <input type="number" id='party-size' name='number_of_seats' onChange={handleChange}></input>
          <select onChange={handleChange} name="check_type">
            <option value="Host pays">I pay</option>
            <option value="Members pay">You pay</option>
            <option value="Split check">Split check</option>
          </select>
          <button type='submit'>Make Reservation</button>
        </form>
        <div id="carousel-wrapper">
          <Carousel responsive={responsive} additionalTransfrom={-50}>
            {mappedTimes}
          </Carousel>
        </div>
      </div>
    </>
  )
}
