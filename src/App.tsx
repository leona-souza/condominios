import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Menu } from 'components/Menu'
import { Apartamentos } from 'pages/Apartamentos'
import { Moradores } from 'pages/Moradores'
import { Veiculos } from 'pages/Veiculos'
import { Visitantes } from 'pages/Visitantes'
import { Visitas } from 'pages/Visitas'

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
            {/* LISTAGEM */}
            <Route path={'/'} element={<Apartamentos />} />
            <Route path={'/apartamentos'} element={<Apartamentos />} />
            <Route path={'/moradores'} element={<Moradores />} />
            <Route path={'/veiculos'} element={<Veiculos />} />
            <Route path={'/visitantes'} element={<Visitantes />} />
            <Route path={'/visitas'} element={<Visitas />} />

            {/* FORMULARIOS */}
            <Route path={'/apartamentos/editar/:id'} element={<Apartamentos />} />
          </Routes>
        </Styled.Main>
      </Styled.Container>
    </BrowserRouter>
  )
}

export default App
