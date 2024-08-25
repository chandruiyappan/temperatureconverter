// src/Options.jsx
import React from 'react';
import './Options.css'; // Add styles for options

function Options({ temp, unit, setTemp, setUnit, onConvert }) {
  return (
    <div className="options-container">
      <h2>Temperature Converter</h2>
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        placeholder="Enter temperature"
        className="input-field"
      />
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="select-field"
      >
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
      <button onClick={onConvert} className="convert-button">
        Convert
      </button>
    </div>
  );
}

export default Options;
