import React from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const whatsappNumber = "+919876543210"; // Replace with your WhatsApp number

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-buttons">
      {/* Contact Message */}
      <div className="contact-message">Want to contact directly?</div>

      {/* WhatsApp Button */}
      <button className="whatsapp-button" onClick={openWhatsApp}>
        <FaWhatsapp />
      </button>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default WhatsAppButton;
