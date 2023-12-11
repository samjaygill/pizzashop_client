import React from "react";
import basket from "./images/basket.png";
import logo from "./images/logo.png";
import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo-icon" />
        </Link>
      </div>
      <div className="header-links">
        <Link to="/pizza" className="pizza-link">
          Pizza
        </Link>
        <Link to="/pasta" className="pasta-link">
          Pasta
        </Link>
        <Link to="/wraps" className="wraps-link">
          Wraps
        </Link>
        <Link to="/desserts" className="desserts-link">
          Dessert
        </Link>
        <Link to="/drinks" className="drinks-link">
          Drinks
        </Link>
      </div>
      <div className="basket">
        <Link to="/basket" className="basket-link">
          <img src={basket} alt="basket" className="basket-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
