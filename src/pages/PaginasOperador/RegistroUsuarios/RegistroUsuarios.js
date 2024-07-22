import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistroUsuarios.css';
import * as FaIcons from 'react-icons/fa';

const initialUsers = [
  {
    id: 1,
    dni: '12345678',
    name: 'Juan',
    flastname: 'Pérez',
    slastname: 'García',
    type: 1,
    password: 'encrypted123',
    phone: '987654321',
    email: 'juan.perez@example.com',
    registerDate: '2024-01-01',
    lastAccess: '2024-07-01'
  },
  {
    id: 2,
    dni: '87654321',
    name: 'Ana',
    flastname: 'López',
    slastname: 'Martínez',
    type: 2,
    password: 'encrypted456',
    phone: '987654322',
    email: 'ana.lopez@example.com',
    registerDate: '2024-02-01',
    lastAccess: '2024-07-02'
  },
  {
    id: 3,
    dni: '45678901',
    name: 'Carlos',
    flastname: 'Hernández',
    slastname: 'Sánchez',
    type: 3,
    password: 'encrypted789',
    phone: '987654323',
    email: 'carlos.hernandez@example.com',
    registerDate: '2024-03-01',
    lastAccess: '2024-07-03'
  }
];

function RegistroUsuarios() {
  const [users, setUsers] = useState(initialUsers);
  const navigate = useNavigate();

  const handleEditUser = (id) => {
    navigate(`/nuevo-usuario/${id}`);
  };

  const handleAddUser = () => {
    navigate(`/nuevo-usuario/new`);
  };

  return (
    <div className="usuarios-page">
      <h1>Registro de Usuarios</h1>
      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Tipo de usuario</th>
            <th>Contraseña</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Fecha de registro</th>
            <th>Fecha de último acceso</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.dni}</td>
              <td>{user.name+' '+user.flastname+' '+user.slastname}</td>
              <td>{user.type}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.registerDate}</td>
              <td>{user.lastAccess}</td>
              <td className="icono-cell"><FaIcons.FaEdit className="icono-editar" onClick={() => handleEditUser(user.id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button onClick={handleAddUser}>Agregar nuevo usuario</button>
      </div>
    </div>
  );
}

export default RegistroUsuarios;

