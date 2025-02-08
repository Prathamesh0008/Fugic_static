import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import logo from "../../assets/Fugic logo.png";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./MainNavbar.css";

const MainNavbar = () => {
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const totalItemsInCart = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-main ${isSticky ? "sticky" : ""}`}>
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
      </div>
    </nav>
  );
};

export default MainNavbar;
