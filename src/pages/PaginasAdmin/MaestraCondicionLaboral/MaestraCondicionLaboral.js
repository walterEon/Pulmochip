import React from 'react';
import './MaestraCondicionLaboral.css';

const workConditionData = [
  { ID: 1, WorkCondition: 'Contratista – Actividad minera' },
  { ID: 2, WorkCondition: 'Contratista –  Actividad conexa' },
  { ID: 3, WorkCondition: 'Titular minero' },
  { ID: 4, WorkCondition: 'Subcontratista' },
  { ID: 5, WorkCondition: 'Práctica Profesional' },
  { ID: 6, WorkCondition: 'Práctica Preprofesional' },
];

function MaestraCondicionLaboral() {
  return (
    <div className="condicion-laboral-page">
      <h1>Tabla Condición Laboral</h1>
      <table className="condicion-laboral-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>WorkCondition</th>
          </tr>
        </thead>
        <tbody>
          {workConditionData.map((row) => (
            <tr key={row.ID}>
              <td>{row.ID}</td>
              <td>{row.WorkCondition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaestraCondicionLaboral;
