
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../components/contexts/CartContext";
import { useCurrency } from "./contexts/CurrencyContext";
import productsData from "../assets/productsData";
import logo from "../assets/Fugic logo.png";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cart } = useCart();
  const { currency, toggleCurrency } = useCurrency();
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en" },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const allProducts = Object.entries(productsData).flatMap(([category, products]) =>
    products.map(product => ({ ...product, category }))
  );

  const filteredProducts = search
    ? allProducts.filter(
        (product) =>
          product.chemicalName.toLowerCase().includes(search.toLowerCase()) ||
          product.articleNo.toLowerCase().includes(search.toLowerCase()) ||
          product.casNo.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const handleProductSelect = (product) => {
    setSearch("");
    navigate(`/products/category/${product.category}?search=${product.articleNo}`);
  };

  return (
    <div className="navbar-container">
      <div className="rolling-text-container">
        <div className="rolling-text">
          <p>Welcome to Fugic NEXT LEVEL CHEMISTRY - "MADE IN INDIA"</p>
        </div>
      </div>

      <nav className="navbar-main">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <FaBars className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)} />
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by Product name or CAS number.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <FaSearch className="search-icon" />
          {search && (
            <div className="search-results">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={`${product.articleNo}-${product.category}`}
                    className="search-result-item"
                    onClick={() => handleProductSelect(product)}
                  >
                    {product.chemicalName} ({product.articleNo})
                  </div>
                ))
              ) : (
                <p className="no-results">No results found</p>
              )}
            </div>
          )}
        </div>

        <div className="navbar-icons">
          <Link to="/cart" className="icon">
            <FaShoppingCart />
            <span className="cart-item-count">{cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}</span>
          </Link>
          <Link to="/request-quote" className="get-quote">Get Quote</Link>
          <button className="currency-toggle-btn" onClick={toggleCurrency}>
            {currency} / {currency === "INR" ? "USD" : "INR"}
          </button>
        </div>
      </nav>

      <nav className="navbar-menu">
        <ul>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/products" className={location.pathname.startsWith("/products") ? "active" : ""}>Products</Link></li>
          <li><Link to="/services" className={location.pathname.startsWith("/services") ? "active" : ""}>Services</Link></li>
          <li><Link to="/company-info" className={location.pathname.startsWith("/company-info") ? "active" : ""}>Contact Us</Link></li>
        </ul>
      </nav>

      <div id="google_translate_element" style={{ margin: "10px auto", textAlign: "center" }}></div>

      {menuOpen && (
        <div className="menu-popup">
          <FaTimes className="close-menu" onClick={() => setMenuOpen(false)} />
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/company-info" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
