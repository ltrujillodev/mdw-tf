import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const messages = [
    {
        id: 1,
        primary: '¿Almuerzo de negocios esta semana?',
        secondary: 'Estaré por el barrio esta semana. ¿Nos reunimos para almorzar y discutir el proyecto?',
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Regalo de aniversario',
        secondary: '¿Tienes alguna sugerencia para un buen regalo de aniversario para Juan en su empresa? Estoy un poco confundido y me encantaría saber tu opinión.',
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Nueva receta para el menú',
        secondary: 'Estoy probando una nueva receta para la parrilla, creo que podría ser increíble para el próximo evento.',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: '¡Sí!',
        secondary: 'Tengo los boletos para la ExpoGastronómica de este año. ¡No puedo esperar para asistir!',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        primary: 'Cita con el proveedor',
        secondary: 'Mi cita con el proveedor fue reprogramada para el próximo sábado. Te mantengo al tanto.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        primary: 'Reunión sobre el nuevo menú',
        secondary: 'Los menús generados por la nueva aplicación están listos. Podemos revisar las opciones en la próxima reunión.',
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 7,
        primary: 'Evento de verano',
        secondary: '¿Quién quiere organizar un evento este fin de semana? Acabo de recibir nuevos muebles para la terraza y sería genial tener una reunión con los clientes.',
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 8,
        primary: 'Evento de verano',
        secondary: '¿Quién quiere organizar un evento este fin de semana? Acabo de recibir nuevos muebles para la terraza y sería genial tener una reunión con los clientes.',
        person: '/static/images/avatar/1.jpg',
    },
];

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square sx={{ pb: '50px' }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                    Mensajes
                </Typography>
                <List sx={{ mb: 2 }}>
                    {messages.map(({ id, primary, secondary, person }) => (
                        <React.Fragment key={id}>
                            {id === 1 && (
                                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    Hoy
                                </ListSubheader>
                            )}
                            {id === 3 && (
                                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                    Ayer
                                </ListSubheader>
                            )}
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={person} />
                                </ListItemAvatar>
                                <ListItemText primary={primary} secondary={secondary} />
                            </ListItemButton>
                        </React.Fragment>
                    ))}
                </List>
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        
                        width: '75%',
                        bgcolor: 'primary.main',
                        p: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        zIndex: 1
                    }}
                >
                    <IconButton color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <StyledFab color="secondary" aria-label="add" sx={{ left: '-9%' }}>
                        <AddIcon />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Box>

            </Paper>

        </React.Fragment>
    );
}
