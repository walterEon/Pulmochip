import React, { useState } from "react";
import './CambioContrasena.css';

function CambioContrasena() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Las nuevas contraseñas no coinciden");
      return;
    }
    // lógica para cambiar la contraseña
    alert("Contraseña cambiada con éxito");
  };

  return (
    <div className="contrasena-page">
      <h2>Cambio de contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Contraseña actual</label>
          <input 
            type="password" 
            value={currentPassword} 
            onChange={(e) => setCurrentPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Nueva contraseña</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Confirmar nueva contraseña</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="button-container">
          <button type="submit" className="button">Cambiar contraseña</button>
        </div>

        
      </form>
    </div>
  );
}

export default CambioContrasena;
