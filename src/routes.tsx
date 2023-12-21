import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import LaDolceProfile from './pages/LaDolceProfile'

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladouce" element={<LaDolceProfile />} />
  </Routes>
)

export default RoutesComponent
