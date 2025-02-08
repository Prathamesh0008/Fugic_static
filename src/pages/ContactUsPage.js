import React, { useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import "../styles/ContactUsPage.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success"); // "success" or "error"

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showPopupMessage("❌ All fields are required.", "error");
      return;
    }

    // For demo purposes, just show success
    showPopupMessage("🎉 Thank you for reaching out! We will get back to you soon.", "success");
  };

  const showPopupMessage = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setShowMessagePopup(true);

    setTimeout(() => {
      setShowMessagePopup(false);
    }, 4000);
  };

  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">Contact Us</h2>

      <div className="contact-details">
        <h3>Contact Information</h3>
        <div className="contact-box">
          <p>
            <FaUser /> Name: Mohammed
          </p>
          <p>
            <FaPhone /> Phone: 9324773762
          </p>
          <p>
            <FaMapMarkerAlt /> Address: Thane 421204
          </p>
        </div>
      </div>

      <div className="google-map">
        {/* Embed Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.0106467595417!2d72.99721307436764!3d19.218331686873674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a1630b8b7a1d%3A0x7b815190f84c0cf0!2sThane%2C%20Maharashtra%20421204!5e0!3m2!1sen!2sin!4v1641388661323!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
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
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {showMessagePopup && (
        <div className={`message-popup ${popupType}`}>
          <div className="message-popup-content">
            <h3>{popupMessage}</h3>
            <button className="message-popup-close-btn" onClick={() => setShowMessagePopup(false)}>OK</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ContactUsPage;
