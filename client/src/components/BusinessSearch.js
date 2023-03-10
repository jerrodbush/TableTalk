import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'
import BusinessCard from './BusinessCard';

export default function BusinessSearch()
{

  const [restaurants, setRestaurants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

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

  const filteredRestaurants = restaurants.filter(r => (
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

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

      {mappedRestaurants}
    </>
  )
}
