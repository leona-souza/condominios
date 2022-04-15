import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Menu } from "components/Menu"
import { Apartamentos } from "pages/Apartamentos"
import { Moradores } from "pages/Moradores"

import * as Styled from "./App.styles"

function App() {
  return (
    <BrowserRouter>
      <Styled.Container>
        <Styled.Aside>
          <Menu />
        </Styled.Aside>
        <Styled.Main>
          <Routes>
            <Route path={'/'} element={<Apartamentos />} />
            <Route path={'/apartamentos'} element={<Apartamentos />} />
            <Route path={'/moradores'} element={<Moradores />} />
          </Routes>
        </Styled.Main>
      </Styled.Container>
    </BrowserRouter>
  )
}

export default App
