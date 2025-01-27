import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/">MyApp</NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active-link">Products</NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active-link">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active-link">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
