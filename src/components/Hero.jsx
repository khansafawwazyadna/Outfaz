import React from 'react';

const Hero = ({ title, subtitle, description }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-subtitle">{subtitle}</h2>
        <p className="hero-description">{description}</p>
        
        <div className="hero-actions">
          <button className="btn btn-primary">Shop Now</button>
          <button className="btn btn-secondary">Rent Equipment</button>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="image-placeholder">
          🏔️ Adventure Awaits
        </div>
      </div>
    </section>
  );
};

export default Hero;