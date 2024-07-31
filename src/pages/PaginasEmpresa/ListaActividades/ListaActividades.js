import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import './ListaActividades.css';

const contratos = [
  {
    id: 1,
    draegerUser: 'Usuario1',
    amount: 10000,
    company: 'Empresa A',
    initialDate: '2024-01-01',
    finalDate: '2024-12-31',
    quantity: 50,
    serviceOrder: 'OS123',
    done: 'done',
    logo: 'path/to/logoA.png'
  },
  {
    id: 2,
    draegerUser: 'Usuario2',
    amount: 20000,
    company: 'Empresa B',
    initialDate: '2024-02-01',
    finalDate: '2024-11-30',
    quantity: 100,
    serviceOrder: 'OS124',
    done: 'Indone',
    logo: 'path/to/logoB.png'
  }
];

function ListaActividades() {

  const navigate = useNavigate();
  const [filtroEmpresa, setFiltroEmpresa] = useState('');
  const [filtroFechaDesde, setFiltroFechaDesde] = useState('');
  const [filtroFechaHasta, setFiltroFechaHasta] = useState('');
  const [filtroContrato, setFiltroContrato] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [actividades, setActividades] = useState([
    { id: 1, empresa: 'Empresa A', ordenServicio: 'OS123', fechaRegistro: '2024-07-01', horaInicio: '08:00', horaTermino: '17:00', estado: 'Activo' },
    { id: 2, empresa: 'Empresa B', ordenServicio: 'OS124', fechaRegistro: '2024-07-02', horaInicio: '09:00', horaTermino: '18:00', estado: 'Inactivo' }
  ]);
  

  const handleFiltroEmpresa = (e) => setFiltroEmpresa(e.target.value);
  const handleFiltroFechaDesde = (e) => setFiltroFechaDesde(e.target.value);
  const handleFiltroFechaHasta = (e) => setFiltroFechaHasta(e.target.value);
  const handleFiltroContrato = (e) => setFiltroContrato(e.target.value);
  const handleBusqueda = (e) => setBusqueda(e.target.value);

  const limpiarFiltros = () => {
    setFiltroEmpresa('');
    setFiltroFechaDesde('');
    setFiltroFechaHasta('');
    setFiltroContrato('');
    setBusqueda('');
  };

  const filtrarActividades = () => {
    return actividades.filter(actividad => 
      (filtroEmpresa === '' || actividad.empresa.includes(filtroEmpresa)) &&
      (filtroFechaDesde === '' || new Date(actividad.fechaRegistro) >= new Date(filtroFechaDesde)) &&
      (filtroFechaHasta === '' || new Date(actividad.fechaRegistro) <= new Date(filtroFechaHasta)) &&
      (filtroContrato === '' || actividad.ordenServicio.includes(filtroContrato)) &&
      (busqueda === '' || actividad.id.toString().includes(busqueda) || actividad.empresa.includes(busqueda))
    );
  };

  const verDetalles = (id) => {
    navigate(`/detalle/${id}`);
  };

  const crearActividad = () => {
    navigate(`/crear-actividad`);
  };

  const editarActividad = (id) => {
    navigate(`/editar-actividad/${id}`);
  };

  return (
    <div className="actividades-page">
      <header>
        <h1>Lista de actividades</h1>
      </header>
      
      <div className="filtros">
        <input type="text" placeholder="Buscar..." value={busqueda} onChange={handleBusqueda} />
        <select value={filtroEmpresa} onChange={handleFiltroEmpresa}>
          <option value="">Empresa</option>
          <option value="Empresa A">Empresa A</option>
          <option value="Empresa B">Empresa B</option>
        </select>

        <select value={filtroContrato} onChange={handleFiltroContrato}>
          <option value="">Orden de Servicio</option>
          {contratos.map(contrato => (
            <option value={contrato.serviceOrder}>{contrato.serviceOrder}</option>
          ))}
        </select>

        <span>Desde:</span>
        <input type="date" value={filtroFechaDesde} onChange={handleFiltroFechaDesde} />
        <span>Hasta:</span>
        <input type="date" value={filtroFechaHasta} onChange={handleFiltroFechaHasta} />
        <button onClick={filtrarActividades}>Filtrar</button>
        <button onClick={limpiarFiltros}>Limpiar Filtros</button>
      </div>

      <table className="actividades-table">
        <thead>
            <tr>
              <th>ID Actividad</th>
              <th>Empresa</th>
              <th>Orden de Servicio</th>
              <th>Hora de Inicio</th>
              <th>Hora de Término</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
          {filtrarActividades().map(actividad => (
            <tr key={actividad.id}>
              <td>{actividad.id}</td>
              <td>{actividad.empresa}</td>
              <td>{actividad.ordenServicio}</td>
              <td>{actividad.horaInicio}</td>
              <td>{actividad.horaTermino}</td>
              <td className='icono-cell'><FaIcons.FaEdit  className='icono-editar' color="black" onClick={() => editarActividad(actividad.id)}/><span></span> <CgIcons.CgMoreO  className='icono-ver-mas' color="black" onClick={() => verDetalles(actividad.id)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="button-container">
          <button onClick={crearActividad}>Agregar Nueva Actividad</button>

      </div>

    </div>
  );
}

export default ListaActividades;

