import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import './index.css'
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <AppRoutes/>
    </CartProvider>
  </React.StrictMode>
)
