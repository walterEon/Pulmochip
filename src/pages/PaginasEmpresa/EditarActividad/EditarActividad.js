import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditarActividad.css';

const actividades = [
  { id: 1, empresa: 'Empresa A', ordenServicio: 'OS123', fechaRegistro: '2024-07-01', horaInicio: '08:00', horaTermino: '17:00', estado: 'Activo', workerID: '123456', startLunch: '12:00', finishLunch: '12:30', initialDisplacement: '00:30', finalDisplacement: '00:30', respirator: 'Dräger / X-plore 3500', filter: '2091', cartucho: '6005', talla: 'M', temp: '20', hr: '60', pressure: '1012', exposedChemAgent: 'A1', exposureLevel: 'Low', description: 'Actividad A', filepathReport: 'reportA.pdf' },
  { id: 2, empresa: 'Empresa B', ordenServicio: 'OS124', fechaRegistro: '2024-07-02', horaInicio: '09:00', horaTermino: '18:00', estado: 'Inactivo', workerID: '654321', startLunch: '13:00', finishLunch: '13:30', initialDisplacement: '00:20', finalDisplacement: '00:20', respirator: '3M / 7500', filter: '7093', cartucho: '6003', talla: 'L', temp: '25', hr: '55', pressure: '1010', exposedChemAgent: 'B2', exposureLevel: 'Medium', description: 'Actividad B', filepathReport: 'reportB.pdf' }
];

// Datos predefinidos para las listas de selección
const respirators = [
  { id: 1, brand: '3M', model: '6100' },
  { id: 2, brand: '3M', model: '6200' },
  // ...otros valores
];

const filters = [
  { id: 1, brand: '3M', model: '5N11, N95' },
  { id: 2, brand: '3M', model: '2091, P100' },
  // ...otros valores
];

const cartridges = [
  { id: 1, brand: '3M', model: '6005' },
  { id: 2, brand: '3M', model: '6001' },
  // ...otros valores
];

const chemicalAgents = [
  { id: 1, name: 'Polvo respirable' },
  { id: 2, name: 'Polvo inhalable' },
  // ...otros valores
];

const exposureLevels = [
  { id: 1, name: 'Bajo' },
  { id: 2, name: 'Medio' },
  // ...otros valores
];

function EditarActividad() {
  const { id } = useParams();
  const navigate = useNavigate();
  const actividadExistente = actividades.find(a => a.id === parseInt(id));

  const [actividad, setActividad] = useState(actividadExistente);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActividad({
      ...actividad,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Actividad Editada:', actividad);
    // Lógica para enviar la edición de la actividad al backend
    navigate('/lista-actividades'); // Navegar de vuelta a la lista de actividades
  };

  return (
    <div className="editar-actividad">
      <h2>Editar Actividad</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>ID Actividad</label>
              <input type="text" name="id" value={actividad.id} onChange={handleChange} disabled />
            </div>
            <div className="form-group">
              <label>Empresa</label>
              <input type="text" name="empresa" value={actividad.empresa} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Orden de Servicio</label>
              <input type="text" name="ordenServicio" value={actividad.ordenServicio} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Fecha de Registro</label>
              <input type="date" name="fechaRegistro" value={actividad.fechaRegistro} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Hora de Inicio</label>
              <input type="time" name="horaInicio" value={actividad.horaInicio} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Hora de Término</label>
              <input type="time" name="horaTermino" value={actividad.horaTermino} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Estado</label>
              <select name="estado" value={actividad.estado} onChange={handleChange} required>
                <option value="">Seleccione...</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Tiempos de Actividad</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>Hora de Inicio del Almuerzo</label>
              <input type="time" name="startLunch" value={actividad.startLunch} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Hora de Fin del Almuerzo</label>
              <input type="time" name="finishLunch" value={actividad.finishLunch} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Tiempo en llegar al puesto de trabajo</label>
              <input type="time" name="initialDisplacement" value={actividad.initialDisplacement} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Tiempo en retornar del puesto de trabajo</label>
              <input type="time" name="finalDisplacement" value={actividad.finalDisplacement} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Equipos de Protección</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>Marca/Modelo Respirador</label>
              <select name="respirator" value={actividad.respirator} onChange={handleChange} required>
                <option value="">Seleccione...</option>
                {respirators.map((resp) => (
                  <option key={resp.id} value={`${resp.brand} / ${resp.model}`}>
                    {resp.brand} / {resp.model}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Filtro</label>
              <select name="filter" value={actividad.filter} onChange={handleChange} required>
                <option value="">Seleccione...</option>
                {filters.map((filter) => (
                  <option key={filter.id} value={`${filter.brand} / ${filter.model}`}>
                    {filter.brand} / {filter.model}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Cartucho</label>
              <select name="cartucho" value={actividad.cartucho} onChange={handleChange} required>
                <option value="">Seleccione...</option>
                {cartridges.map((cartridge) => (
                  <option key={cartridge.id} value={`${cartridge.brand} / ${cartridge.model}`}>
                    {cartridge.brand} / {cartridge.model}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Talla del Respirador</label>
              <input type="text" name="talla" value={actividad.talla} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Condiciones Ambientales</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>Temperatura Ambiental</label>
              <input type="text" name="temp" value={actividad.temp} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Humedad Relativa</label>
              <input type="text" name="hr" value={actividad.hr} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Presión Ambiental</label>
              <input type="text" name="pressure" value={actividad.pressure} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Exposición Química</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>Agente Químico Expuesto</label>
              <select name="exposedChemAgent" value={actividad.exposedChemAgent} onChange={handleChange} required>
                <option value="">Seleccione...</option>
                {chemicalAgents.map((agent) => (
                  <option key={agent.id} value={agent.name}>
                    {agent.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Nivel de Exposición</label>
              <select name="exposureLevel" value={actividad.exposureLevel} onChange={handleChange} required>
                <option value="">Seleccione...</option>
                {exposureLevels.map((level) => (
                  <option key={level.id} value={level.name}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Descripción de Actividades</label>
              <textarea name="description" value={actividad.description} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Archivo del Reporte</label>
              <input type="text" name="filepathReport" value={actividad.filepathReport} onChange={handleChange} required />
            </div>
          </div>
        </div>
        <div className='button-container'>
          <button type="submit">Guardar Cambios</button>
        </div>          
      </form>
    </div>
  );
}

export default EditarActividad;

