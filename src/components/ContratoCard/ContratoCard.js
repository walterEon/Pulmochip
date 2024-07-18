import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContratoCard.css';

function ContratoCard({ contrato }) {

    const navigate = useNavigate();

  const editarContrato = (id) => {
    navigate(`/editar-contrato/${id}`);
  };

  return (
    <div className="card">
      <img src={contrato.logo} alt={`${contrato.company} logo`} className="company-logo" />
      <div className="card-content">
        <h3>{contrato.company}</h3>
        <p><strong>Usuario Dräger:</strong> {contrato.draegerUser}</p>
        <p><strong>Monto:</strong> S/. {contrato.amount}</p>
        <p><strong>Fecha de Inicio:</strong> {contrato.initialDate}</p>
        <p><strong>Fecha Final:</strong> {contrato.finalDate}</p>
        <p><strong>Cantidad de Trabajadores:</strong> {contrato.quantity}</p>
        <p><strong>Número de Orden de Servicio:</strong> {contrato.serviceOrder}</p>
        <p><strong>Estado:</strong> <span className={`estado ${contrato.activo.toLowerCase()}`}>{contrato.activo}</span></p>
        <button onClick={() => editarContrato(contrato.id)}>Editar</button>
      </div>
    </div>
  );
}

export default ContratoCard;
