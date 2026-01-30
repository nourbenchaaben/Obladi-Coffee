import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Obladi Coffee</h3>
            <p>Where nature meets modern café culture. Your urban botanical oasis.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/ObladiCoffee/" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              <a href="https://www.instagram.com/obladicoffee/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Obladi Coffee. All rights reserved. | Designed with care 🌿</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
