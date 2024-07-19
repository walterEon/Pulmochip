import React, { useState } from 'react';
import './EditarFactorRiesgo.css';
import { useNavigate, useParams } from 'react-router-dom';

const factoresRiesgo = [
    { id: 1, factor: 'Neumoconiosis 0/1' },
    { id: 2, factor: 'Neumoconiosis 1/0' },
    { id: 3, factor: 'Neumoconiosis 1/1' },
    { id: 4, factor: 'Neumoconiosis 1/2' },
    { id: 5, factor: 'Neumoconiosis 2/1' },
    { id: 6, factor: 'Neumoconiosis 2/2' },
    { id: 7, factor: 'Neumoconiosis 2/3' },
    { id: 8, factor: 'Neumoconiosis 3/2' },
    { id: 9, factor: 'Neumoconiosis 3/3' },
    { id: 10, factor: 'Neumoconiosis 3/+' },
    { id: 11, factor: 'Hipoacusia Inducida Ruido Leve' },
    { id: 12, factor: 'Hipoacusia Inducida Ruido Moderado' },
    { id: 13, factor: 'Hipoacusia Inducida Ruido Avanzado' },
    { id: 14, factor: 'Hipoacusia Neurosensorial' },
    { id: 15, factor: 'Hipoacusia Mixta' },
    { id: 16, factor: 'Hipoacusia por otras alteraciones' },
    { id: 17, factor: 'Hipertensión no controlada' },
    { id: 18, factor: 'Asma' },
    { id: 19, factor: 'Diabetes' },
    { id: 20, factor: 'Cardiopatía' },
    { id: 21, factor: 'Neumonitis' },
    { id: 22, factor: 'Ninguna' }
  ];

function EditarFactorRiesgo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  const newId = factoresRiesgo.length+1;
  const factorRiesgoExistente = isNew ? { id: newId, factor: '' } : factoresRiesgo.find(c => c.id === parseInt(id));
  const [factorRiesgo, setFactorRiesgo] = useState(factorRiesgoExistente);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFactorRiesgo({
      ...factorRiesgo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isNew ? 'Nuevo Factor de Riesgo:' : 'Factor de riesgo editado:', factorRiesgo);
    // lógica para la edición/creación hacia el backend
    navigate('/maestra-factores-riesgo'); // volver a la gestión de factores de riesgo
  };

  return (
    <div className="editar-factor-riesgo">
      <h2>{isNew ? 'Agregar Nuevo Factor de Riesgo' : 'Editar Factor de Riesgo'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>ID Factor de Riesgo</label>
              <input type="text" name="id" value={factorRiesgo.id} onChange={handleChange} disabled/>
            </div>
            <div className="form-group">
              <label>Condición de salud</label>
              <input type="text" name="factor" value={factorRiesgo.factor} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="button-container">
          <button type="submit">{isNew ? 'Agregar Factor de Riesgo' : 'Guardar Cambios'}</button>
        </div>
      </form>
    </div>
  );
}

export default EditarFactorRiesgo;