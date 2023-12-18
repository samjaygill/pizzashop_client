import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="menu-item">
          <Link to="/pizza" className="menu-link">
            <p className="menu-text">Pizzas</p>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/pasta" className="menu-link">
            <p className="menu-text">Pastas</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/wraps" className="menu-link">
            <p className="menu-text">Wraps</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/desserts" className="menu-link">
            <p className="menu-text">Desserts</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/drinks" className="menu-link">
            <p className="menu-text">Drinks</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
