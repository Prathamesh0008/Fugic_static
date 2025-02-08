import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBuilding, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import "../styles/CheckoutPage.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const CheckoutPage = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success"); // "success" or "error"
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (location.state?.orderData?.cartItems) {
      setCartItems(location.state.orderData.cartItems);
      console.log("Received Cart Items:", location.state.orderData.cartItems);
    } else {
      console.error("No cart data found in navigation state.");
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Checkout", link: "" },
  ].filter(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      showPopupMessage("❌ Your cart is empty. Please add items before submitting.", "error");
      return;
    }

    setIsLoading(true); // Show loading spinner

    const orderData = {
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      cartItems,
    };

    console.log("Submitting Order Data:", orderData);

    try {
      const response = await axios.post("http://localhost:5000/submit-order", orderData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        showPopupMessage(
          `🎉 Thank you, ${formData.contactPerson || "Customer"}! Your order has been received. Our sales team will get back to you soon`,
          "success"
        );
      }
    } catch (error) {
      console.error("Error submitting order:", error.response?.data || error.message);
      showPopupMessage("😞 Oops! Something went wrong. Please try again later.", "error");
    }

    setIsLoading(false); // Hide loading spinner
  };

  const showPopupMessage = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
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

        <button type="submit" className={`submit-btn ${isLoading ? "loading" : ""}`} disabled={isLoading}>
  {isLoading ? (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  ) : (
    "Submit Order"
  )}
</button>

      </form>

      {showPopup && (
        <div className={`popup ${popupType}`}>
          <div className="popup-content">
            <h3>{popupMessage}</h3>
            <button className="popup-close-btn" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default CheckoutPage;
