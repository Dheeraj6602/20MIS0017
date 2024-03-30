// components/AllProductsPage.js
import React, { useState } from 'react';
import './AllProductsPage.css'; // Import custom CSS

function AllProductsPage() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: 'Product 1',
      company: 'Company A',
      category: 'Category X',
      price: 19.99,
      rating: 4.5,
      discount: '10%',
      availability: true,
    },
    {
      id: 2,
      name: 'Product 2',
      company: 'Company B',
      category: 'Category Y',
      price: 29.99,
      rating: 4.2,
      discount: '20%',
      availability: false,
    },
    {
      id: 3,
      name: 'Product 3',
      company: 'Company C',
      category: 'Category Z',
      price: 39.99,
      rating: 4.7,
      discount: '15%',
      availability: true,
    },
    {
      id: 4,
      name: 'Product 4',
      company: 'Company D',
      category: 'Category X',
      price: 49.99,
      rating: 4.0,
      discount: '25%',
      availability: true,
    },
    {
      id: 5,
      name: 'Product 5',
      company: 'Company E',
      category: 'Category Y',
      price: 59.99,
      rating: 4.8,
      discount: '30%',
      availability: false,
    },
    {
      id: 6,
      name: 'Product 6',
      company: 'Company F',
      category: 'Category Z',
      price: 69.99,
      rating: 4.2,
      discount: '10%',
      availability: true,
    },
    {
      id: 7,
      name: 'Product 7',
      company: 'Company G',
      category: 'Category X',
      price: 79.99,
      rating: 4.6,
      discount: '20%',
      availability: true,
    },
    {
      id: 8,
      name: 'Product 8',
      company: 'Company H',
      category: 'Category Y',
      price: 89.99,
      rating: 4.3,
      discount: '15%',
      availability: false,
    },
    // Add more sample products here...
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const increaseQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item));
  };

  return (
    <div className="container">
      
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-card__header">
              <h2 className="product-name">{product.name}</h2>
            </div>
            <div className="product-card__content">
              <p className="product-detail">Company: {product.company}</p>
              <p className="product-detail">Category: {product.category}</p>
              <p className="product-detail">Price: ${product.price.toFixed(2)}</p>
              <p className="product-detail">Rating: {product.rating}</p>
              <p className="product-detail">Discount: {product.discount}</p>
              <p className={`product-detail ${product.availability ? 'available' : 'out-of-stock'}`}>
                Availability: {product.availability ? 'In stock' : 'Out of stock'}
              </p>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                <span className="quantity">{product.quantity || 0}</span>
                <button className="quantity-btn" onClick={() => increaseQuantity(product.id)}>+</button>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;