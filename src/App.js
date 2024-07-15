// import './App.css';
// import {Routes, Route, useLocation} from 'react-router-dom';
// import Login from './pages/Login/Login';
// import Health from './pages/Health';
// import './pages/Login/Login.css';
// import Perfil from './pages/Perfil/Perfil.js';
// import ListaEmpresas from './pages/ListaEmpresas/ListaEmpresas';
// import GestionContratos from './pages/GestionContratos/GestionContratos';
// import ListaActividades from './pages/ListaActividades/ListaActividades';
// import Reportes from './pages/Reportes/Reportes';
// import CambioContrasena from './pages/CambioContrasena/CambioContrasena';
// import Navbar from './components/Navbar/Navbar.js';


// function App() {

//   const location = useLocation();
  

//   return (

//       <>
//         {location.pathname !== '/' && <Navbar />}
//         <Routes>
//           <Route path='/' element={<Login />}/>
//           <Route path='/health' element={<Health />}/>
//           <Route path="/perfil" element={<Perfil />} />
//           <Route path="/lista-empresas" element={<ListaEmpresas />} />
//           <Route path="/gestion-contratos" element={<GestionContratos />} />
//           <Route path="/lista-actividades" element={<ListaActividades />} />
//           <Route path="/reportes" element={<Reportes />} />
//           <Route path="/cambio-contrasena" element={<CambioContrasena />} />
//         </Routes>
//       </>
    
//   );
// }

// export default App;

import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login/Login';
import Health from './pages/Health';
import './pages/Login/Login.css';
import Perfil from './pages/Perfil/Perfil.js';
import ListaEmpresas from './pages/ListaEmpresas/ListaEmpresas';
import CrearEmpresa from './pages/CrearEmpresa/CrearEmpresa';
import GestionContratos from './pages/GestionContratos/GestionContratos';
import CrearContrato from './pages/CrearContrato/CrearContrato';
import EditarContrato from './pages/EditarContrato/EditarContrato';
import ListaActividades from './pages/ListaActividades/ListaActividades';
import DetalleActividad from './pages/DetalleActividad/DetalleActividad.js';
import CrearActividad from './pages/CrearActividad/CrearActividad';
import Reportes from './pages/Reportes/Reportes';
import CambioContrasena from './pages/CambioContrasena/CambioContrasena';
import Navbar from './components/Navbar/Navbar.js';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {location.pathname !== '/' && <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/health' element={<Health />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/lista-empresas" element={<ListaEmpresas />} />
          <Route path="/crear-empresa" element={<CrearEmpresa />} />
          <Route path="/gestion-contratos" element={<GestionContratos />} />
          <Route path="/crear-contrato" element={<CrearContrato />} />
          <Route path="/editar-contrato/:id" element={<EditarContrato />} />
          <Route path="/lista-actividades" element={<ListaActividades />} />
          <Route path="/detalle/:id" element={<DetalleActividad />} />
          <Route path="/crear-actividad" element={<CrearActividad />} />
          <Route path="/reportes" element={<Reportes isSidebarOpen={isSidebarOpen} />} />
          <Route path="/cambio-contrasena" element={<CambioContrasena />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

