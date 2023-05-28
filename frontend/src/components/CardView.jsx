import React, { useState } from "react";
import icon from "../assets/images/pizza.png";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardView = ({ pizzas }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <>
      {pizzas.map((pizza) => (
        <article key={pizza.id} className="card_container">
          <div className="card_img">
            <img src={pizza.img} alt="image" />
          </div>
          <div className="card_title">
            <h1>{pizza.name}</h1>
            <hr />
            <div className="ingredients">
              <label htmlFor={`color-select-${pizza.id}`}>Colores disponibles</label>
              <select
                id={`color-select-${pizza.id}`}
                value={selectedColor}
                onChange={handleColorChange}
                className="color_select"
              >
                <option value="">Selecciona un color</option>
                {pizza.ingredients.map((ingredient, idx) => (
                  <option key={idx} value={ingredient}>
                    {ingredient}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            <div className="tallas">
            <label htmlFor={`color-select-${pizza.id}`}>Tallas disponibles</label>
              <select
                id={`color-select-${pizza.id}`}
                value={selectedColor}
                onChange={handleColorChange}
                className="color_select"
              >
                <option value="">Selecciona una talla</option>
                {pizza.tallas.map((ingredient, idx) => (
                  <option key={idx} value={ingredient}>
                    {ingredient}
                  </option>
                ))}
              </select>

            </div>
            <h1 className="price">${pizza.price}</h1>

            <div className="add_card">
              <Link style={{ textDecoration: 'none' }} to={`/pizza/${pizza.id}`}>
                <button>
                  Ver Mas
                  <span>&#128064;</span>
                </button>
              </Link>
              <button type="button" onClick={() => addToCart(pizza)}>
                Añadir
                <span>&#x1F6D2;</span>
              </button>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default CardView;
