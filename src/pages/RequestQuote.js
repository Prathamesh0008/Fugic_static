import React, { useState } from "react";
import axios from "axios";
import "../styles/RequestQuote.css";
import bannerImage from "../assets/banner/dnaa.jpg"; 
import { FaSearch, FaDownload, FaQuestionCircle } from "react-icons/fa"; 
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const RequestQuote = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    businessSegment: "",
    company: "",
    country: "",
  });

  const [status, setStatus] = useState("");

  const handleFileUpload = (event) => {
    setCsvFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
  
    const formDataToSend = new FormData();
    // Append all form fields to FormData
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
  
    if (csvFile) {
      formDataToSend.append("csvFile", csvFile);
    }
  
    try {
      const response = await axios.post("http://localhost:5000/send-quote-email", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the correct content type for file upload
        },
      });
      setStatus(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        businessSegment: "",
        company: "",
        country: "",
      }); // Reset form
    } catch (error) {
      setStatus("Failed to send email.");
    }
  };
  

  const handleDownloadTemplate = () => {
    const csvContent = "data:text/csv;charset=utf-8,Column1,Column2,Column3";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Services", link: "" },
    // product && { name: product.name, link: `/product/${product.id}` } // Add product name to the breadcrumb
  ].filter(Boolean); // Remove any null or undefined values from the 

  return (
    <div className="request-quote-page">
      <Breadcrumb paths={breadcrumbPaths} />
      <div className="banner">
        <div className="banner-text">        
          <h1>Request a Quote</h1>
          <p>Submit your details and download the template to get started.</p>
        </div>
        <div className="banner-image">
          <img src={bannerImage} alt="Request Quote Banner" />
        </div>
      </div>

      <div className="request-quote-container">
        <div className="quote-search">
          <label>
            Chemical Name, CAS # Search:
            <div className="search-input">
              <input type="text" placeholder="Enter chemical name or CAS #" />
              <FaSearch className="search-icon" />
            </div>
          </label>
        </div>

        <div className="quote-actions">
          <button className="btn" onClick={handleDownloadTemplate}>
            <FaDownload className="download-icon" /> Download Template
          </button>
          <button className="btn">
            <FaQuestionCircle className="question-icon" /> How to fill CSV file
          </button>
          <label className="btn">
            Upload CSV file
            <input type="file" accept=".csv" onChange={handleFileUpload} hidden />
          </label>
        </div>

        <p>No product is added in your request</p>

        <form onSubmit={handleSubmit} className="quote-form">
          <h2>Information</h2>

          <label className="required">
            First Name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="required">
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Business email address only please"
              required
            />
          </label>

          <label className="required">
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>

          <label className="required">
            Business Segment
            <input
              type="text"
              name="businessSegment"
              value={formData.businessSegment}
              onChange={handleInputChange}
              placeholder="Select your area of business"
              required
            />
          </label>

          <label className="required">
            Company
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Role
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="">--Select--</option>
              <option value="Manager">Manager</option>
              <option value="Scientist">Scientist</option>
              <option value="Consumer">Consumer</option>
              <option value="Finance">Finance</option>
              <option value="Innovation">Innovation</option>
              <option value="Job seeker">Job seeker</option>
              <option value="Marketing">Marketing</option>
              <option value="Quality">Quality</option>
              <option value="Research and Development">Research and Development</option>
              <option value="Sales - Business Development">Sales - Business Development</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="required">
            Country
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Country</option>
              <option value="United States">United States</option>
              <option value="India">India</option>
              <option value="Germany">Germany</option>
              <option value="China">China</option>
            </select>
          </label>

          <button type="submit" className="btn submit-btn">Submit</button>
        </form>

        <p>{status}</p>
      </div>
    </div>
  );
};

export default RequestQuote;
