import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import '../styling/settings.css'

export default function ProfileSettings() {

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

      // handle form input Change
      const handleChange = (e) => {
          setFormState({...formState, [e.target.name]: e.target.value});
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
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
