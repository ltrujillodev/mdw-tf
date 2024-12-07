import React from 'react';
import VistaGeneralGrafica from './VistaGenralGrafica'
import { Paper, Typography } from '@mui/material';

export default function PageViewsSection({ title, value, percentage, color }) {
  // Definir el color según el nombre del color recibido
  const getColor = () => {
    switch (color) {
      case 'primary':
        return '#1E88E5'; // Azul
      case 'error':
        return '#E53935'; // Rojo
      case 'success':
        return '#43A047'; // Verde
      default:
        return '#fff'; // Color por defecto
    }
  };

  return (
    <Paper sx={{ p: 3, backgroundColor: '#1D1D1D', color: '#fff', borderRadius: '8px' }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="h4" sx={{ color: getColor() }}>
        {value}
      </Typography>
      <Typography color={getColor()}>
        {percentage}
      </Typography>
      {/* Pasar el color a la gráfica */}
      <VistaGeneralGrafica color={getColor()} />
    </Paper>
  );
}
