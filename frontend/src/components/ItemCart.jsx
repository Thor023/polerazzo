import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCart = ({ item }) => {
    const {addToCart, deleteItemToCart} = useContext(CartContext)
  return (
    <div className="carrito__wrapper">
            <article>
                <div className='carrito__description'>
                    <img src={item.img} alt="" width={'50px'} />
                    <h2>{item.name}</h2>
                </div>
                <div className='carrito__info__pay'>
                    <h2>${item.price}</h2>
                    <button id='button__' onClick={()=> {deleteItemToCart(item)}}>-</button>
                    <span>{item.amount}</span>
                    <button id='button_sum' onClick={()=>{addToCart(item)}}>+</button>
                </div>
            </article>
            
        </div>
  )
}

export default ItemCart