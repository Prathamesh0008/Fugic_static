import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductPage.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import productsData from "../assets/productsData";
import { useCart } from "../components/contexts/CartContext"; // Import useCart hook

const ProductPage = () => {
  const { category } = useParams();
  const formattedCategory = category.toUpperCase().replace(/-/g, " ");
  const products = productsData[category] || [];

  // Use useCart hook to access cart and addToCart
  const { cart, addToCart } = useCart();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const [selectedUnits, setSelectedUnits] = useState({});

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle unit selection
  const handleUnitSelection = (articleNo, unitIndex) => {
    const product = products.find((product) => product.articleNo === articleNo);
    if (product && product.unit && product.price) {
      const unitsArray = product.unit.split(" ");
      const pricesArray = product.price.split(" ");
      const selectedUnit = unitsArray[unitIndex];
      const selectedPrice = pricesArray[unitIndex];

      setSelectedUnits((prevSelected) => ({
        ...prevSelected,
        [articleNo]: { unit: selectedUnit, price: selectedPrice },
      }));
    }
  };

  // Initialize selectedUnits with the default unit and price for each product
  useEffect(() => {
    const initialSelectedUnits = {};
    products.forEach((product) => {
      if (product.unit && product.price) {
        const unitsArray = product.unit.split(" ");
        const pricesArray = product.price.split(" ");

        // If there is only one unit, automatically set it as the selected unit
        initialSelectedUnits[product.articleNo] = {
          unit: unitsArray.length === 1 ? unitsArray[0] : "", // Set default unit if only one unit
          price: unitsArray.length === 1 ? pricesArray[0] : "", // Set default price if only one unit
        };
      }
    });
    setSelectedUnits(initialSelectedUnits);
  }, [products]);

  // Add to Cart Function
  const handleAddToCart = (product) => {
    const selectedUnitData = selectedUnits[product.articleNo];

    if (!selectedUnitData) {
      alert("Please select a unit before adding to cart!");
      return;
    }

    const cartItem = {
      articleNo: product.articleNo,
      chemicalName: product.chemicalName,
      purity: product.purity,
      casNo: product.casNo,
      formula: product.formula,
      selectedUnit: selectedUnitData.unit,
      selectedPrice: selectedUnitData.price,
      MSDS: product.MSDS,
      COA: product.COA,
    };

    addToCart(cartItem); // Use addToCart from useCart
  };

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Laboratory Chemicals Categories", link: "/products" },
    category ? { name: category.toUpperCase() } : null,
  ].filter(Boolean);

  return (
    <div className="product-page-container">
      <Breadcrumb paths={breadcrumbPaths} />
      <h2 className="product-page-header">{formattedCategory}</h2>
      {currentProducts.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>Article No.</th>
              <th>Chemical Name</th>
              <th>Purity</th>
              <th>CAS No.</th>
              <th>Formula</th>
              <th>Unit</th>
              <th>Price</th>
              <th>MSDS</th>
              <th>COA</th>
              <th>CART</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => {
              const unitsArray = product.unit ? product.unit.split(" ") : [];
              const pricesArray = product.price ? product.price.split(" ") : [];
              
              // Get the default selected unit and price if any
              const selectedUnitData = selectedUnits[product.articleNo];
              const selectedIndex = selectedUnitData
                ? unitsArray.indexOf(selectedUnitData.unit)
                : 0; // Default to first unit if not selected previously

              // Fallback price if no price is available
              const displayPrice = selectedUnitData 
                ? selectedUnitData.price 
                : pricesArray[0] || "-";

              return (
                <tr key={index}>
                  <td data-label="Article No.">{product.articleNo}</td>
                  <td data-label="Chemical Name">{product.chemicalName}</td>
                  <td data-label="Purity">{product.purity}</td>
                  <td data-label="CAS No.">{product.casNo}</td>
                  <td data-label="Formula">{product.formula}</td>
                  <td data-label="Unit">
                    <select
                      onChange={(e) => {
                        const selectedIndex = e.target.selectedIndex - 1; // Offset because of "Select Unit" option
                        if (selectedIndex >= 0) {
                          handleUnitSelection(product.articleNo, selectedIndex);
                        }
                      }}
                      value={unitsArray[selectedIndex]} // Pre-select the unit based on selectedIndex
                    >
                      <option value="">Select Unit</option>
                      {unitsArray.map((unit, unitIndex) => (
                        <option key={unitIndex} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td data-label="Price">{displayPrice}</td>
                  <td data-label="MSDS">
                    <a href={product.MSDS} target="_blank" rel="noopener noreferrer">
                      MSDS
                    </a>
                  </td>
                  <td data-label="COA">
                    <a href={product.COA} target="_blank" rel="noopener noreferrer">
                      COA
                    </a>
                  </td>
                  <td data-label="ADD TO CART">
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>We are coming Soon!</p>
      )}

      <div className="pagination-controls">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <Link to="/cart">
        {/* Cart Button with dynamic count */}
        <button className="go-to-cart-btn">
          Go to Cart ({cart.length})
        </button>
      </Link>
    </div>
  );
};

export default ProductPage;
