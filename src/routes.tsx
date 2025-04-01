import { Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home/Index'
import Profile from './components/pages/Profile/Index'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
)
export default Rotas
