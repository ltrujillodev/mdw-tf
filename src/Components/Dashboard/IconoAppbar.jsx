import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from './Notifications';  // Importar la lista interactiva

export default function PrimarySearchAppBar() {
  const [showNotifications, setShowNotifications] = React.useState(false);  // Estado para mostrar/ocultar la lista

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);  // Alterna entre mostrar y ocultar la lista
  };

  return (
    <div>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex' }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleNotificationClick}  // Maneja el clic en la campanita
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mostrar la lista interactiva cuando se hace clic en la campanita */}
      {showNotifications && (
        <Box
          sx={{
            position: 'absolute',
            top: '60px',  // Ajustar esta distancia para alinearlo con la AppBar
            right: '20px',  // Ponerlo cerca del ícono de notificaciones
            width: '300px',  // Definir el ancho del menú
            bgcolor: 'background.paper',
            boxShadow: 3,  // Añadir una sombra para resaltar
            borderRadius: 2,  // Bordes redondeados
            zIndex: 1300,  // Asegurarse que esté por encima de otros elementos
            maxHeight: '400px',  // Limitar el alto máximo
            overflow: 'auto',  // Habilitar scroll si es necesario
          }}
        >
          <Notifications />  {/* Renderizamos la lista interactiva */}
        </Box>
      )}
    </div>
  );
}
