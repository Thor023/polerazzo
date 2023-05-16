import React from "react";
import icon from "../assets/images/pizza.png";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardView = ({ pizzas }) => {
  const { addToCart } = useContext(CartContext)
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
              <span>Ingredientes:</span>
              <ul>
                {pizza.ingredients.map((ingredient, idx) => (
                  <li key={idx}>
                    <span>
                      <img src={icon} alt="" />
                    </span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <h1 className="price">${pizza.price}</h1>

            <div className="add_card">
              <Link style={{textDecoration:'none'}} to={`/pizza/${pizza.id}`}>
              <button>
                Ver Mas
                <span>&#128064;</span>
              </button>
              </Link>
              <button type="buton" onClick={()=>addToCart(pizza)} > 
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
