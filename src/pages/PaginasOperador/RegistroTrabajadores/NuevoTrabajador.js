import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NuevoTrabajador.css';

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



function NuevoTrabajador() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = id === 'new';
    const newId = initialWorkers.length + 1;

    const trabajadorExistente = isNew ? {
        idTrabajador: newId,
        name: '',
        dni: '',
        birthday: '',
        company: '',
        workCondition: '',
        dateEntry: '',
        area: '',
        occupation: '',
        schedule: '',
        headquarters: '',
        location: '',
        riskFactor: '',
        weight: '',
        height: ''
    } : initialWorkers.find(c => c.idTrabajador === parseInt(id));

    const [newWorker, setNewWorker] = useState(trabajadorExistente);
    const [workers, setWorkers] = useState(initialWorkers);

    useEffect(() => {
        if (!isNew) {
            const workerToEdit = workers.find(worker => worker.idTrabajador === parseInt(id));
            if (workerToEdit) {
                setNewWorker(workerToEdit);
            }
        }
    }, [id, workers, isNew]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewWorker({
            ...newWorker,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isNew ? 'Nuevo Trabajador:' : 'Trabajador Editado:', newWorker);
        // lógica para la edición/creación hacia el backend
        navigate('/registro-trabajadores'); // volver al registro de trabajadors
    };

    const handleCancel = () => {
        navigate('/registro-trabajadores');
    };

    return (
        <div className="nuevo-trabajador-page">
            <h1>{isNew ? 'Agregar Nuevo trabajador' : 'Editar trabajador'}</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-section'>
                    <h2>Información Personal</h2>
                    <div className='grid-container'>
                        <div className="form-group">
                            <label>Nombre y apellido:</label>
                            <input type="text" name="name" value={newWorker.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>DNI:</label>
                            <input type="text" name="dni" value={newWorker.dni} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Fecha de nacimiento:</label>
                            <input type="date" name="birthday" value={newWorker.birthday} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Peso (Kg):</label>
                            <input type="text" name="weigth" value={newWorker.weight} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Altura (Cm):</label>
                            <input type="text" name="height" value={newWorker.height} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Factor de riesgo:</label>
                            <select name="riskFactor" value={newWorker.riskFactor} onChange={handleChange}>
                                {factoresRiesgo.map(factor => (
                                    <option key={factor.id} value={`${factor.id}`}>{factor.factor}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='form-section'>
                    <h2>Información Laboral</h2>
                    <div className='grid-container'>
                        <div className="form-group">
                            <label>Empresa:</label>
                            <input type="text" name="company" value={newWorker.company} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Condición laboral:</label>
                            <input type="text" name="workCondition" value={newWorker.workCondition} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Fecha de entrada:</label>
                            <input type="date" name="dateEntry" value={newWorker.dateEntry} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Área:</label>
                            <input type="text" name="area" value={newWorker.area} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Ocupación:</label>
                            <input type="text" name="occupation" value={newWorker.occupation} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Guardia:</label>
                            <input type="text" name="schedule" value={newWorker.schedule} onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className='form-section'>
                    <h2>Información de la prueba</h2>
                    <div className='grid-container'>
                        <div className="form-group">
                        <label>Sede:</label>
                        <input type="text" name="headquarters" value={newWorker.headquarters} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Ubicación:</label>
                            <input type="text" name="location" value={newWorker.location} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit">{isNew ? 'Agregar' : 'Guardar'}</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default NuevoTrabajador;