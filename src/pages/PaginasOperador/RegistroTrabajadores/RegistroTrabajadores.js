import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistroTrabajadores.css';
import * as FaIcons from 'react-icons/fa';

const initialWorkers = [
  {
    idTrabajador: 1,
    name: 'Juan Pérez',
    dni: '12345678',
    birthday: '1990-01-01',
    company: 'Company A',
    workCondition: 1,
    dateEntry: '2024-01-01',
    area: 1,
    occupation: 1,
    schedule: 1,
    headquarters: 'HQ1',
    location: 'Location 1',
    riskFactor: 1,
    weight: 70,
    height: 175
  },
  {
    idTrabajador: 2,
    name: 'María Gómez',
    dni: '87654321',
    birthday: '1990-01-02',
    company: 'Company B',
    workCondition: 1,
    dateEntry: '2024-01-02',
    area: 2,
    occupation: 2,
    schedule: 2,
    headquarters: 'HQ2',
    location: 'Location 2',
    riskFactor: 2,
    weight: 60,
    height: 170
  },
  // Añadir más trabajadores según sea necesario
];

function RegistroTrabajadores() {

  const [workers, setWorkers] = useState(initialWorkers);
  const navigate = useNavigate();

  const handleEditWorker = (id) => {
    navigate(`/nuevo-trabajador/${id}`);
  };

  const handleAddWorker = () => {
    navigate(`/nuevo-trabajador/new`);
  };

  return (
    <div className="trabajadores-page">
      <h1>Registro de Trabajadores</h1>
      <table className="trabajadores-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Área</th>
            <th>Ocupación</th>
            <th>Empresa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {workers.map((item) => (
            <tr key={item.idTrabajador}>
              <td>{item.idTrabajador}</td>
              <td>{item.name}</td>
              <td>{item.dni}</td>
              <td>{item.area}</td>
              <td>{item.occupation}</td>
              <td>{item.company}</td>
              <td className='icono-cell'><FaIcons.FaEdit  className='icono-editar' color="black" onClick={() => handleEditWorker(item.idTrabajador)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='button-container'>
        <button onClick={handleAddWorker}>Agregar Nuevo Trabajador</button>
      </div>
    </div>
  );
}

export default RegistroTrabajadores;