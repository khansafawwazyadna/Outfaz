// src/components/CategoryCard.jsx
import React from 'react';

const CategoryCard = ({ icon, title, description, itemCount }) => {
  return (
    <div className="category-card">
      <div className="category-icon">
        {icon}
      </div>
      <div className="category-content">
        <h3 className="category-title">{title}</h3>
        <p className="category-description">{description}</p>
        <span className="category-count">{itemCount} items</span>
      </div>
    </div>
  );
};

export default CategoryCard;