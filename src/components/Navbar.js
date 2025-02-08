import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../components/contexts/CartContext";
import { useCurrency } from "./contexts/CurrencyContext"; // Import Currency Context
import logo from "../assets/Fugic logo.png";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cart } = useCart();
  const { currency, toggleCurrency } = useCurrency(); // Get currency & toggle function from context
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItemsInCart = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Rolling Text */}
      <div className="rolling-text-container">
        <div className="rolling-text">
          <p>Welcome to Fugic NEXT LEVEL CHEMISTRY - "MADE IN INDIA"</p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar-main">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <FaBars className="hamburger-icon" onClick={toggleMenu} />
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="navbar-icons">
          <Link to="/cart" className="icon">
            <FaShoppingCart />
            <span className="cart-item-count">
              {totalItemsInCart > 0 ? totalItemsInCart : 0}
            </span>
          </Link>
          <Link to="/request-quote" className="get-quote">Get Quote</Link>
          
          {/* Currency Toggle Button */}
          <button className="currency-toggle-btn" onClick={toggleCurrency}>
            {currency} / {currency === "INR" ? "USD" : "INR"}
          </button>
        </div>
      </nav>

      {/* Navbar Menu - Hidden on Mobile */}
      <nav className="navbar-menu">
        <ul>
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/products" className={location.pathname.startsWith("/products") ? "active" : ""}>Products</Link></li>
          <li><Link to="/services" className={location.pathname.startsWith("/services") ? "active" : ""}>Services</Link></li>
          <li><Link to="/company-info" className={location.pathname.startsWith("/company-info") ? "active" : ""}>Contact Us</Link></li>
        </ul>
      </nav>

      {/* Mobile Popup Menu */}
      {menuOpen && (
        <div className="menu-popup">
          <FaTimes className="close-menu" onClick={toggleMenu} />
          <ul>
            <li><Link to="/" onClick={toggleMenu} className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
            <li><Link to="/products" onClick={toggleMenu} className={location.pathname.startsWith("/products") ? "active" : ""}>Products</Link></li>
            <li><Link to="/services" onClick={toggleMenu} className={location.pathname.startsWith("/services") ? "active" : ""}>Services</Link></li>
            <li><Link to="/company-info" onClick={toggleMenu} className={location.pathname.startsWith("/company-info") ? "active" : ""}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
