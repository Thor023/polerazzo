import React, { useContext } from 'react'
import ItemCart from '../components/ItemCart';
import { CartContext } from '../context/CartContext'

const Carrito = () => {
  const { cartItem } = useContext(CartContext);

  const handlePayment = () => {
    // Redireccionar al enlace de pago
    window.location.href = 'https://www.flow.cl/btn.php?token=ak3xrqe';
  };

  return (
    <div className='carrito__container'>
      <h1>Detalles del pedido:</h1>
      {cartItem.length === 0 ? (
        <span>Tu carro está vacío</span>
      ) : (
        <div>
          {cartItem.map((item) => (
            <ItemCart key={item.id} item={item} />
          ))}
        </div>
      )}
      <div className='payment_info'>
        <h1>
          Total: ${cartItem.reduce(
            (previousValue, currentValue) =>
              previousValue + currentValue.amount * currentValue.price,
            0
          )}
        </h1>
        <button type='button' id='payment' onClick={handlePayment}>
          Ir a Pagar
        </button>
      </div>
    </div>
  );
}

export default Carrito;
