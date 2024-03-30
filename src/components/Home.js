// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css'; // Import custom CSS for Home page

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Our E-Commerce Store</h1>
        <p className="home-description">
          Explore a wide range of products from top brands. Shop for electronics, fashion, home essentials, and more.
        </p>
        {/* Link the button to the products route */}
        <Link to="/products" className="home-btn">Shop Now</Link>
      </div>
    </div>
  );
}

export default Home;
