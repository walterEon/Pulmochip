// import React, { useState } from "react";
// import '../Perfil/Perfil.css';

// function Perfil() {

//   return (
//     <div className="perfil">
//       <h2>
//         Perfil de usuario
//       </h2>
//     </div>
    
//   );
// }

// export default Perfil;

// Perfil.js
import React from 'react';
import DataField from '../../components/DataField/DataField.js';
import { FaUser, FaIdCard, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaRulerVertical, FaWeight } from 'react-icons/fa';
import './Perfil.css';

function Perfil() {
  return (
    <div className="perfil-page">
      <h2>HOJA DE CAMPO</h2>
      <div className="perfil-section">
        <h3>Información del evaluado</h3>
          <DataField icon={<FaUser />} label="Nombre" value="Juan Quispe" />
          <DataField icon={<FaIdCard />} label="DNI" value="21321321" />
          <DataField icon={<FaBriefcase />} label="Puesto" value="Ayudante de Mina" />
          <DataField icon={<FaWeight />} label="Edad" value="1" />
          <DataField icon={<FaRulerVertical />} label="Peso y talla" value="2 / 3" />
          <DataField icon={<FaMapMarkerAlt />} label="Ubicación" value="4" />
          <DataField icon={<FaCalendarAlt />} label="Fecha" value="14/06/2020" />
      </div>
    </div>
  );
}

export default Perfil;

