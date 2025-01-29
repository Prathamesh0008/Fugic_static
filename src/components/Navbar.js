import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Fugic logo.png";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState({
    products: false,
    services: false,
    contact: false,
  });

  const [isLoginOpen, setIsLoginOpen] = useState(false); // Track if login dropdown is open
  const [passwordVisible, setPasswordVisible] = useState(false); // Track password visibility
  const [formData, setFormData] = useState({ email: "", password: "" });

  const loginRef = useRef(null); // Ref for the login dropdown

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

  const handleLoginToggle = () => {
    setIsLoginOpen(!isLoginOpen); // Toggle login dropdown
  };

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  // Close login dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setIsLoginOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          </Link>
          {/* <div className="icon" onClick={handleLoginToggle}>
            <FaUser />
          </div> */}
          <Link to="/request-quote" className="get-quote">Get Quote</Link>
        </div>
        <FaBars className="hamburger-icon" onClick={toggleMenu} />
      </nav>

      {/* Login Dropdown */}
      {/* {isLoginOpen && (
        <div className="login-dropdown" ref={loginRef}>
          <form onSubmit={handleLoginSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Password:
              <div className="password-wrapper">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <div
                  className="password-eye"
                  onClick={handlePasswordVisibilityToggle}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </label>

            <button type="submit" className="login-btn">Login</button>

            <div className="extra-links">
              <Link to="/forgot-password" className="inloop">Forgot Password?</Link>
              <Link to="/login-register" className="inloop">Register</Link>
            </div>
          </form>
        </div> */}
      {/* )} */}

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
