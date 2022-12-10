import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Buscador.css'
import { useState } from 'react';
import BotonBuscar from '../BotonBuscar/BotonBuscar';

const Buscador = () => {
  const [buscadorNoticias, setBuscadorNoticias] = useState();
  
  
  const onBuscar = (e) => {
    console.log(buscadorNoticias)
  }

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
     <BotonBuscar 
     onBuscar={onBuscar} 
     infoState={buscadorNoticias}
     />
    </Box>
  );
}

export default Buscador;