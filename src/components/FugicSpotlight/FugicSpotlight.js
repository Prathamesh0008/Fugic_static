import React, { useState, useEffect } from "react";
import "./FugicSpotlight.css";

// Dummy images
import image1 from "../../assets/fugicspotlight/fugic_logo.jpg";
import image2 from "../../assets/fugicspotlight/chemical_image_1.jpg";
import image3 from "../../assets/fugicspotlight/chemical_image_2.jpg";
import image4 from "../../assets/fugicspotlight/chemical_image_3.jpg";
import image5 from "../../assets/fugicspotlight/chemical_image_4.jpg";

const FugicSpotlight = () => {
  const images = [
    { 
      src: image1, 
      description: "Fugic Logo: Leading Chemical Solutions\nProviding innovative solutions for the chemical industry.\nCommitted to quality and excellence.\nYour trusted partner in chemical engineering." 
    },
    { 
      src: image2, 
      description: "Chemical 1: High-Quality Chemical Solutions\nEngineered for performance and reliability.\nMeeting the highest industry standards.\nEnsuring safety and efficiency in every application." 
    },
    { 
      src: image3, 
      description: "Chemical 2: Innovative Chemical Engineering\nPioneering advancements in chemical technology.\nDedicated to sustainable practices.\nEnhancing productivity and reducing costs." 
    },
    { 
      src: image4, 
      description: "Chemical 3: Advanced Chemical Technologies\nState-of-the-art solutions for modern challenges.\nFocused on research and development.\nDelivering superior results consistently." 
    },
    { 
      src: image5, 
      description: "Chemical 4: Quality Assurance and Testing\nRigorous testing for unmatched quality.\nAdhering to strict regulatory standards.\nEnsuring the highest level of customer satisfaction." 
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 500); // Duration of fade out
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="fugic-spotlight">
      <h2 className="spotlight-header">Fugic SPOTLIGHT</h2>

      <div className="image-container">
        <div className={`image-wrapper ${fade ? "fade" : ""}`}>
          <img
            src={images[activeIndex].src}
            alt={`Image ${activeIndex + 1}`}
            className="spotlight-image"
          />
          <div className="image-description">
            {images[activeIndex].description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="image-bullets">
        {images.map((_, index) => (
          <span
            key={index}
            className={`bullet ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FugicSpotlight;