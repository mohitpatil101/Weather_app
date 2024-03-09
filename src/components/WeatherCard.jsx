
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherCard.css'; 

function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=192e3aaf21ff4c0eaab95337240503&q=${city}`);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      setWeather(null);
    };
  }, [city]);

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      {weather && (
        <div>
          <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
          <p>Type: {weather.current.condition.text}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
