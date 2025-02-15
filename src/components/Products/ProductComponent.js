import React from 'react';
import './ProductComponent.css';
import chemical from '../../assets/products/Chemical.jpg';
import glassware from '../../assets/products/glassware.jpg';
import filterpaper from '../../assets/products/Filterpaper.jpg';
import cleaning from '../../assets/products/Cleaning.jpg';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Chemical',
    image: chemical,
    // link: '/products/chemical',
  },
  {
    name: 'Glassware',
    image: glassware,
    // link: '/products/glassware',
  },
  {
    name: 'Filter Paper',
    image: filterpaper,
    // link: '/products/FilterPaper',
  },
  {
    name: 'Cleaning Solution',
    image: cleaning,
    // link: '/products/cleaning',
  },
];

const ProductComponent = () => {
  return (
    <div className="custom-product-container">
      <h2 className="custom-product-header">Additional Products</h2>
      <div className="custom-product-grid">
        {products.map((product, index) => (
          <div key={index} className="custom-product-card-wrapper">
            <Link to={product.link} className="custom-product-card-link">
              <div className="custom-product-card">
                <img src={product.image} alt={product.name} className="custom-product-image" />
              </div>
              <div className="custom-product-title">{product.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
