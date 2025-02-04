import React from "react";
import { FaIndustry, FaCertificate, FaTruck, FaHandshake, FaHeadset } from "react-icons/fa"; // Using react-icons for icons
import "./OurValues.css"; // Import the CSS for styling

export default function OurValues() {
  return (
    <div className="our-values-container">
      <h2>Why Choose Us?</h2>
      <div className="values">
        <div className="value-card">
          <FaIndustry className="value-icon" />
          <h3>Industry Leaders</h3>
          <p>We are at the forefront of the industry, driving innovation and setting standards.</p>
        </div>
        <div className="value-card">
          <FaCertificate className="value-icon" />
          <h3>Quality Guaranteed</h3>
          <p>Our products meet the highest quality standards to ensure customer satisfaction.</p>
        </div>
        <div className="value-card">
          <FaTruck className="value-icon" />
          <h3>Flexible & Timely Delivery</h3>
          <p>We offer flexible delivery options to ensure timely arrival of products at your doorstep.</p>
        </div>
        <div className="value-card">
          <FaHandshake className="value-icon" />
          <h3>Service Guaranteed</h3>
          <p>Our customer service team is dedicated to helping you with any issues, providing quick solutions.</p>
        </div>
        <div className="value-card">
          <FaHeadset className="value-icon" />
          <h3>After Sales Support</h3>
          <p>We offer continuous after-sales support to ensure that you're completely satisfied with our products.</p>
        </div>
      </div>
    </div>
  );
}
