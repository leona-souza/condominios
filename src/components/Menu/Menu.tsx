import * as Styled from './Menu.styles'
import { useNavigate } from 'react-router-dom'

const Menu = (): JSX.Element => {
  const navigate = useNavigate()

  return(
    <Styled.Container>
      <Styled.Option onClick={() => navigate('/apartamentos')}>
        <Styled.Apartment /> Apartamentos
      </Styled.Option>

      <Styled.Option onClick={() => navigate('/moradores')}>
        <Styled.Resident /> Moradores
      </Styled.Option>

      <Styled.Option onClick={() => navigate('/veiculos')}>
        <Styled.Vehicle /> Veículos
      </Styled.Option>

      <Styled.Option onClick={() => navigate('/visitantes')}>
        <Styled.Visitor /> Visitantes
      </Styled.Option>

      <Styled.Option onClick={() => navigate('/visitas')}>
        <Styled.Visit /> Visitas
      </Styled.Option>
    </Styled.Container>
  )
}

export { Menu }
