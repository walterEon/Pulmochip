import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditarEmpresa.css';

function EditarEmpresa() {
  const navigate = useNavigate();
  const [empresas, setEmpresas] = useState([
    { id: 1, RUC: '12345678901', name: 'Empresa A', tradename: 'Comercial A', address: 'Calle 1', telephone: '12345678', contactName: 'Juan', contactLastname: 'Perez', contactLastname2: 'Gomez', cellphone: '987654321', email: 'empresaA@mail.com', activo: 'Activo' },
    { id: 2, RUC: '12345678902', name: 'Empresa B', tradename: 'Comercial B', address: 'Calle 2', telephone: '87654321', contactName: 'Maria', contactLastname: 'Lopez', contactLastname2: 'Martinez', cellphone: '912345678', email: 'empresaB@mail.com', activo: 'Inactivo' }
  ]);

  const { id } = useParams();
  const empresaExistente = empresas.find(e => e.id === parseInt(id));

  const [empresa, setEmpresa] = useState(empresaExistente);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({
      ...empresa,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Empresa Editada:', empresa);
    // lógica para la edicion hacia el backend
    navigate('/lista-empresas'); // ir de vuelta a la lista de empresas
  };

  return (
    <div className="editar-empresa">
      <h2>Editar Empresa</h2>
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

        <div className="button-container">
          <button type="submit">Guardar cambios</button>
        </div>
      </form>
    </div>
  );
}

export default EditarEmpresa;