import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "../styles/NavbarMenu.css"; // Ensure this file is correctly imported

const NavbarMenu = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(location.pathname);
    console.log("Current Path:", location.pathname); // Debugging
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className="navbar-menu">
        <ul className="menu-links">
          <li>
            <Link to="/" className={activePath === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={activePath.startsWith("/products") ? "active" : ""}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/services" className={activePath.startsWith("/services") ? "active" : ""}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/company-info" className={activePath.startsWith("/company-info") ? "active" : ""}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Hamburger menu for mobile view */}
        <div className="hamburger-container">
          <FaBars className="hamburger-menu" onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Popup Menu */}
      {menuOpen && (
        <div className="menu-popup">
          <FaTimes className="close-menu" onClick={toggleMenu} />
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu} className={activePath === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu} className={activePath.startsWith("/products") ? "active" : ""}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu} className={activePath.startsWith("/services") ? "active" : ""}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/company-info" onClick={toggleMenu} className={activePath.startsWith("/company-info") ? "active" : ""}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarMenu;
