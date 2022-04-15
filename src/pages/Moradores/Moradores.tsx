import { useState, useEffect } from 'react'

// COMPONENTS
import { DataGrid } from '@mui/x-data-grid'

// SERVICES
import { getMoradores } from 'services/MoradoresService'

// TYPES
import { MoradorType } from 'types/moradores'

// STYLES
import * as Styled from './Moradores.styles'

const Moradores = (): JSX.Element => {
  const [moradores, setMoradores] = useState<MoradorType[]>([])
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nome',
      headerName: 'Nome',
      type: 'string',
      width: 150,
    },
    {
      field: 'documento',
      headerName: 'Documento',
      type: 'string',
      width: 150,
    },
    {
      field: 'telefone',
      headerName: 'Telefone',
      type: 'string',
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
    getMoradores().then(response => setMoradores(response.data))
  }, [])

  return (
    <Styled.Container>
      <DataGrid
        rows={moradores}
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

export { Moradores }
