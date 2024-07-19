import React, { useState } from 'react';
import './EditarMarcaModelo.css';
import { useNavigate, useParams } from 'react-router-dom';


const filtros = [
    { id: 1, brand: '3M', filter: '5N11, N95' },
    { id: 2, brand: '3M', filter: '2091, P100' },
    { id: 3, brand: '3M', filter: '7093C, P100' },
    { id: 4, brand: '3M', filter: '2071, P95' },
    { id: 5, brand: '3M', filter: '2097, P100' },
    { id: 6, brand: 'MSA', filter: 'R95' },
    { id: 7, brand: 'MSA', filter: 'P100 + OV,OZONO' },
    { id: 8, brand: 'MSA', filter: 'P100 + GA,HF' },
    { id: 9, brand: 'MSA', filter: '93 AB/ST' },
    { id: 10, brand: 'MSA', filter: '93 AX/ST' },
    { id: 11, brand: 'MSA', filter: '93 K/ST' },
    { id: 12, brand: 'MSA', filter: '89 K/ST - K2-P3' },
    { id: 13, brand: 'MSA', filter: 'P100' },
    { id: 14, brand: 'MSA', filter: 'N95' },
    { id: 15, brand: 'Dräger', filter: 'N95' },
    { id: 16, brand: 'Dräger', filter: 'P100' },
    { id: 17, brand: 'Dräger', filter: 'X-plore®  P1' },
    { id: 18, brand: 'Dräger', filter: 'X-plore®  P2' },
    { id: 19, brand: 'Dräger', filter: 'X-plore®  P3' },
    { id: 20, brand: 'LIBUS', filter: 'XP100' },
    { id: 21, brand: 'LIBUS', filter: 'XP100 OV/AG' },
    { id: 22, brand: 'LIBUS', filter: 'G95P' },
    { id: 23, brand: 'MOLDEX', filter: '7940' },
    { id: 24, brand: 'MOLDEX', filter: '7950' },
    { id: 25, brand: 'MOLDEX', filter: '7960' },
    { id: 26, brand: 'MOLDEX', filter: '7990' },
    { id: 27, brand: 'MOLDEX', filter: '8910' },
    { id: 28, brand: 'MOLDEX', filter: '8970' },
    { id: 29, brand: 'NINGUNO', filter: 'NINGUNO' }
  ];  

  function EditarFiltro() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = id === 'new';
    const newId = filtros.length+1;
    const filtroExistente = isNew ? { id: newId, brand: '', filter: '' } : filtros.find(c => c.id === parseInt(id));
    const [filtro, setFiltro] = useState(filtroExistente);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFiltro({
        ...filtro,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(isNew ? 'Nuevo Filtro:' : 'Filtro Editado:', filtro);
      // lógica para la edición/creación hacia el backend
      navigate('/maestra-marcas-modelos'); // volver a la gestión de filtros
    };
  
    return (
      <div className="editar-filtro">
        <h2>{isNew ? 'Agregar Nuevo Filtro' : 'Editar Filtro'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Información General</h3>
            <div className="grid-container">
              <div className="form-group">
                <label>ID Filtro</label>
                <input type="text" name="id" value={filtro.id} onChange={handleChange} disabled />
              </div>
              <div className="form-group">
                <label>Marca</label>
                <input type="text" name="brand" value={filtro.brand} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Filtro</label>
                <input type="text" name="filter" value={filtro.filter} onChange={handleChange} required />
              </div>
            </div>
          </div>
  
          <div className="button-container">
            <button type="submit">{isNew ? 'Agregar Filtro' : 'Guardar Cambios'}</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default EditarFiltro;