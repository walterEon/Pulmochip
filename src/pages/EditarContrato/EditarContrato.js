import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditarContrato.css';

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
    activo: 'Activo',
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
    activo: 'Inactivo',
    logo: 'path/to/logoB.png'
  }
  // Agregar más contratos según sea necesario...
];

function EditarContrato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contratoExistente = contratos.find(c => c.id === parseInt(id));

  const [contrato, setContrato] = useState(contratoExistente);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContrato({
      ...contrato,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contrato Editado:', contrato);
    // lógica para la edicion hacia el backend
    navigate('/gestion-contratos'); // ir de vuelta a la gestión de contratos
  };

  return (
    <div className="editar-contrato">
      <h2>Editar Contrato</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>ID Contrato</label>
              <input type="text" name="id" value={contrato.id} onChange={handleChange} disabled />
            </div>
            <div className="form-group">
              <label>Usuario Draeger</label>
              <input type="text" name="draegerUser" value={contrato.draegerUser} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Monto</label>
              <input type="text" name="amount" value={contrato.amount} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Empresa</label>
              <input type="text" name="company" value={contrato.company} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Fecha de Inicio</label>
              <input type="date" name="initialDate" value={contrato.initialDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Fecha Final</label>
              <input type="date" name="finalDate" value={contrato.finalDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Cantidad de Trabajadores</label>
              <input type="text" name="quantity" value={contrato.quantity} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Número de Orden de Servicio</label>
              <input type="text" name="serviceOrder" value={contrato.serviceOrder} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Estado</label>
              <select name="activo" value={contrato.activo} onChange={handleChange} required>
                <option value="">Seleccione...</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button type="submit">Guardar Cambios</button>
        </div>
      </form>
    </div>
  );
}

export default EditarContrato;
