import React from 'react';
import '../styles/Services.css';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const serviceList = [
  {
    title: 'Custom Chemical Synthesis',
    description: 'Tailor-made chemical solutions to meet your specific research and production needs.',
    icon: '🔬',
  },
  {
    title: 'High-Purity Chemical Supply',
    description: 'Providing top-quality biochemical reagents for pharmaceutical and laboratory applications.',
    icon: '⚗️',
  },
  {
    title: 'Quality Control & Testing',
    description: 'Ensuring high standards with rigorous quality assurance and testing procedures.',
    icon: '✔️',
  },
  {
    title: 'Regulatory & Compliance Support',
    description: 'Helping you navigate global regulatory requirements with expert guidance.',
    icon: '📜',
  },
  {
    title: 'Logistics & Supply Chain Management',
    description: 'Efficient delivery and inventory management for seamless business operations.',
    icon: '🚛',
  },
  {
    title: 'Analytical & Research Support',
    description: 'Providing expert assistance in analytical chemistry and research methodologies.',
    icon: '🔍',
  },
  {
    title: 'Technical Consultation',
    description: 'Expert advice and consultation for optimizing chemical processes and applications.',
    icon: '📞',
  },
];
const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Services", link: "" },
    // product && { name: product.name, link: `/product/${product.id}` } // Add product name to the breadcrumb
  ].filter(Boolean); // Remove any null or undefined values from the 
const Services = () => {
  return (
    <div className="services-container">
    <Breadcrumb paths={breadcrumbPaths} />
      <header className="hero-section">
        <h1>Our Services</h1>
        <p>We provide industry-leading biochemical solutions with a focus on quality, innovation, and reliability.</p>
      </header>

      <section className="overview-section">
        <h2>Why Choose Us?</h2>
        <p>With years of experience in the biochemical industry, we ensure premium quality and customer satisfaction. Our expertise extends to pharmaceutical, industrial, and research applications.</p>
      </section>

      <div className="services-list">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <section className="benefits-section">
        <h2>What You Gain</h2>
        <ul>
          <li> High-quality and reliable chemical solutions</li>
          <li> Regulatory compliance and expert guidance</li>
          <li> Fast and efficient delivery</li>
          <li> Tailored solutions to meet your specific needs</li>
          <li> Dedicated customer support</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Get in Touch</h2>
        <p>Interested in our services? Contact us today to discuss how we can assist you in achieving your goals.</p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default Services;
