import React from 'react'
import { useState } from "react"
import Context from '../context/Context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Carrito from '../pages/Carrito'
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import Registro from '../pages/Registro'
import Details from '../pages/Details'
import Home from '../pages/Home'

const AppRoutes = () => {
  const [usuario, setUsuario] = useState(null)

  return (
    <>
          <Context.Provider value={{ usuario, setUsuario }} >

    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
<<<<<<< HEAD
            <Route path='/poleras/:id' element={<Details/>} />
=======
            <Route path='/polera/:id' element={<Details/>} />
>>>>>>> release/felipe/hotfixestilos
            <Route path='/carrito' element={<Carrito/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/perfil' element={<Perfil/>} />
            <Route path='/registro' element={<Registro/>} />
        </Routes>
    </Router>
    </Context.Provider>
    </>
  )
}

export default AppRoutes