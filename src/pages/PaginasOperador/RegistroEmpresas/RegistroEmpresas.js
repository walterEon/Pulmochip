import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './RegistroEmpresas.css';

const initialCompanies = [
  {
    idCompany: 1,
    ruc: '12345678901',
    name: 'Tech Innovations S.A.',
    tradename: 'TechInnov',
    address: 'Av. Principal 123',
    phone: '987654321',
    contactName: 'Juan',
    contactLastname: 'Pérez',
    contactLastname2: 'González',
    cellphone: '912345678',
    email: 'juan.perez@techinnov.com'
  },
  {
    idCompany: 2,
    ruc: '10987654321',
    name: 'Global Solutions Ltd.',
    tradename: 'GlobalSol',
    address: 'Calle Secundaria 456',
    phone: '976543210',
    contactName: 'María',
    contactLastname: 'Lopez',
    contactLastname2: 'Martinez',
    cellphone: '923456789',
    email: 'maria.lopez@globalsol.com'
  }
];

function RegistroEmpresas() {
  const [companies, setCompanies] = useState(initialCompanies);
  const navigate = useNavigate();

  const handleEditCompany = (id) => {
    navigate(`/nueva-empresa/${id}`);
  };

  const handleAddCompany = () => {
    navigate(`/nueva-empresa/new`);
  };

  return (
    <div className="empresas-page">
      <h1>Registro de Empresas</h1>
      <table className="empresas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>RUC</th>
            <th>Razón Social</th>
            <th>Nombre Comercial</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Contacto</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item) => (
            <tr key={item.idCompany}>
              <td>{item.idCompany}</td>
              <td>{item.ruc}</td>
              <td>{item.name}</td>
              <td>{item.tradename}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>{`${item.contactName} ${item.contactLastname} ${item.contactLastname2}`}</td>
              <td>{item.email}</td>
              <td className='icono-cell'>
                <FaIcons.FaEdit className='icono-editar' color="black" onClick={() => handleEditCompany(item.idCompany)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='button-container'>
        <button onClick={handleAddCompany}>Agregar Nueva Empresa</button>
      </div>
    </div>
  );
}

export default RegistroEmpresas;
