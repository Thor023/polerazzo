import React, { useContext } from 'react'
import ItemCart from '../components/ItemCart';
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const { cartItem } = useContext(CartContext);
  return (

    <div className='carrito__container'>
        <h1>Detalles del pedido:</h1>
        {cartItem.length === 0 ? (<span>Tu carro esta vacio</span>)
        :(<div>
            {cartItem.map((item) => (
                <ItemCart key={item.id} item={item}/>
            ))}
        </div>)}
        <div className='payment_info'>
                <h1>Total: ${cartItem.reduce((previousValue, currentValue) => previousValue + currentValue.amount * currentValue.price , 0)}
                </h1>
                <button type='button' id='payment'>Ir a Pagar</button>
            </div>    
    </div>
  )
}

export default Carrito