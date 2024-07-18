import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CrearActividad.css';

const cartuchos = [
  { id: 1, brand: '3M', cartridge: '6005' },
  { id: 2, brand: '3M', cartridge: '6001' },
  // Añadir los demás cartuchos...
];

const filtros = [
  { id: 1, brand: '3M', filter: '5N11, N95' },
  { id: 2, brand: '3M', filter: '2091, P100' },
  // Añadir los demás filtros...
];

const respiradores = [
  { id: 1, brand: '3M', model: '6100', fpa: 10 },
  { id: 2, brand: '3M', model: '6200', fpa: 10 },
  // Añadir los demás respiradores...
];

const agentesQuimicos = [
  { id: 1, chemicalAgent: 'Polvo respirable' },
  { id: 2, chemicalAgent: 'Polvo inhalable' },
  // Añadir los demás agentes químicos...
];

const nivelesExposicion = [
  { id: 1, exposureLevel: 'Bajo' },
  { id: 2, exposureLevel: 'Medio' },
  { id: 3, exposureLevel: 'Alto' },
  { id: 4, exposureLevel: 'Muy Alto' },
  { id: 5, exposureLevel: 'No determinado' },
];

function CrearActividad() {
  const navigate = useNavigate();
  const [actividad, setActividad] = useState({
    id: '',
    empresa: '',
    ordenServicio: '',
    fechaRegistro: '',
    horaInicio: '',
    horaTermino: '',
    estado: '',
    workerID: '',
    startLunch: '',
    finishLunch: '',
    initialDisplacement: '',
    finalDisplacement: '',
    respirator: '',
    filter: '',
    cartucho: '',
    talla: '',
    temp: '',
    hr: '',
    pressure: '',
    exposedChemAgent: '',
    exposureLevel: '',
    description: '',
    filepathReport: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActividad({
      ...actividad,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nueva Actividad:', actividad);
    // Aquí agregarías la lógica para enviar la nueva actividad a tu backend o actualizar el estado global
    navigate('/lista-actividades'); // Navegar de vuelta a la lista de actividades
  };

  return (
    <div className="crear-actividad">
      <h2>Crear Nueva Actividad</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>ID Actividad</label>
              <input type="text" name="id" value={actividad.id} onChange={handleChange} required />
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
            <div className="form-group">
              <label>Nombre y Apellidos del Trabajador</label>
              <input type="text" name="workerID" value={actividad.workerID} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Tiempos de Actividad</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>Hora de Inicio del Almuerzo</label>
              <input type="time" name="startLunch" value={actividad.startLunch} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Hora de Fin del Almuerzo</label>
              <input type="time" name="finishLunch" value={actividad.finishLunch} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tiempo en llegar al puesto de trabajo</label>
              <input type="time" name="initialDisplacement" value={actividad.initialDisplacement} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tiempo en retornar del puesto de trabajo</label>
              <input type="time" name="finalDisplacement" value={actividad.finalDisplacement} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Equipos de Protección</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>Marca/Modelo Respirador</label>
              <select name="respirator" value={actividad.respirator} onChange={handleChange}>
                <option value="">Seleccione...</option>
                {respiradores.map(respirador => (
                  <option key={respirador.id} value={`${respirador.brand} / ${respirador.model}`}>{respirador.brand} / {respirador.model}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Filtro</label>
              <select name="filter" value={actividad.filter} onChange={handleChange}>
                <option value="">Seleccione...</option>
                {filtros.map(filtro => (
                  <option key={filtro.id} value={`${filtro.brand} / ${filtro.filter}`}>{filtro.brand} / {filtro.filter}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Cartucho</label>
              <select name="cartucho" value={actividad.cartucho} onChange={handleChange}>
                <option value="">Seleccione...</option>
                {cartuchos.map(cartucho => (
                  <option key={cartucho.id} value={`${cartucho.brand} / ${cartucho.cartridge}`}>{cartucho.brand} / {cartucho.cartridge}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Talla del Respirador</label>
              <input type="text" name="talla" value={actividad.talla} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Condiciones Ambientales</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>Temperatura Ambiental</label>
              <input type="text" name="temp" value={actividad.temp} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Humedad Relativa</label>
              <input type="text" name="hr" value={actividad.hr} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Presión Ambiental</label>
              <input type="text" name="pressure" value={actividad.pressure} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Exposición Química</h3>
          <div className="grid-container">
            <div className="form-group">
              <label>Agente Químico Expuesto</label>
              <select name="exposedChemAgent" value={actividad.exposedChemAgent} onChange={handleChange}>
                <option value="">Seleccione...</option>
                {agentesQuimicos.map(agent => (
                  <option key={agent.id} value={agent.chemicalAgent}>{agent.chemicalAgent}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Nivel de Exposición</label>
              <select name="exposureLevel" value={actividad.exposureLevel} onChange={handleChange}>
                <option value="">Seleccione...</option>
                {nivelesExposicion.map(level => (
                  <option key={level.id} value={level.exposureLevel}>{level.exposureLevel}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Descripción de Actividades</label>
              <textarea name="description" value={actividad.description} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <label>Archivo del Reporte</label>
              <input type="text" name="filepathReport" value={actividad.filepathReport} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="button-container">
          <button type="submit">Crear Actividad</button>
        </div>
      </form>
    </div>
  );
}

export default CrearActividad;


