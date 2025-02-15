import React from "react";
import { Link } from "react-router-dom";
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
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="latest-news-container">
      <h2 className="latest-news-header">Our Products</h2>
      <div className="latest-news-slider">
        <Slider {...settings}>
          {productData.map((product) => (
            <div className="latest-news-card" key={product.id}>
              <div className="latest-news-image-container">
                <img src={product.image} alt={product.name} className="latest-news-image" />
              </div>
              <div className="latest-news-content">
                <Link to={`/product/${product.id}`} className="latest-news-product-link">
                  <h3 className="latest-news-name">{product.name}</h3>
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
