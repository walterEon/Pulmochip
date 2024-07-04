import React from 'react';
import './DataField.css';

function DataField({ icon, label, value }) {
  return (
    <div className="data-field">
      <div className="data-field-icon">{icon}</div>
      <div className="data-field-content">
        <label className="data-field-label">{label}:</label>
        <div className="data-field-value">{value}</div>
      </div>
    </div>
  );
}

export default DataField;