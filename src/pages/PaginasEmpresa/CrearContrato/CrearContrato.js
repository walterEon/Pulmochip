import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CrearContrato.css';

function CrearContrato() {
  const navigate = useNavigate();
  const [contrato, setContrato] = useState({
    id: '',
    draegerUser: '',
    amount: '',
    company: '',
    initialDate: '',
    finalDate: '',
    quantity: '',
    serviceOrder: '',
    activo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContrato({
      ...contrato,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo Contrato:', contrato);
    // Aquí agregarías la lógica para enviar el nuevo contrato a tu backend o actualizar el estado global
    navigate('/gestion-contratos'); // Navegar de vuelta a la gestión de contratos
  };

  const handleCancel = () => {
    navigate('/gestion-contratos');
  };

  return (
    <div className="crear-contrato">
      <h1>Crear Nuevo Contrato</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>ID Contrato</label>
              <input type="text" name="id" value={contrato.id} onChange={handleChange} required />
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
          <button type="submit">Crear Contrato</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default CrearContrato;
