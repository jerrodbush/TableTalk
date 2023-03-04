import { React, useContext, useState } from 'react'
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';

export default function Signup() {

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
      name: '',
      username: '',
      email: '',
      password: '',
      pfpURL: '',
      phonenumber: '',
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

      navigate(`/home`);
    }
  
    // handle form input Change
    const handleChange = (e) => {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
    //needs styling
    const form1 = <>
       <form onSubmit={handleSubmitNext}>
            <input name="name" type="text" required onChange={handleChange} value={formState.name} placeholder="name"/>
            <input name="username" type="text"  required onChange={handleChange} value={formState.username} placeholder="username"/>
            <input name="email" type="email" required onChange={handleChange} value={formState.email} placeholder="email"/>
            <input name="password" type="password" required onChange={handleChange} value={formState.password} placeholder="password"/>

            <button type="submit">Sign Up</button>
        </form>
    </>
    //needs styling
    const form2 = <>
        <form onSubmit={handleSubmitNext}>
            <input name="pfpURL" required type="text" onChange={handleChange} value={formState.pfpURL} placeholder="Profile Picture Link"/>
            <input name="phonenumber" required type="text" onChange={handleChange} value={formState.phonenumber} placeholder="Phone Number"/>
            <button type="submit">Sign Up</button>
        </form>
    </>

    //needs styling
    const form3 = <>
      {/* interests will be pulled from database so create a for loop and display interests */}
        <div>
          <button>Interest 1</button>
          <button>Interest 2</button>
          <button>Interest 3</button>
          <button>Interest 4</button>
          <button>Interest 5</button>
          <button>Interest 6</button>
          <button>Interest 7</button>
        </div>

        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
    </>

    const renderProgression = () => {
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

  return (
    <div>
      
      {/* button goes top right  */}
      <div>
        <button>Login</button>
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
