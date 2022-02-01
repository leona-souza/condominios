import * as Styled from './Menu.styles'

const Menu = (): JSX.Element => {
  return(
    <Styled.Container>
      <Styled.Option>
        <Styled.Apartment /> Apartamentos
      </Styled.Option>
      <Styled.Option>
        <Styled.Resident /> Moradores
      </Styled.Option>
      <Styled.Option>
        <Styled.Vehicle /> Veículos
      </Styled.Option>
      <Styled.Option>
        <Styled.Visitor /> Visitantes
      </Styled.Option>
      <Styled.Option>
        <Styled.Visit /> Visitas
      </Styled.Option>
    </Styled.Container>
  )
}

export { Menu }
