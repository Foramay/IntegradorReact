import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Noticia.css'

const Noticia = () => {
  return (
    <Card className='carta-noticia' >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="news image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            titulo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            descripcion
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Noticia;