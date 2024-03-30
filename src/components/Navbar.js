// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar__logo">E-Commerce</Link>
        <ul className="navbar__links">
          <li>
            <Link to="/" className="navbar__link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="navbar__link">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="navbar__link">Cart</Link>
          </li>
          <li>
            <Link to="/login" className="navbar__link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
