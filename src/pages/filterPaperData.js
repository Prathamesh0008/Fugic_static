import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/filterPaperData.css";
import image1 from '../assets/right-images/Acetic.jpg';
import image2 from '../assets/right-images/Acetaldehyde.jpg';
import image3 from '../assets/right-images/Acetonitrile.jpg';

const filterPaperData = [
  {
    grade: "2235 - Quantitative Ashless",
    type: "Very Fast, hardened",
    details: [
      { size: "Ø 70", pcsPerPack: "100", gradeReference: "54/541" },
      { size: "Ø 90", pcsPerPack: "100" },
      { size: "Ø 110", pcsPerPack: "100" },
      { size: "Ø 125", pcsPerPack: "100" },
      { size: "Ø 150", pcsPerPack: "100" },
      { size: "Sheet 460 X 570", pcsPerPack: "100" },
    ],
  },
  {
    grade: "1238 - Quantitative Ashless",
    type: "Fast",
    details: [
      { size: "Ø 70", pcsPerPack: "100", gradeReference: "41" },
      { size: "Ø 90", pcsPerPack: "100" },
      { size: "Ø 110", pcsPerPack: "100" },
      { size: "Ø 125", pcsPerPack: "100" },
      { size: "Ø 150", pcsPerPack: "100" },
      { size: "Sheet 460 X 570", pcsPerPack: "100" },
    ],
  },
  {
    grade: "1242 - Quantitative Ashless",
    type: "Medium Slow",
    details: [
      { size: "Ø 70", pcsPerPack: "100", gradeReference: "40" },
      { size: "Ø 90", pcsPerPack: "100" },
      { size: "Ø 110", pcsPerPack: "100" },
      { size: "Ø 125", pcsPerPack: "100" },
      { size: "Ø 150", pcsPerPack: "100" },
      { size: "Sheet 460 X 570", pcsPerPack: "100" },
    ],
  },
  {
    grade: "244 - Quantitative Ashless",
    type: "Slow",
    details: [
      { size: "Ø 70", pcsPerPack: "100", gradeReference: "44" },
      { size: "Ø 90", pcsPerPack: "100" },
      { size: "Ø 110", pcsPerPack: "100" },
      { size: "Ø 125", pcsPerPack: "100" },
      { size: "Ø 150", pcsPerPack: "100" },
      { size: "Sheet 460 X 570", pcsPerPack: "100" },
    ],
  },
  {
    grade: "1246 - Quantitative Ashless",
    type: "Very Slow",
    details: [
      { size: "Ø 70", pcsPerPack: "100", gradeReference: "42" },
      { size: "Ø 90", pcsPerPack: "100" },
      { size: "Ø 110", pcsPerPack: "100" },
      { size: "Ø 125", pcsPerPack: "100" },
      { size: "Ø 150", pcsPerPack: "100" },
      { size: "Sheet 460 X 570", pcsPerPack: "100" },
    ],
  },
  {
    grade: "1248 - Qualitative",
    type: "Fast",
    details: [
      { size: "Ø 70", pcsPerPack: "100", gradeReference: "4" },
      { size: "Ø 90", pcsPerPack: "100" },
      { size: "Ø 110", pcsPerPack: "100" },
      { size: "Ø 125", pcsPerPack: "100" },
      { size: "Ø 150", pcsPerPack: "100" },
      { size: "Sheet 460 X 570", pcsPerPack: "100" },
    ],
  },
  {
    grade: "1249 - Qualitative",
    type: "Very Fast",
    details: [
      { size: "Ø 70", pcsPerPack: "100", gradeReference: "2" },
      { size: "Ø 90", pcsPerPack: "100" },
      { size: "Ø 110", pcsPerPack: "100" },
      { size: "Ø 125", pcsPerPack: "100" },
      { size: "Ø 150", pcsPerPack: "100" },
      { size: "Sheet 460 X 570", pcsPerPack: "100" },
    ],
  },
  {
    grade: "1250 - Qualitative",
    type: "Medium",
    details: [
      { size: "Ø 47", pcsPerPack: "100", gradeReference: "1" },
      { size: "Ø 70", pcsPerPack: "100" },
      { size: "Ø 90", pcsPerPack: "100" },
      { size: "Ø 110", pcsPerPack: "100" },
      { size: "Ø 125", pcsPerPack: "100" },
      { size: "Ø 150", pcsPerPack: "100" },
      { size: "Ø 185", pcsPerPack: "100" },
      { size: "Sheet 460 X 570", pcsPerPack: "100" },
      { size: "Sheet 460 X 570", pcsPerPack: "500" },
    ],
  },
  // Add more grades here...
];

