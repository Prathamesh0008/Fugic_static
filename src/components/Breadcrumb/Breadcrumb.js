import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Breadcrumb.css'; // Import the new CSS

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="breadcrumb-container">
      <div className="breadcrumb">
        {paths.map((path, index) => (
          <span key={index} className="breadcrumb-item">
            <Link to={path.link} className="breadcrumb-link">
              {path.name}
            </Link>
            {index < paths.length - 1 && <span className="separator">⮞</span>}
          </span>
        ))}
      </div>
    </nav>
  );
};

Breadcrumb.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumb;
