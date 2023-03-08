import React from 'react';
import NavBar from './NavBar';
import '../styling/profile.css';
// import TagCloud from 'react-tag-cloud';

export default function ProfilePage() {

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
            {/* <TagCloud 
              style={{
                fontFamily: 'sans-serif',
                fontSize: 30,
                fontWeight: 'bold',
                fontStyle: 'italic',
                color: () => randomColor(),
                padding: 5,
                width: '100%',
                height: '100%'
              }}
            >
          <div style={{fontSize: 50}}>react</div>
          <div style={{color: 'green'}}>tag</div>
          <div rotate={90}>cloud</div>
        </TagCloud> */}
          </div>

        </div>

        <div id="reserve-wrapper-p">
            <h3>Reservations</h3>
            {/* add carousel to profile */}
        </div>

        <div id="tabletalkers-wrapper">
          <h3>TableTalkers</h3>
            {/* add carrousel to tabletalkers */}
        </div>
      </div>
    </>
  )
}
