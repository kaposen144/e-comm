import React from "react";
import { Link } from "react-router-dom";

const Header = ({ count }) => {
  return (
    <div className="Header">
      <Link to="/">Home</Link>
      <Link to="/about">О нас</Link>
      <Link to="/cart">Корзина {count}</Link>
    </div>
  );
};

export default Header;
