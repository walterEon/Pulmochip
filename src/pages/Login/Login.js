import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import imgpulmo from './pulmochip.jpeg';
import './Login.css';

function Login({ setUserType }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      user: username,
      password: password
    };

    try {
      const response = await fetch('https://pulmochip.iotomato.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userType', "empresa"); // Guarda el tipo de usuario en localStorage
        setUserType("empresa");
        navigate('/perfil');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error al intentar iniciar sesión');
    }
  };

  return (
    <div className="login-container">
      <img src={imgpulmo} alt="Logo" className="login-logo" />
      <h2>Inicio de sesión</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Login;



