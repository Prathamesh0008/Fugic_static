import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "../styles/ProductPage.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import productsData from "../assets/productsData";
import { useCart } from "../components/contexts/CartContext";
import { useCurrency } from "../components/contexts/CurrencyContext";

const exchangeRate = 0.012; // Example: 1 INR = 0.012 USD

const ProductPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const { cart, addToCart } = useCart();
  const { currency } = useCurrency();

  const formattedCategory = category?.toUpperCase().replace(/-/g, " ");
  let products = category ? productsData[category] || [] : [];

  // Extract search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const [selectedUnits, setSelectedUnits] = useState({});
  const [cartPopup, setCartPopup] = useState(false);

  useEffect(() => {
    const initialSelectedUnits = {};
    products.forEach((product) => {
      if (product.units.length > 0) {
        initialSelectedUnits[product.articleNo] = product.units[0];
      }
    });
    setSelectedUnits(initialSelectedUnits);
  }, [products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleUnitSelection = (articleNo, unitIndex) => {
    const product = products.find((product) => product.articleNo === articleNo);
    if (product && product.units[unitIndex]) {
      setSelectedUnits((prevSelected) => ({
        ...prevSelected,
        [articleNo]: product.units[unitIndex],
      }));
    }
  };

  const handleAddToCart = (product) => {
    const selectedUnitData = selectedUnits[product.articleNo];

    if (!selectedUnitData) {
      alert("Please select a unit before adding to cart!");
      return;
    }

    const cartItem = {
      ...product,
      selectedUnit: selectedUnitData.size,
      selectedPrice: selectedUnitData.priceINR,
    };

    addToCart(cartItem);
    setCartPopup(true);
    setTimeout(() => setCartPopup(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="product-page-container">
      <Breadcrumb paths={[
        { name: "Home", link: "/" },
        { name: "Laboratory Chemicals Categories", link: "/products" },
        category ? { name: formattedCategory } : null,
      ].filter(Boolean)} />

      <h2 className="product-page-header">{formattedCategory}</h2>
       {/* Add to Cart Popup */}
       {cartPopup && (
  <div className="cart-popup">
    {cart.length > 0 && (
      <p>{cart[cart.length - 1].chemicalName} added to cart!</p>
    )}
  </div>
)}


      {/* Desktop Table View */}
      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Article No.</th>
              <th>Chemical Name</th>
              <th>Purity</th>
              <th>CAS No.</th>
              <th>Formula</th>
              <th>Unit</th>
              <th>Price ({currency})</th>
              <th>MSDS</th>
              <th>COA</th>
              <th>CART</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => {
              const selectedUnitData = selectedUnits[product.articleNo];

              let displayPrice = selectedUnitData ? selectedUnitData.priceINR : "-";
              let priceSymbol = "₹";
              if (currency === "USD" && selectedUnitData) {
                displayPrice = (selectedUnitData.priceINR * exchangeRate).toFixed(2);
                priceSymbol = "$";
              }

              const isSearchedProduct =
                searchQuery &&
                (product.articleNo.toLowerCase() === searchQuery ||
                 product.chemicalName.toLowerCase().includes(searchQuery));

              return (
                <tr key={index} className={isSearchedProduct ? "highlighted" : ""}>
                  <td>{product.articleNo}</td>
                  <td>{product.chemicalName}</td>
                  <td>{product.purity}</td>
                  <td>{product.casNo}</td>
                  <td>{product.formula}</td>
                  <td>
                    <select
                      onChange={(e) => {
                        const selectedIndex = e.target.selectedIndex - 1;
                        if (selectedIndex >= 0) {
                          handleUnitSelection(product.articleNo, selectedIndex);
                        }
                      }}
                      value={selectedUnitData ? selectedUnitData.size : ""}
                    >
                      <option value="">Select Unit</option>
                      {product.units.map((unit, unitIndex) => (
                        <option key={unitIndex} value={unit.size}>
                          {unit.size}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{displayPrice !== "-" ? `${priceSymbol} ${displayPrice}` : "-"}</td>
                  <td><a href={product.MSDS} target="_blank" rel="noopener noreferrer" className="mss">MSDS</a></td>
                  <td><a href={product.COA} target="_blank" rel="noopener noreferrer" className="mss">COA</a></td>
                  <td><button onClick={() => handleAddToCart(product)}>Add to Cart</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="product-list">
  {currentProducts.map((product, index) => {
    const isSearchedProduct =
      searchQuery?.trim() &&
      (product.articleNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.chemicalName.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <div
        className={`product-card ${isSearchedProduct ? "highlighted" : ""}`}
        key={index}
      >
        <h3>{product.chemicalName}</h3>
        <p><strong>Article No:</strong> {product.articleNo}</p>
        <p><strong>Purity:</strong> {product.purity}</p>
        <p><strong>CAS No:</strong> {product.casNo}</p>
        <p><strong>Formula:</strong> {product.formula}</p>
        <p><strong>MSDS:</strong> <a href={product.MSDS} target="_blank" rel="noopener noreferrer">Download</a></p>
        <p><strong>COA:</strong> <a href={product.COA} target="_blank" rel="noopener noreferrer">Download</a></p>
        <select
          onChange={(e) => {
            const selectedIndex = e.target.selectedIndex - 1;
            if (selectedIndex >= 0) {
              handleUnitSelection(product.articleNo, selectedIndex);
            }
          }}
          value={selectedUnits[product.articleNo]?.size || ""}
        >
          <option value="">Select Unit</option>
          {product.units.map((unit, unitIndex) => (
            <option key={unitIndex} value={unit.size}>
              {unit.size}
            </option>
          ))}
        </select>
        <p><strong>Price ({currency}):</strong> {selectedUnits[product.articleNo] ? `${currency === "INR" ? "₹" : "$"}${(selectedUnits[product.articleNo].priceINR * (currency === "USD" ? exchangeRate : 1)).toFixed(2)}` : "-"}</p>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    );
  })}
</div>


      {/* Pagination Controls */}
      <div className="pagination-controls">
  <button
    onClick={() => paginate(currentPage - 1)}
    disabled={currentPage === 1}
    className="pagination-btn pagination-prev"
  >
    Previous
  </button>

  <span className="pagination-info">
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => paginate(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="pagination-btn pagination-next"
  >
    Next
  </button>
</div>
    </div>
  );
};

export default ProductPage;
