import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TablaFacturacion from './TablaFacturazion'
import BusquedaFacturacion from './BusquedaFacturacion'
import CabezeraFacturas from './CabezeraFacturas'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ 
        width: '100%', 
        padding: 0,  // Eliminamos el padding para que no quede espacio
        margin: 0,  // Evitamos márgenes adicionales
        display: 'flex', 
        justifyContent: 'center',  // Centrar horizontalmente
        alignItems: 'center', // Alineación vertical (si es necesario)
      }}>
      <Grid container 
        rowSpacing={0} 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
        sx={{ width: '100%' }}>
        <Grid size={12}>
          <CabezeraFacturas />
        </Grid>
        <Grid size={12}>
          <BusquedaFacturacion />
        </Grid>
        <Grid size={12}>
          <TablaFacturacion />
        </Grid>
      </Grid>
    </Box>
  );
}
