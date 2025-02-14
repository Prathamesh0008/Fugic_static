import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "../styles/Footer.css";
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";
import instagramIcon from "../assets/icons/instagram.png";
import linkedinIcon from "../assets/icons/linkdin.png";

const Footer = () => {
  const location = useLocation(); // Get the current path

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Fugic is dedicated to providing innovative solutions for the
            chemical industry. We are committed to quality and excellence.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/products" >Products</Link></li>
            <li><Link to="/services" >Services</Link></li>
            <li><Link to="/company-info" >Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Fugic. All rights reserved.</p>
  {/* <p>
    Designed and Developed By{" "}
    <span style={{ color: "#ff0000" }}>P</span>
    <span style={{ color: "#ff7300" }}>R</span>
    <span style={{ color: "#ffeb00" }}>A</span>
    <span style={{ color: "#47ff00" }}>T</span>
    <span style={{ color: "#00ffee" }}>H</span>
    <span style={{ color: "#0047ff" }}>A</span>
    <span style={{ color: "#7d00ff" }}>M</span>
    <span style={{ color: "#ff00f7" }}>E</span>
    <span style={{ color: "#ff0000" }}>S</span>
    <span style={{ color: "#ff7300" }}>H</span>{" "}
    <span style={{ color: "#ffeb00" }}>S</span>
    <span style={{ color: "#47ff00" }}>H</span>
    <span style={{ color: "#00ffee" }}>I</span>
    <span style={{ color: "#0047ff" }}>N</span>
    <span style={{ color: "#7d00ff" }}>D</span>
    <span style={{ color: "#ff00f7" }}>E</span>
  </p> */}

  <p>
    Designed and Developed By{" "}
    <span className="colorful-text">PRATHAMESH SHINDE</span>
  </p>


      </div>
    </footer>
  );
};

export default Footer;
