import React, { useState } from 'react';
import './EditarMarcaModelo.css';
import { useNavigate, useParams } from 'react-router-dom';


const respiradores = [
    { id: 1, brand: '3M', model: '6100', fpa: 10 },
    { id: 2, brand: '3M', model: '6200', fpa: 10 },
    { id: 3, brand: '3M', model: '6300', fpa: 10 },
    { id: 4, brand: '3M', model: '7501', fpa: 10 },
    { id: 5, brand: '3M', model: '7502', fpa: 10 },
    { id: 6, brand: '3M', model: '7503', fpa: 10 },
    { id: 7, brand: '3M', model: '6700', fpa: 50 },
    { id: 8, brand: '3M', model: '6800', fpa: 50 },
    { id: 9, brand: '3M', model: '6900', fpa: 50 },
    { id: 10, brand: '3M', model: 'FF-401', fpa: 50 },
    { id: 11, brand: '3M', model: 'FF-402', fpa: 50 },
    { id: 12, brand: '3M', model: 'FF-403', fpa: 50 },
    { id: 13, brand: 'Dräger', model: 'X-plore 2100', fpa: 10 },
    { id: 14, brand: 'Dräger', model: 'X-plore 3300', fpa: 10 },
    { id: 15, brand: 'Dräger', model: 'X-plore 3500', fpa: 10 },
    { id: 16, brand: 'Dräger', model: 'X-plore 4300', fpa: 10 },
    { id: 17, brand: 'Dräger', model: 'X-plore 4700', fpa: 10 },
    { id: 18, brand: 'Dräger', model: 'X-plore 5500', fpa: 50 },
    { id: 19, brand: 'Dräger', model: 'FPS 7000', fpa: 50 },
    { id: 20, brand: 'Dräger', model: 'X-plore 6530', fpa: 50 },
    { id: 21, brand: 'Dräger', model: 'X-plore 6570', fpa: 50 },
    { id: 22, brand: 'Dräger', model: 'X-plore 6300', fpa: 50 },
    { id: 23, brand: 'Moldex', model: '7001', fpa: 10 },
    { id: 24, brand: 'Moldex', model: '7002', fpa: 10 },
    { id: 25, brand: 'Moldex', model: '7003', fpa: 10 },
    { id: 26, brand: 'Moldex', model: '7801', fpa: 10 },
    { id: 27, brand: 'Moldex', model: '7802', fpa: 10 },
    { id: 28, brand: 'Moldex', model: '7803', fpa: 10 },
    { id: 29, brand: 'Moldex', model: '9001', fpa: 50 },
    { id: 30, brand: 'Moldex', model: '9002', fpa: 50 },
    { id: 31, brand: 'Moldex', model: '9003', fpa: 50 },
    { id: 32, brand: 'MSA', model: 'Advantage 200 LS', fpa: 10 },
    { id: 33, brand: 'MSA', model: 'Advantage 420', fpa: 10 },
    { id: 34, brand: 'MSA', model: 'Advantage 1000', fpa: 50 },
    { id: 35, brand: 'MSA', model: 'Advantage 3100', fpa: 50 },
    { id: 36, brand: 'MSA', model: 'Advantage 3200', fpa: 50 },
    { id: 37, brand: 'MSA', model: 'Advantage 4100', fpa: 50 },
    { id: 38, brand: 'MSA', model: 'Advantage 4200', fpa: 50 },
    { id: 39, brand: 'LIBUS', model: '9250', fpa: 10 },
    { id: 40, brand: 'LIBUS', model: '9000', fpa: 10 },
    { id: 41, brand: 'LIBUS', model: '9955', fpa: 50 }
  ];

  function EditarRespirador() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = id === 'new';
    const newId = respiradores.length+1;
    const respiradorExistente = isNew ? { id: newId, brand: '', model: '', fpa: '' } : respiradores.find(c => c.id === parseInt(id));
    const [respirador, setRespirador] = useState(respiradorExistente);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setRespirador({
        ...respirador,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(isNew ? 'Nuevo Respirador:' : 'Respirador Editado:', respirador);
      // lógica para la edición/creación hacia el backend
      navigate('/maestra-marcas-modelos'); // volver a la gestión de respiradores
    };
  
    return (
      <div className="editar-respirador">
        <h2>{isNew ? 'Agregar Nuevo Respirador' : 'Editar Respirador'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Información General</h3>
            <div className="grid-container">
              <div className="form-group">
                <label>ID Respirador</label>
                <input type="text" name="id" value={respirador.id} onChange={handleChange} disabled />
              </div>
              <div className="form-group">
                <label>Marca</label>
                <input type="text" name="brand" value={respirador.brand} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Modelo</label>
                <input type="text" name="model" value={respirador.model} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>FPA</label>
                <input type="text" name="fpa" value={respirador.fpa} onChange={handleChange} required />
              </div>
            </div>
          </div>
  
          <div className="button-container">
            <button type="submit">{isNew ? 'Agregar Respirador' : 'Guardar Cambios'}</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default EditarRespirador;