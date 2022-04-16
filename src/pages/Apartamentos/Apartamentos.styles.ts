import styled from 'styled-components'

// ICONS
import DeleteIcon from '@mui/icons-material/Delete'
import SettingsIcon from '@mui/icons-material/Settings'

// CONSTANTS
import { colors } from 'constants/constants'

export const Container = styled.div`
  margin: 15px auto;
  display: flex;
  justify-content: center;
  width: 70%;
`

export const DeleteRedIcon = styled(DeleteIcon)`
  color: ${colors.lightRed};
`

export const EditIcon = styled(SettingsIcon)``
