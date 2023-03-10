import React, { useState, useEffect, useContext } from 'react'
import NavBar from './NavBar';
import {UserContext} from '../context/user.js';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReservationCard from './ReservationCard';
import BusinessCard from './BusinessCard';
import '../styling/business.css'
export default function HomePage({ updateUser })
{   
  
    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);

    //allow for navigation
    const navigate = useNavigate();

  useEffect(() =>{
    if (userState.isLoggedIn === true) {
      setUserState({...userState,
        page: 'home',
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
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    }
  };

  const [trending, setTrending] = useState([])

  useEffect(function ()
  {
    fetch("http://localhost:9292/top_reserved")
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {
        console.log(data)
        return setTrending(data)
      })
  }, [])

  const mappedTrending = trending.map(function (restaurant)
  {
    return <BusinessCard restaurant={restaurant} />
  })


  const [popular, setPopular] = useState([])

  useEffect(function ()
  {
    fetch("http://localhost:9292/popular")
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {
        console.log(data)
        return setPopular(data)
      })
  }, [])

  const mappedPopular = popular.map(function (restaurant)
  {
    return <BusinessCard restaurant={restaurant} />
  })


  return (
    userState.isLoggedIn ? <>
      <NavBar updateUser={updateUser} />
      <div id="carousel-container">
        <div id="carousel-text-wrapper">
          <h3>Trending</h3>
          {/* <h3 id="carousel-text-right">See More...</h3> */}
        </div>
        <div id="carousel-wrapper">
          <Carousel responsive={responsive} additionalTransfrom={-50}>
            {mappedTrending}
          </Carousel>
        </div>
      </div>

      <div id="carousel-container">
        <div id="carousel-text-wrapper">
          <h3>Popular</h3>
          {/* <h3 id="carousel-text-right">See More...</h3> */}
        </div>
        <div id="carousel-wrapper">
          <Carousel responsive={responsive} >
            {mappedPopular}
          </Carousel>
        </div>
      </div>

      <div id="footer" >
        <h6>CopyRight Of Liza, Jerrod, Dylan, & Rooney</h6>
      </div>
    </>  : <div className="not-loggedin"><p>You are not logged in!</p> <button onClick={() => navigate('/')}>Login</button></div>
  )
}
