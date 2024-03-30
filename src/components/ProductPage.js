// components/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css'; // Import custom CSS for ProductPage

function ProductPage() {
  // Access the productId from the URL
  const { productId } = useParams();

  // Replace this with your logic to fetch product details based on productId
  const product = {
    id: productId,
    name: 'Sample Product',
    company: 'Sample Company',
    category: 'Sample Category',
    price: 19.99,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula sed faucibus ultrices.',
  };

  return (
    <div className="product-container">
      <div className="product-content">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-detail">Company: {product.company}</p>
        <p className="product-detail">Category: {product.category}</p>
        <p className="product-detail">Price: ${product.price.toFixed(2)}</p>
        <p className="product-detail">Rating: {product.rating}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductPage;
