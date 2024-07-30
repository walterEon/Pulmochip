import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GestionContratos.css';
import ContratoCard from '../../../components/ContratoCard/ContratoCard';

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
    logo: 'path/to/logoB.png'
  }
];

function GestionContratos() {
  const navigate = useNavigate();

  const gestionarNuevoContrato = () => {
    navigate('/crear-contrato');
  };

  return (
    <div className="contratos-page">
      <h1>Gestión de Contratos</h1>
      <div className="cards-container">
        {contratos.map(contrato => (
          <ContratoCard key={contrato.id} contrato={contrato} />
        ))}
      </div>
      <div className="gestion-nuevo-contrato">
        <button onClick={gestionarNuevoContrato}>Gestionar Nuevo Contrato</button>
      </div>
    </div>
  );
}

export default GestionContratos;

