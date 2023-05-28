import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/polerazzo_logo.png";
import Cart from "../assets/images/shoppingcart.png";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItem } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="link">
        <div className="navbar_container">
          <div className="navbar_logo">
            <img src={Logo} alt="Polerazzo Logo" className="logo_image" />
          </div>
          <div className="navbar_title">
            <h3>Polerazzo</h3>
          </div>
        </div>
      </Link>
      <div className="navbar_cart">
        <Link to="/carrito" className="link">
          <div className="navbar_cart_logo">
            <img src={Cart} alt="Shopping Cart Icon" width={"25px"} />
          </div>
        </Link>
        <span>
          $
          {cartItem.reduce(
            (previousValue, currentValue) =>
              previousValue + currentValue.amount * currentValue.price,
            0
          )}
        </span>
      </div>
      <div className="navbar_buttons">
        <Link to="/login" className="link">
          <button className="navbar_button">Login</button>
        </Link>
        <Link to="/registro" className="link">
          <button className="navbar_button">Registrarse</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
