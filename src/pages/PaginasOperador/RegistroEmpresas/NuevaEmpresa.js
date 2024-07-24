import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NuevaEmpresa.css';

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

function NuevaEmpresa() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  const newId = initialCompanies.length + 1;

  const empresaExistente = isNew ? {
    idCompany: newId,
    ruc: '',
    name: '',
    tradename: '',
    address: '',
    phone: '',
    contactName: '',
    contactLastname: '',
    contactLastname2: '',
    cellphone: '',
    email: ''
  } : initialCompanies.find(c => c.idCompany === parseInt(id));

  const [newCompany, setNewCompany] = useState(empresaExistente);
  const [companies, setCompanies] = useState(initialCompanies);

  useEffect(() => {
    if (!isNew) {
      const companyToEdit = companies.find(company => company.idCompany === parseInt(id));
      if (companyToEdit) {
        setNewCompany(companyToEdit);
      }
    }
  }, [id, companies, isNew]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({
      ...newCompany,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isNew ? 'Nueva Empresa:' : 'Empresa Editada:', newCompany);
    // lógica para la edición/creación hacia el backend
    navigate('/registro-empresas'); // volver al registro de empresas
  };

  const handleCancel = () => {
    navigate('/registro-empresas');
  };

  return (
    <div className="nueva-empresa-page">
      <h1>{isNew ? 'Agregar Nueva Empresa' : 'Editar Empresa'}</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-section'>
          <h2>Información de la Empresa</h2>
          <div className='grid-container'>
            <div className="form-group">
              <label>RUC:</label>
              <input type="text" name="ruc" value={newCompany.ruc} onChange={handleChange} maxLength="11" />
            </div>
            <div className="form-group">
              <label>Razón Social:</label>
              <input type="text" name="name" value={newCompany.name} onChange={handleChange} maxLength="50" />
            </div>
            <div className="form-group">
              <label>Nombre Comercial:</label>
              <input type="text" name="tradename" value={newCompany.tradename} onChange={handleChange} maxLength="30" />
            </div>
            <div className="form-group">
              <label>Dirección:</label>
              <input type="text" name="Address" value={newCompany.address} onChange={handleChange} maxLength="50" />
            </div>
            <div className="form-group">
              <label>Teléfono:</label>
              <input type="text" name="phone" value={newCompany.phone} onChange={handleChange} maxLength="8" />
            </div>
          </div>
        </div>
        <div className='form-section'>
          <h2>Información de Contacto</h2>
          <div className='grid-container'>
            <div className="form-group">
              <label>Nombre del Contacto:</label>
              <input type="text" name="contactName" value={newCompany.contactName} onChange={handleChange} maxLength="30" />
            </div>
            <div className="form-group">
              <label>Apellido Paterno del Contacto:</label>
              <input type="text" name="contactLastname" value={newCompany.contactLastname} onChange={handleChange} maxLength="30" />
            </div>
            <div className="form-group">
              <label>Apellido Materno del Contacto:</label>
              <input type="text" name="contactLastname2" value={newCompany.contactLastname2} onChange={handleChange} maxLength="30" />
            </div>
            <div className="form-group">
              <label>Celular del Contacto:</label>
              <input type="text" name="cellphone" value={newCompany.cellphone} onChange={handleChange} maxLength="9" />
            </div>
            <div className="form-group">
              <label>email:</label>
              <input type="email" name="email" value={newCompany.email} onChange={handleChange} maxLength="50" />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button type="submit">{isNew ? 'Agregar' : 'Guardar'}</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default NuevaEmpresa;
