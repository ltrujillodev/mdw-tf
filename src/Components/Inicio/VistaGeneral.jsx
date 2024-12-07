import React from 'react';
import Grid from '@mui/material/Grid';
import PageViewsSection from './ColoresVistaGeneral';
import CabezeraVistaGeneral from './CabezeraVistaGeneral';
import ButtomVistaGeneral from './ButtomVistaGeneral';
import VistaGeneralGrafico01 from './VistaGeneralGrafico01';  // Importamos el gráfico de sesiones
import VistaGeneralGrafico02 from './VistaGeneralGrafico02';

export default function VistaGeneral() {
  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      
      <Grid container item xs={12} justifyContent="space-between" alignItems="center">
        <Grid item xs={8}> 
          <CabezeraVistaGeneral />
        </Grid>
        <Grid item xs={4} container justifyContent="flex-end"> 
          <ButtomVistaGeneral />
        </Grid>
      </Grid>

      <Grid item xs={12} md={4}>
        <PageViewsSection title="Ingreso Diario" value="2,860" percentage="+2.5%" color="primary" />
      </Grid>
      <Grid item xs={12} md={4}>
        <PageViewsSection title="Ingreso Semanal" value="2,971" percentage="-0.55%" color="error" />
      </Grid>
      <Grid item xs={12} md={4}>
        <PageViewsSection title="Ingreso Mensual" value="1,896" percentage="+1.8%" color="success" />
      </Grid>

      <Grid item xs={12} md={6}>
        <VistaGeneralGrafico01 /> {/* Gráfico de sesiones */}
      </Grid>
      <Grid item xs={12} md={6}>
        <VistaGeneralGrafico02 /> {/* Gráfico de descargas */}
      </Grid>
    </Grid>
  );
}
