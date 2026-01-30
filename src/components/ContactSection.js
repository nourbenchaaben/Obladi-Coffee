import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Locations</h4>
                  <p>Multiple locations in Tunis<br/>Check Instagram for updates</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📲</span>
                <div>
                  <h4>Follow Us</h4>
                  <p>@obladicoffee on Instagram<br/>See our latest brunch posts!</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🎟️</span>
                <div>
                  <h4>Loyalty Card</h4>
                  <p>Get your loyalty card at either store<br/>Rewards for regular visits</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🕐</span>
                <div>
                  <h4>Perfect For</h4>
                  <p>☕ Work quietly<br/>📖 Study sessions<br/>🎉 Relax & chill</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
