import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NuevoUsuario.css';

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

function NuevoUsuario() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = id === 'new';
    const newId = initialUsers.length + 1;

    const usuarioExistente = isNew ? {
        id: newId,
        dni: '',
        name: '',
        flastname: '',
        slastname: '',
        type: '',
        password: '',
        phone: '',
        email: '',
        registerDate: '',
        lastAccess: ''
    } : initialUsers.find(c => c.id === parseInt(id));

    const [newUser, setNewUser] = useState(usuarioExistente);
    const [users, setUsers] = useState(initialUsers);

    useEffect(() => {
        if (!isNew) {
            const userToEdit = users.find(user => user.id === parseInt(id));
            if (userToEdit) {
                setNewUser(userToEdit);
            }
        }
    }, [id, users, isNew]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isNew) {
            newUser.registerDate = new Date().toISOString().split('T')[0];
            console.log('Nuevo Usuario:', newUser);
        } else {
            console.log('Usuario editado:', newUser);
        }
        // lógica para la edición/creación hacia el backend
        navigate('/registro-usuarios'); // volver al registro de usuarios
    };

    const handleCancel = () => {
        navigate('/registro-usuarios');
    };

    return (
        <div className="nuevo-usuario-page">
            <h1>{isNew ? 'Agregar Nuevo Usuario' : 'Editar Usuario'}</h1>
            <form onSubmit={handleSubmit}>
                <h2>Tipo de Usuario</h2>
                <div className="form-group">
                    
                    <select name="type" value={newUser.type} onChange={handleChange}>
                        <option value="1">Administrador</option>
                        <option value="2">Operador</option>
                        <option value="3">Empresa</option>
                        <option value="4">Cliente</option>
                    </select>
                </div>
                
                <div className='form-section'>
                    <h2>Datos Personales</h2>
                    <div className='grid-container'>
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" name="name" value={newUser.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Apellido Paterno:</label>
                            <input type="text" name="flastname" value={newUser.flastname} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Apellido Materno:</label>
                            <input type="text" name="slastname" value={newUser.slastname} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>DNI:</label>
                            <input type="text" name="dni" value={newUser.dni} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Celular:</label>
                            <input type="text" name="phone" value={newUser.phone} onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className='form-section'>
                    <h2>Información de la cuenta</h2>
                    <div className='grid-container'>
                        <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={newUser.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input type="password" name="password" value={newUser.password} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                
                <div className="button-container">
                    <button type="submit">{isNew ? 'Agregar' : 'Guardar'}</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default NuevoUsuario;

