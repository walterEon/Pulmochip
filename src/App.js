import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import Login from './pages/Login/Login';
import Health from './pages/Health';
import './pages/Login/Login.css';
import Perfil from './pages/Perfil/Perfil.js';
import ListaEmpresas from './pages/ListaEmpresas/ListaEmpresas';
import GestionContratos from './pages/GestionContratos/GestionContratos';
import ListaActividades from './pages/ListaActividades/ListaActividades';
import Reportes from './pages/Reportes/Reportes';
import CambioContrasena from './pages/CambioContrasena/CambioContrasena';
import Navbar from './components/Navbar/Navbar.js';


function App() {

  const location = useLocation();

  return (

      <>
        {location.pathname !== '/' && <Navbar />}
        <Routes>
          
          <Route path='/' element={<Login />}/>
          <Route path='/health' element={<Health />}/>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/lista-empresas" element={<ListaEmpresas />} />
          <Route path="/gestion-contratos" element={<GestionContratos />} />
          <Route path="/lista-actividades" element={<ListaActividades />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/cambio-contrasena" element={<CambioContrasena />} />
        </Routes>
      </>
    
  );
}

export default App;
