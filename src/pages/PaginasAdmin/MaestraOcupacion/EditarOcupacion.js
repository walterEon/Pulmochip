import React, { useState } from 'react';
import './EditarOcupacion.css';
import { useNavigate, useParams } from 'react-router-dom';

const data = [
  { id: 1, Area: 'Mina', Occupation: 'Operador de Cargador Frontal' },
  { id: 2, Area: 'Mina', Occupation: 'Operador de Cisterna de Agua' },
  { id: 3, Area: 'Mina', Occupation: 'Operador de Cisterna de Combustible' },
  { id: 4, Area: 'Mina', Occupation: 'Operador de Excavadora' },
  { id: 5, Area: 'Mina', Occupation: 'Operador de Motoniveladora' },
  { id: 6, Area: 'Mina', Occupation: 'Operador de Perforadora' },
  { id: 7, Area: 'Mina', Occupation: 'Operador de Retroexcavadora' },
  { id: 8, Area: 'Mina', Occupation: 'Operador de Rodillo' },
  { id: 9, Area: 'Mina', Occupation: 'Operador de Tractor de oruga' },
  { id: 10, Area: 'Mina', Occupation: 'Operador de Tractor neumático' },
  { id: 11, Area: 'Mina', Occupation: 'Operador de Locomotora' },
  { id: 12, Area: 'Mina', Occupation: 'Ayudante de Locomotora' },
  { id: 13, Area: 'Mina', Occupation: 'Operador de Rompebancos' },
  { id: 14, Area: 'Mina', Occupation: 'Operador de Volquete' },
  { id: 15, Area: 'Mina', Occupation: 'Operador de Camión minero' },
  { id: 16, Area: 'Mina', Occupation: 'Operador de Camión Lubricador' },
  { id: 17, Area: 'Mina', Occupation: 'Operador de Piso' },
  { id: 18, Area: 'Mina', Occupation: 'Operador de Shotcrete' },
  { id: 19, Area: 'Mina', Occupation: 'Ayudante de Shotcrete' },
  { id: 20, Area: 'Mina', Occupation: 'Operador de Jumbo' },
  { id: 21, Area: 'Mina', Occupation: 'Operador de Bolter' },
  { id: 22, Area: 'Mina', Occupation: 'Operador de Scaler' },
  { id: 23, Area: 'Mina', Occupation: 'Operador de Scoop' },
  { id: 24, Area: 'Mina', Occupation: 'Operador de Dumper' },
  { id: 25, Area: 'Mina', Occupation: 'Peón Mina' },
  { id: 26, Area: 'Mina', Occupation: 'Operario Mina' },
  { id: 27, Area: 'Mina', Occupation: 'Ayudante de Mina' },
  { id: 28, Area: 'Mina', Occupation: 'Perforista' },
  { id: 29, Area: 'Mina', Occupation: 'Ayudante de perforista' },
  { id: 30, Area: 'Mina', Occupation: 'Operador de Simba' },
  { id: 31, Area: 'Mina', Occupation: 'Ayudante de Simba' },
  { id: 32, Area: 'Mina', Occupation: 'Timbrero' },
  { id: 33, Area: 'Mina', Occupation: 'Supervisor Mina' },
  { id: 34, Area: 'Planta', Occupation: 'Operador de Filtrado' },
  { id: 35, Area: 'Planta', Occupation: 'Operador de Flotación' },
  { id: 36, Area: 'Planta', Occupation: 'Operador de Remolienda' },
  { id: 37, Area: 'Planta', Occupation: 'Operador de Molienda' },
  { id: 38, Area: 'Planta', Occupation: 'Operador de Reactivos' },
  { id: 39, Area: 'Planta', Occupation: 'Operador de Disposición de Relaves' },
  { id: 40, Area: 'Planta', Occupation: 'Operador de Chancado' },
  { id: 41, Area: 'Planta', Occupation: 'Operador de Lixiviación' },
  { id: 42, Area: 'Planta', Occupation: 'Operador de planta ADR' },
  { id: 43, Area: 'Planta', Occupation: 'Operador de chancadora primaria' },
  { id: 44, Area: 'Planta', Occupation: 'Operador de Apron feeder' },
  { id: 45, Area: 'Planta', Occupation: 'Operador de Tolva de finos' },
  { id: 46, Area: 'Laboratorio metalúrgico', Occupation: 'Operario de Laboratorio Metalurgico' },
  { id: 47, Area: 'Laboratorio químico', Occupation: 'Operario de Laboratorio Químico' },
  { id: 48, Area: 'Laboratorio químico', Occupation: 'Operario fundidor' },
  { id: 49, Area: 'Laboratorio químico', Occupation: 'Muestrero de planta' },
  { id: 50, Area: 'Laboratorio químico', Occupation: 'Preparador de muestras' },
  { id: 51, Area: 'Laboratorio químico', Occupation: 'Supervisión Planta' },
  { id: 52, Area: 'Mantenimiento', Occupation: 'Mecánico soldador' },
  { id: 53, Area: 'Mantenimiento', Occupation: 'Mecánico de mina' },
  { id: 54, Area: 'Mantenimiento', Occupation: 'Mecánico Trackless' },
  { id: 55, Area: 'Mantenimiento', Occupation: 'Mecánico Truckshop' },
  { id: 56, Area: 'Mantenimiento', Occupation: 'Mecánico Maestranza' },
  { id: 57, Area: 'Mantenimiento', Occupation: 'Electricista' },
  { id: 58, Area: 'Mantenimiento', Occupation: 'Bombero' },
  { id: 59, Area: 'Mantenimiento', Occupation: 'Instrumentista' },
  { id: 60, Area: 'Mantenimiento', Occupation: 'Mecánico' },
  { id: 61, Area: 'Mantenimiento', Occupation: 'Soldador' },
  { id: 62, Area: 'Mantenimiento', Occupation: 'Mecánico Piques' },
  { id: 63, Area: 'Mantenimiento', Occupation: 'Mecánico Mtto Predictivo' },
  { id: 64, Area: 'Mantenimiento', Occupation: 'Supervisión Mantenimiento' },
  { id: 65, Area: 'Geología', Occupation: 'Geólogo de Mina' },
  { id: 66, Area: 'Geología', Occupation: 'Muestrero de mina' },
  { id: 67, Area: 'Geología', Occupation: 'Ayudante de Muestrero' },
  { id: 68, Area: 'Geología', Occupation: 'Operario de Corte de testigos' },
  { id: 69, Area: 'Geología', Occupation: 'Operador de perforación diamantina' },
  { id: 70, Area: 'Geología', Occupation: 'Ayudante de perforación diamantina' },
  { id: 71, Area: 'Planeamiento', Occupation: 'Supervisor Geomecánico' },
  { id: 72, Area: 'Planeamiento', Occupation: 'Topógrafo' },
  { id: 73, Area: 'Planeamiento', Occupation: 'Ayudante de topógrafo' },
  { id: 74, Area: 'Planeamiento', Occupation: 'Operador de raise bore' },
  { id: 75, Area: 'Planeamiento', Occupation: 'Maestro de ventilación' },
  { id: 76, Area: 'Planeamiento', Occupation: 'Auxiliar de ventilación' },
  { id: 77, Area: 'Planeamiento', Occupation: 'Operador de Planta shotcrete' },
];

