import React from "react";
import './MaestraFactoresRiesgo.css';
import * as FaIcons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const factoresRiesgo = [
  { id: 1, factor: 'Neumoconiosis 0/1' },
  { id: 2, factor: 'Neumoconiosis 1/0' },
  { id: 3, factor: 'Neumoconiosis 1/1' },
  { id: 4, factor: 'Neumoconiosis 1/2' },
  { id: 5, factor: 'Neumoconiosis 2/1' },
  { id: 6, factor: 'Neumoconiosis 2/2' },
  { id: 7, factor: 'Neumoconiosis 2/3' },
  { id: 8, factor: 'Neumoconiosis 3/2' },
  { id: 9, factor: 'Neumoconiosis 3/3' },
  { id: 10, factor: 'Neumoconiosis 3/+' },
  { id: 11, factor: 'Hipoacusia Inducida Ruido Leve' },
  { id: 12, factor: 'Hipoacusia Inducida Ruido Moderado' },
  { id: 13, factor: 'Hipoacusia Inducida Ruido Avanzado' },
  { id: 14, factor: 'Hipoacusia Neurosensorial' },
  { id: 15, factor: 'Hipoacusia Mixta' },
  { id: 16, factor: 'Hipoacusia por otras alteraciones' },
  { id: 17, factor: 'Hipertensión no controlada' },
  { id: 18, factor: 'Asma' },
  { id: 19, factor: 'Diabetes' },
  { id: 20, factor: 'Cardiopatía' },
  { id: 21, factor: 'Neumonitis' },
  { id: 22, factor: 'Ninguna' }
];

function MaestraFactoresRiesgo() {

  const navigate = useNavigate();

  const editarFactorRiesgo = (id) => {
    navigate(`/editar-factor-riesgo/${id}`);
  };

  const agregarFactorRiesgo = () => {
    navigate(`/editar-factor-riesgo/new`);
  };

  return (
    <div className="factores-riesgo-page">
      <h1>Tabla Factores de Riesgo</h1>
      <table className="tabla-factores-riesgo">
        <thead>
          <tr>
            <th>ID</th>
            <th>Factor de Riesgo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {factoresRiesgo.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.factor}</td>
              <td className='icono-cell'><FaIcons.FaEdit className='icono-editar' color="black" onClick={() => editarFactorRiesgo(item.id)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='button-container'>
        <button onClick={agregarFactorRiesgo}>Agregar Nuevo Factor de Riesgo</button>
      </div>
    </div>
  );
}

export default MaestraFactoresRiesgo;
