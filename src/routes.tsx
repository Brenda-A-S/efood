import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantHome from './pages/RestaurantHome'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantHome />} />
  </Routes>
)

export default RoutesConfig
