import React from 'react';
import { useParams } from 'react-router-dom';
import './DetalleTrabajador.css';

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

const scheduleData = [
    { id: 1, Schedule: 'Mañana' },
    { id: 2, Schedule: 'Tarde' },
    { id: 3, Schedule: 'Noche' },
    { id: 4, Schedule: 'Otro' },
  ];

const workConditionData = [
    { id: 1, WorkCondition: 'Contratista – Actividad minera' },
    { id: 2, WorkCondition: 'Contratista –  Actividad conexa' },
    { id: 3, WorkCondition: 'Titular minero' },
    { id: 4, WorkCondition: 'Subcontratista' },
    { id: 5, WorkCondition: 'Práctica Profesional' },
    { id: 6, WorkCondition: 'Práctica Preprofesional' },
  ];

const occupationData = [
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

const initialWorkers = [
    {
      idTrabajador: 1,
      name: 'Juan Pérez',
      dni: '12345678',
      birthday: '1990-01-01',
      company: 'Company A',
      workCondition: 1,
      dateEntry: '2024-01-01',
      area: 1,
      occupation: 1,
      schedule: 1,
      headquarters: 'HQ1',
      location: 'Location 1',
      riskFactor: 1,
      weight: 70,
      height: 175
    },
    {
      idTrabajador: 2,
      name: 'María Gómez',
      dni: '87654321',
      birthday: '1990-01-02',
      company: 'Company B',
      workCondition: 1,
      dateEntry: '2024-01-02',
      area: 2,
      occupation: 2,
      schedule: 2,
      headquarters: 'HQ2',
      location: 'Location 2',
      riskFactor: 2,
      weight: 60,
      height: 170
    },
    // Añadir más trabajadores según sea necesario
  ];

function DetalleTrabajador() {
  const { id } = useParams();
  const worker = initialWorkers.find(w => w.idTrabajador === parseInt(id));

  if (!worker) {
    return <div>Trabajador no encontrado</div>;
  }

  return (
    <div className="detalle-trabajador">
      <h2>Información Personal</h2>
      <div className="info-section">
        <div className="info-box"><strong>Nombre:</strong> {worker.name}</div>
        <div className="info-box"><strong>DNI:</strong> {worker.dni}</div>
        <div className="info-box"><strong>Fecha de nacimiento:</strong> {worker.birthday}</div>
        <div className="info-box"><strong>Altura:</strong> {worker.height} cm</div>
        <div className="info-box"><strong>Peso:</strong> {worker.weight} kg</div>
        <div className="info-box"><strong>Factor de riesgo:</strong> {factoresRiesgo.find(r => r.id === parseInt(worker.riskFactor)).factor}</div>
      </div>

      <h2>Información laboral</h2>
      <div className="info-section">
        <div className="info-box"><strong>Empresa:</strong> {worker.company}</div>
        <div className="info-box"><strong>Condición laboral:</strong> {workConditionData.find(w => w.id === parseInt(worker.workCondition)).WorkCondition}</div>
        <div className="info-box"><strong>Fecha de entrada:</strong> {worker.dateEntry}</div>
        <div className="info-box"><strong>Área:</strong> {occupationData.find(o => o.id === parseInt(worker.area)).Area}</div>
        <div className="info-box"><strong>Ocupación:</strong> {occupationData.find(o => o.id === parseInt(worker.occupation)).Occupation}</div>
        <div className="info-box"><strong>Guardia:</strong> {scheduleData.find(s => s.id === parseInt(worker.schedule)).Schedule}</div>
      </div>

      <h2>Información de la prueba</h2>
      <div className="info-section">
        <div className="info-box"><strong>Sede:</strong> {worker.headquarters}</div>
        <div className="info-box"><strong>Ubicación:</strong> {worker.location}</div>
      </div>

    </div>
  );
}

export default DetalleTrabajador;