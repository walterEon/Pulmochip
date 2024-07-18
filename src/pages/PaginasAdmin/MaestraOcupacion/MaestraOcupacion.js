import React from 'react';
import './MaestraOcupacion.css';

const data = [
  { ID: 1, Area: 'Mina', Occupation: 'Operador de Cargador Frontal' },
  { ID: 2, Area: 'Mina', Occupation: 'Operador de Cisterna de Agua' },
  { ID: 3, Area: 'Mina', Occupation: 'Operador de Cisterna de Combustible' },
  { ID: 4, Area: 'Mina', Occupation: 'Operador de Excavadora' },
  { ID: 5, Area: 'Mina', Occupation: 'Operador de Motoniveladora' },
  { ID: 6, Area: 'Mina', Occupation: 'Operador de Perforadora' },
  { ID: 7, Area: 'Mina', Occupation: 'Operador de Retroexcavadora' },
  { ID: 8, Area: 'Mina', Occupation: 'Operador de Rodillo' },
  { ID: 9, Area: 'Mina', Occupation: 'Operador de Tractor de oruga' },
  { ID: 10, Area: 'Mina', Occupation: 'Operador de Tractor neumático' },
  { ID: 11, Area: 'Mina', Occupation: 'Operador de Locomotora' },
  { ID: 12, Area: 'Mina', Occupation: 'Ayudante de Locomotora' },
  { ID: 13, Area: 'Mina', Occupation: 'Operador de Rompebancos' },
  { ID: 14, Area: 'Mina', Occupation: 'Operador de Volquete' },
  { ID: 15, Area: 'Mina', Occupation: 'Operador de Camión minero' },
  { ID: 16, Area: 'Mina', Occupation: 'Operador de Camión Lubricador' },
  { ID: 17, Area: 'Mina', Occupation: 'Operador de Piso' },
  { ID: 18, Area: 'Mina', Occupation: 'Operador de Shotcrete' },
  { ID: 19, Area: 'Mina', Occupation: 'Ayudante de Shotcrete' },
  { ID: 20, Area: 'Mina', Occupation: 'Operador de Jumbo' },
  { ID: 21, Area: 'Mina', Occupation: 'Operador de Bolter' },
  { ID: 22, Area: 'Mina', Occupation: 'Operador de Scaler' },
  { ID: 23, Area: 'Mina', Occupation: 'Operador de Scoop' },
  { ID: 24, Area: 'Mina', Occupation: 'Operador de Dumper' },
  { ID: 25, Area: 'Mina', Occupation: 'Peón Mina' },
  { ID: 26, Area: 'Mina', Occupation: 'Operario Mina' },
  { ID: 27, Area: 'Mina', Occupation: 'Ayudante de Mina' },
  { ID: 28, Area: 'Mina', Occupation: 'Perforista' },
  { ID: 29, Area: 'Mina', Occupation: 'Ayudante de perforista' },
  { ID: 30, Area: 'Mina', Occupation: 'Operador de Simba' },
  { ID: 31, Area: 'Mina', Occupation: 'Ayudante de Simba' },
  { ID: 32, Area: 'Mina', Occupation: 'Timbrero' },
  { ID: 33, Area: 'Mina', Occupation: 'Supervisor Mina' },
  { ID: 34, Area: 'Planta', Occupation: 'Operador de Filtrado' },
  { ID: 35, Area: 'Planta', Occupation: 'Operador de Flotación' },
  { ID: 36, Area: 'Planta', Occupation: 'Operador de Remolienda' },
  { ID: 37, Area: 'Planta', Occupation: 'Operador de Molienda' },
  { ID: 38, Area: 'Planta', Occupation: 'Operador de Reactivos' },
  { ID: 39, Area: 'Planta', Occupation: 'Operador de Disposición de Relaves' },
  { ID: 40, Area: 'Planta', Occupation: 'Operador de Chancado' },
  { ID: 41, Area: 'Planta', Occupation: 'Operador de Lixiviación' },
  { ID: 42, Area: 'Planta', Occupation: 'Operador de planta ADR' },
  { ID: 43, Area: 'Planta', Occupation: 'Operador de chancadora primaria' },
  { ID: 44, Area: 'Planta', Occupation: 'Operador de Apron feeder' },
  { ID: 45, Area: 'Planta', Occupation: 'Operador de Tolva de finos' },
  { ID: 46, Area: 'Laboratorio metalúrgico', Occupation: 'Operario de Laboratorio Metalurgico' },
  { ID: 47, Area: 'Laboratorio químico', Occupation: 'Operario de Laboratorio Químico' },
  { ID: 48, Area: 'Laboratorio químico', Occupation: 'Operario fundidor' },
  { ID: 49, Area: 'Laboratorio químico', Occupation: 'Muestrero de planta' },
  { ID: 50, Area: 'Laboratorio químico', Occupation: 'Preparador de muestras' },
  { ID: 51, Area: 'Laboratorio químico', Occupation: 'Supervisión Planta' },
  { ID: 52, Area: 'Mantenimiento', Occupation: 'Mecánico soldador' },
  { ID: 53, Area: 'Mantenimiento', Occupation: 'Mecánico de mina' },
  { ID: 54, Area: 'Mantenimiento', Occupation: 'Mecánico Trackless' },
  { ID: 55, Area: 'Mantenimiento', Occupation: 'Mecánico Truckshop' },
  { ID: 56, Area: 'Mantenimiento', Occupation: 'Mecánico Maestranza' },
  { ID: 57, Area: 'Mantenimiento', Occupation: 'Electricista' },
  { ID: 58, Area: 'Mantenimiento', Occupation: 'Bombero' },
  { ID: 59, Area: 'Mantenimiento', Occupation: 'Instrumentista' },
  { ID: 60, Area: 'Mantenimiento', Occupation: 'Mecánico' },
  { ID: 61, Area: 'Mantenimiento', Occupation: 'Soldador' },
  { ID: 62, Area: 'Mantenimiento', Occupation: 'Mecánico Piques' },
  { ID: 63, Area: 'Mantenimiento', Occupation: 'Mecánico Mtto Predictivo' },
  { ID: 64, Area: 'Mantenimiento', Occupation: 'Supervisión Mantenimiento' },
  { ID: 65, Area: 'Geología', Occupation: 'Geólogo de Mina' },
  { ID: 66, Area: 'Geología', Occupation: 'Muestrero de mina' },
  { ID: 67, Area: 'Geología', Occupation: 'Ayudante de Muestrero' },
  { ID: 68, Area: 'Geología', Occupation: 'Operario de Corte de testigos' },
  { ID: 69, Area: 'Geología', Occupation: 'Operador de perforación diamantina' },
  { ID: 70, Area: 'Geología', Occupation: 'Ayudante de perforación diamantina' },
  { ID: 71, Area: 'Planeamiento', Occupation: 'Supervisor Geomecánico' },
  { ID: 72, Area: 'Planeamiento', Occupation: 'Topógrafo' },
  { ID: 73, Area: 'Planeamiento', Occupation: 'Ayudante de topógrafo' },
  { ID: 74, Area: 'Planeamiento', Occupation: 'Operador de raise bore' },
  { ID: 75, Area: 'Planeamiento', Occupation: 'Maestro de ventilación' },
  { ID: 76, Area: 'Planeamiento', Occupation: 'Auxiliar de ventilación' },
  { ID: 77, Area: 'Planeamiento', Occupation: 'Operador de Planta shotcrete' },
];

function MaestraOcupacion() {
  return (
    <div className="ocupacion-page">
      <h1>Tabla Ocupación</h1>
      <table className="ocupacion-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Area</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.ID}>
              <td>{row.ID}</td>
              <td>{row.Area}</td>
              <td>{row.Occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaestraOcupacion;

