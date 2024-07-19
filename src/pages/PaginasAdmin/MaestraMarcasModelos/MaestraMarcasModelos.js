import React, { useState } from "react";
import './MaestraMarcasModelos.css';
import * as FaIcons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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

function MaestraMarcasModelos() {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('cartuchos');

  const editarCartucho = (id) => {
    navigate(`/editar-cartucho/${id}`);
  };

  const agregarCartucho = () => {
    navigate(`/editar-cartucho/new`);
  };

  const editarFiltro = (id) => {
    navigate(`/editar-filtro/${id}`);
  };

  const agregarFiltro = () => {
    navigate(`/editar-filtro/new`);
  };

  const editarRespirador = (id) => {
    navigate(`/editar-respirador/${id}`);
  };

  const agregarRespirador = () => {
    navigate(`/editar-respirador/new`);
  };

  return (
    <div className="marcas-modelos-page">
      <h1>Tabla Marcas y Modelos</h1>
      <div className="tabs">
        <button className={activeTab === 'cartuchos' ? 'active' : ''} onClick={() => setActiveTab('cartuchos')}>Cartuchos</button>
        <button className={activeTab === 'filtros' ? 'active' : ''} onClick={() => setActiveTab('filtros')}>Filtros</button>
        <button className={activeTab === 'respiradores' ? 'active' : ''} onClick={() => setActiveTab('respiradores')}>Respiradores</button>
      </div>
      {activeTab === 'cartuchos' && (
        <div className="tabla-section">
          <h2>Cartuchos</h2>
          <table className="tabla-cartuchos">
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Cartridge</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartuchos.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.brand}</td>
                  <td>{item.cartridge}</td>
                  <td className='icono-cell'><FaIcons.FaEdit className='icono-editar' color="black" onClick={() => editarCartucho(item.id)}/></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='button-container'>
            <button onClick={agregarCartucho}>Agregar Nuevo Cartucho</button>
          </div>
        </div>
      )}
      {activeTab === 'filtros' && (
        <div className="tabla-section">
          <h2>Filtros</h2>
          <table className="tabla-filtros">
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Filter</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtros.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.brand}</td>
                  <td>{item.filter}</td>
                  <td className='icono-cell'><FaIcons.FaEdit className='icono-editar' color="black" onClick={() => editarFiltro(item.id)}/></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='button-container'>
            <button onClick={agregarFiltro}>Agregar Nuevo Filtro</button>
          </div>
        </div>
      )}
      {activeTab === 'respiradores' && (
        <div className="tabla-section">
          <h2>Respiradores</h2>
          <table className="tabla-respiradores">
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>FPA</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {respiradores.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td>{item.fpa}</td>
                  <td className='icono-cell'><FaIcons.FaEdit className='icono-editar' color="black" onClick={() => editarRespirador(item.id)}/></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='button-container'>
            <button onClick={agregarRespirador}>Agregar Nuevo Respirador</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MaestraMarcasModelos;
