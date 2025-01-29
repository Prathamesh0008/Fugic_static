// src/components/Banner.js

import React, { useState, useEffect } from 'react';
import './Banner.css';  // Assuming CSS is in the same directory

// Importing images properly
import banner1 from '../../assets/banner/banner1.jpg';
import banner2 from '../../assets/banner/banner2.jpg';
import banner3 from '../../assets/banner/banner3.jpg';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerItems = [
    { image: banner1, text: 'Banner 1 Description' },
    { image: banner2, text: 'Banner 2 Description' },
    { image: banner3, text: 'Banner 3 Description' }
  ];

  // Move to the next or previous slide
  const moveSlide = (direction) => {
    setCurrentSlide((prevSlide) => (prevSlide + direction + bannerItems.length) % bannerItems.length);
  };

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {bannerItems.map((item, index) => (
          <div className="banner-item" key={index} style={{ backgroundImage: `url(${item.image})` }}>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow-left" onClick={() => moveSlide(-1)}>&#10094;</button>
      <button className="arrow-right" onClick={() => moveSlide(1)}>&#10095;</button>
    </div>
  );
};

export default Banner;
