import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <h2>Mensajes Recientes</h2>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Almuerzo de negocios este fin de semana"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {" — Estaré en tu zona haciendo algunas gestiones esta semana..."}
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Evento de verano"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Para Scott, Alex, Jennifer
            </Typography>
            {" — Me encantaría asistir, pero estaré fuera de la ciudad..."}
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Recomendaciones de París"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Sandra Adams
            </Typography>
            {" — ¿Tienes recomendaciones para París? ¿Has estado alguna vez...?"}
          </React.Fragment>
        }
      />
    </ListItem>   
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Almuerzo de negocios este fin de semana"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Ali Connors
            </Typography>
            {" — Estaré en tu zona haciendo algunas gestiones esta semana..."}
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Evento de verano"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Para Scott, Alex, Jennifer
            </Typography>
            {" — Me encantaría asistir, pero estaré fuera de la ciudad..."}
          </React.Fragment>
        }
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Recomendaciones de París"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              Sandra Adams
            </Typography>
            {" — ¿Tienes recomendaciones para París? ¿Has estado alguna vez...?"}
          </React.Fragment>
        }
      />
    </ListItem>   
  </List>
  
  );
}
