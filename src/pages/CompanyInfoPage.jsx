import React from "react";
import "../styles/CompanyInfoPage.css"; // Import the stylesheet
import ContactUs from "../components/ContactUs/ContactUs";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const breadcrumbPaths = [
  { name: "Home", link: "/" },
  { name: "Contact US", link: "" },
  // product && { name: product.name, link: `/product/${product.id}` } // Add product name to the breadcrumb
].filter(Boolean); // Remove any null or undefined values from the 

const CompanyInfoPage = () => {
  return (
    <div className="company-info-containers">
    
    <div className="company-info-container">
    <Breadcrumb paths={breadcrumbPaths} />
      <h2 className="company-header">Get in Touch</h2>
      
      {/* Table for office details */}
      <table className="company-details-table">
        <tbody>
          <tr>
            <td className="table-heading">Director Name:</td>
            <td>Mohammed</td>
          </tr>
          <tr>
            <td className="table-heading">Office Address:</td>
            <td>Thane 421204</td>
          </tr>
          <tr>
            <td className="table-heading">Mobile Number:</td>
            <td>+91 9324773762</td>
          </tr>
          <tr>
            <td className="table-heading">Email:</td>
            <td>info@fugic.com</td>
          </tr>
          <tr>
            <td className="table-heading">Working Hours:</td>
            <td>Monday - Friday, 9 AM - 6 PM</td>
          </tr>
        </tbody>
      </table>

      {/* Google Maps Embed */}
      <div className="map-container">
        <iframe
          title="Office Location"
          className="office-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509407!2d144.95373631590426!3d-37.81627974202145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1a3c5f1%3A0x3b6f8cda3c5c6e75!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1633656001347!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <ContactUs/>
    </div>
    </div>
  );
};

export default CompanyInfoPage;
