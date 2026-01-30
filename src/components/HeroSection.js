import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Obladi Coffee</h1>
        <p className="hero-subtitle">Brunch All Day, Every Day</p>
        <p className="hero-tagline">Your perfect spot to chill, work, or simply enjoy a good café</p>
        <button className="cta-button">View Our Menu</button>
      </div>
    </section>
  );
};

export default HeroSection;
