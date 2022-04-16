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
  getApartamentos,
  deleteApartamento
} from 'services/ApartamentosService'

// TYPES
import { ApartamentoType } from 'types/apartamentos'

// CONSTANTS
import { gridConfig } from 'constants/constants'

// STYLES
import * as Styled from './Apartamentos.styles'
import * as GeneralStyle from 'styles/generalStyles'

const Apartamentos = (): JSX.Element => {
  const [apartamentos, setApartamentos] = useState<ApartamentoType[]>([])
  const navigate = useNavigate()

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
          icon={
            <Tooltip title="Editar">
              <GeneralStyle.EditIcon />
            </Tooltip>
          }
          label="Editar"
          onClick={() => navigate(`/apartamentos/editar/${params.id}`)}
        />,
        <GridActionsCellItem
          icon={
            <Tooltip title="Deletar">
              <GeneralStyle.DeleteRedIcon />
            </Tooltip>
        }
          label="Delete"
          onClick={() => deleteApartamento(Number(params.id))}
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
        sx={GeneralStyle.dataGridStyle}
      />
    </Styled.Container>
  )
}

export { Apartamentos }
