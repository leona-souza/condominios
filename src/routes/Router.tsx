import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Apartamentos } from 'pages/Apartamentos'

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apartamentos />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
