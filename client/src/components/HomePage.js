import React from 'react'
import NavBar from './NavBar';
import '../App.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReservationCard from './ReservationCard';

export default function HomePage({updateUser}) {

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

  return (
    <>
      <NavBar updateUser={updateUser}/>
      <div id="carousel-container">
        <div id="carousel-text-wrapper">
          <h3>Trending</h3>
          <h3 id="carousel-text-right">See More...</h3>
        </div>
        <div id="carousel-wrapper">
          <Carousel responsive={responsive} additionalTransfrom={-50}>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
          </Carousel>
        </div>
      </div>

      <div id="carousel-container">
        <div id="carousel-text-wrapper">
          <h3>Popular</h3>
          <h3 id="carousel-text-right">See More...</h3>
        </div>
        <div id="carousel-wrapper">
          <Carousel responsive={responsive} >
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
          </Carousel>
        </div>
      </div>

      <div id="carousel-container">
        <div id="carousel-text-wrapper">
          <h3>Based On Interests</h3>
          <h3 id="carousel-text-right">See More...</h3>
        </div>
        <div id="carousel-wrapper">
          <Carousel responsive={responsive}>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
            <ReservationCard/>
          </Carousel>
          <br/>
        </div>
      </div>
      <div id="footer" >
          <h6>CopyRight Of Liza, Jerrod, Dylan, & Rooney</h6>
      </div>
    </>
  )
}
