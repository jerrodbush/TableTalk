import React, { useState, useEffect, useContext } from 'react';
import NavBar from './NavBar'
import BusinessCard from './BusinessCard';
import '../styling/reservation.css';
import '../styling/business-search.css';
import {UserContext} from '../context/user.js';
import { useNavigate } from 'react-router-dom';

export default function BusinessSearch()
{

  const [restaurants, setRestaurants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState("All")
  const [selectedPrice, setSelectedPrice] = useState("All")
  const [selectedRating, setSelectedRating] = useState("All")

  //allow for navigation
  const navigate = useNavigate();

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext)
  useEffect(() =>{
    if (userState.isLoggedIn === true) {
      setUserState({...userState,
        page: 'business-search',
      })
    }
  }, [10])

  useEffect(function ()
  {
    fetch("http://localhost:9292/restaurants")
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {
        console.log(data)
        return setRestaurants(data)
      })
  }, [])

  const handleChange = (e) =>
  {
    setSearchTerm(e.target.value);
  }

  const restaurantsToDisplay = restaurants.filter(r => (
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  // Handle cuisine selection change
  const selectedCuis = (e) => {
        setSelectedCuisine(e.target.value)
  }
  // Handle price range selection change
  const selectedDollar = (e) => {
        setSelectedPrice(e.target.value)
  }
  // Handle rating selection change
  const selectedRatingStars = (e) => {
        setSelectedRating(parseInt.e.target.value)
  }

  const filteredRestaurants = restaurantsToDisplay
  // .filter(rests => {
  //     if(selectedCuisine === "All") return true
  //     return rests.restaurant.cuisines === selectedCuisine
  // })
  .filter(rests => {
    if(selectedPrice === "All") return true
    return rests.price === selectedPrice
  })
  // .filter(rests => {
  //   if(selectedRating === "All") return true
  //   return rests.avg_rating === selectedRating
  // })

  const mappedRestaurants = filteredRestaurants.map(function (restaurant)
  {
    return <BusinessCard restaurant={restaurant} />
  })


  return (
   userState.isLoggedIn ? <>
      <NavBar />
      <div className="heading-search">
        <div id="search">
          <h1>Search For Restaurants 🔍</h1>
          <input
            value={searchTerm}
            className="inputBox"
            type="text"
            id="search"
            placeholder='Looking for something?'
            onChange={handleChange}
          />
        </div>
        <div id ="top-right-2">
          <h2>Filter by Price Range 🤑</h2>
            <select onChange={selectedDollar}>
              <option value="All">Money Bags</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
        </select>
        </div>
      </div>
      <div id="reservation-list-wrapper">
        {mappedRestaurants}
      </div>
    </> : <div className="not-loggedin"><p>You are not logged in!</p> <button onClick={navigate('/')}>Login</button></div>
  )
}