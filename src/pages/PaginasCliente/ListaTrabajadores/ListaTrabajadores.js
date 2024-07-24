import React, { useState } from 'react';
import './ListaTrabajadores.css';
import { useNavigate } from 'react-router-dom';
import * as CgIcons from 'react-icons/cg';

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

function ListaTrabajadores() {

  const [workers, setWorkers] = useState(initialWorkers);

  const navigate = useNavigate();

  const handleCheckWorker = (id) => {
    navigate(`/ver-trabajador/${id}`);
  };

  return (
    <div className="lista-trabajadores-page">
      <h1>Lista de Trabajadores</h1>
      <table className="lista-trabajadores-table">
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
              <td className='icono-cell'><CgIcons.CgMoreO  className='icono-ver-mas' color="black" onClick={() => handleCheckWorker(item.idTrabajador)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTrabajadores;