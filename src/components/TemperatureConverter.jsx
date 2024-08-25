// src/components/TemperatureConverter.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Options from './Options'; // Import Options component
import './TemperatureConverter.css'; // Ensure this is updated with new styles

function TemperatureConverter({ history, setHistory }) {
  const [temp, setTemp] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [celsiusResult, setCelsiusResult] = useState('');
  const [fahrenheitResult, setFahrenheitResult] = useState('');
  const [showCelsiusCard, setShowCelsiusCard] = useState(false);
  const [showFahrenheitCard, setShowFahrenheitCard] = useState(false);

  const convertTemperature = () => {
    if (isNaN(temp) || temp === '') {
      setCelsiusResult('');
      setFahrenheitResult('');
      setShowCelsiusCard(false);
      setShowFahrenheitCard(false);
      return;
    }

    let result;
    if (unit === 'Celsius') {
      const fahrenheit = (temp * 9/5 + 32).toFixed(2);
      result = `${temp} °C = ${fahrenheit} °F`;
      setCelsiusResult('');
      setFahrenheitResult(fahrenheit + ' °F');
      setShowCelsiusCard(false);
      setShowFahrenheitCard(true);
    } else {
      const celsius = ((temp - 32) * 5/9).toFixed(2);
      result = `${temp} °F = ${celsius} °C`;
      setCelsiusResult(celsius + ' °C');
      setFahrenheitResult('');
      setShowCelsiusCard(true);
      setShowFahrenheitCard(false);
    }
    setHistory([...history, result]);
  };

  return (
    <div className="converter-container">
      <Options temp={temp} unit={unit} setTemp={setTemp} setUnit={setUnit} onConvert={convertTemperature} />
      {showFahrenheitCard && (
        <div className="card fade-in">
          <p>{fahrenheitResult}</p>
        </div>
      )}
      {showCelsiusCard && (
        <div className="card fade-in">
          <p>{celsiusResult}</p>
        </div>
      )}
      <Link to="/history">View History</Link>
    </div>
  );
}

export default TemperatureConverter;
