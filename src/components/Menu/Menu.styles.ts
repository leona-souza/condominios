import styled, { css } from 'styled-components'
import { colors } from 'constants/colors'

import ApartmentIcon from '@mui/icons-material/Apartment'
import PersonIcon from '@mui/icons-material/Person'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import EventIcon from '@mui/icons-material/Event'

const marginRight = css`
  margin-right: 5px;
`

export const Container = styled.div`
  color: ${colors.transparentBlue};
  height: 100vh;
  width: 200px;
  background-color: ${colors.darkBlue};
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 10px 10px;
  font-size: 22px;
  font-weight: 100;

  &:hover {
    cursor: pointer;
    background-color: ${colors.blue}
  }
`
export const Apartment = styled(ApartmentIcon)`
  ${marginRight}
`

export const Resident = styled(PersonIcon)`
  ${marginRight}
`

export const Vehicle = styled(DirectionsCarFilledIcon)`
  ${marginRight}
`

export const Visitor = styled(EmojiPeopleIcon)`
  ${marginRight}
`

export const Visit = styled(EventIcon)`
  ${marginRight}
`
