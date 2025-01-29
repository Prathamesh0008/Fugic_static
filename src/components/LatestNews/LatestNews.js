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
    <div className="latest-news-containerr">
    <div className="latest-news-container">
      <h2 className="latest-news-header">Our Products</h2>
      <div className="latest-news-slider">
        <Slider {...settings}>
        {productData.map((product) => (
  <div className="latest-news-box" key={product.id}>
    <div className="latest-news-image-container">
      <img src={product.image} alt={product.name} className="latest-news-image" />
    </div>
    <div className="latest-news-content">
      <Link to={`/product/${product.id}`} className="product-link">
        <h3 className="latest-news-name">{product.name}</h3>
        <p className="latest-news-description">{product.description}</p>
      </Link>
    </div>
  </div>
  
))}

        </Slider>
      </div>
    </div>
    </div>
  );
};

export default LatestNews;
