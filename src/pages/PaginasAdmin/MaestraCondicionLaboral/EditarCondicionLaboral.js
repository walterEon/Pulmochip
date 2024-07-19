import React, { useState } from 'react';
import './EditarCondicionLaboral.css';
import { useNavigate, useParams } from 'react-router-dom';

const workConditionData = [
  { id: 1, WorkCondition: 'Contratista – Actividad minera' },
  { id: 2, WorkCondition: 'Contratista –  Actividad conexa' },
  { id: 3, WorkCondition: 'Titular minero' },
  { id: 4, WorkCondition: 'Subcontratista' },
  { id: 5, WorkCondition: 'Práctica Profesional' },
  { id: 6, WorkCondition: 'Práctica Preprofesional' },
];

function EditarCondicionLaboral() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  const newId = workConditionData.length+1;
  const condicionLaboralExistente = isNew ? { id: newId, WorkCondition: '' } : workConditionData.find(c => c.id === parseInt(id));
  const [condicionLaboral, setCondicionLaboral] = useState(condicionLaboralExistente);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCondicionLaboral({
      ...condicionLaboral,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isNew ? 'Nueva Condición Laboral:' : 'Condición Laboral Editada:', condicionLaboral);
    // lógica para la edición/creación hacia el backend
    navigate('/maestra-condicion-laboral'); // volver a la gestión de condiciones laborales
  };

  return (
    <div className="editar-condicion-laboral">
      <h2>{isNew ? 'Agregar Nueva Condición Laboral' : 'Editar Condición Laboral'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>ID Condición Laboral</label>
              <input type="text" name="id" value={condicionLaboral.id} onChange={handleChange} disabled />
            </div>
            <div className="form-group">
              <label>Condición Laboral</label>
              <input type="text" name="WorkCondition" value={condicionLaboral.WorkCondition} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="button-container">
          <button type="submit">{isNew ? 'Agregar Condición Laboral' : 'Guardar Cambios'}</button>
        </div>
      </form>
    </div>
  );
}

export default EditarCondicionLaboral;
