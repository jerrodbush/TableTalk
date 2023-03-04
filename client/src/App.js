import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import BusinessPage from './components/BusinessPage';
import ReservationsPage from './components/ReservationsPage';
import ProfileSettings from './components/ProfileSettings';
import { UserProvider } from './context/user.js';

function App() {
  return (
    <div className="App">
    <UserProvider>
        <Routes>
          <Route 
              path="/" 
              element={<Login/>}
            />
            <Route 
              path="/signup" 
              element={<Signup/>}
            />
            <Route 
              path="/home"
              element={<HomePage/>}
            />
            <Route 
              path="/profile/:username"
              element={<ProfilePage/>}
            />
            <Route 
              path="/business/:businessname"
              element={<BusinessPage/>}
            />
            <Route 
              path="/reservations"
              element={<ReservationsPage/>}
            />
            <Route
              path="/profile/:username/settings"
              element={<ProfileSettings/>}
            />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
