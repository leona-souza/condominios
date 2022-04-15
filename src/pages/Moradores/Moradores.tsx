import { useState, useEffect } from 'react'

// COMPONENTS
import { DataGrid } from '@mui/x-data-grid'

// SERVICES
import { getMoradores } from 'services/MoradoresService'

// TYPES
import { MoradorType } from 'types/moradores'

// CONSTANTS
import { gridConfig } from 'constants/constants'

// STYLES
import * as Styled from './Moradores.styles'

const Moradores = (): JSX.Element => {
  const [moradores, setMoradores] = useState<MoradorType[]>([])
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
      width: 100
    }, {
      field: 'nome',
      headerName: 'Nome',
      type: 'string',
      width: 250,
    }, {
      field: 'documento',
      headerName: 'Documento',
      type: 'string',
      width: 150,
    }, {
      field: 'telefone',
      headerName: 'Telefone',
      type: 'string',
      width: 150,
    }, {
      field: 'obs',
      headerName: 'Observação',
      type: 'string',
      width: 300,
    }
  ]

  useEffect(() => {
    getMoradores().then(response => setMoradores(response.data))
  }, [])

  return (
    <Styled.Container>
      <DataGrid
        rows={moradores}
        columns={columns}
        pageSize={gridConfig.pageSize}
        rowsPerPageOptions={gridConfig.rowsPerPageOptions}
        disableSelectionOnClick
        autoHeight
      />
    </Styled.Container>
  )
}

export { Moradores }
