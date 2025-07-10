// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Sample product data
  const featuredProducts = [
    {
      image: '🏕️',
      title: 'Professional Camping Tent',
      price: 299,
      rentalPrice: 25,
      rating: 4.8,
      category: 'Camping',
      isAvailable: true,
      isRentable: true
    },
    {
      image: '🎒',
      title: 'Hiking Backpack 65L',
      price: 189,
      rentalPrice: 15,
      rating: 4.6,
      category: 'Hiking',
      isAvailable: true,
      isRentable: true
    },
    {
      image: '🧗',
      title: 'Climbing Harness Pro',
      price: 89,
      rentalPrice: 8,
      rating: 4.9,
      category: 'Climbing',
      isAvailable: true,
      isRentable: true
    },
    {
      image: '🔦',
      title: 'LED Headlamp Ultra',
      price: 45,
      rentalPrice: 5,
      rating: 4.7,
      category: 'Lighting',
      isAvailable: true,
      isRentable: false
    }
  ];

  return (
    <div className="App">
      <Navbar title="OutFaz - Adventure Gear Hub" />
      
      <Hero 
        title="OutFaz"
        subtitle="Your Adventure Starts Here"
        description="Discover, buy, or rent premium outdoor equipment for your next great adventure. From camping to climbing, we've got you covered."
      />
      
      <CategoryGrid title="Shop by Category" />
      
      <ProductGrid 
        title="Featured Products" 
        products={featuredProducts} 
      />
      
      <Features />
      
      <Footer />
    </div>
  );
}

export default App;