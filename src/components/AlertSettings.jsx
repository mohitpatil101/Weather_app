import React, { useState } from 'react';

function AlertSettings({ cities }) {
  const [alerts, setAlerts] = useState({});

  const handleChange = (city, condition) => {
    setAlerts({
      ...alerts,
      [city]: {
        ...alerts[city],
        [condition]: !alerts[city]?.[condition]
      }
    });
  };

  return (
    <div>
      <h2>Alert Settings</h2>
      {cities.map((city) => (
        <div key={city}>
          <h3>{city}</h3>
          <label>
            <input
              type="checkbox"
              checked={alerts[city]?.rain}
              onChange={() => handleChange(city, 'rain')}
            />
            Rain
          </label>
          <label>
            <input
              type="checkbox"
              checked={alerts[city]?.snow}
              onChange={() => handleChange(city, 'snow')}
            />
            Snow
          </label>
          <label>
            <input
              type="checkbox"
              checked={alerts[city]?.extreme}
              onChange={() => handleChange(city, 'extreme')}
            />
            Extreme Temperatures
          </label>
        </div>
      ))}
    </div>
  );
}

export default AlertSettings;
