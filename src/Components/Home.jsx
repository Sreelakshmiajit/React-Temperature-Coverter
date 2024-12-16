import React, { useState } from 'react';
import './Home.css'; // Import the CSS file for styling

function Home() {
  // State to handle temperature, unit, and result
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('');
  const [result, setResult] = useState(null);

  // Handle the calculation based on unit selection
  const handleCalculate = () => {
    if (temperature === '' || isNaN(temperature)) {
      alert('Please enter a valid temperature value');
      return;
    }

    const tempValue = parseFloat(temperature);

    if (unit === 'celsius') {
      // Celsius to Fahrenheit
      const fahrenheit = (tempValue * 9) / 5 + 32;
      setResult(`${fahrenheit.toFixed(2)} °F`);
    } else if (unit === 'fahrenheit') {
      // Fahrenheit to Celsius
      const celsius = ((tempValue - 32) * 5) / 9;
      setResult(`${celsius.toFixed(2)} °C`);
    } else {
      alert('Please select a valid unit');
    }
  };

  return (
    <div className="background-container">
      <form className="form-container text-center rounded shadow-sm p-4">
        <h2 className="text-center m-2 p-2 text-danger">Temperature Converter</h2>

        <input
          type="text"
          placeholder="Enter the temperature value"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="form-control mb-3 text-dark"
        />

        <select
          className="form-select mb-3 text-dark"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="" hidden>
            Select
          </option>
          <option value="celsius">Celsius to Fahrenheit</option>
          <option value="fahrenheit">Fahrenheit to Celsius</option>
        </select>

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleCalculate}
        >
          Submit
        </button>

        {result && (
          <div className="mt-3 text-danger">
            <strong>Result:</strong> {result}
          </div>
        )}
      </form>
    </div>
  );
}

export default Home;
