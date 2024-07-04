import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as RxIcons from 'react-icons/rx';
import * as TbIcons from 'react-icons/tb';
import * as RiIcons from 'react-icons/ri';

export const Sidebar = [
    {
        title: 'Perfil de usuario',
        path: '/perfil',
        icon: <FaIcons.FaUser/>,
        cName: 'nav-text'
    },
    {
        title: 'Lista de empresas',
        path: '/lista-empresas',
        icon: <CgIcons.CgOrganisation/>,
        cName: 'nav-text'
    },
    {
        title: 'Gestión de contratos',
        path: '/gestion-contratos',
        icon: <FaIcons.FaFileContract/>,
        cName: 'nav-text'
    },
    {
        title: 'Listado de actividades',
        path: '/lista-actividades',
        icon: <RxIcons.RxActivityLog/>,
        cName: 'nav-text'
    },
    {
        title: 'Reportes',
        path: '/reportes',
        icon: <TbIcons.TbReportAnalytics/>,
        cName: 'nav-text'
    },
    {
        title: 'Cambio de contraseña',
        path: '/cambio-contrasena',
        icon: <RiIcons.RiLockPasswordFill/>,
        cName: 'nav-text'
    }
    // {
    //     title: 'Perfil de usuario',
    //     path: '/perfil',
    //     icon: <FaIcons.FaUser/>,
    //     cName: 'nav-text'
    // }
    // {
    //     title: 'Perfil de usuario',
    //     path: '/perfil',
    //     icon: <FaIcons.FaUser/>,
    //     cName: 'nav-text'
    // }
    // {
    //     title: 'Perfil de usuario',
    //     path: '/perfil',
    //     icon: <FaIcons.FaUser/>,
    //     cName: 'nav-text'
    // }
]