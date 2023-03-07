import { React, useContext, useState } from 'react'
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';

export default function Login()
{

  // initialize User Context
  const userState = useContext(UserContext);

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

  //handle form submission
  const handleSubmit = (e) =>
  {
    e.preventDefault();

    //write logic to autheticate


    navigate('/home');
  }

  // handle form input Change
  const handleChange = (e) =>
  {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }



  return (
    <div>

      {/* button goes top right  */}
      <div>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>

      {/* center above form */}
      <div>
        <h1>TableTalk</h1>
      </div>

      {/* login form */}
      <div>
        <form onSubmit={handleSubmit}>
          <input name="username" type="text" required onChange={handleChange} value={formState.username} placeholder="username" />
          <input name="password" type="password" required onChange={handleChange} value={formState.password} placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>

    </div>
  )
}
