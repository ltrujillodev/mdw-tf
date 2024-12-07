import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

export default function FreeSolo() {
  return (

    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center', // Alinea verticalmente
         // Opcional, para centrar verticalmente toda la vista
      }}
    >
    <Stack spacing={2} sx={{ width: 300 }}>
      
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Negocio"
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
      
    </Stack>
    </Box>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Restaurante Central S.A.C.'},
  { title: 'Maido Cocina Nikkei S.A.C.'},
  { title: 'Grupo Acurio Restaurantes S.A.C.'},
  { title: 'La Mar Cevichería S.A.C.' },
  { title: 'Restaurante Rafael S.A.C.'},
  { title: "Isolina Taberna Peruana S.A.C."},
  { title: 'Osaka Cocina Nikkei S.A.C.'},
  { title: 'La Picantería S.A.C.'},
  { title: 'El Mercado S.A.C.'},
  { title: 'Amaz S.A.C.'},
];
