import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CrearEmpresa.css';

function CrearEmpresa() {
  const navigate = useNavigate();
  const [empresa, setEmpresa] = useState({
    id: '',
    RUC: '',
    name: '',
    tradename: '',
    address: '',
    telephone: '',
    contactName: '',
    contactLastname: '',
    contactLastname2: '',
    cellphone: '',
    email: '',
    activo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({
      ...empresa,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nueva Empresa:', empresa);
    // Aquí agregarías la lógica para enviar la nueva empresa a tu backend o actualizar el estado global
    navigate('/lista-empresas'); // Navegar de vuelta a la lista de empresas
  };

  return (
    <div className="crear-empresa">
      <h2>Crear Nueva Empresa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>ID Empresa</label>
              <input type="text" name="id" value={empresa.id} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>RUC</label>
              <input type="text" name="RUC" value={empresa.RUC} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Razón Social</label>
              <input type="text" name="name" value={empresa.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Nombre Comercial</label>
              <input type="text" name="tradename" value={empresa.tradename} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Dirección</label>
              <input type="text" name="address" value={empresa.address} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Teléfono Fijo</label>
              <input type="text" name="telephone" value={empresa.telephone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Nombre del Contacto</label>
              <input type="text" name="contactName" value={empresa.contactName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Apellido Paterno del Contacto</label>
              <input type="text" name="contactLastname" value={empresa.contactLastname} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Apellido Materno del Contacto</label>
              <input type="text" name="contactLastname2" value={empresa.contactLastname2} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Celular del Contacto</label>
              <input type="text" name="cellphone" value={empresa.cellphone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={empresa.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Estado</label>
              <select name="activo" value={empresa.activo} onChange={handleChange} required>
                <option value="">Seleccione...</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <button type="submit">Crear Empresa</button>
        </div>
      </form>
    </div>
  );
}

export default CrearEmpresa;