function EditarOcupacion() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = id === 'new';
    const newId = data.length+1;
    const ocupacionExistente = isNew ? { id: newId, Area: '', Occupation: '' } : data.find(c => c.id === parseInt(id));
    const [ocupacion, setOcupacion] = useState(ocupacionExistente);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setOcupacion({
        ...ocupacion,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(isNew ? 'Nueva Ocupación:' : 'Ocupación Editada:', ocupacion);
      // lógica para la edición/creación hacia el backend
      navigate('/maestra-ocupacion'); // volver a la gestión de ocupaciones
    };
  
    return (
      <div className="editar-ocupacion">
        <h2>{isNew ? 'Agregar Nueva Ocupación' : 'Editar Ocupación'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Información General</h3>
            <div className="grid-container">
              <div className="form-group">
                <label>id Ocupación</label>
                <input type="text" name="id" value={ocupacion.id} onChange={handleChange} disabled />
              </div>
              <div className="form-group">
                <label>Área</label>
                <input type="text" name="Area" value={ocupacion.Area} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Ocupación</label>
                <input type="text" name="Occupation" value={ocupacion.Occupation} onChange={handleChange} required />
              </div>
            </div>
          </div>
  
          <div className="button-container">
            <button type="submit">{isNew ? 'Agregar Ocupación' : 'Guardar Cambios'}</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default EditarOcupacion;