import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './weather';

function TickParamsSelector() {
  return (
    <FormControl>
      <FormLabel
        id="tick-placement-radio-buttons-group-label"
        sx={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}
      >
        Negocios Registrados en el último año
      </FormLabel>
    </FormControl>
  );
}

const chartSetting = {
  yAxis: [
    {
      label: 'Negocios',
    },
  ],
  series: [{ dataKey: 'seoul', label: 'Número de Negocios', valueFormatter }],
  height: 400, // Aumenta la altura del gráfico para mayor visibilidad
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function TickPlacementBars() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{
        width: '100%',
        maxWidth: '1200px', // Limitar el ancho máximo del contenedor
        margin: 'auto', // Centramos todo el stack
        textAlign: 'center',
        padding: '20px', // Añadir un poco de padding para que no esté muy pegado
      }}
    >
      <TickParamsSelector />
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month', tickPlacement: 'middle', tickLabelPlacement: 'middle' },
        ]}
        {...chartSetting}
        sx={{ width: '100%', maxWidth: '1200px' }} // Aumentar el ancho del gráfico
      />
    </Stack>
  );
}
