import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#fff', 0.15), // Fondo del campo de búsqueda, siempre blanco
  '&:hover': {
    backgroundColor: alpha('#fff', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  boxShadow: theme.shadows[2], // Sombra ligera
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '24ch', // Hice el campo más ancho
    },
  },
}));

export default function PrimarySearchAppBar() {
  const theme = useTheme(); // Detectar el modo del tema

  return (
    <Box sx={{ flexGrow: 1 ,width: "100%"}}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#2C3E50', // Fondo constante para la navegación
          boxShadow: 3,
        }}
      >
        <Toolbar>
          {/* Título que cambia de color según el tema */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'bold',
              color: theme.palette.mode === 'dark' ? '#fff' : '#fff', // Cambia el color de la fuente según el modo
            }}
          >
            Buscar Negocio
          </Typography>

          {/* Barra de búsqueda */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }} // Ícono que cambia de color según el tema
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : '#000', // Texto de búsqueda dinámico
              }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
