import React, { useState, useEffect, useContext } from 'react'
import NavBar from './NavBar'
import '../styling/settings.css'
import '../context/user.js';
import { UserContext } from "../context/user";

export default function ProfileSettings() {

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);
console.log(userState);
      //Form State
      const initialState = {
        first_name: userState.first_name,
        last_name: userState.last_name,
        username: userState.username,
        email: userState.email,
        password: '',
        age: userState.age,
        user_image: userState.user_image,
        phone: userState.phone,
        location: userState.location
      };
  
      //create form state
      const [formState, setFormState] = useState(initialState);

      // handle form input Change
      const handleChange = (e) => {
          setFormState({...formState, [e.target.name]: e.target.value});
      }

  
      
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/users/${userState.user_id}`,{
      method:'PATCH',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(formState)
    })
    .then(res => res.json())
    .then(obj => {
        setUserState({
          page: 'settings',
          isLoggedIn: true,
          user_id: obj.id,
          full_name: obj.full_name,
          phone: obj.phone,
          age: obj.age,
          username: obj.username,
          email: obj.email,
          location: obj.location,
          user_image: obj.user_image,
        })
        console.log(userState);
    })
  }

  return (
    <>
      <NavBar/>
      <div className="settings-container">
        <h3>Settings</h3>

        <form className="form" onSubmit={handleSubmit}>
            <input name="first_name" type="text" onChange={handleChange} value={formState.first_name} placeholder="First Name"/>
            <input name="last_name" type="text" onChange={handleChange} value={formState.last_name} placeholder="Last Name"/>
            <input name="username" type="text"  onChange={handleChange} value={formState.username} placeholder="Username"/>
            <input name="email" type="email" onChange={handleChange} value={formState.email} placeholder="E-mail"/>
            <input name="age" type="number" onChange={handleChange} value={formState.age} placeholder="Age"/>
            <input name="user_image" type="text" onChange={handleChange} value={formState.user_image} placeholder="Profile Picture Link"/>
            <input name="phone" type="text" onChange={handleChange} value={formState.phone} placeholder="Phone Number"/>
            <input name="location" type="text" onChange={handleChange} value={formState.location} placeholder="Location"/>
            <input name="password" type="password" onChange={handleChange} value={formState.password} placeholder="Password"/>
            <input name="password2" type="password" required onChange={handleChange} value={formState.password} placeholder="Password"/>
            <button type="submit">Save</button>
        </form>
      </div>
    </>
  )
}
