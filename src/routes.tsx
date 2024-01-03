import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantProfile from './pages/RestaurantProfile'

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<RestaurantProfile />} />
  </Routes>
)

export default RoutesComponent
