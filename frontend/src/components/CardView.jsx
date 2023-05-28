import React from "react"
import icon from "../assets/images/polerazzo_logo.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CardView = ({ poleras }) => {
  const { addToCart } = useContext(CartContext)
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
            <div className="ingredients">
              <span>Colores disponibles</span>
              <ul>
                {polera.colors.map((color, idx) => (
                  <li key={idx}>
                    <span>
                      <img src={icon} alt="" />
                    </span>
                    {color}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <h1 className="price">${poleras.price}</h1>

            <div className="add_card">
              <Link
                style={{ textDecoration: "none" }}
                to={`/poleras/${poleras.id}`}
              >
                <button>
                  Ver Mas
                  <span>&#128064;</span>
                </button>
              </Link>
              <button type="buton" onClick={() => addToCart(poleras)}>
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

export default CardView
