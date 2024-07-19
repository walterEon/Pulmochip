import React from 'react';
import './MaestraCondicionLaboral.css';
import * as FaIcons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const workConditionData = [
  { id: 1, WorkCondition: 'Contratista – Actividad minera' },
  { id: 2, WorkCondition: 'Contratista –  Actividad conexa' },
  { id: 3, WorkCondition: 'Titular minero' },
  { id: 4, WorkCondition: 'Subcontratista' },
  { id: 5, WorkCondition: 'Práctica Profesional' },
  { id: 6, WorkCondition: 'Práctica Preprofesional' },
];

function MaestraCondicionLaboral() {

  const navigate = useNavigate();

  const editarCondicion = (id) => {
    navigate(`/editar-condicion-laboral/${id}`);
  };

  const agregarCondicionLaboral = () => {
    navigate(`/editar-condicion-laboral/new`);
  };

  return (
    <div className="condicion-laboral-page">
      <h1>Tabla Condición Laboral</h1>
      <table className="condicion-laboral-table">
        <thead>
          <tr>
            <th>id</th>
            <th>WorkCondition</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {workConditionData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.WorkCondition}</td>
              <td className='icono-cell'><FaIcons.FaEdit  className='icono-editar' color="black" onClick={() => editarCondicion(row.id)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='button-container'>
        <button onClick={agregarCondicionLaboral}>Agregar Nueva Condición Laboral</button>
      </div>
    </div>
  );
}

export default MaestraCondicionLaboral;
