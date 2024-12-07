import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function ContainedButtons() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.mode === 'dark' ? '1b1f2d' : '#fff',
        borderRadius: '8px',
        boxShadow: theme.shadows[3], // Sombra suave
        width:'100%'
      }}
    >
      {/* Título */}
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ fontWeight: 600, color: theme.palette.text.primary }}
      >
        Buscar Facturas
      </Typography>

      {/* Botón */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: '8px', // Bordes redondeados
            padding: '8px 16px',
            boxShadow: theme.shadows[2],
            fontWeight: 500,
          }}
        >
          Nueva Factura
        </Button>
      </Stack>
    </Box>
  );
}
