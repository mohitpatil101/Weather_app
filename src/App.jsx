
import React, { useState } from 'react';
import CitySelector from './components/CitySelector';
import WeatherCard from './components/WeatherCard';
import AlertSettings from './components/AlertSettings';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);
  
  const addCity = (city) => {
    if (!cities.includes(city)) {
      setCities([...cities, city]);
    }
  };

  const removeCity = (city) => {
    setCities(cities.filter((c) => c !== city));
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CitySelector cities={cities} addCity={addCity} removeCity={removeCity} />
      <div className="weather-cards">
        {cities.map((city) => (
          <WeatherCard key={city} city={city} />
        ))}
      </div>
      <AlertSettings cities={cities} />
    </div>
  );
}

export default App;
