
import React, { useState } from 'react';
import './CitySelector.css'; 

function CitySelector({ cities, addCity, removeCity }) {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      addCity(city.trim());
      setCity('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} placeholder="Enter city" />
        <button className="add-button" type="submit">Add City</button>
      </form>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            {city}
            <button className="remove-button" onClick={() => removeCity(city)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitySelector;
