import { React, useContext, useState } from 'react'
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
import '../styling/signup.css';
import ParticleBackground from 'react-particle-backgrounds'

export default function Signup() {

  //bg settings
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 1000,
      height: 1000,
      useBouncyWalls: true,
    },
    particle: {
      particleCount: 65,
      color: '#CAE9FF',
      minSize: 2,
      maxSize: 45
    },
    velocity: {
      minSpeed: .2,
      maxSpeed: .4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000
    }
  }

    // initialize User Context
    const userState = useContext(UserContext);

    //allow navigation
    const navigate = useNavigate();

    // update global state of page to current page
    userState.page = "login";

    //progression of signup form initial state
    const initialProgression = {
      index: 1
    }
    //initialize progression state of sign up form
    const [progression, setProgression] = useState(initialProgression);


    //Form State
    const initialState = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      age: '',
      user_image: '',
      phone: '',
      location: ''
    };

    //create form state
    const [formState, setFormState] = useState(initialState);

    //handle form submit next
    const handleSubmitNext = (e) => {
      e.preventDefault();

      //new state value
      const newProgression = {
        index: progression.index + 1
      }
      // update progression state
      setProgression(newProgression)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      //add logic to post to database
      fetch(`http://localhost:9292/users`,{
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formState)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      // This is where you want to navigate back to Login (or if this also logs in, navigate to main page)
      // This is where we would add to current user...
    }

    // handle form input Change
    const handleChange = (e) => {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
    //needs styling
    const form1 = <>
       <form className="form" onSubmit={handleSubmitNext}>
            <input name="first_name" type="text" required onChange={handleChange} value={formState.first_name} placeholder="first_name"/>
            <input name="last_name" type="text" required onChange={handleChange} value={formState.last_name} placeholder="last_name"/>
            <input name="username" type="text"  required onChange={handleChange} value={formState.username} placeholder="username"/>
            <input name="email" type="email" required onChange={handleChange} value={formState.email} placeholder="email"/>
            <input name="password" type="password" required onChange={handleChange} value={formState.password} placeholder="password"/>
            <button type="submit">Sign Up</button>
        </form>
    </>
    //needs styling
    const form2 = <>
        <form className="form" onSubmit={handleSubmitNext}>
            <input name="age" required type="number" onChange={handleChange} value={formState.age} placeholder="Age"/>
            <input name="user_image" required type="text" onChange={handleChange} value={formState.user_image} placeholder="Profile Picture Link"/>
            <input name="phone" required type="text" onChange={handleChange} value={formState.phone} placeholder="Phone Number"/>
            <input name="location" required type="text" onChange={handleChange} value={formState.location} placeholder="City or Town"/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </>

    const renderProgression = () => {
      if (progression.index === 1) {
        return form1
      } else if (progression.index === 2) {
        return form2
      } else {
        return <><h1>Something went wrong with the form</h1></>
      }
    }

    const handleGoBack = () => {
      const newProgression = {
        index: progression.index - 1
      }
      setProgression(newProgression);
    }
    const renderBackBtn = () => {
      if(progression.index !== 1) {
      return <div className="nav-button-wrapper-2">
        <button onClick={handleGoBack} >Go Back</button>
      </div>
      }
      else if (progression.index === 1) {
        return null
      }
      else {
        return <div className="nav-button-wrapper-2">
              <button onClick={setProgression({index: 1})}>Refresh Form</button>
          </div>
      }
    }

  return (
    <div className="signup-container">
      <ParticleBackground settings={settings}/>
      {renderBackBtn()}
      {/* button goes top right  */}
      <div className="nav-button-wrapper">
        <button onClick={() => navigate('/')}>Login</button>
      </div>
      <div id="content-wrapper">
      {/* center above form */}
      <div className="logo-form">
        <h1>TableTalk</h1>
      </div>

      {/* login form */}
      <div id="signup-form">
        {renderProgression()}
      </div>
    </div>
    </div>
  )
}
