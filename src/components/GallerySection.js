import React from 'react';
import './GallerySection.css';
import { imageConfig } from '../assets/imageConfig';

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'Sunday Brunch',
      description: 'Fresh brunch served all day, every day',
      image: imageConfig.gallery.brunch
    },
    {
      id: 2,
      title: 'Café Ambiance',
      description: 'Cozy seating with lush botanical décor',
      image: imageConfig.gallery.ambiance
    },
    {
      id: 3,
      title: 'Specialty Coffee',
      description: 'Artisan-crafted lattes with perfect foam art',
      image: imageConfig.gallery.coffee
    },
    {
      id: 4,
      title: 'Work Space',
      description: 'Quiet corner perfect for productivity & focus',
      image: imageConfig.gallery.workspace
    },
    {
      id: 5,
      title: 'Brunch Bowls',
      description: 'Colorful, nutritious, and beautifully presented',
      image: imageConfig.gallery.bowls
    },
    {
      id: 6,
      title: 'Green Oasis',
      description: 'Nature-inspired design throughout the café',
      image: imageConfig.gallery.plants
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">Explore the ambiance of Obladi Coffee</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.image} 
                alt={image.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-title">{image.title}</h3>
                <p className="gallery-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
