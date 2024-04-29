import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@asgardeo/auth-react';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';

import { useAuthContext } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: "http://localhost:3000/sign-in",
  signOutRedirectURL: "http://localhost:3000/sign-out",
  clientID: "bGOlVWp6a2MNojqHKfNxqRtqyqga",
  serverOrigin: "https://api.asgardeo.io/t/fortresscomputingtech",
  scope: ["openid", "profile"],
};


function App() {
  const [weatherData, setWeatherData] = useState(null);

  const REACT_APP_BACKEND_URL = "http://127.0.0.1:8000"


  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/weather`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <AuthProvider config={config}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LandingPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

    // <div>
    //   {weatherData ? (
    //     <div>
    //       <h1>Current Weather in London</h1>
    //       <p>Temperature: {weatherData.main.temp}°C</p>
    //       <p>Description: {weatherData.weather[0].description}</p>
    //     </div>
    //   ) : (
    //     <p>Loading weather data...</p>
    //   )}
    // </div>
  );
}

export default App;
