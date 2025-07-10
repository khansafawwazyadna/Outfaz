// src/components/CategoryGrid.jsx
import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryGrid = ({ title }) => {
  const categories = [
    {
      icon: '🏕️',
      title: 'Camping',
      description: 'Tents, sleeping bags, camping chairs',
      itemCount: 150
    },
    {
      icon: '🥾',
      title: 'Hiking',
      description: 'Boots, backpacks, hiking poles',
      itemCount: 200
    },
    {
      icon: '🧗',
      title: 'Climbing',
      description: 'Ropes, harnesses, climbing shoes',
      itemCount: 120
    },
    {
      icon: '🎒',
      title: 'Adventure',
      description: 'Multi-day expedition gear',
      itemCount: 85
    },
    {
      icon: '🧭',
      title: 'Navigation',
      description: 'GPS, compasses, maps',
      itemCount: 65
    },
    {
      icon: '🔦',
      title: 'Lighting',
      description: 'Headlamps, flashlights, lanterns',
      itemCount: 90
    }
  ];

  return (
    <section className="category-grid-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              itemCount={category.itemCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;