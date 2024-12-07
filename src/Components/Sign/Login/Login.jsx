// Login.jsx
import axios from "axios";
import { useState } from "react";
import "./Login.css";
import { Cookie } from "@mui/icons-material";

const Login = ({ onLoginSuccess, onShowRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        { email, password }
      );
      const { token } = response.data;

      // Almacena el token en localStorage (o sessionStorage)
      localStorage.setItem("token", token);

      // Llama a una función para notificar que el login fue exitoso
      if (onLoginSuccess) onLoginSuccess();

      alert("Inicio de sesión exitoso");
    } catch (err) {
      setError("Credenciales incorrectas");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="./src/assets/fondo-login.webp"
          alt="Mesa Facil Logo"
          className="login-image"
        />
        <h1 className="login-logo">Mesa Fácil</h1>
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Iniciar Sesión</h2>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Acepto los Términos y condiciones</label>
          </div>
          <button type="submit" className="login-btn">
            Iniciar sesión
          </button>
          {error && <p className="error-message">{error}</p>}
          <button
            type="button"
            onClick={onShowRegister}
            className="register-link"
          >
            ¿No tienes cuenta? Regístrate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
