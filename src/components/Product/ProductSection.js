import React from 'react';
import './ProductSection.css';  // Make sure the CSS is in the same directory
import product1 from '../../assets/products/pharmaceutical.jpg'; // Example for product1
import product2 from '../../assets/products/Laboratory.jpg'; // Make sure you import each image like this
import product3 from '../../assets/products/Industrial.jpg'; 
import product4 from '../../assets/products/Biopharmaceuticall.jpg'; 
import product5 from '../../assets/products/Hplc.jpg'; 
import product6 from '../../assets/products/Speciality.jpg'; 
// import product7 from '../../assets/products/biopharmaceutical.jpg'; 
// import product8 from '../../assets/products/cosmetics.jpg'; 
// import product9 from '../../assets/products/nutrition.jpg'; 
// import product10 from '../../assets/products/agriscience.jpg'; 
// import product11 from '../../assets/products/pharmaceutical.jpg'; 
// import product12 from '../../assets/products/specialty_chemicals.jpg'; 

const ProductSection = () => {
  const productsGroup1 = [
    { id: 1, name: 'Pharmaceutical-Chemicals and Excipients', image: product1 },
    { id: 2, name: 'Laboratory Chemicals and Reagents', image: product2 },
    { id: 3, name: 'Industrial Chemicals and Solvents', image: product3 },
    { id: 4, name: 'Biopharmaceutical Excipients and Chemicals', image: product4 },
    { id: 5, name: 'HPLC & MS Chemicals', image: product5 },
    { id: 6, name: 'Speciality Fine Chemicals', image: product6 }
  ];

  // const productsGroup2 = [
  //   { id: 7, name: 'Biopharmaceutical', image: product7 },
  //   { id: 8, name: 'Cosmetics', image: product8 },
  //   { id: 9, name: 'Nutrition', image: product9 },
  //   { id: 10, name: 'Agriscience', image: product10 },
  //   { id: 11, name: 'Pharmaceutical', image: product11 },
  //   { id: 12, name: 'Specialty_chemicals', image: product12 }
  // ];

  return (
    <div className="productt-section">
      <div className="product-section">
        {/* Group 1 */}
        <div className="product-group">
          <h2>Explore Fugic by Industry</h2>
          <div className="product-row">
            {productsGroup1.slice(0, 6).map((product) => (
              <div className="product-box" key={product.id}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-text-overlay">
                    
                  </div>
                  <h3>{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="product-row">
            {productsGroup1.slice(7, 12).map((product) => (
              <div className="product-box" key={product.id}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-text-overlay">
                    
                  </div>
                  <h3>{product.name}</h3>
                </div>
              </div>
            ))}
            <div className="More_products">
              <h3>See All Products</h3>
            </div>
          </div> */}
        </div>
        

        {/* Group 2 */}
        {/* <div className="product-group">
          <h2>Product and Service Spotlights</h2>
          <div className="product-row">
            {productsGroup2.slice(0, 6).map((product) => (
              <div className="product-box" key={product.id}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-text-overlay">
                    
                  </div>
                  <h3>{product.name}</h3>
                </div>
              </div>
            ))}
          </div> */}
          {/* <div className="product-row">
            {productsGroup2.slice(6, 12).map((product) => (
              <div className="product-box" key={product.id}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-text-overlay">
                    
                  </div>
                  <h3>{product.name}</h3>
                </div>
              </div>
            ))} */}
            {/* <div className="More_products">
              <h3>See All Products</h3>
            </div> */}
          </div>
        </div>
      // </div>
    // </div>
  );
};

export default ProductSection;
