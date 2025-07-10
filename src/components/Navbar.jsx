import React from 'react';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>OutFaz</h1>
          <span className="tagline">Adventure Gear Hub</span>
        </div>
        
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#products" className="nav-link">Products</a>
            </li>
            <li className="nav-item">
              <a href="#rental" className="nav-link">Rental</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
        
        <div className="navbar-actions">
          <button className="search-btn">🔍</button>
          <button className="cart-btn">🛒</button>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;