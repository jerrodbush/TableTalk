import React from 'react';
import NavBar from './NavBar'

export default function BusinessSearch() {
  return (
    <>
        <NavBar/>
        <h1>Search For Restaurants</h1>
        <form>
            <input type="search" placeholder="Enter A Business Name"/>
            <button>Search</button>
        </form>

        {/* display businesses based on search params */}
    </>
  )
}
