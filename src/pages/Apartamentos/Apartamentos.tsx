import { useState, useEffect } from 'react'

// COMPONENTS
import {
  DataGrid,
  GridActionsCellItem,
  GridRowParams
} from '@mui/x-data-grid'

// SERVICES
import { getApartamentos } from 'services/ApartamentosService'

// TYPES
import { ApartamentoType } from 'types/apartamentos'

// CONSTANTS
import { gridConfig } from 'constants/constants'

// STYLES
import * as Styled from './Apartamentos.styles'

const Apartamentos = (): JSX.Element => {
  const [apartamentos, setApartamentos] = useState<ApartamentoType[]>([])

  const columns = [
    { 
      field: 'id',
      headerName: 'ID',
      type: 'number',
      width: 100,
    }, {
      field: 'numero',
      headerName: 'Número',
      type: 'number',
      width: 100,
    }, {
      field: 'torre',
      headerName: 'Torre',
      type: 'number',
      width: 100,
    }, {
      field: 'obs',
      headerName: 'Observação',
      type: 'string',
      width: 400,
    }, {
      field: 'actions',
      headerName: 'Ações',
      type: 'actions',
      width: 100,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          icon={<Styled.DeleteRedIcon />}
          label="Delete"
          onClick={() => console.log(params.id)}
        />,
      ]
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
        pageSize={gridConfig.pageSize}
        rowsPerPageOptions={gridConfig.rowsPerPageOptions}
        disableSelectionOnClick
        autoHeight
      />
    </Styled.Container>
  )
}

export { Apartamentos }
