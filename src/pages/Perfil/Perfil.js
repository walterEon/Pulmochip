import React from 'react';
import DataField from '../../components/DataField/DataField.js';
import { FaUser, FaIdCard, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaRulerVertical, FaWeight } from 'react-icons/fa';
import './Perfil.css';

function Perfil() {
  return (
    <div className="perfil-page">
      <div className='titulo'>
        <h2>HOJA DE CAMPO</h2>
      </div>
      <div className="perfil-section">
        <h3>Información del evaluado</h3>
          <DataField icon={<FaUser />} label="Nombre" value="Juan Quispe" />
          <DataField icon={<FaIdCard />} label="DNI" value="21321321" />
          <DataField icon={<FaBriefcase />} label="Puesto" value="Ayudante de Mina" />
          <DataField icon={<FaWeight />} label="Área" value="Mina" />
          <DataField icon={<FaWeight />} label="Edad" value="1" />
          <DataField icon={<FaRulerVertical />} label="Peso y talla" value="2 / 3" />
          <DataField icon={<FaMapMarkerAlt />} label="Ubicación" value="4" />
          <DataField icon={<FaCalendarAlt />} label="Fecha" value="14/06/2020" />
          <h3>Información de la protección respiratoria</h3>
          <DataField icon={<FaUser />} label="Modelo y marca de respirador" value="Dräger / X-plore 3500" />
          <DataField icon={<FaIdCard />} label="Talla" value="1" />
          <DataField icon={<FaBriefcase />} label="Filtro" value="2091" />
          <DataField icon={<FaWeight />} label="Cartucho" value="6005" />
          <DataField icon={<FaWeight />} label="Factor de protección asignado del respirador (FPA)" value="10" />
          <h3>Información de las condiciones ambientales y actividades</h3>
          <DataField icon={<FaUser />} label="Temperatura ambiental (ºC)" value="24" />
          <DataField icon={<FaIdCard />} label="Humedad relativa (%)" value="70" />
          <DataField icon={<FaBriefcase />} label="Presión (mmHg)" value="4" />
      </div>
    </div>
  );
}

export default Perfil;

