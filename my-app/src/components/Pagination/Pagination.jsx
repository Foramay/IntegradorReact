import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'



export default function PaginationOutlined({
  cantidadPaginas,
  onChange
}) {
  const cambiaPagina = ( _evento, pagina) => {
    onChange(pagina)
  };
  return (
    <Stack className='pagination-noticias' spacing={2}>
      <Pagination 
      count={cantidadPaginas} 
      variant="outlined" 
      color="primary" 
      onChange={cambiaPagina}
      />
    </Stack>
  );
}