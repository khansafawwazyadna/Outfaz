// src/components/Features.jsx
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping on orders over $100'
    },
    {
      icon: '🔄',
      title: 'Flexible Rental',
      description: 'Rent for days, weeks, or months'
    },
    {
      icon: '🛡️',
      title: 'Quality Guarantee',
      description: 'All equipment tested and certified'
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Expert advice anytime you need it'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Choose OutFaz?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;