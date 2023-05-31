import React, { useState } from "react";
import icon from "../assets/images/polera_blanca.png";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardView = ({ poleras }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {poleras.map((polera) => (
        <article key={polera.id} className="card_container">
          <div className="card_img">
            <img src={polera.img} alt="image" />
          </div>
          <div className="card_title">
            <h1>{polera.name}</h1>
            <hr />
            {/* <div className="ingredients">
              <label htmlFor={`color-select-${polera.id}`}>Colores disponibles</label>
              <select
                id={`color-select-${polera.id}`}
                value={polera.selectedColor}
                onChange={(event) => polera.setSelectedColor(event.target.value)}
                className="color_select"
              >
                <option value="">Selecciona un color</option>
                {polera.ingredients.map((ingredient, idx) => (
                  <option key={idx} value={ingredient}>
                    {ingredient}
                  </option>
                ))}
              </select>
            </div> */}
            {/* <hr />
            <div className="tallas">
              <label htmlFor={`size-select-${polera.id}`}>Tallas disponibles</label>
              <select
                id={`size-select-${polera.id}`}
                value={polera.selectedSize}
                onChange={(event) => polera.setSelectedSize(event.target.value)}
                className="size_select"
              >
                <option value="">Selecciona una talla</option>
                {polera.tallas.map((talla, idx) => (
                  <option key={idx} value={talla}>
                    {talla}
                  </option>
                ))}
              </select>
            </div> */}
            <h1 className="price">${polera.price}</h1>
            <div className="add_card">
              <Link style={{ textDecoration: 'none' }} to={`/polera/${polera.id}`}>
                <button>
                  Ver Más
                  <span>&#128064;</span>
                </button>
              </Link>
              <button type="button" onClick={() => addToCart(polera)}>
                Añadir
                <span>&#x1F6D2;</span>
              </button>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

export default CardView;
