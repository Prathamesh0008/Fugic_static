import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/GlasswarePage.css';
import image1 from '../assets/right-images/glassware1.jpg';
import image2 from '../assets/right-images/glassware2.jpg';
import image3 from '../assets/right-images/glassware3.jpg';

// List of glassware items
const glasswareData = [
  "Beakers",
  "Conical Flasks",
  "Graduated Cylinders",
  "Burettes",
  "Pipettes and Droppers",
  "Volumetric / Graduated Glassware",
  "Interchangeable Glassware and Adapters",
  "General Laboratory Glassware",
  "Funnels, Bottles and Petri Dishes",
  "Viscometers",
  "Sintered Glassware",
  "Test Tubes & Centrifuge Tubes",
  "Distillation Assemblies"
];
const UniversalBreadcrumb = () => {
    const location = useLocation();
  
    // Split the URL path into parts
    const pathnames = location.pathname.split('/').filter(x => x);
    const lastPathname = pathnames[pathnames.length - 1];
  
    return (
      <nav className="breadcrumb">
        <span>
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          {' > '}
        </span>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <span key={index}>
              <Link to={to} className="breadcrumb-link">
                {value.charAt(0).toUpperCase() + value.slice(1)} {/* Capitalize each segment */}
              </Link>
              {index < pathnames.length - 1 && ' > '}
            </span>
          );
        })}
      </nav>
    );
  };

const GlasswarePage = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (item, quantity) => {
    setQuantities({
      ...quantities,
      [item]: quantity
    });
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item] || 1; // Default quantity to 1 if not selected
    console.log(`Added ${quantity} units of ${item} to the cart`);
  };

  const incrementQuantity = (item) => {
    setQuantities({
      ...quantities,
      [item]: (quantities[item] || 1) + 1
    });
  };

  const decrementQuantity = (item) => {
    setQuantities({
      ...quantities,
      [item]: Math.max(1, (quantities[item] || 1) - 1)
    });
  };

  return (
    <div className="glassware-page">
    <UniversalBreadcrumb />
      {/* Breadcrumb Section */}
      

      {/* Banner Section */}
      <div className="glassware-page-banner">
        <div className="glassware-page-banner-text">
          Glassware
        </div>
      </div>

      {/* Glassware List as Table */}
      <div className="glassware-page-details">
        <div className="glassware-page-info">
          {/* <h3>Glassware Items</h3> */}
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Add to Cart</th>
              </tr>
            </thead>
            <tbody>
              {glasswareData.map((item, index) => (
                <tr key={index}>
                  <td className='glassware-items'>{item}</td>
                  <td>
                    <div className="glassware-page-quantity-controls">
                      <button
                        onClick={() => decrementQuantity(item)}
                        className="glassware-page-quantity-button"
                      >
                        -
                      </button>
                      <span className="glassware-page-quantity-display">
                        {quantities[item] || 1}
                      </span>
                      <button
                        onClick={() => incrementQuantity(item)}
                        className="glassware-page-quantity-button"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="glassware-page-add-to-cart-button"
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Images Section */}
      <div className="glassware-page-images-section">
        <img src={image1} alt="Glassware 1" className="glassware-page-product-image" />
        <img src={image2} alt="Glassware 2" className="glassware-page-product-image" />
        <img src={image3} alt="Glassware 3" className="glassware-page-product-image" />
      </div>
    </div>
  );
};

export default GlasswarePage;
