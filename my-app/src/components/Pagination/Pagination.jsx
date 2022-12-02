import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'



export default function PaginationOutlined() {
  return (
    <Stack className='pagination-noticias' spacing={2}>
      <Pagination count={10} variant="outlined" color="primary" />
    </Stack>
  );
}