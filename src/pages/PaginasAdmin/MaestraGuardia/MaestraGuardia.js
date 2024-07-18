import React from 'react';
import './MaestraGuardia.css';

const scheduleData = [
  { ID: 1, Schedule: 'Mañana' },
  { ID: 2, Schedule: 'Tarde' },
  { ID: 3, Schedule: 'Noche' },
  { ID: 4, Schedule: 'Otro' },
];

function MaestraGuardia() {
  return (
    <div className="guardia-page">
      <h1>Tabla Guardia</h1>
      <table className="guardia-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((row) => (
            <tr key={row.ID}>
              <td>{row.ID}</td>
              <td>{row.Schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaestraGuardia;
