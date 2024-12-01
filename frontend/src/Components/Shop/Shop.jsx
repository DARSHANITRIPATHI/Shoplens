// Shop.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="shop">
      <h2>Shop All Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.productId} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              Brand: <strong>{product.brand}</strong>
            </p>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.productId}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
