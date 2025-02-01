import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./LatestNews.css";
import productData from "../../assets/productData";

const LatestNews = () => {
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
    <h2 className="Certifications-header">Our Products</h2>
    <div className="Certifications-slider">
      <Slider {...settings}>
      {productData.map((product) => (
<div className="Certifications-box" key={product.id}>
  <div className="Certifications-image-container">
    <img src={product.image} alt={product.name} className="Certifications-image" />
  </div>
  <div className="Certifications-content">
    <Link to={`/product/${product.id}`} className="Certifications-product-link">
      <h3 className="latest-news-name">{product.name}</h3>
      {/* <p className="Certifications-description">{product.description}</p> */}
    </Link>
  </div>
</div>
))}

      </Slider>
    </div>
    <div className="view-all-container">
          <Link to="/products" className="view-all-button">View All</Link>
        </div>
  </div>
);
};

export default LatestNews;
