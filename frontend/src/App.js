import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuthContext } from "@asgardeo/auth-react";
import { ProtectedRoute } from "@asgardeo/auth-react";


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
    <div>
      {weatherData ? (
        <div>
          <h1>Current Weather in London</h1>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;
