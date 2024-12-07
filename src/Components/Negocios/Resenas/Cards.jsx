import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CustomizedGridCards() {
  return (
    <Grid container spacing={3} columns={12}>
      {/* Tarjeta 1 */}
      <Grid item xs={4}>
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }}>CR</Avatar>}
            action={<IconButton><MoreVertIcon /></IconButton>}
            title="Carla Ramírez"
            subheader="Octubre 3, 2024"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://img.freepik.com/foto-gratis/mujer-rocia-particulas-parmesano-rallado-sobre-lasana_141793-1837.jpg?size=626&ext=jpg"
            alt="Image 1"
          />
          <CardContent>
            <Typography variant="body2">
              "Central ofrece una experiencia gastronómica única, destacando la biodiversidad del
               Perú en cada plato. La presentación de los alimentos es impecable y los sabores son 
               una verdadera celebración de la cocina peruana. El servicio es atento y el ambiente 
               moderno con un toque elegante."
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="like">
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      {/* Tarjeta 2 */}
      <Grid item xs={4}>
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: green[500] }}>AG</Avatar>}
            action={<IconButton><MoreVertIcon /></IconButton>}
            title="Andrés Gutiérrez"
            subheader="Noviembre 12, 2023"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://img.freepik.com/foto-gratis/vista-lateral-medallon-carne-parrilla-salsa-verduras-parrilla-sobre-tabla-madera_141793-2979.jpg?size=626&ext=jpg"
            alt="Image 2"
          />
          <CardContent>
            <Typography variant="body2">
            "Maido fusiona de manera exquisita la cocina peruana y japonesa.
             Cada bocado es una explosión de sabores, desde los rolls de sushi hasta 
             los platos nikkei más elaborados. La atención al detalle es evidente y el 
             servicio es de primera clase. Un imperdible para los amantes de la alta cocina nikkei."
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="like">
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      {/* Tarjeta 3 */}
      <Grid item xs={4}>
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[500] }}>SR</Avatar>}
            action={<IconButton><MoreVertIcon /></IconButton>}
            title="Sebastián Rodríguez"
            subheader="Marzo 18, 2024"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://img.freepik.com/foto-gratis/copas-champan-plato-frutas_140725-9786.jpg?size=626&ext=jpg"
            alt="Image 3"
          />
          <CardContent>
            <Typography variant="body2">
            "Para los fanáticos del ceviche y los mariscos frescos, 
            La Mar es el lugar ideal. La carta tiene una gran variedad de platos marinos, 
            cada uno más fresco y sabroso que el anterior. El ambiente es relajado, 
            ideal para disfrutar de un almuerzo con amigos. El único inconveniente 
            es que puede estar un poco lleno los fines de semana."
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="like">
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      {/* Tarjeta 4 */}
      <Grid item xs={4}>
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }}>ML</Avatar>}
            action={<IconButton><MoreVertIcon /></IconButton>}
            title="María Fernanda López"
            subheader="Julio 25, 2023"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://img.freepik.com/foto-gratis/copas-champan-plato-frutas_140725-9786.jpg?size=626&ext=jpg"
            alt="Image 4"
          />
          <CardContent>
            <Typography variant="body2">
            "Rafael es sin duda uno de los mejores restaurantes de Lima. 
            Su cocina es una mezcla de creatividad y tradición, logrando 
            platos que sorprenden a cada paso. Los ingredientes frescos y 
            locales son los protagonistas. El ambiente es sofisticado, 
            perfecto para una cena íntima o una celebración especial."
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="like">
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      {/* Tarjeta 5 */}
      <Grid item xs={4}>
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: green[500] }}>JG</Avatar>}
            action={<IconButton><MoreVertIcon /></IconButton>}
            title="José Manuel García"
            subheader="Septiembre 5, 2024"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://img.freepik.com/foto-gratis/pescado-frito-verduras-vino-blanco_140725-9668.jpg?size=626&ext=jpg"
            alt="Image 5"
          />
          <CardContent>
            <Typography variant="body2">
            "Isolina es una taberna que lleva la cocina criolla al siguiente nivel. 
            Los platos son grandes, ideales para compartir, y el sabor te transporta 
            a la auténtica comida casera peruana. Las recetas tradicionales como el 
            'asado de tira' y el 'ají de gallina' no decepcionan. Es mejor ir con hambre, 
            ya que las porciones son generosas."
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="like">
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>

      {/* Tarjeta 6 */}
      <Grid item xs={4}>
        <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: blue[500] }}>LP</Avatar>}
            action={<IconButton><MoreVertIcon /></IconButton>}
            title="Lucía Pérez"
            subheader="Diciembre 30, 2023"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://img.freepik.com/foto-gratis/vista-delicioso-plato-bistec_23-2150777653.jpg?size=626&ext=jpg"
            alt="Image 6"
          />
          <CardContent>
            <Typography variant="body2">
            "Osaka es una explosión de creatividad culinaria. 
            La combinación de sabores japoneses y peruanos resulta 
            en platos memorables, tanto en presentación como en sabor. 
            El servicio es rápido y muy profesional, y el ambiente moderno y elegante.
             Definitivamente un lugar de referencia en la cocina nikkei."
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="like">
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
