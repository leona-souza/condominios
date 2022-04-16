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
  getVisitas,
  deleteVisita
} from 'services/VisitasService'

// TYPES
import { VisitaType } from 'types/visitas'

// CONSTANTS
import { gridConfig } from 'constants/constants'

// STYLES
import * as Styled from './Visitas.styles'
import * as GeneralStyle from 'styles/generalStyles'

const Visitas = (): JSX.Element => {
  const [visitas, setVisitas] = useState<VisitaType[]>([])
  const navigate = useNavigate()

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
      width: 100
    }, {
      field: 'data',
      headerName: 'Data',
      type: 'string',
      width: 200,
      valueFormatter: (params) => {
        const dateObject = new Date(params.value)
        const convertedDate = dateObject.toLocaleDateString('pt-BR')
        const convertedHours = dateObject.toLocaleTimeString('pt-BR')
        return `${convertedDate} às ${convertedHours}`
      }
    }, {
      field: 'apartamento',
      headerName: 'Apartamento',
      type: 'string',
      width: 150,
      valueFormatter: (params) => `${params.value.numero}-${params.value.torre}`
    }, {
      field: 'visitante',
      headerName: 'Visitante',
      type: 'string',
      width: 200,
      valueFormatter: (params) => params.value.nome
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
          onClick={() => navigate(`/visitas/editar/${params.id}`)}
        />,
        <GridActionsCellItem
          icon={
            <Tooltip title="Deletar">
              <GeneralStyle.DeleteRedIcon />
            </Tooltip>
        }
          label="Delete"
          onClick={() => deleteVisita(Number(params.id))}
        />,
      ]
    }
  ]

  useEffect(() => {
    getVisitas().then(response => setVisitas(response.data))
  }, [])

  return (
    <Styled.Container>
      <DataGrid
        rows={visitas}
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

export { Visitas }
