import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = ({ onRegisterSuccess }) => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/register', {
        nombres,
        apellidos,
        email,
        password,
        telefono
      });

      if (response.status === 201) {
        onRegisterSuccess();
      } else {
        setError('Error en el registro');
      }
    } catch (error) {
      setError('Hubo un problema al registrarse');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src="./src/assets/fondo-login.webp" alt="Mesa Facil Logo" className="login-image" />
        <h1 className="login-logo">Mesa Fácil</h1>
      </div>
      <div className="register-right">
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Registro</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input
            type="text"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            placeholder="Nombres"
            required
          />
          <input
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Apellidos"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Teléfono (opcional)"
          />
          <button type="submit">Registrarse</button>
          <button type="button" onClick={onRegisterSuccess}>
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
