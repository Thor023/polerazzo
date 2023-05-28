import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import icon from "../assets/images/pizza.png";
import { CartContext } from "../context/CartContext";
import data from "../data/pizzas.json";

const Details = () => {
  const [pizza, setPizza] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    detailsPizza();
  }, []);

  const detailsPizza = () => {
    setPizza(data.find((item) => item.id === id));
    setLoading(false);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <>
      <article className="wrapper">
        <div className="grid__img">
          <img src={pizza.img} alt="" />
        </div>
        <div className="description">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "1rem",
              cursor: "pointer",
            }}
          >
            <h1>{pizza.name}</h1>
            <span>
              <svg
                onClick={() => navigate(-1)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ width: "30px" }}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
          <hr />
          <p>{pizza.desc}</p>

          <div className="ingredients" style={{ padding: "0" }}>
            <span>Colores</span>
            <select
              value={selectedColor}
              onChange={handleColorChange}
              className="color_select"
            >
              <option value="">Color</option>
              {pizza.ingredients.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <hr />
          <div className="tallas" style={{ padding: "0" }}>
            <span>Tallas</span>
            <select
              value={selectedSize}
              onChange={handleSizeChange}
              className="size_select"
            >
              <option value="">Talla</option>
              {pizza.tallas.map((size, idx) => (
                <option key={idx} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="info_card">
            <h1>Precio: ${pizza.price}</h1>
            <button
              type="button"
              onClick={() => addToCart({ ...pizza, color: selectedColor, size: selectedSize })}
            >
              Añadir
              <span>&#x1F6D2;</span>
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Details;
