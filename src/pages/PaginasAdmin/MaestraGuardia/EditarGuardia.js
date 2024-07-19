import React, { useState } from 'react';
import './EditarGuardia.css';
import { useNavigate, useParams } from 'react-router-dom';

const scheduleData = [
  { id: 1, Schedule: 'Mañana' },
  { id: 2, Schedule: 'Tarde' },
  { id: 3, Schedule: 'Noche' },
  { id: 4, Schedule: 'Otro' },
];

function EditarGuardia() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  const newId = scheduleData.length+1;
  const guardiaExistente = isNew ? { id: newId, Schedule: '' } : scheduleData.find(c => c.id === parseInt(id));
  const [guardia, setGuardia] = useState(guardiaExistente);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuardia({
      ...guardia,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isNew ? 'Nueva Guardia:' : 'Guardia Editada:', guardia);
    // lógica para la edición/creación hacia el backend
    navigate('/maestra-guardia'); // volver a la gestión de guardias
  };

  return (
    <div className="editar-guardia">
      <h2>{isNew ? 'Agregar Nueva Guardia' : 'Editar Guardia'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>ID Guardia</label>
              <input type="text" name="id" value={guardia.id} onChange={handleChange} disabled/>
            </div>
            <div className="form-group">
              <label>Guardia</label>
              <input type="text" name="Schedule" value={guardia.Schedule} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="button-container">
          <button type="submit">{isNew ? 'Agregar Guardia' : 'Guardar Cambios'}</button>
        </div>
      </form>
    </div>
  );
}

export default EditarGuardia;
