import React from 'react'
import NavBar from './NavBar';
import '../App.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomePage() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
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
      <NavBar/>
      <h1>HomePage</h1>

      <div id="carousel-container">
        <div id="carousel-text-wrapper">
          <h3>Trending</h3>
          <h3 id="carousel-text-right">See More...</h3>
        </div>
        <div id="carousel-wrapper">
          <Carousel responsive={responsive}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item Last</div>
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
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item Last</div>
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
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item 4</div>
            <div>Item Last</div>
          </Carousel>
        </div>
      </div>
    </>
  )
}
