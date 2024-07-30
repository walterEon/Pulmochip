import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditarContrato.css';

const contratos = [
  {
    id: 1,
    draegerUser: 'Usuario1',
    amount: 10000,
    company: 'Empresa A',
    initialDate: '2024-01-01',
    finalDate: '2024-12-31',
    quantity: 50,
    serviceOrder: 'OS123',
    done: 'done',
    logo: 'path/to/logoA.png'
  },
  {
    id: 2,
    draegerUser: 'Usuario2',
    amount: 20000,
    company: 'Empresa B',
    initialDate: '2024-02-01',
    finalDate: '2024-11-30',
    quantity: 100,
    serviceOrder: 'OS124',
    done: 'Indone',
    logo: 'path/to/logoB.png'
  }
];

const actividadesIniciales = [
  {
    idActivity: 1,
    idCompany: 'Empresa A',
    idContract: 'OS123',
    date: '2024-01-15',
    startHour: '08:00',
    initialDisplacement: '08:30',
    startLunch: '12:00',
    finishLunch: '13:00',
    finalDisplacement: '17:30',
    finishHour: '18:00',
    respirator: 1,
    filter: 1,
    done: '1',
    cartridge: 1,
    temperature: '25',
    humidity: '60',
    pressure: '1013'
  },
  {
    idActivity: 2,
    idCompany: 'Empresa B',
    idContract: 'OS124',
    date: '2024-02-20',
    startHour: '09:00',
    initialDisplacement: '09:30',
    startLunch: '12:30',
    finishLunch: '13:30',
    finalDisplacement: '18:00',
    finishHour: '18:30',
    respirator: 2,
    filter: 2,
    done: '1',
    cartridge: 2,
    temperature: '28',
    humidity: '65',
    pressure: '1010'
  },
  {
    idActivity: 3,
    idCompany: 'Empresa C',
    idContract: 'OS125',
    date: '2024-03-10',
    startHour: '07:30',
    initialDisplacement: '08:00',
    startLunch: '11:30',
    finishLunch: '12:30',
    finalDisplacement: '16:30',
    finishHour: '17:00',
    respirator: 3,
    filter: 3,
    done: '0',
    cartridge: 3,
    temperature: '22',
    humidity: '55',
    pressure: '1015'
  },
  {
    idActivity: 4,
    idCompany: 'Empresa A',
    idContract: 'OS126',
    date: '2024-04-05',
    startHour: '10:00',
    initialDisplacement: '10:30',
    startLunch: '13:00',
    finishLunch: '14:00',
    finalDisplacement: '19:00',
    finishHour: '19:30',
    respirator: 4,
    filter: 4,
    done: '1',
    cartridge: 4,
    temperature: '26',
    humidity: '70',
    pressure: '1008'
  },
  {
    idActivity: 5,
    idCompany: 'Empresa B',
    idContract: 'OS127',
    date: '2024-05-12',
    startHour: '06:00',
    initialDisplacement: '06:30',
    startLunch: '10:00',
    finishLunch: '11:00',
    finalDisplacement: '15:00',
    finishHour: '15:30',
    respirator: 5,
    filter: 5,
    done: '0',
    cartridge: 5,
    temperature: '30',
    humidity: '75',
    pressure: '1005'
  }
];

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


