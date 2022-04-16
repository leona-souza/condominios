import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// COMPONENTS
import {
  DataGrid,
  GridActionsCellItem,
  GridRowParams
} from '@mui/x-data-grid'
import { Tooltip } from '@mui/material'

// SERVICES
import {
  getMoradores,
  deleteMorador
} from 'services/MoradoresService'

// TYPES
import { MoradorType } from 'types/moradores'

// CONSTANTS
import { gridConfig } from 'constants/constants'

// STYLES
import * as Styled from './Moradores.styles'
import * as GeneralStyle from 'styles/generalStyles'

const Moradores = (): JSX.Element => {
  const [moradores, setMoradores] = useState<MoradorType[]>([])
  const navigate = useNavigate()

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
    }, {
      field: 'actions',
      headerName: 'Ações',
      type: 'actions',
      width: 100,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          icon={
            <Tooltip title="Editar">
              <GeneralStyle.EditIcon />
            </Tooltip>
          }
          label="Editar"
          onClick={() => navigate(`/moradores/editar/${params.id}`)}
        />,
        <GridActionsCellItem
          icon={
            <Tooltip title="Deletar">
              <GeneralStyle.DeleteRedIcon />
            </Tooltip>
        }
          label="Delete"
          onClick={() => deleteMorador(Number(params.id))}
        />,
      ]
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
        sx={GeneralStyle.dataGridStyle}
      />
    </Styled.Container>
  )
}

export { Moradores }
