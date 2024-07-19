import React, { useState } from 'react';
import './EditarMarcaModelo.css';
import { useNavigate, useParams } from 'react-router-dom';

const cartuchos = [
    { id: 1, brand: '3M', cartridge: '6005' },
    { id: 2, brand: '3M', cartridge: '6001' },
    { id: 3, brand: '3M', cartridge: '6004' },
    { id: 4, brand: '3M', cartridge: '6009S' },
    { id: 5, brand: '3M', cartridge: '60923' },
    { id: 6, brand: '3M', cartridge: '6006' },
    { id: 7, brand: '3M', cartridge: '6009' },
    { id: 8, brand: '3M', cartridge: '6002' },
    { id: 9, brand: '3M', cartridge: '6003' },
    { id: 10, brand: '3M', cartridge: '6059' },
    { id: 11, brand: '3M', cartridge: '60929S' },
    { id: 12, brand: 'MSA', cartridge: 'GMA' },
    { id: 13, brand: 'MSA', cartridge: 'GMB' },
    { id: 14, brand: 'MSA', cartridge: 'GMC' },
    { id: 15, brand: 'MSA', cartridge: 'GMD' },
    { id: 16, brand: 'MSA', cartridge: 'GME' },
    { id: 17, brand: 'MSA', cartridge: 'GMA-P100' },
    { id: 18, brand: 'MSA', cartridge: 'GMB-P100' },
    { id: 19, brand: 'MSA', cartridge: 'GMC-P100' },
    { id: 20, brand: 'MSA', cartridge: 'GMD-P100' },
    { id: 21, brand: 'MSA', cartridge: 'GME-P100' },
    { id: 22, brand: 'MSA', cartridge: 'ABEK2 HG/ST' },
    { id: 23, brand: 'MSA', cartridge: 'TABTEC A2B2E1K1' },
    { id: 24, brand: 'Dräger', cartridge: 'A1B1E1K1' },
    { id: 25, brand: 'Dräger', cartridge: 'A1B1E1' },
    { id: 26, brand: 'Dräger', cartridge: 'A2B2' },
    { id: 27, brand: 'Dräger', cartridge: 'A2' },
    { id: 28, brand: 'Dräger', cartridge: 'A1' },
    { id: 29, brand: 'Dräger', cartridge: 'A1-P3 R D' },
    { id: 30, brand: 'Dräger', cartridge: 'A2-P3 R D' },
    { id: 31, brand: 'Dräger', cartridge: 'A2B2E2K2Hg-P3 R D' },
    { id: 32, brand: 'Dräger', cartridge: 'A1B1E1K1Hg-P3 R D' },
    { id: 33, brand: 'Dräger', cartridge: 'A2B2-P3 R D' },
    { id: 34, brand: 'LIBUS', cartridge: 'CARTUCHO G01' },
    { id: 35, brand: 'LIBUS', cartridge: 'CARTUCHO G02' },
    { id: 36, brand: 'LIBUS', cartridge: 'CARTUCHO G03' },
    { id: 37, brand: 'LIBUS', cartridge: 'CARTUCHO G04' },
    { id: 38, brand: 'LIBUS', cartridge: 'CARTUCHO G05' },
    { id: 39, brand: 'LIBUS', cartridge: 'CARTUCHO G08' },
    { id: 40, brand: 'LIBUS', cartridge: 'CARTUCHO G70' },
    { id: 41, brand: 'LIBUS', cartridge: 'CARTUCHO G72' },
    { id: 42, brand: 'LIBUS', cartridge: 'CARTUCHO G73' },
    { id: 43, brand: 'LIBUS', cartridge: 'CARTUCHO G78' },
    { id: 44, brand: 'LIBUS', cartridge: 'CARTUCHO GX70' },
    { id: 45, brand: 'MOLDEX', cartridge: '7100' },
    { id: 46, brand: 'MOLDEX', cartridge: '7200' },
    { id: 47, brand: 'MOLDEX', cartridge: '7300' },
    { id: 48, brand: 'MOLDEX', cartridge: '7400' },
    { id: 49, brand: 'MOLDEX', cartridge: '7500' },
    { id: 50, brand: 'MOLDEX', cartridge: '7600' },
    { id: 51, brand: 'MOLDEX', cartridge: '7990' },
    { id: 52, brand: 'MOLDEX', cartridge: '7140' },
    { id: 53, brand: 'MOLDEX', cartridge: '7640' },
    { id: 54, brand: 'NINGUNO', cartridge: 'NINGUNO' }
  ];
  

  function EditarCartucho() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = id === 'new';
    const newId = cartuchos.length+1;
    const cartuchoExistente = isNew ? { id: newId, brand: '', cartridge: '' } : cartuchos.find(c => c.id === parseInt(id));
    const [cartucho, setCartucho] = useState(cartuchoExistente);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCartucho({
        ...cartucho,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(isNew ? 'Nuevo Cartucho:' : 'Cartucho Editado:', cartucho);
      // lógica para la edición/creación hacia el backend
      navigate('/maestra-marcas-modelos'); // volver a la gestión de cartuchos
    };
  
    return (
      <div className="editar-cartucho">
        <h2>{isNew ? 'Agregar Nuevo Cartucho' : 'Editar Cartucho'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Información General</h3>
            <div className="grid-container">
              <div className="form-group">
                <label>ID Cartucho</label>
                <input type="text" name="id" value={cartucho.id} onChange={handleChange} disabled />
              </div>
              <div className="form-group">
                <label>Marca</label>
                <input type="text" name="brand" value={cartucho.brand} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Cartucho</label>
                <input type="text" name="cartridge" value={cartucho.cartridge} onChange={handleChange} required />
              </div>
            </div>
          </div>
  
          <div className="button-container">
            <button type="submit">{isNew ? 'Agregar Cartucho' : 'Guardar Cambios'}</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default EditarCartucho;