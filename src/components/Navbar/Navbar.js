// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as MdIcons from 'react-icons/md';
// import { Sidebar } from "../Sidebar/Sidebar.js";
// import './Navbar.css';
// import { IconContext } from "react-icons";
// import logo from './drager.png';


// function Navbar(){

//     const [sidebar, setSidebar] = useState(false);

//     const showSidebar = () => setSidebar(!sidebar);

//     return(
//         <>
//         <IconContext.Provider value={{color: '#fff'}}>
//             <div className="navbar">
//                 <Link to='#' className="menu-bars">
//                     <FaIcons.FaBars color="black" onClick={showSidebar} />
//                 </Link>
//                 <div className="navbar-center">
//                     <img src={logo} alt="Logo" className="navbar-logo" />
//                 </div>
//                 <div className="navbar-right">
//                     <MdIcons.MdPersonOff color="black" className="iconoclose"/>
//                     <Link to='/' className="logout-link">
//                         Cerrar Sesión
//                     </Link>
//                 </div>
//             </div>
//             <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//                 <ul className="nav-menu-items" onClick={showSidebar}>
//                     <li className="navbar-toggle">
//                         <Link to='#' className="menu-bars-close">
//                             <AiIcons.AiOutlineClose color="black" />
//                         </Link>
//                     </li>
//                     {Sidebar.map((item, index)=>{
//                         return(
//                             <li key={index} className={item.cName}>
//                                 <Link to={item.path}>
//                                     {item.icon}
//                                     <span>{item.title}</span>
//                                 </Link>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </nav>
//             </IconContext.Provider>
//         </>
//     )
// }


// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
//import { Sidebar } from "../Sidebar/Sidebar.js";
import './Navbar.css';
import { IconContext } from "react-icons";
import logo from './drager.png';

function Navbar({ toggleSidebar, isSidebarOpen, userType }) {

    const getSidebarItems = () => {
        switch(userType) {
            case 'administrador':
                return [
                    { title: 'Perfil de usuario', path: '/perfil', icon: <FaIcons.FaUser color="black" />, cName: 'nav-text' },
                    { title: 'Maestra Ocupación', path: '/maestra-ocupacion', icon: <FaIcons.FaBriefcase color="black" />, cName: 'nav-text' },
                    { title: 'Maestra Guardia', path: '/maestra-guardia', icon: <FaIcons.FaClock color="black" />, cName: 'nav-text' },
                    { title: 'Maestra Condición Laboral', path: '/maestra-condicion-laboral', icon: <FaIcons.FaBuilding color="black" />, cName: 'nav-text' },
                    { title: 'Maestra Marcas y Modelos', path: '/maestra-marcas-modelos', icon: <FaIcons.FaTags color="black" />, cName: 'nav-text' },
                    { title: 'Maestra Menús', path: '/maestra-menus', icon: <FaIcons.FaBars color="black" />, cName: 'nav-text' },
                    { title: 'Cambio de contraseña', path: '/cambio-contrasena', icon: <RiIcons.RiLockPasswordFill color="black" />, cName: 'nav-text' }
                ];
            case 'operador':
                return [
                    { title: 'Perfil de usuario', path: '/perfil', icon: <FaIcons.FaUser color="black" />, cName: 'nav-text' },
                    { title: 'Registro de usuarios', path: '/registro-usuarios', icon: <FaIcons.FaUserPlus color="black" />, cName: 'nav-text' },
                    { title: 'Registro de médicos', path: '/registro-medicos', icon: <FaIcons.FaStethoscope color="black" />, cName: 'nav-text' },
                    { title: 'Registro de trabajadores', path: '/registro-trabajadores', icon: <FaIcons.FaUsers color="black" />, cName: 'nav-text' },
                    { title: 'Registro de empresa', path: '/registro-empresas', icon: <FaIcons.FaBuilding color="black" />, cName: 'nav-text' },
                    { title: 'Cambio de contraseña', path: '/cambio-contrasena', icon: <RiIcons.RiLockPasswordFill color="black" />, cName: 'nav-text' }
                ];
            case 'empresa':
                return [
                    { title: 'Perfil de usuario', path: '/perfil', icon: <FaIcons.FaUser color="black" />, cName: 'nav-text' },
                    { title: 'Lista de empresas', path: '/lista-empresas', icon: <CgIcons.CgOrganisation color="black" />, cName: 'nav-text' },
                    { title: 'Gestión de contratos', path: '/gestion-contratos', icon: <FaIcons.FaFileContract color="black" />, cName: 'nav-text' },
                    { title: 'Listado de actividades', path: '/lista-actividades', icon: <FaIcons.FaListAlt color="black" />, cName: 'nav-text' },
                    { title: 'Reportes', path: '/reportes', icon: <TbIcons.TbReportAnalytics color="black" />, cName: 'nav-text' },
                    { title: 'Cambio de contraseña', path: '/cambio-contrasena', icon: <RiIcons.RiLockPasswordFill color="black" />, cName: 'nav-text' }
                ];
            case 'cliente':
                return [
                    { title: 'Perfil de usuario', path: '/perfil', icon: <FaIcons.FaUser color="black" />, cName: 'nav-text' },
                    { title: 'Lista de trabajadores', path: '/lista-trabajadores', icon: <FaIcons.FaUsers color="black" />, cName: 'nav-text' },
                    { title: 'Actividades realizadas', path: '/actividades-realizadas', icon: <FaIcons.FaTasks color="black" />, cName: 'nav-text' },
                    { title: 'Indicadores por trabajador', path: '/indicadores-trabajador', icon: <FaIcons.FaChartBar color="black" />, cName: 'nav-text' },
                    { title: 'Indicadores por actividad', path: '/indicadores-actividad', icon: <FaIcons.FaChartLine color="black" />, cName: 'nav-text' },
                    { title: 'Indicadores por contrato', path: '/indicadores-contrato', icon: <FaIcons.FaFileAlt color="black" />, cName: 'nav-text' },
                    { title: 'Cambio de contraseña', path: '/cambio-contrasena', icon: <RiIcons.RiLockPasswordFill color="black" />, cName: 'nav-text' }
                ];
            default:
                return [];
        }
    }

    const sidebarItems = getSidebarItems();

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to='#' className="menu-bars">
                        <FaIcons.FaBars color="black" onClick={toggleSidebar} />
                    </Link>
                    <div className="navbar-center">
                        <img src={logo} alt="Logo" className="navbar-logo" />
                    </div>
                    <div className="navbar-right">
                        <MdIcons.MdPersonOff color="black" className="iconoclose" />
                        <Link to='/' className="logout-link">
                            Cerrar Sesión
                        </Link>
                    </div>
                </div>
                <nav className={isSidebarOpen ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={toggleSidebar}>
                        <li className="navbar-toggle">
                            <Link to='#' className="menu-bars-close">
                                <AiIcons.AiOutlineClose color="black" />
                            </Link>
                        </li>
                        {sidebarItems.map((item, index) => (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
