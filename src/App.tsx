import { Router } from 'routes/Router'
import { Menu } from 'components/Menu'

import * as Styled from './App.styles'

function App() {
  return (
    <Styled.Container>
      <Styled.Aside>
        <Menu />
      </Styled.Aside>
      <Styled.Main>
        <Router />
      </Styled.Main>
    </Styled.Container>
  )
}

export default App
