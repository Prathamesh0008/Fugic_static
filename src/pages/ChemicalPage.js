import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/ChemicalPage.css';
import image1 from '../assets/right-images/Acetic.jpg';
import image2 from '../assets/right-images/Acetaldehyde.jpg';
import image3 from '../assets/right-images/Acetonitrile.jpg';

// List of chemicals with their CAS numbers and names
const chemicalData = [
  { cas: "64-19-7", name: "Acetic acid" },
  { cas: "64-19-6", name: "Acetaldehyde" },
  { cas: "64-19-5", name: "Acetonitrile" },
  { cas: "64-19-4", name: "Acetyl acetone" },
  { cas: "64-19-3", name: "Acetyl chloride" },
  { cas: "64-19-2", name: "Acrylonitrile" },
  { cas: "64-19-1", name: "Allyl bromide" },
  { cas: "64-18-0", name: "Ammonia" },
  { cas: "67-56-1", name: "Methanol" },
  { cas: "108-88-3", name: "Toluene" },
  { cas: "67-64-1", name: "Acetone" },
  { cas: "1310-58-3", name: "Sodium hydroxide" },
  { cas: "7664-93-9", name: "Sulfuric acid" },
  { cas: "108-94-1", name: "Cyclohexanone" },
  { cas: "110-54-3", name: "Hexane" },
  { cas: "50-00-0", name: "Formaldehyde" },
  { cas: "62-53-3", name: "Aniline" },
  { cas: "71-43-2", name: "Benzene" },
  { cas: "64-17-5", name: "Ethanol" },
  { cas: "107-21-1", name: "Ethylene glycol" },
  { cas: "75-07-0", name: "Acrolein" },
  { cas: "75-00-3", name: "Propylene oxide" },
  { cas: "71-55-6", name: "Chloroform" },
  { cas: "77-58-7", name: "Zinc stearate" },
  { cas: "57-55-6", name: "Propylene glycol" },
  { cas: "74-98-6", name: "Propane" },
  { cas: "79-01-6", name: "Trichloroethylene" },
  { cas: "141-78-6", name: "Ethyl acetate" },
  { cas: "108-10-1", name: "Methyl isobutyl ketone" },
  { cas: "540-59-0", name: "2-Ethylhexanol" },
  { cas: "110-63-4", name: "Butanone" },
  { cas: "78-93-3", name: "Methyl ethyl ketone" },
  { cas: "75-36-5", name: "Butyl acetate" },
  { cas: "74-85-1", name: "Ethylene" },
  { cas: "1317-65-3", name: "Calcium carbonate" },
  { cas: "77-92-9", name: "Citric acid" },
  { cas: "64-18-2", name: "Hydrochloric acid" },
  { cas: "108-99-6", name: "Cyclohexanol" },
  { cas: "110-82-7", name: "Cyclohexene" },
  { cas: "77-74-1", name: "2-Propanol" },
  { cas: "110-43-0", name: "Isopropyl acetate" },
  { cas: "74-89-5", name: "Chloromethane" },
  { cas: "106-94-5", name: "Bromobenzene" },
  { cas: "79-11-8", name: "Chloropicrin" },
  { cas: "8006-61-9", name: "Pine oil" },
  { cas: "107-21-1", name: "Ethylene glycol" },
  { cas: "63-25-2", name: "Naphthalene" },
  { cas: "58-08-2", name: "Benzophenone" },
  { cas: "101-20-2", name: "1,4-Dioxane" },
  { cas: "69-72-7", name: "Benzoic acid" },
  { cas: "74-85-1", name: "Ethylene" },
];

const UniversalBreadcrumb = () => {
    const location = useLocation();
  
    // Split the URL path into parts
    const pathnames = location.pathname.split('/').filter(x => x);
  
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
  

const ChemicalPage = () => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (cas, quantity) => {
    setQuantities({
      ...quantities,
      [cas]: quantity
    });
  };

  const handleAddToCart = (cas) => {
    const quantity = quantities[cas] || 1; // Default quantity to 1 if not selected
    console.log(`Added ${quantity} units of CAS ${cas} to the cart`);
    // Implement cart logic here, such as adding the item to a cart state or localStorage
  };

  const incrementQuantity = (cas) => {
    setQuantities({
      ...quantities,
      [cas]: (quantities[cas] || 1) + 1
    });
  };

  const decrementQuantity = (cas) => {
    setQuantities({
      ...quantities,
      [cas]: Math.max(1, (quantities[cas] || 1) - 1) // Prevent quantity from going below 1
    });
  };

  return (
    <div className="chemical-page">
      {/* Universal Breadcrumb Section */}
      <UniversalBreadcrumb />
  
      {/* Banner Section */}
      <div className="chemical-page-banner">
        <h1 className="chemical-page-banner-text">Chemicals</h1>
      </div>
  
      {/* Chemical List */}
      <div className="chemical-page-details">
        <div className="chemical-page-info">
          <h3>CAS Number and Chemical Name</h3>
          <table>
            <thead>
              <tr>
                <th>CAS No.</th>
                <th>Name of Solvent/Acid</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {chemicalData.map((item) => (
                <tr key={item.cas}>
                  <td>{item.cas}</td>
                  <td>{item.name}</td>
                  <td>
                    <div className="chemical-page-quantity-controls">
                      <button
                        onClick={() => decrementQuantity(item.cas)}
                        className="chemical-page-quantity-button"
                      >
                        -
                      </button>
                      <span className="chemical-page-quantity-display">
                        {quantities[item.cas] || 1}
                      </span>
                      <button
                        onClick={() => incrementQuantity(item.cas)}
                        className="chemical-page-quantity-button"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => handleAddToCart(item.cas)}
                      className="chemical-page-add-to-cart-button"
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
      <div className="chemical-page-images-section">
        <img src={image1} alt="Chemical 1" className="chemical-page-product-image" />
        <img src={image2} alt="Chemical 2" className="chemical-page-product-image" />
        <img src={image3} alt="Chemical 3" className="chemical-page-product-image" />
      </div>
    </div>
  );
};

export default ChemicalPage;
