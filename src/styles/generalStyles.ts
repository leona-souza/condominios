import styled from 'styled-components'

// ICONS
import DeleteIcon from '@mui/icons-material/Delete'
import SettingsIcon from '@mui/icons-material/Settings'

// CONSTANTS
import { colors } from 'constants/constants'

export const DeleteRedIcon = styled(DeleteIcon)`
  color: ${colors.lightRed};
`

export const EditIcon = styled(SettingsIcon)``

export const dataGridStyle = {
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: colors.darkBlue,
    color: colors.white
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: colors.footerBlue
  },
}
