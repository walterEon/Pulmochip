import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NuevoMedico.css';

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

function NuevoMedico() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  const newId = initialClients.length + 1;

  const medicoExistente = isNew ? {
    idClient: newId,
    dni: '',
    specialism: '',
    tuition: '',
    reNumber: '',
    company: '',
    position: ''
  } : initialClients.find(c => c.idClient === parseInt(id));

  const [newClient, setNewClient] = useState(medicoExistente);
  const [clients, setClients] = useState(initialClients);

  useEffect(() => {
    if (!isNew) {
      const clientToEdit = clients.find(client => client.idClient === parseInt(id));
      if (clientToEdit) {
        setNewClient(clientToEdit);
      }
    }
  }, [id, clients, isNew]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient({
      ...newClient,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isNew ? 'Nuevo Médico:' : 'Médico Editado:', newClient);
    // lógica para la edición/creación hacia el backend
    navigate('/registro-medicos'); // volver al registro de médicos
  };

  const handleCancel = () => {
    navigate('/registro-medicos');
  };

  return (
    <div className="nuevo-medico-page">
      <h1>{isNew ? 'Agregar Nuevo Médico' : 'Editar Médico'}</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-section'>
          <h2>Información Profesional</h2>
          <div className='grid-container'>
            <div className="form-group">
              <label>DNI:</label>
              <input type="text" name="dni" value={newClient.dni} onChange={handleChange} maxLength="8" />
            </div>
            <div className="form-group">
              <label>Especialidad:</label>
              <input type="text" name="specialism" value={newClient.specialism} onChange={handleChange} maxLength="20" />
            </div>
            <div className="form-group">
              <label>Colegiatura:</label>
              <input type="text" name="tuition" value={newClient.tuition} onChange={handleChange} maxLength="6" />
            </div>
            <div className="form-group">
              <label>Registro de Especialidad:</label>
              <input type="text" name="reNumber" value={newClient.reNumber} onChange={handleChange} maxLength="6" />
            </div>
            <div className="form-group">
              <label>Empresa:</label>
              <input type="text" name="company" value={newClient.company} onChange={handleChange} maxLength="30" />
            </div>
            <div className="form-group">
              <label>Cargo:</label>
              <input type="text" name="position" value={newClient.position} onChange={handleChange} maxLength="20" />
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

export default NuevoMedico;