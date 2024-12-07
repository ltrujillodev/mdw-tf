import React, { useState, useEffect } from 'react';
import Dashboard from './Components/Dashboard/prueba';
import Login from './Components/Sign/Login/Login';
import Register from './Components/Sign/Register/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);  // Cambia el estado a true si el token existe
    setLoading(false);
  }, []);

  useEffect(() => {
    // Si isAuthenticated cambia a false, redirige a Login automáticamente
    if (!isAuthenticated && !loading) {
      setShowRegister(false);  // Asegura que el formulario de registro esté cerrado
    }
  }, [isAuthenticated, loading]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <Dashboard  />
      ) : showRegister ? (
        // Al registrar exitosamente, vuelve al formulario de login
        <Register onRegisterSuccess={() => setShowRegister(false)} />
      ) : (
        // Pasa las funciones de login y cambio a registro al componente de login
        <Login onLoginSuccess={handleLogin} onShowRegister={toggleRegister} />
      )}
    </>
  );
}

export default App; 
