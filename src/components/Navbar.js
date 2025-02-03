import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/contexts/CartContext"; // Import useCart, not CartContext
import logo from "../assets/Fugic logo.png";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cart } = useCart(); // Use useCart to get the cart state

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState({
    products: false,
    services: false,
    contact: false,
  });

  // Calculate total quantity of items in the cart (not just the length)
  const totalItemsInCart = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="rolling-text">
        <p>Welcome to Fugic NEXT LEVEL CHEMISTRY - "MADE IN INDIA"</p>
      </div>

      <nav className="navbar-main">
        <img src={logo} alt="Logo" className="logo" />
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
            {/* Show cart count dynamically */}
            <span className="cart-item-count">
              {totalItemsInCart > 0 ? totalItemsInCart : 0}
            </span>
          </Link>
          <Link to="/request-quote" className="get-quote">Get Quote</Link>
        </div>
        <FaBars className="hamburger-icon" onClick={toggleMenu} />
      </nav>

      <nav className={`navbar-secondary ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown" onClick={() => toggleDropdown("products")}>
            <span className="dropbtn">
              Products <span className="dropdown-icon">▼</span>
            </span>
            {dropdown.products && (
              <div className="dropdown-content">
                <Link to="/product1">Product 1</Link>
                <Link to="/product2">Product 2</Link>
                <Link to="/product3">Product 3</Link>
              </div>
            )}
          </li>
          <li className="dropdown" onClick={() => toggleDropdown("services")}>
            <span className="dropbtn">
              Services <span className="dropdown-icon">▼</span>
            </span>
            {dropdown.services && (
              <div className="dropdown-content">
                <Link to="/service1">Service 1</Link>
                <Link to="/service2">Service 2</Link>
                <Link to="/service3">Service 3</Link>
              </div>
            )}
          </li>
          <li className="dropdown" onClick={() => toggleDropdown("contact")}>
            <span className="dropbtn">
              Contact <span className="dropdown-icon">▼</span>
            </span>
            {dropdown.contact && (
              <div className="dropdown-content">
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/support">Support</Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
