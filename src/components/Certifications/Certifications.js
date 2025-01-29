import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Certifications.css";
// import productData from "../../assets/productData";
import product1Img from '../../assets/Certifications/14001-2015.png';
import product2Img from '../../assets/Certifications/45001-2018.png';
import product3Img from '../../assets/Certifications/FSSAI_logo.png';
import product4Img from '../../assets/Certifications/fda (1).png';
import product5Img from '../../assets/Certifications/gst-logo (1).png';
import product6Img from '../../assets/Certifications/make-in-india-logo.jpg';
import product7Img from '../../assets/Certifications/who-gmp-certification.png';

const productData = [
        { id: 1, name: "ACETONITRILE", description: "High-quality acetonitrile.", image: product1Img },
        { id: 2, name: "AMMONIATED MERCURY", description: "Used in various industries.", image: product2Img },
        { id: 3, name: "GLYCERINE", description: "Pure glycerine for pharma.", image: product3Img },
        { id: 4, name: "MERCURIC CHLORIDE", description: "Industrial-grade mercuric chloride.", image: product4Img },
        { id: 5, name: "MERCURY METAL", description: "Top-grade mercury metal.", image: product5Img },
        { id: 6, name: "SILVER NITRATE", description: "Premium silver nitrate.", image: product6Img },
        { id: 7, name: "ACES BUFFER", description: "High-quality ACES buffer.", image: product7Img },];


const Certifications = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="Certifications-container">
      <h2 className="Certifications-header">Our Certifications</h2>
      <div className="Certifications-slider">
        <Slider {...settings}>
        {productData.map((product) => (
  <div className="Certifications-box" key={product.id}>
    <div className="Certifications-image-container">
      <img src={product.image} alt={product.name} className="Certifications-image" />
    </div>
    <div className="Certifications-content">
      <Link to={`/product/${product.id}`} className="Certifications-product-link">
        {/* <h3 className="Certifications-name">{product.name}</h3> */}
        {/* <p className="Certifications-description">{product.description}</p> */}
      </Link>
    </div>
  </div>
))}

        </Slider>
      </div>
    </div>
  );
};

export default Certifications;
