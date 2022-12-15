import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Buscador.css'
import { useState } from 'react';
import BotonBuscar from '../BotonBuscar/BotonBuscar';


const Buscador = (props) => {
  const [buscadorNoticias, setBuscadorNoticias] = useState("");
  const {onBuscar} = props;

  
  return (
    <Box className='container-field-noticias'
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField 
      fullWidth label="Buscar Noticia" 
      id="fullWidth" 
      value={buscadorNoticias}
      onChange={(e) =>{
        setBuscadorNoticias(e.target.value)
      }}
      />
     {buscadorNoticias.length > 2 && <BotonBuscar onBuscar={onBuscar} infoState={buscadorNoticias}
     />}
    </Box>
  );
}

export default Buscador;