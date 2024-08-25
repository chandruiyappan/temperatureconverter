// src/components/HistoryPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HistoryPage.css'; // Import updated styles

function HistoryPage({ history, onRemove }) {
  return (
    <div className="history-container">
      <h1>Conversion History</h1>
      <div className="history-card-container">
        {history.length === 0 ? (
          <div className="empty-message">No history available.</div>
        ) : (
          history.map((entry, index) => (
            <div key={index} className="history-card">
              <div className="history-content">
                <p className="history-text">{entry}</p>
                <button className="remove-btn" onClick={() => onRemove(index)}>
                  <span className="remove-icon">×</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <Link to="/" className="back-link">Back to Converter</Link>
    </div>
  );
}

export default HistoryPage;
