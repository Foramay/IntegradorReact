import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import './Noticia.css'
import { DateTime } from "luxon";

const Noticia = ({noticia}) => {
  return (
    <Card className='carta-noticia' >
      <a href={noticia.url} target="_blank" rel="noopener noreferrer">
      <CardActionArea>
      <Typography gutterBottom variant="h5" component="div">
            {noticia.title}
          </Typography>
        <CardMedia
          component="img"
          height="140"
          image={noticia.urlToImage}
          alt={noticia.tittle}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {noticia.source.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Publicado {DateTime.fromISO(noticia.publishedAt).toFormat("dd/mm/yyyy")} a las {DateTime.fromISO(noticia.publishedAt).toFormat("HH:mm")} hs.
          </Typography>
        </CardContent>
      </CardActionArea>
    </a>
    </Card>
  );
}

export default Noticia;