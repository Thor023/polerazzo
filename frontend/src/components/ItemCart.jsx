import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCart = ({ item }) => {
  const { addToCart, deleteItemToCart } = useContext(CartContext);

  const handleCheckout = () => {
    // Abre el enlace en otra ventana
    window.open('https://www.flow.cl/btn.php?token=ak3xrqe', '_blank');
  };

  return (
    <div className="carrito__wrapper">
      <article>
        <div className="carrito__description">
          <img src={item.img} alt="" width={'100px'} /> {/* Ajusta el ancho de la imagen */}
          <h2>{item.name}</h2>
        </div>
        <div className="carrito__info__pay">
          <h2>${item.price}</h2>
          <button
            id="button__"
            onClick={() => {
              deleteItemToCart(item);
            }}
          >
            -
          </button>
          <span>{item.amount}</span>
          <button
            id="button_sum"
            onClick={() => {
              addToCart(item, item.selectedColor, item.selectedSize);
            }}
          >
            +
          </button>
          <button id="payment" onClick={handleCheckout}>
            Ir a pagar
          </button>
        </div>
      </article>
    </div>
  );
};

export default ItemCart;
