import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './RegistroMedicos.css';

const initialClients = [
  {
      idClient: 1,
      dni: "12345678",
      specialism: "Cardiología",
      tuition: "123456",
      reNumber: "RE123",
      company: "Salud y Vida S.A.",
      position: "Médico"
  },
  {
      idClient: 2,
      dni: "87654321",
      specialism: "Neurología",
      tuition: "654321",
      reNumber: "RE456",
      company: "NeuroSalud Ltda.",
      position: "Neurólogo"
  },
  {
      idClient: 3,
      dni: "11223344",
      specialism: "Pediatría",
      tuition: "789012",
      reNumber: "RE789",
      company: "Pediátrico S.A.",
      position: "Pediatra"
  },
  {
      idClient: 4,
      dni: "44332211",
      specialism: "Dermatología",
      tuition: "345678",
      reNumber: "RE012",
      company: "Dermaspecialistas Ltda.",
      position: "Dermatólogo"
  },
  {
      idClient: 5,
      dni: "55667788",
      specialism: "Oncología",
      tuition: "901234",
      reNumber: "RE345",
      company: "OncoSalud S.A.",
      position: "Oncólogo"
  }
];


function RegistroMedicos() {
  const [clients, setClients] = useState(initialClients);
  const navigate = useNavigate();

  const handleEditcompany = (id) => {
    navigate(`/nuevo-medico/${id}`);
  };

  const handleAddcompany = () => {
    navigate(`/nuevo-medico/new`);
  };

  return (
    <div className="medicos-page">
      <h1>Registro de Médicos</h1>
      <table className="medicos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DNI</th>
            <th>Especialidad</th>
            <th>Colegiatura</th>
            <th>Reg. Especialidad</th>
            <th>Empresa</th>
            <th>Cargo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((item) => (
            <tr key={item.idClient}>
              <td>{item.idClient}</td>
              <td>{item.dni}</td>
              <td>{item.specialism}</td>
              <td>{item.tuition}</td>
              <td>{item.reNumber}</td>
              <td>{item.company}</td>
              <td>{item.position}</td>
              <td className='icono-cell'>
                <FaIcons.FaEdit className='icono-editar' color="black" onClick={() => handleEditcompany(item.idClient)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='button-container'>
        <button onClick={handleAddcompany}>Agregar Nuevo Médico</button>
      </div>
    </div>
  );
}

export default RegistroMedicos;