const additionalData = [
  { size: "25 mm", gradeA: "GF/A Glass Fiber Circles", gradeC: "GF/C Glass Fiber Circles", gradeD: "GF/D Glass Fiber Circles" },
  { size: "37 mm", gradeA: "GF/A Glass Fiber Circles", gradeC: "GF/C Glass Fiber Circles", gradeD: "GF/D Glass Fiber Circles" },
  { size: "47 mm", gradeA: "GF/A Glass Fiber Circles", gradeC: "GF/C Glass Fiber Circles", gradeD: "GF/D Glass Fiber Circles" },
  { size: "70 mm", gradeA: "GF/A Glass Fiber Circles", gradeC: "GF/C Glass Fiber Circles", gradeD: "GF/D Glass Fiber Circles" },
  { size: "90 mm", gradeA: "GF/A Glass Fiber Circles", gradeC: "GF/C Glass Fiber Circles", gradeD: "GF/D Glass Fiber Circles" },
  { size: "110 mm", gradeA: "GF/A Glass Fiber Circles", gradeC: "GF/C Glass Fiber Circles", gradeD: "GF/D Glass Fiber Circles" },
  { size: "125 mm", gradeA: "GF/A Glass Fiber Circles", gradeC: "GF/C Glass Fiber Circles", gradeD: "GF/D Glass Fiber Circles" },
  { size: "203x254mm", gradeA: "GF/A Glass Fiber Sheets", gradeC: "", gradeD: "" }
];

const FilterPaperPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (size, quantity) => {
    setQuantities({
      ...quantities,
      [size]: quantity,
    });
  };
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

  const handleAddToCart = (size) => {
    const quantity = quantities[size] || 1; // Default to 1 if not set
    setSelectedItems((prev) => [
      ...prev,
      { size, quantity },
    ]);
    console.log(`Added to cart: Size ${size}, Quantity: ${quantity}`);
  };

  return (
    <div className="chemical-page">
      <UniversalBreadcrumb />
      <div className="filter-page-banner">
        <h1 className="filter-page-banner-text">Filter Paper</h1>
      </div>

      <table className="filter-paper-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Type</th>
            <th>Size(mm)</th>
            <th>Pcs./Pack</th>
            {/* <th>Grade Reference</th> */}
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterPaperData.map((item, index) => (
            <React.Fragment key={index}>
              {item.details.map((detail, detailIndex) => (
                <tr key={detailIndex}>
                  {detailIndex === 0 && (
                    <React.Fragment>
                      <td rowSpan={item.details.length}>{item.grade}</td>
                      <td rowSpan={item.details.length}>{item.type}</td>
                    </React.Fragment>
                  )}
                  <td>{detail.size}</td>
                  <td>{detail.pcsPerPack}</td>
                  {/* <td>{detail.gradeReference || "-"}</td> */}
                  <td>
                    <div className="quantity-controls">
                      <button
                        className="quantity-button"
                        onClick={() =>
                          handleQuantityChange(
                            detail.size,
                            Math.max(1, (quantities[detail.size] || 1) - 1)
                          )
                        }
                      >
                        -
                      </button>
                      <span className="quantity-display">
                        {quantities[detail.size] || 1}
                      </span>
                      <button
                        className="quantity-button"
                        onClick={() =>
                          handleQuantityChange(
                            detail.size,
                            (quantities[detail.size] || 1) + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToCart(detail.size)}
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Additional Data Table */}
      <table className="additional-data-table">
        <thead>
          <tr>
            <th>Size</th>
            <th>	Item Description- WHATMAN GRADE REFERENCE</th>
            {/* <th>WHATMAN GRADE</th>
            <th>REFERENCE</th> */}
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {additionalData.map((item, index) => (
            <tr key={index}>
              <td>{item.size}</td>
              <td>{item.gradeA}</td>
              {/* <td>{item.gradeC}</td> */}
              {/* <td>{item.gradeD}</td> */}
              <td>
                <div className="quantity-controls">
                  <button
                    className="quantity-button"
                    onClick={() =>
                      handleQuantityChange(
                        item.size,
                        Math.max(1, (quantities[item.size] || 1) - 1)
                      )
                    }
                  >
                    -
                  </button>
                  <span className="quantity-display">
                    {quantities[item.size] || 1}
                  </span>
                  <button
                    className="quantity-button"
                    onClick={() =>
                      handleQuantityChange(item.size, (quantities[item.size] || 1) + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(item.size)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="filterPape-images-section">
        <img src={image1} alt="Chemical 1" className="filterPape-images-section-image" />
        <img src={image2} alt="Chemical 2" className="filterPape-images-section-image" />
        <img src={image3} alt="Chemical 3" className="filterPape-images-section-image" />
      </div>
    </div>
  );
};

export default FilterPaperPage;
