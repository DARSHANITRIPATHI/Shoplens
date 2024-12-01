import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './product.css'

const Product = () => {
  const { productId } = useParams(); // Extract the productId from the URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Fetch product details by productId from the backend
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      {/* Ratings Display */}
      <p>Ratings: {product.ratings ? product.ratings.toFixed(1) : "N/A"} / 5</p>

      {/* Reviews Display */}
      <div className="reviews">
        <h4>Reviews:</h4>
        {product.reviews && product.reviews.length > 0 ? (
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.user}:</strong> {review.comment} (Rating:{" "}
                {review.rating}/5)
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {/* Back Button */}
      <div className="back-btn">
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
};

export default Product;
