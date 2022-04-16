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
  getVeiculos,
  deleteVeiculo
} from 'services/VeiculosService'

// TYPES
import { VeiculoType } from 'types/veiculos'

// CONSTANTS
import { gridConfig } from 'constants/constants'

// STYLES
import * as Styled from './Veiculos.styles'
import * as GeneralStyle from 'styles/generalStyles'

const Veiculos = (): JSX.Element => {
  const [veiculos, setVeiculos] = useState<VeiculoType[]>([])
  const navigate = useNavigate()

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
      width: 100
    }, {
      field: 'placa',
      headerName: 'Placa',
      type: 'string',
      width: 250,
    }, {
      field: 'marca',
      headerName: 'Marca',
      type: 'string',
      width: 150,
    }, {
      field: 'modelo',
      headerName: 'Modelo',
      type: 'string',
      width: 150,
    }, {
      field: 'cor',
      headerName: 'Cor',
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
          onClick={() => deleteVeiculo(Number(params.id))}
        />,
      ]
    }
  ]

  useEffect(() => {
    getVeiculos().then(response => setVeiculos(response.data))
  }, [])

  return (
    <Styled.Container>
      <DataGrid
        rows={veiculos}
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

export { Veiculos }
