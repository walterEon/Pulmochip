import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GestionContratos.css';
import ContratoCard from '../../components/ContratoCard/ContratoCard';

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
  }, 
  {
    id: 3,
    draegerUser: 'Usuario3',
    amount: 75000,
    company: 'Empresa C',
    initialDate: '2024-02-01',
    finalDate: '2024-11-30',
    quantity: 125,
    serviceOrder: 'OS125',
    activo: 'Inactivo',
    logo: 'path/to/logoB.png'
  }
  // Agregar más contratos según sea necesario...
];

function GestionContratos() {
  const navigate = useNavigate();

  const gestionarNuevoContrato = () => {
    navigate('/crear-contrato');
  };

  return (
    <div className="contratos-page">
      <h2>Gestión de Contratos</h2>
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

