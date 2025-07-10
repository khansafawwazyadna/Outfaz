// src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ title, products }) => {
  return (
    <section className="product-grid-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              rentalPrice={product.rentalPrice}
              rating={product.rating}
              category={product.category}
              isAvailable={product.isAvailable}
              isRentable={product.isRentable}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;