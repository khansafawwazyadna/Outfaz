// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ 
  image, 
  title, 
  price, 
  rentalPrice, 
  rating, 
  category, 
  isAvailable, 
  isRentable 
}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <div className="image-placeholder">
          {image || '📷'}
        </div>
        <div className="product-badges">
          {isAvailable && <span className="badge available">Available</span>}
          {isRentable && <span className="badge rentable">Rentable</span>}
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-title">{title}</h3>
        
        <div className="product-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-value">({rating})</span>
        </div>
        
        <div className="product-pricing">
          <div className="price-buy">
            <span className="price-label">Buy:</span>
            <span className="price-value">${price}</span>
          </div>
          {rentalPrice && (
            <div className="price-rent">
              <span className="price-label">Rent:</span>
              <span className="price-value">${rentalPrice}/day</span>
            </div>
          )}
        </div>
        
        <div className="product-actions">
          <button className="btn btn-primary">Add to Cart</button>
          {isRentable && (
            <button className="btn btn-outline">Rent Now</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;