import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import './WhatMakesUsSpecial.css';
import image1 from '../../assets/special/Innovative Solution.jpg';
import image2 from '../../assets/special/Experienced Team.jpg';
import image3 from '../../assets/special/Sustainability Focus.jpg';
import image4 from '../../assets/special/Customer-Centric Approach.jpg';

const WhatMakesUsSpecial = () => {
  const specialItems = [
    {
      id: 1,
      title: 'Innovative Solutions',
      description: 'We provide cutting-edge solutions tailored to the unique challenges of your industry...',
      fullDescription: 'We provide cutting-edge solutions tailored to the unique challenges of your industry. Our team leverages advanced technologies and industry insights to craft strategies that are not only effective but also sustainable. Whether you are looking to enhance operational efficiency or adopt new technologies, we are here to guide you. We take a comprehensive approach to problem-solving, ensuring that each solution is customized to meet your specific needs. Our goal is to help you stay ahead in a rapidly changing world by offering solutions that are innovative, practical, and scalable. We focus on bringing creative ideas to life, transforming your vision into reality.',
      image: image1,
      link: '/innovative-solutions',
    },
    {
      id: 2,
      title: 'Experienced Team',
      description: 'Our team has years of expertise in delivering exceptional results for our clients Each member of...',
      fullDescription: 'Our team has years of expertise in delivering exceptional results for our clients. Each member of our team brings a unique set of skills and experiences, ensuring that we can provide tailored services that meet your needs. From project managers to technical experts, we work collaboratively to deliver high-quality outcomes that exceed expectations. Our team stays updated with the latest trends and advancements in the industry to ensure we are always at the forefront of innovation. We prioritize professional development and continuous learning, which is why we have built a reputation for excellence.',
      image: image2,
      link: '/experienced-team',
    },
    {
      id: 3,
      title: 'Sustainability Focus',
      description: 'We prioritize sustainable practices in every project we undertake Sustainability is not just a...',
      fullDescription: 'Sustainability is not just a buzzword for us—it’s a core principle that guides every decision we make. From using eco-friendly materials to implementing energy-efficient systems, we are dedicated to reducing our environmental footprint. Our commitment to sustainability goes beyond compliance; we actively seek out innovative solutions that minimize waste and maximize efficiency. We believe that sustainability is key to long-term success, both for our clients and for the planet.',
      image: image3,
      link: '/sustainability-focus',
    },
    {
      id: 4,
      title: 'Customer Approach',
      description: 'We put your needs first, ensuring a seamless and satisfying experience Our customer-centric approach...',
      fullDescription: 'We put your needs first, ensuring a seamless and satisfying experience. Our customer-centric approach focuses on understanding your unique challenges and goals. We work closely with you throughout the process to ensure that we are meeting your expectations at every step. From initial consultation to final delivery, we make communication a priority. We value your feedback and believe that collaboration is key to creating solutions that truly serve you.',
      image: image4,
      link: '/customer-centric-approach',
    },
  ];

  return (
    <div className="what-makes-us-special">
      <h2 className="special-header">What Makes Us Special</h2>
      <div className="special-container">
        {specialItems.map((item) => (
          <div className="special-box" key={item.id}>
            <div className="special-image-container">
              <img src={item.image} alt={item.title} className="special-image" />
            </div>
            <div className="special-content">
              <h3 className="special-title">{item.title}</h3>
              <p className="read-description">{item.description}</p>
              {/* Pass the full description along with other details */}
              <Link 
  to={item.link} 
  state={{ title: item.title, fullDescription: item.fullDescription, image: item.image }}
  className="special-link" // Ensure this class name is applied
>
  Read More »
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatMakesUsSpecial;
