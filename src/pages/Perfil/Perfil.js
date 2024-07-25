import React from 'react';
import DataField from '../../components/DataField/DataField.js';
import { FaUser, FaIdCard, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaRulerVertical, FaWeight } from 'react-icons/fa';
import './Perfil.css';

function Perfil() {
  return (
    <div className="perfil-page">
      <div className='titulo'>
        <h2>Perfil de usuario</h2>
      </div>  
      <div className="perfil-section">
        <h3>Información personal</h3>
          <DataField icon={<FaUser />} label="Nombre" value="Juan" />
          <DataField icon={<FaUser />} label="Apellido paterno" value="Quispe" />
          <DataField icon={<FaUser />} label="Apellido materno" value="Ramos" />
          <DataField icon={<FaIdCard />} label="DNI" value="21321321" />
          <DataField icon={<FaIdCard />} label="Celular" value="948927392" />
          <h3>Información de la cuenta</h3>
          <DataField icon={<FaBriefcase />} label="Tipo de usuario" value="Administrador" />
          <DataField icon={<FaWeight />} label="Email" value="jquispe@gmail.com" />
          <DataField icon={<FaWeight />} label="Fecha de registro" value="01-01-2024" />
      </div>
    </div>

    
  );
}

export default Perfil;

