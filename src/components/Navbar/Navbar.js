import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import { Sidebar } from "../Sidebar/Sidebar.js";
import './Navbar.css';
import { IconContext } from "react-icons";
import logo from './drager.png';


function Navbar(){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to='#' className="menu-bars">
                    <FaIcons.FaBars color="black" onClick={showSidebar} />
                </Link>
                <div className="navbar-center">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </div>
                <div className="navbar-right">
                    <MdIcons.MdPersonOff color="black" className="iconoclose"/>
                    <Link to='/' className="logout-link">
                        Cerrar Sesión
                    </Link>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className="menu-bars-close">
                            <AiIcons.AiOutlineClose color="black" />
                        </Link>
                    </li>
                    {Sidebar.map((item, index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}


export default Navbar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <ul>
//         <li><Link to="/perfil">Perfil de usuario</Link></li>
//         <li><Link to="/lista-empresas">Lista de empresas</Link></li>
//         <li><Link to="/gestion-contratos">Gestión de contratos</Link></li>
//         <li><Link to="/lista-actividades">Listado de actividades</Link></li>
//         <li><Link to="/reportes">Reportes</Link></li>
//         <li><Link to="/cambio-contrasena">Cambio de contraseña</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;