import React from "react";
import logo from "../../assets/nav-logo.png";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navImg">
        <img src={logo} className="logo" alt="My Website Logo" />
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/orderOnline">Order online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
