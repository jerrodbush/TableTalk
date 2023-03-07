import { React, useContext, useState } from 'react'
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';

export default function Signup()
{

  // initialize User Context
  const userState = useContext(UserContext);

  //allow navigation
  const navigate = useNavigate();

  // update global state of page to current page
  userState.page = "signup";

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
    user_image: '',
    phone: '',
    age: 0,
    location: ''
  };

  //create form state
  const [formState, setFormState] = useState(initialState);

  //handle form submit next
  const handleSubmitNext = (e) =>
  {
    e.preventDefault();

    //new state value
    const newProgression = {
      index: progression.index + 1
    }
    // update progression state
    setProgression(newProgression)
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    //add logic to post to database
    fetch("http://localhost:9292/users", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {
        console.log(data);
      })

    // navigate(`/home`);

    console.log(formState)
  }

  // handle form input Change
  const handleChange = (e) =>
  {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  //needs styling
  const form1 = <>
    <form onSubmit={handleSubmitNext}>
      <input name="first_name" type="text" required onChange={handleChange} value={formState.first_name} placeholder="first name" />
      <input name="last_name" type="text" required onChange={handleChange} value={formState.last_name} placeholder=" last name" />
      <input name="username" type="text" required onChange={handleChange} value={formState.username} placeholder="username" />
      <input name="email" type="email" required onChange={handleChange} value={formState.email} placeholder="email" />
      <input name="password" type="password" required onChange={handleChange} value={formState.password} placeholder="password" />

      <button type="submit">Sign Up</button>
    </form>
  </>
  //needs styling
  const form2 = <>
    <form onSubmit={handleSubmitNext}>
      <input name="age" required type="number" onChange={handleChange} value={formState.age} placeholder="Age" />
      <input name="location" required type="text" onChange={handleChange} value={formState.location} placeholder="Location" />
      <input name="phone" required type="text" onChange={handleChange} value={formState.phone} placeholder="Phone Number" />
      <button type="submit">Sign Up</button>
    </form>
  </>

  //needs styling
  const form3 = <>
    {/* interests will be pulled from database so create a for loop and display interests */}
    <div>
      <input name="user_image" required type="text" onChange={handleChange} value={formState.user_image} placeholder="Profile Picture Link" />
    </div>

    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  </>

  const renderProgression = () =>
  {
    if (progression.index === 1) {
      return form1
    } else if (progression.index === 2) {
      return form2
    } else if (progression.index === 3) {
      return form3
    } else {
      return <><h1>Something went wrong with the form</h1></>
    }
  }

  const handleGoBack = () =>
  {
    const newProgression = {
      index: progression.index - 1
    }
    setProgression(newProgression);
  }
  const renderBackBtn = () =>
  {
    if (progression.index !== 1) {
      return <div>
        <button onClick={handleGoBack} >Go Back</button>
      </div>
    }
    else if (progression.index === 1) {
      return null
    }
    else {
      return <div>
        <button onClick={setProgression({ index: 1 })}>Refresh Form</button>
      </div>
    }
  }

  return (
    <div>

      {renderBackBtn()}
      {/* button goes top right  */}
      <div>
        <button onClick={() => navigate('/')}>Login</button>
      </div>

      {/* center above form */}
      <div>
        <h1>TableTalk</h1>
      </div>

      {/* login form */}
      <div id="form">
        {renderProgression()}
      </div>
    </div>
  )
}
