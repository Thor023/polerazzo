import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Carrito from '../pages/Carrito'
import Details from '../pages/Details'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pizza/:id' element={<Details/>} />
            <Route path='/carrito' element={<Carrito/>} />
        </Routes>
    </Router>
    </>
  )
}

export default AppRoutes