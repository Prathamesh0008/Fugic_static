import React, { useState } from "react";
import { FaBuilding, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/CheckoutPage.css"; // Import CSS
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const CheckoutPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Checkout", link: "" },
  // Add product name to the breadcrumb
  ].filter(Boolean);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000); // Hide popup after 5 seconds
  };

  return (
    <div className="checkout-page-container">
    <Breadcrumb paths={breadcrumbPaths} />
      <h2 className="checkout-title">Complete Your Order</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName"><FaBuilding /> Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Enter your company name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactPerson"><FaUser /> Contact Person</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email"><FaEnvelope /> Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber"><FaPhone /> Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address"><FaMapMarkerAlt /> Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your complete address"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Order</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>🎉 Thank You!</h3>
            <p>Our sales team will get back to you within a few minutes.</p>
            <button className="popup-close-btn" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
