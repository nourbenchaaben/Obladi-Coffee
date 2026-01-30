import React from 'react';
import './MenuSection.css';

const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Formule Classique',
      description: 'café au choix, viennoiserie, jus frais ou eau 0.5L',
      price: 'TND 8.5'
    },
    {
      id: 2,
      name: 'Formule Obladi',
      description: 'café au choix, bol granola, pain perdu, tartine œufs brouillés, jus frais, eau 0.5L',
      price: 'TND 20'
    },
    {
      id: 3,
      name: 'Bol Granola',
      description: 'Yaourt nature, granola, fruits secs, fruits frais, miel',
      price: 'TND 12.5'
    },
    {
      id: 4,
      name: 'French Toast Gourmand',
      description: 'Pain brioché, sauce caramel, fruits frais, fruits secs',
      price: 'TND 12.5'
    },
    {
      id: 5,
      name: 'Croissant Salé',
      description: 'Croissant, mozzarella, œuf au plat, jambon',
      price: 'TND 7.5'
    },
    {
      id: 6,
      name: 'Scrambled Eggs Toast',
      description: 'Tartine pain de campagne, œufs brouillés, jambon',
      price: 'TND 9'
    }
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">Handpicked items for your perfect café experience</p>
        
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-card-header">
                <h3 className="menu-item-name">{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <p className="menu-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
