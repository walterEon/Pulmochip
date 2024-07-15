import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './ListaEmpresas.css';

function ListaEmpresas() {
  const navigate = useNavigate();
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroRUC, setFiltroRUC] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [empresas, setEmpresas] = useState([
    { id: 1, RUC: '12345678901', name: 'Empresa A', tradename: 'Comercial A', address: 'Calle 1', telephone: '12345678', contactName: 'Juan', contactLastname: 'Perez', contactLastname2: 'Gomez', cellphone: '987654321', email: 'empresaA@mail.com', activo: 'Activo' },
    { id: 2, RUC: '12345678902', name: 'Empresa B', tradename: 'Comercial B', address: 'Calle 2', telephone: '87654321', contactName: 'Maria', contactLastname: 'Lopez', contactLastname2: 'Martinez', cellphone: '912345678', email: 'empresaB@mail.com', activo: 'Inactivo' }
  ]);

  const handleFiltroNombre = (e) => setFiltroNombre(e.target.value);
  const handleFiltroRUC = (e) => setFiltroRUC(e.target.value);
  const handleBusqueda = (e) => setBusqueda(e.target.value);

  const limpiarFiltros = () => {
    setFiltroNombre('');
    setFiltroRUC('');
    setBusqueda('');
  };

  const filtrarEmpresas = () => {
    return empresas.filter(empresa => 
      (filtroNombre === '' || empresa.name.includes(filtroNombre)) &&
      (filtroRUC === '' || empresa.RUC.includes(filtroRUC)) &&
      (busqueda === '' || empresa.id.toString().includes(busqueda) || empresa.name.includes(busqueda))
    );
  };

  const crearEmpresa = () => {
    navigate(`/crear-empresa`);
  };

  return (
    <div className="empresas-page">
      <header>
        <h2>Lista de Empresas</h2>
        <div className="action-buttons">
          <button onClick={crearEmpresa}>Agregar Nueva Empresa</button>
        </div>
      </header>
      
      <div className="filtros">
        <input type="text" placeholder="Buscar..." value={busqueda} onChange={handleBusqueda} />
        <input type="text" placeholder="Nombre" value={filtroNombre} onChange={handleFiltroNombre} />
        <input type="text" placeholder="RUC" value={filtroRUC} onChange={handleFiltroRUC} />
        <button onClick={filtrarEmpresas}>Filtrar</button>
        <button onClick={limpiarFiltros}>Limpiar Filtros</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>RUC</th>
            <th>Nombre</th>
            <th>Nombre Comercial</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Contacto</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filtrarEmpresas().map(empresa => (
            <tr key={empresa.id}>
              <td>{empresa.id}</td>
              <td>{empresa.RUC}</td>
              <td>{empresa.name}</td>
              <td>{empresa.tradename}</td>
              <td>{empresa.address}</td>
              <td>{empresa.telephone}</td>
              <td>{`${empresa.contactName} ${empresa.contactLastname} ${empresa.contactLastname2}`}</td>
              <td>{empresa.cellphone}</td>
              <td>{empresa.email}</td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaEmpresas;
