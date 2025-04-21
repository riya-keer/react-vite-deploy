import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://weather-backend-1-enoa.onrender.com`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error:', error);
      setWeather(null);
    }
  };

  return (
    <div className="container">
      <h1>🌦 Weather Report</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div className="report">
          <h2>{weather.city}</h2>
          <p>{weather.description}</p>
          <p>🌡 {weather.temperature} °C</p>
          <p>💧 Humidity: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
