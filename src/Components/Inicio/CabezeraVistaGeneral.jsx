import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function CabezeraVistaGeneral() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',  // Asegura que los elementos estén en columna
        
        alignItems: 'flex-start', // Alinea a la izquierda
        backgroundColor: theme.palette.mode === 'dark' ? '1b1f2d' : '#fff',
        p: 3,
        borderRadius: '8px',
        mb: 4, // Margen inferior para separarlo del contenido principal
      }}
    >
      {/* Título del Dashboard */}
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Panel de Análisis de Datos
      </Typography>

      {/* Texto adicional debajo del título */}
      <Typography variant="h6" sx={{ fontWeight: 100, mt: 1 }}> {/* mt: 1 añade un margen superior */}
        Bienvenida de nuevo. Nos complace contar nuevamente con tu participación.
      </Typography>

      {/* Botones de acción */}
      
    </Box>
  );
}
