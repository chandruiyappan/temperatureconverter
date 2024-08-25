// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TemperatureConverter from './components/TemperatureConverter';
import HistoryPage from './components/HistoryPage';
import './App.css'; // Ensure global styles

function App() {
  const [history, setHistory] = useState([]);

  const handleRemove = (index) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TemperatureConverter history={history} setHistory={setHistory} />}
        />
        <Route
          path="/history"
          element={<HistoryPage history={history} onRemove={handleRemove} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
