import React, { useEffect, useState, useContext } from 'react';
import NavBar from './NavBar'
import MapContainer from './MapContainer';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';
import { IoGlobe } from "react-icons/io5";
import { UserContext } from '../context/user.js';


export default function BusinessPage()
{

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    }
  };

  let { businessid } = useParams()
  const [business, setBusiness] = useState([])
  //Form State
  const initialState = {
    check_type: 'Host pays',
    number_of_seats: '',
    user_id: 700,
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
    return <button id="time-carousel-btn" onClick={() => handleClick(time)}>{time}</button>
  })

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() =>
  {
    const timerId = setTimeout(() =>
    {
      setIsMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <NavBar />
      <div className='businessContainer'>
        <div className='businessTopContainer'>
          <div className='business-details'>
            <img src={business.rest_image} id='business-image'></img>

            <p id="price-indicator">{business.price}</p>
            <a id="website" href={business.website}><IoGlobe className="icon" size="30px" /></a>
            <h3 id="business-name">{business.name}</h3>
            <h4 id="business-address">{business.address}</h4>
            <a href={`TEL:` + business.phone}><p id="phone-num">{business.phone}</p></a>
          </div>
          <div className="reserve-form-container">
            <form onSubmit={handleSubmit}>
              <input type="date" id='date-input' name='date' value={formState.date} onChange={handleChange}></input>
              <select onChange={handleChange} name="check_type">
                <option value="Host pays">I pay</option>
                <option value="Members pay">You pay</option>
                <option value="Split check">Split check</option>
              </select>
              <label for="party-size">Party Size: </label>
              <input type="number" id='party-size' name='number_of_seats' onChange={handleChange}></input>
            </form>
          </div>

        </div>
        <div className='businessMapContainer'>
          {isMapLoaded && <MapContainer className="map-container" business={business} longitude={business.longitude} latitude={business.latitude} />}
        </div>
      </div>
      <div className='bottomBusinessContainer'>
        <div id="carousel-wrapper-business">
          <Carousel showArrows={false} partialVisbile={false} centerMode={true} responsive={responsive} itemClass="business-times-car">
            {mappedTimes}
          </Carousel>
        </div>
        <button id="reserve-btn" type='submit'>Reserve</button>
      </div>
    </>
  )
}
