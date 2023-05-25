import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Carrito from '../pages/Carrito'
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import Registro from '../pages/Registro'
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
            <Route path='/login' element={<Login/>} />
            <Route path='/perfil' element={<Perfil/>} />
            <Route path='/registro' element={<Registro/>} />
        </Routes>
    </Router>
    </>
  )
}

export default AppRoutes