function EditarContrato() {

  const [agregarEditar, setAgregarEditar] = useState('');

  const getRespiratorName = (id) => {
    const respirator = respiradores.find(res => res.id === id);
    console.log('respirador ')
    return respirator ? `${respirator.brand} / ${respirator.model}` : '';
  };
  
  const getFilterName = (id) => {
    const filter = filtros.find(fil => fil.id === id);
    return filter ? `${filter.brand} / ${filter.filter}` : '';
  };
  
  const getCartridgeName = (id) => {
    const cartridge = cartuchos.find(car => car.id === id);
    return cartridge ? `${cartridge.brand} / ${cartridge.cartridge}` : '';
  };

  
  const { id } = useParams();
  const navigate = useNavigate();
  const contratoExistente = contratos.find(c => c.id === parseInt(id));

  const [contrato, setContrato] = useState(contratoExistente);
  const [actividades, setActividades] = useState(actividadesIniciales);
  const [actividad, setActividad] = useState({
    idActivity: '',
    idCompany: contrato.company,
    idContract: contrato.serviceOrder,
    date: '',
    startHour: '',
    initialDisplacement: '',
    startLunch: '',
    finishLunch: '',
    finalDisplacement: '',
    finishHour: '',
    respirator: '',
    filter: '',
    done: '',
    cartridge: '',
    temperature: '',
    humidity: '',
    pressure: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContrato({
      ...contrato,
      [name]: value
    });
  };

  const handleActividadChange = (e) => {
    const { name, value } = e.target;
    setActividad({
      ...actividad,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contrato Editado:', contrato);
    // lógica para la edición hacia el backend
    navigate('/gestion-contratos'); // ir de vuelta a la gestión de contratos
  };

  const handleCancel = () => {
    navigate('/gestion-contratos');
  };

  const handleCancelActividad = () => {
    setShowActivityForm(false); 
  };

  const handleActividadSubmit = (e) => {
    e.preventDefault();
    if (actividad.idActivity) {
      // Editar actividad existente
      setActividades(actividades.map(act => (act.idActivity === actividad.idActivity ? actividad : act)));
    } else {
      // Crear nueva actividad

      setActividad({
        ...actividad,
        idActivity: 6
      });
      setActividades([...actividades, actividad]);
    }

    setShowActivityForm(false); 

    setActividad({
      idActivity: '',
      idCompany: contrato.company,
      idContract: contrato.serviceOrder,
      date: '',
      startHour: '',
      initialDisplacement: '',
      startLunch: '',
      finishLunch: '',
      finalDisplacement: '',
      finishHour: '',
      respirator: '',
      filter: '',
      done: '',
      cartridge: '',
      temperature: '',
      humidity: '',
      pressure: ''
    });
  };

  const [showActivityForm, setShowActivityForm] = useState(false);

  const handleEditActividad = (id) => {
    setAgregarEditar('Editar Actividad');
    const actividadEditar = actividades.find(act => act.idActivity === id);
    setActividad(actividadEditar);
    setShowActivityForm(true);
  };

  const handleDeleteActividad = (id) => {
    setActividades(actividades.filter(act => act.idActivity !== id));
  };

  const handleAddActivity = () => {
    setAgregarEditar('Agregar Nueva Actividad');
    setActividad({
      idActivity: '',
      idCompany: contrato.company,
      idContract: contrato.serviceOrder,
      date: '',
      startHour: '',
      initialDisplacement: '',
      startLunch: '',
      finishLunch: '',
      finalDisplacement: '',
      finishHour: '',
      respirator: '',
      filter: '',
      done: '',
      cartridge: '',
      temperature: '',
      humidity: '',
      pressure: ''
    });
    setShowActivityForm(true);
  };

  return (
    <div className="editar-contrato">
      <h1>Gestión de Contrato</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Información General</h2>
          <div className="grid-container">
            <div className="form-group">
              <label>ID Contrato</label>
              <input type="text" name="id" value={contrato.id} onChange={handleChange} disabled />
            </div>
            <div className="form-group">
              <label>Usuario Draeger</label>
              <input type="text" name="draegerUser" value={contrato.draegerUser} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Monto</label>
              <input type="text" name="amount" value={contrato.amount} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Empresa</label>
              <input type="text" name="company" value={contrato.company} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Fecha de Inicio</label>
              <input type="date" name="initialDate" value={contrato.initialDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Fecha Final</label>
              <input type="date" name="finalDate" value={contrato.finalDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Cantidad de Trabajadores</label>
              <input type="text" name="quantity" value={contrato.quantity} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Número de Orden de Servicio</label>
              <input type="text" name="serviceOrder" value={contrato.serviceOrder} onChange={handleChange} required />
            </div>
            {/* <div className="form-group">
              <label>Estado</label>
              <select name="done" value={contrato.done} onChange={handleChange} required>
                <option value="">Seleccione...</option>
                <option value="done">done</option>
                <option value="Indone">Indone</option>
              </select>
            </div> */}
          </div>
        </div>

        <div className="button-container">
          <button type="submit">Guardar Cambios</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>

      <div className="form-section">
        <h2>Gestionar Actividades</h2>

        <h4>Lista de Actividades</h4>
        <table className="activities-table">
          <thead>
            <tr>
              <th>ID Actividad</th>
              <th>Hora de Inicio</th>
              <th>Tiempo de Llegada</th>
              <th>Hora de Inicio de Refrigerio</th>
              <th>Hora de Fin de Refrigerio</th>
              <th>Tiempo de Retorno</th>
              <th>Hora de Término</th>
              <th>Marca/Modelo Respirador</th>
              <th>Filtro</th>
              <th>Cartucho</th>
              <th>Temperatura Ambiental</th>
              <th>Humedad Relativa (%)</th>
              <th>Presión Ambiental</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {actividades.map(act => (
              <tr key={act.idActivity}>
                <td>{act.idActivity}</td>
                <td>{act.startHour}</td>
                <td>{act.initialDisplacement}</td>
                <td>{act.startLunch}</td>
                <td>{act.finishLunch}</td>
                <td>{act.finalDisplacement}</td>
                <td>{act.finishHour}</td>
                <td>{getRespiratorName(act.respirator)}</td>
                <td>{getFilterName(act.filter)}</td>
                <td>{getCartridgeName(act.cartridge)}</td>
                <td>{act.temperature}</td>
                <td>{act.humidity}</td>
                <td>{act.pressure}</td>
                <td>{act.done == 1 ? 'Realizada' : 'No Realizada'}</td>
                <td>
                  <button onClick={() => handleEditActividad(act.idActivity)}>Editar</button>
                  <button onClick={() => handleDeleteActividad(act.idActivity)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="button-container">
          <button onClick={handleAddActivity}>Agregar Nueva Actividad</button>
        </div>

        {showActivityForm  && ( 
          <form onSubmit={handleActividadSubmit}>
            <h2>{agregarEditar}</h2>
            <div className="grid-container">
              <div className="form-group">
                <label>ID Actividad</label>
                <input type="text" name="idActivity" value={actividad.idActivity} onChange={handleActividadChange} disabled />
              </div>
              <div className="form-group">
                <label>Hora de Inicio</label>
                <input type="time" name="startHour" value={actividad.startHour} onChange={handleActividadChange} required />
              </div>
              <div className="form-group">
                <label>Tiempo de Llegada</label>
                <input type="time" name="initialDisplacement" value={actividad.initialDisplacement} onChange={handleActividadChange} required />
              </div>
              <div className="form-group">
                <label>Hora de Inicio de Refrigerio</label>
                <input type="time" name="startLunch" value={actividad.startLunch} onChange={handleActividadChange} required />
              </div>
              <div className="form-group">
                <label>Hora de Fin de Refrigerio</label>
                <input type="time" name="finishLunch" value={actividad.finishLunch} onChange={handleActividadChange} required />
              </div>
              <div className="form-group">
                <label>Tiempo de Retorno</label>
                <input type="time" name="finalDisplacement" value={actividad.finalDisplacement} onChange={handleActividadChange} required />
              </div>
              <div className="form-group">
                <label>Hora de Término</label>
                <input type="time" name="finishHour" value={actividad.finishHour} onChange={handleActividadChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor="respirator">Respirador:</label>
                <select id="respirator" name="respirator" value={actividad.respirator} onChange={handleActividadChange}>
                  <option value="">Selecciona un respirador</option>
                  {respiradores.map((res) => (
                    <option key={res.id} value={res.id}>
                      {`${res.brand} / ${res.model}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor="filter">Filtro:</label>
                <select id="filter" name="filter" value={actividad.filter} onChange={handleActividadChange}>
                  <option value="">Selecciona un filtro</option>
                  {filtros.map((fil) => (
                    <option key={fil.id} value={fil.id}>
                      {`${fil.brand} / ${fil.filter}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor="cartridge">Cartucho:</label>
                <select id="cartridge" name="cartridge" value={actividad.cartridge} onChange={handleActividadChange}>
                  <option value="">Selecciona un cartucho</option>
                  {cartuchos.map((car) => (
                    <option key={car.id} value={car.id}>
                      {`${car.brand} / ${car.cartridge}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Temperatura Ambiental</label>
                <input type="number" name="temperature" value={actividad.temperature} onChange={handleActividadChange} required />
              </div>
              <div className="form-group">
                <label>Humedad Relativa (%)</label>
                <input type="number" name="humidity" value={actividad.humidity} onChange={handleActividadChange} required />
              </div>
              <div className="form-group">
                <label>Presión Ambiental</label>
                <input type="number" name="pressure" value={actividad.pressure} onChange={handleActividadChange} required />
              </div>
              <div className="form-group">
                <label>Estado</label>
                <select name="done" value={actividad.done} onChange={handleActividadChange} required>
                  <option value="">Seleccione...</option>
                  <option value="0">No realizada</option>
                  <option value="1">Realizada</option>
                </select>
              </div>
            </div>
  
            <div className="button-container">
              <button type="submit">Guardar Actividad</button>
              <button type="button" onClick={handleCancelActividad}>Cancelar</button>
            </div>
          </form>
        )}
        

        
      </div>
    </div>
  );
}

export default EditarContrato;
