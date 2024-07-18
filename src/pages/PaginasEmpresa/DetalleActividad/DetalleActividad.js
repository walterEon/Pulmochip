import React from 'react';
import { useParams } from 'react-router-dom';
import './DetalleActividad.css';

const actividades = [
  { id: 1, empresa: 'Empresa A', ordenServicio: 'OS123', fechaRegistro: '2024-07-01', horaInicio: '08:00', horaTermino: '17:00', estado: 'Activo', workerID: 'Juan Quispe', startLunch: '12:00', finishLunch: '12:30', initialDisplacement: '00:30', finalDisplacement: '00:30', respirator: 'Dräger / X-plore 3500', filter: '2091', cartucho: '6005', talla: 'M', temp: '20', hr: '60', pressure: '1012', exposedChemAgent: 'A1', exposureLevel: 'Low', description: 'Actividad A', filepathReport: 'reportA.pdf' },
  { id: 2, empresa: 'Empresa B', ordenServicio: 'OS124', fechaRegistro: '2024-07-02', horaInicio: '09:00', horaTermino: '18:00', estado: 'Inactivo', workerID: 'Maria Perez', startLunch: '13:00', finishLunch: '13:30', initialDisplacement: '00:20', finalDisplacement: '00:20', respirator: '3M / 7500', filter: '7093', cartucho: '6003', talla: 'L', temp: '25', hr: '55', pressure: '1010', exposedChemAgent: 'B2', exposureLevel: 'Medium', description: 'Actividad B', filepathReport: 'reportB.pdf' }
];

function DetalleActividad() {
  const { id } = useParams();
  const actividad = actividades.find(act => act.id === parseInt(id));

  if (!actividad) {
    return <div>Actividad no encontrada</div>;
  }

  return (
    <div className="detalle-actividad">
      <h2>Información General</h2>
      <div className="info-section">
        <div className="info-box"><strong>ID Actividad:</strong> {actividad.id}</div>
        <div className="info-box"><strong>Empresa:</strong> {actividad.empresa}</div>
        <div className="info-box"><strong>Orden de Servicio:</strong> {actividad.ordenServicio}</div>
        <div className="info-box"><strong>Fecha de Registro:</strong> {actividad.fechaRegistro}</div>
        <div className="info-box"><strong>Hora de Inicio:</strong> {actividad.horaInicio}</div>
        <div className="info-box"><strong>Hora de Término:</strong> {actividad.horaTermino}</div>
        <div className="info-box"><strong>Estado:</strong> {actividad.estado}</div>
        <div className="info-box"><strong>Nombre y Apellidos del Trabajador:</strong> {actividad.workerID}</div>
      </div>

      <h2>Tiempos de Actividad</h2>
      <div className="info-section">
        <div className="info-box"><strong>Hora de Inicio del Almuerzo:</strong> {actividad.startLunch}</div>
        <div className="info-box"><strong>Hora de Fin del Almuerzo:</strong> {actividad.finishLunch}</div>
        <div className="info-box"><strong>Tiempo en llegar al puesto de trabajo:</strong> {actividad.initialDisplacement}</div>
        <div className="info-box"><strong>Tiempo en retornar del puesto de trabajo:</strong> {actividad.finalDisplacement}</div>
      </div>

      <h2>Equipos de Protección</h2>
      <div className="info-section">
        <div className="info-box"><strong>Marca/Modelo Respirador:</strong> {actividad.respirator}</div>
        <div className="info-box"><strong>Filtro:</strong> {actividad.filter}</div>
        <div className="info-box"><strong>Cartucho:</strong> {actividad.cartucho}</div>
        <div className="info-box"><strong>Talla del Respirador:</strong> {actividad.talla}</div>
      </div>

      <h2>Condiciones Ambientales</h2>
      <div className="info-section">
        <div className="info-box"><strong>Temperatura Ambiental:</strong> {actividad.temp}</div>
        <div className="info-box"><strong>Humedad Relativa:</strong> {actividad.hr}</div>
        <div className="info-box"><strong>Presión Ambiental:</strong> {actividad.pressure}</div>
      </div>

      <h2>Exposición Química</h2>
      <div className="info-section">
        <div className="info-box"><strong>Agente Químico Expuesto:</strong> {actividad.exposedChemAgent}</div>
        <div className="info-box"><strong>Nivel de Exposición:</strong> {actividad.exposureLevel}</div>
        <div className="info-box"><strong>Descripción de Actividades:</strong> {actividad.description}</div>
        <div className="info-box"><strong>Archivo del Reporte:</strong> {actividad.filepathReport}</div>
      </div>
    </div>
  );
}

export default DetalleActividad;
