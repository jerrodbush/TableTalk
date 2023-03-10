import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'
import BusinessCard from './BusinessCard';

export default function BusinessSearch()
{

  const [restaurants, setRestaurants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState("All")
  const [selectedPrice, setSelectedPrice] = useState("All")
  const [selectedRating, setSelectedRating] = useState("All")


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
    <>
      <NavBar />
      <h1>Search For Restaurants 🔍</h1>
      <input
        value={searchTerm}
        className="inputBox"
        type="text"
        id="search"
        placeholder='Looking for something?'
        onChange={handleChange}
      />
      {/* <div class ="filters">
        <h2>Filter by Cuisine 🥙</h2>
          <select onChange={selectedCuis}>
            <option value="All">Wide Palate</option>
            <option value="New American">New American</option>
            <option value="American">American</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Chinese">Chinese</option>
            <option value="Greek">Greek</option>
            <option value="Japanese">Japanese</option>
            <option value="Pub Fare">Pub Fare</option>
            <option value="Pizza">Pizza</option>
          </select>
      </div> */}
      <div class ="filters">
        <h2>Filter by Price Range 🤑</h2>
          <select onChange={selectedDollar}>
            <option value="All">Money Bags</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
      </div>
      {/* <div class ="filters">
        <h2>Filter by Ratings ⭐️</h2>
          <select onChange={selectedRatingStars}>
            <option value="All">All</option>
            <option value={4.3}>4 - 4.5</option>
            <option value="5">4.6 - 5.0</option>
          </select>
      </div> */}

      {mappedRestaurants}
    </>
  )
}
