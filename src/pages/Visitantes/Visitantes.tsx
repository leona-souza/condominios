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
  getVisitantes,
  deleteVisitante
} from 'services/VisitantesService'

// TYPES
import { VisitanteType } from 'types/visitantes'

// CONSTANTS
import { gridConfig } from 'constants/constants'

// STYLES
import * as Styled from './Visitantes.styles'
import * as GeneralStyle from 'styles/generalStyles'

const Visitantes = (): JSX.Element => {
  const [visitantes, setVisitantes] = useState<VisitanteType[]>([])
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
          onClick={() => deleteVisitante(Number(params.id))}
        />,
      ]
    }
  ]

  useEffect(() => {
    getVisitantes().then(response => setVisitantes(response.data))
  }, [])

  return (
    <Styled.Container>
      <DataGrid
        rows={visitantes}
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

export { Visitantes }
