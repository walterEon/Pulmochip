import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login/Login';
import Health from './pages/Health';
import './pages/Login/Login.css';
import Perfil from './pages/Perfil/Perfil.js';
import ListaEmpresas from './pages/PaginasEmpresa/ListaEmpresas/ListaEmpresas.js';
import CrearEmpresa from './pages/PaginasEmpresa/CrearEmpresa/CrearEmpresa.js';
import EditarEmpresa from './pages/PaginasEmpresa/EditarEmpresa/EditarEmpresa.js';
import GestionContratos from './pages/PaginasEmpresa/GestionContratos/GestionContratos.js';
import CrearContrato from './pages/PaginasEmpresa/CrearContrato/CrearContrato.js';
import EditarContrato from './pages/PaginasEmpresa/EditarContrato/EditarContrato.js';
import ListaActividades from './pages/PaginasEmpresa/ListaActividades/ListaActividades.js';
import EditarActividad from './pages/PaginasEmpresa/EditarActividad/EditarActividad.js';
import DetalleActividad from './pages/PaginasEmpresa/DetalleActividad/DetalleActividad.js';
import CrearActividad from './pages/PaginasEmpresa/CrearActividad/CrearActividad.js';
import Reportes from './pages/Reportes/Reportes';
import CambioContrasena from './pages/CambioContrasena/CambioContrasena';


import MaestraGuardia from './pages/PaginasAdmin/MaestraGuardia/MaestraGuardia.js';
import EditarGuardia from './pages/PaginasAdmin/MaestraGuardia/EditarGuardia.js';
import MaestraOcupacion from './pages/PaginasAdmin/MaestraOcupacion/MaestraOcupacion.js';
import EditarOcupacion from './pages/PaginasAdmin/MaestraOcupacion/EditarOcupacion.js';
import MaestraCondicionLaboral from './pages/PaginasAdmin/MaestraCondicionLaboral/MaestraCondicionLaboral.js';
import EditarCondicionLaboral from './pages/PaginasAdmin/MaestraCondicionLaboral/EditarCondicionLaboral.js';
import MaestraMarcasModelos from './pages/PaginasAdmin/MaestraMarcasModelos/MaestraMarcasModelos.js';
import EditarCartucho from './pages/PaginasAdmin/MaestraMarcasModelos/EditarCartucho.js';
import EditarFiltro from './pages/PaginasAdmin/MaestraMarcasModelos/EditarFiltro.js';
import EditarRespirador from './pages/PaginasAdmin/MaestraMarcasModelos/EditarRespirador.js';
import MaestraFactoresRiesgo from './pages/PaginasAdmin/MaestraFactoresRiesgo/MaestraFactoresRiesgo.js';
import EditarFactorRiesgo from './pages/PaginasAdmin/MaestraFactoresRiesgo/EditarFactorRiesgo.js';

import RegistroEmpresas from './pages/PaginasOperador/RegistroEmpresas/RegistroEmpresas.js';
import RegistroMedicos from './pages/PaginasOperador/RegistroMedicos/RegistroMedicos.js';
import RegistroTrabajadores from './pages/PaginasOperador/RegistroTrabajadores/RegistroTrabajadores.js';
import RegistroUsuarios from './pages/PaginasOperador/RegistroUsuarios/RegistroUsuarios.js';
import NuevoTrabajador from './pages/PaginasOperador/RegistroTrabajadores/NuevoTrabajador.js';
import NuevoUsuario from './pages/PaginasOperador/RegistroUsuarios/NuevoUsuario.js';

import ListaTrabajadores from './pages/PaginasCliente/ListaTrabajadores/ListaTrabajadores.js';
import ActividadesRealizadas from './pages/PaginasCliente/ActividadesRealizadas/ActividadesRealizadas.js';
import IndicadoresTrabajador from './pages/PaginasCliente/IndicadoresTrabajador/IndicadoresTrabajador.js';
import IndicadoresActividad from './pages/PaginasCliente/IndicadoresActividad/IndicadoresActividad.js';
import IndicadoresContrato from './pages/PaginasCliente/IndicadoresContrato/IndicadoresContrato.js';

import Navbar from './components/Navbar/Navbar.js';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userType, setUserType] = useState(localStorage.getItem('userType') || 'empresa'); 
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {location.pathname !== '/' && <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} userType={userType}/>}
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Routes>

          {/* Páginas Comunes */}

          <Route path='/' element={<Login setUserType={setUserType}/>} />
          <Route path='/health' element={<Health />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cambio-contrasena" element={<CambioContrasena />} />

          {/* Páginas de Administrador */}

          <Route path="/maestra-ocupacion" element={<MaestraOcupacion />} />
          <Route path="/editar-ocupacion/:id" element={<EditarOcupacion />} />

          <Route path="/maestra-guardia" element={<MaestraGuardia />} />
          <Route path="/editar-guardia/:id" element={<EditarGuardia />} />

          <Route path="/maestra-condicion-laboral" element={<MaestraCondicionLaboral />} />
          <Route path="/editar-condicion-laboral/:id" element={<EditarCondicionLaboral />} />

          <Route path="/maestra-marcas-modelos" element={<MaestraMarcasModelos />} />
          <Route path="/editar-cartucho/:id" element={<EditarCartucho />} />
          <Route path="/editar-filtro/:id" element={<EditarFiltro />} />
          <Route path="/editar-respirador/:id" element={<EditarRespirador />} />
          <Route path="/maestra-factores-riesgo" element={<MaestraFactoresRiesgo />} />
          <Route path="/editar-factor-riesgo/:id" element={<EditarFactorRiesgo />} />


          {/* Páginas de Operador */}

          <Route path="/registro-usuarios" element={<RegistroUsuarios />} />
          <Route path="/nuevo-usuario/:id" element={<NuevoUsuario />} />
          <Route path="/registro-medicos" element={<RegistroMedicos />} />
          <Route path="/registro-trabajadores" element={<RegistroTrabajadores />} />
          <Route path="/nuevo-trabajador/:id" element={<NuevoTrabajador />} />
          <Route path="/registro-empresas" element={<RegistroEmpresas />} />

          {/* Páginas de Empresa */}

          <Route path="/lista-empresas" element={<ListaEmpresas />} />
          <Route path="/crear-empresa" element={<CrearEmpresa />} />
          <Route path="/editar-empresa/:id" element={<EditarEmpresa />} />

          <Route path="/gestion-contratos" element={<GestionContratos />} />
          <Route path="/crear-contrato" element={<CrearContrato />} />
          <Route path="/editar-contrato/:id" element={<EditarContrato />} />

          <Route path="/lista-actividades" element={<ListaActividades />} />
          <Route path="/editar-actividad/:id" element={<EditarActividad />} />
          <Route path="/detalle/:id" element={<DetalleActividad />} />
          <Route path="/crear-actividad" element={<CrearActividad />} />

          <Route path="/reportes" element={<Reportes />} />

          {/* Páginas de Cliente */}

          <Route path="/lista-trabajadores" element={<ListaTrabajadores />} />
          <Route path="/actividades-realizadas" element={<ActividadesRealizadas />} />
          <Route path="/indicadores-trabajador" element={<IndicadoresTrabajador />} />
          <Route path="/indicadores-actividad" element={<IndicadoresActividad />} />
          <Route path="/indicadores-contrato" element={<IndicadoresContrato />} />

          
        </Routes>
      </div>
    </>
  );
}

export default App;

