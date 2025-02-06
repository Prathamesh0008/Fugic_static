import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ContactNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    const form = document.querySelector(".contact-form");
    const info = document.querySelector(".contact-info");
    form.classList.add("animate-left");
    info.classList.add("animate-right");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://fugic-static-backend.onrender.com/send-email",
        formData
      );
      setStatus(response.data.message);
      setFormData({ name: "", email: "", message: "", ContactNumber: "" }); // Reset form
    } catch (error) {
      setStatus("Failed to send email");
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
  <label htmlFor="ContactNumber">Contact Number</label>
  <input 
    type="tel" 
    name="ContactNumber" 
    value={formData.ContactNumber} 
    onChange={handleChange} 
    placeholder="Contact Number" 
    required 
    pattern="[0-9]{10}"    // Only 10 digits allowed
    maxLength="10"         // Limit input to 10 characters
  />
</div>


          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
        <p>{status}</p>
      </div>

      <div className="contact-info">
        <h2>Reach Us</h2>
        <div className="info-box">
          <h3>Email</h3>
          <p>contact@fugic.com</p>
        </div>
        <div className="info-box">
          <h3>Phone</h3>
          <p>+1-234-567-890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
