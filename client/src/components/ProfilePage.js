import React from 'react';
import NavBar from './NavBar';
import '../styling/profile.css';
import { TagCloud } from 'react-tagcloud';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReservationCard from './ReservationCard';


export default function ProfilePage() {

  //tag cloud testing purposes
  const data = [
    { value: 'JavaScript', count: 38, color: "blue" },
    { value: 'React', count: 30, color: "blue" },
    { value: 'Nodejs', count: 28, color: "blue" },
    { value: 'Express.js', count: 25, color: "blue" },
    { value: 'HTML5', count: 33, color: "blue" },
    { value: 'MongoDB', count: 18, color: "blue" },
    { value: 'CSS3', count: 20, color: "blue" },
  ]
  //for carousel elements
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
      <NavBar/>
      <div className="profile-container">
        <div id="profile-header">

          <div id="profile-header-left">
            <img id="pfp" src="http://placehold.it/100X100"/>
            <div id="user-info">
              <h2>Dylan Rhinehart</h2>
              <h4>Visalia,Ca</h4>
            </div>
          </div>

          <div id="profile-header-right">
              <TagCloud
                minSize={12}
                maxSize={35}
                tags={data}
                disableRandomColor={true}
                onClick={tag => alert(`'${tag.value}' was selected!`)}
              />
          </div>

        </div>

        <div id="reserve-wrapper-p">
            <h3>Reservations</h3>
            <Carousel responsive={responsive}>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
              <h1>Test1</h1>
            </Carousel>
        </div>

        <div id="tabletalkers-wrapper">
          <h3>TableTalkers</h3>
          <Carousel responsive={responsive}>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
              <h1>Test2</h1>
            </Carousel>
        </div>
      </div>
    </>
  )
}
