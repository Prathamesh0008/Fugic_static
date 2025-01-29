import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/FullDescriptionPage.css';

const FullDescriptionPage = () => {
  const location = useLocation();
  const { state } = location;

  // Check if the state is available
  if (!state) {
    return <div>Error: No content found!</div>;
  }

  const { title, fullDescription, image } = state;

  return (
    <div className="full-description-page">
      <h1>{title}</h1>
      <img src={image} alt={title} className="full-image" />
      <p>{fullDescription}</p>
    </div>
  );
};

export default FullDescriptionPage;
