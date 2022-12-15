import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './BotonBuscar.css'

const BotonBuscar = ( props  ) => {
  //infoState recibe la información del estado que contiene el componente Buscador.jsx
  const {infoState} = props;
  const {onBuscar} = props;
  return (
    <Stack className='btn-buscar' direction="row" spacing={2}>
      <Button 
      variant="contained"
      onClick={() => {
        onBuscar(infoState);
      }}
      >
        Buscar
      </Button>
    </Stack>
  );
}


export default BotonBuscar;