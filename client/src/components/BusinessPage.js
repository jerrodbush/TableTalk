import React, { useEffect, useState, useContext } from 'react';
import NavBar from './NavBar'
import MapContainer from './MapContainer';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';
import  {IoGlobe} from "react-icons/io5";
import {UserContext} from '../context/user.js';
import ReservationCard3 from './ReservationCard3';
import { useNavigate } from 'react-router-dom';

export default function BusinessPage()
{

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);
 
  //allow for navigation
  const navigate = useNavigate();

      useEffect(() =>{
        if (userState.isLoggedIn === true) {
          setUserState({...userState,
            page: 'business',
          })
        }
    }, [10])
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
    user_id: userState.user_id,
    restaurant_id: businessid,
    date: '',
    time: 5.0,
    
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


  // const renderReservations = reservations.map(item => {
  //   <ReservationCard reservations={item}/>
  // })

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() =>
  {
    const timerId = setTimeout(() =>
    {
      setIsMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  // const mappedTimes = initialTimes.map(function (time)
  // {
  //   return <button id="time-carousel-btn" onClick={() => handleClick(time)}>{time}</button>
  // })

  const renderTimes = business.totalHours && business.totalHours.length ? business.totalHours.map((time) => {
    return <button id="time-carousel-btn" onClick={() => handleClick(time)}>{time}</button>
  }) : <p>Something Went Wrong</p>
  console.log(business);

  const renderReservations = business.reservations && business.reservations.length ? business.reservations.map((res) => {
      return <ReservationCard3 reservations={res}/>
  }) : <div>No Reservations</div>
   console.log(business);
  return (
   userState.isLoggedIn ? <>
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
            <p>{business.cuisines[0].cuz_name}</p>
            <p>{business.avg_rating}</p>
          </div>
          <div className="reserve-form-container">
              <form id="reservation-form-submit" onSubmit={handleSubmit}>
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
            {renderTimes}
            <></>
          </Carousel>
        </div>
        <button form="reservation-form-submit" id="reserve-btn"type='submit'>Reserve</button>
      </div>

      <div>
        <h2>Reservations</h2>
        <Carousel  responsive={responsive}>
          {renderReservations}
        </Carousel>
      </div>
    </>  : <div className="not-loggedin"><p>You are not logged in!</p> <button onClick={navigate('/')}>Login</button></div>
  )
}
