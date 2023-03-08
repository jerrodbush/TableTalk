import { React, useContext, useState } from 'react'
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';

export default function Login({updateUser}) {

  // initialize User Context
  const userState = useContext(UserContext);
  const [error, setError] = useState([])
  //allow navigation
  const navigate = useNavigate();

  // update global state of page to current page
  userState.page = "login";

  //Form State
  const initialState = {
    username: '',
    password: ''
  };

  //create form state
  const [formState, setFormState] = useState(initialState);

  const updateUserState = (obj) => {
    userState.page = 'home'
    userState.isLoggedIn = true
    userState.user_id = obj.id
    userState.full_name = obj.full_name
    userState.phone = obj.phone
    userState.age = obj.age
    userState.username = obj.username
    userState.email = obj.email
    userState.location = obj.location
    userState.user_image = obj.user_image
  }

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //write logic to authenticate
    fetch('http://localhost:9292/login',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(formState)
    })
    .then(res => {
      if(res.ok){
        res.json().then(obj => {
          console.log(obj)
          updateUserState(obj)
          updateUser(obj)
          console.log(userState)
        }
        )
        .then(navigate('/business/1'))
      } else {
        // alert("Error logging in.")
        res.json().then(json => setError(json.error))
      }
    })
    }

  // handle form input Change
  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  return (
    <div>

      {/* button goes top right  */}
      <div>
        <button>Sign Up</button>
      </div>

      {/* center above form */}
      <div>
        <h1>TableTalk</h1>
      </div>

      {/* login form */}
      <div>
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" required onChange={handleChange} value={formState.username} placeholder="username"/>
            <input name="password" type="password" required onChange={handleChange} value={formState.password} placeholder="password"/>
            <button type="submit">Login</button>
        </form>
      </div>
      {error? <div>{error}</div>:null}

    </div>
  )
}
