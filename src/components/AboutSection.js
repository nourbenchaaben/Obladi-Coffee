import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Obladi Coffee</h2>
          <p className="about-text">
            Obladi Coffee is your perfect urban sanctuary. We're a cozy café dedicated to serving brunch all day, every day. Whether you're here to enjoy a good coffee, work peacefully, study, or simply take a break from the city, Obladi is designed for you.
          </p>
          <p className="about-text">
            Our space blends modern café culture with botanical serenity. Surrounded by lush plants and natural light, we create an environment where productivity and relaxation coexist. Every cup is crafted with care, and every corner invites you to stay a little longer.
          </p>
          <div className="about-highlights">
            <div className="highlight">
              <h4>☕ All-Day Brunch</h4>
              <p>Fresh, delicious brunch served whenever you need it</p>
            </div>
            <div className="highlight">
              <h4>🌿 Botanical Ambiance</h4>
              <p>Natural design with living plants for a peaceful escape</p>
            </div>
            <div className="highlight">
              <h4>💼 Work-Friendly</h4>
              <p>Wi-Fi, seating, and a calm atmosphere for productivity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
