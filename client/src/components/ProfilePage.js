import { React, useContext, useState, useEffect } from 'react';
import NavBar from './NavBar';
import '../styling/profile.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReservationCard from './ReservationCard';
import '../context/user.js';
import { UserContext } from "../context/user";
import ReservationCard2 from './ReservationCard2';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState([]);

  //allow for navigation
  const navigate = useNavigate();

  useEffect(() =>{
    if (userState.isLoggedIn === true) {
      setUserState({...userState,
        page: 'Profile',
      })
    }
}, [10])


  const [interests, setInterestState] = useState([]);

  //for carousel elements
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
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

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    }
  };

  const userId = userState.user_id;
  console.log(userState);


  useEffect(() => {
    fetch(`http://localhost:9292/users/${userId}`)
    .then(res => res.json())
    .then(obj => setUserInfo(obj))
    .then(console.log(userInfo))
    .then()
  }, [])
  
  console.log(userInfo);
  
  const renderReservations =  userInfo.reservations && userInfo.reservations.length ? userInfo.reservations.map((reservation) => {
    return <ReservationCard2 reservations={reservation} />
  }) : <p>No reservations</p>
  
  // const talkers = userInfo.dinner_partners && userInfo.dinner_partners.length ? userInfo.dinner_partners.map(item => {
  //   return <div><h3>{item.first_name}</h3></div>
  // }) : <h3>No Talkers :/</h3>

  const names = ["David Goggins", "John Connery", "Levi Newman", "Jack Skellington"]
  const talkers = names.map(name => {
    <div><p>{name}</p></div>
  })

  return (
    userState.isLoggedIn ? <>
      <NavBar/>
      <div className="profile-container">
        <div id="profile-header">

          <div id="profile-header-left">
            <img id="pfp" src={userState.user_image}/>
            <div id="user-info">
              <h2>{userState.first_name} {userState.last_name}</h2>
              <h4>{userState.location}</h4>
            </div>
          </div>
        </div>

        <div id="reserve-wrapper-p">
            <h3 id="res-header">Reservations</h3>
            <Carousel responsive={responsive}>
              {renderReservations}
            </Carousel>
        </div>

        <div id="tabletalkers-wrapper">
          <h3>TableTalkers</h3>
          <Carousel responsive={responsive2} partialVisbile={false}>
            <></>
            <p id="name-car">David Goggins</p>
            <p id="name-car">Christopher Columbus</p>
            <p id="name-car">Sarah Jane</p>
            <p id="name-car">Benedict Pope</p>
            <p id="name-car">Shawn Connery</p>
            <p id="name-car">Elijah Wood</p>
            <p id="name-car">Xavier Carr</p>
            <p id="name-car">Craig Hasselhoff</p>
            <p id="name-car">Harambe</p>

          </Carousel>
        </div>
      </div>
    </> : <div className="not-loggedin"><p>You are not logged in!</p> <button onClick={navigate('/')}>Login</button></div>
  )
}
