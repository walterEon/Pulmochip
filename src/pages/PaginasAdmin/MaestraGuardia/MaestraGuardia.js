import React from 'react';
import './MaestraGuardia.css';
import * as FaIcons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const scheduleData = [
  { id: 1, Schedule: 'Mañana' },
  { id: 2, Schedule: 'Tarde' },
  { id: 3, Schedule: 'Noche' },
  { id: 4, Schedule: 'Otro' },
];

function MaestraGuardia() {

  const navigate = useNavigate();

  const editarGuardia = (id) => {
    navigate(`/editar-guardia/${id}`);
  };

  const agregarGuardia = () => {
    navigate(`/editar-guardia/new`);
  };

  return (
    <div className="guardia-page">
      <h1>Tabla Guardia</h1>
      <table className="guardia-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Schedule</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.Schedule}</td>
              <td className='icono-cell'><FaIcons.FaEdit  className='icono-editar' color="black" onClick={() => editarGuardia(row.id)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='button-container'>
        <button onClick={agregarGuardia}>Agregar Nueva Guardia</button>
      </div>
    </div>
  );
}

export default MaestraGuardia;
