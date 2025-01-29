import React, { useEffect } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    // Add animation classes after a delay for smooth entrance
    const form = document.querySelector(".contact-form");
    const info = document.querySelector(".contact-info");
    form.classList.add("animate-left");
    info.classList.add("animate-right");
  }, []);

  return (
    <div className="contact-us">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="submit-btn">Send</button>
        </form>
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
