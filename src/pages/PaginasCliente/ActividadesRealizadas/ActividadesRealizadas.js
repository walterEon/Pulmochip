import React, { useState, useEffect } from "react";
import './ActividadesRealizadas.css';

const actividades = [
  {
    idActivity: 1,
    idCompany: 1,
    idContract: 1,
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
    idCompany: 1,
    idContract: 2,
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
    idCompany: 1,
    idContract: 2,
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
    idCompany: 1,
    idContract: 3,
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
    idCompany: 2,
    idContract: 5,
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
    logo: 'path/to/logoB.png'
  }
];

const empresas = [
  { 
    id: 1, 
    RUC: '12345678901', 
    name: 'Empresa A', 
    tradename: 'Comercial A', 
    address: 'Calle 1', 
    telephone: '12345678', 
    contactName: 'Juan', 
    contactLastname: 'Perez', 
    contactLastname2: 'Gomez', 
    cellphone: '987654321', 
    email: 'empresaA@mail.com', 
    activo: 'Activo' 
  },
  { 
    id: 2, 
    RUC: '12345678902', 
    name: 'Empresa B', 
    tradename: 'Comercial B', 
    address: 'Calle 2', 
    telephone: '87654321', 
    contactName: 'Maria', 
    contactLastname: 'Lopez', 
    contactLastname2: 'Martinez', 
    cellphone: '912345678', 
    email: 'empresaB@mail.com', 
    activo: 'Inactivo' 
  }
]

function ActividadesRealizadas() {

  const [filtroContrato, setFiltroContrato] = useState('');

  const limpiarFiltros = () => {
    setFiltroContrato('');
  };

  const handleFiltroContrato = (e) => setFiltroContrato(e.target.value);

  const filtrarActividades = () => {
    return actividades.filter(actividad => 
      (filtroContrato === '' || actividad.idContract.includes(filtroContrato))
    );
  };


  return (
    <div className="actividades-realizadas-page">
      <h1>Actividades Realizadas</h1>
      <div className="filtros">

        <select value={filtroContrato} onChange={handleFiltroContrato}>
          <option value="">Orden de Servicio</option>
          {contratos.map(contrato => (
            <option value={contrato.serviceOrder}>{contrato.serviceOrder}</option>
          ))}
        </select>

        <button onClick={filtrarActividades}>Filtrar</button>
        <button onClick={limpiarFiltros}>Limpiar Filtros</button>

      </div>
    </div>
  );
}

export default ActividadesRealizadas; 