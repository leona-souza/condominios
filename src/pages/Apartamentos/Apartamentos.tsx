import { useState, useEffect } from 'react'

// COMPONENTS
import { DataGrid } from '@mui/x-data-grid'

// SERVICES
import { getApartamentos } from 'services/ApartamentosService'

// TYPES
import { ApartamentoType } from 'types/apartamentos'

// STYLES
import * as Styled from './Apartamentos.styles'

const Apartamentos = (): JSX.Element => {
  const [apartamentos, setApartamentos] = useState<ApartamentoType[]>([])
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'numero',
      headerName: 'Número',
      type: 'number',
      width: 150,
    },
    {
      field: 'torre',
      headerName: 'Torre',
      type: 'number',
      width: 150,
    },
    {
      field: 'obs',
      headerName: 'Observação',
      type: 'string',
      width: 110,
    }
  ]

  useEffect(() => {
    getApartamentos().then(response => setApartamentos(response.data))
  }, [])

  return (
    <Styled.Container>
      <DataGrid
        rows={apartamentos}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
      />
    </Styled.Container>
  )
}

export { Apartamentos }
