import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { FiFileText } from "react-icons/fi"; // Icon for PDF
import "../styles/ProductDetailsPage.css";
// import { Link } from "react-router-dom"; // Import Link for routing

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import productData from "../assets/productData"; // Assuming productData is an array
// import LatestNews from "../components/LatestNews/LatestNews";

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get product id from URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(""); // State for the main image

  // Fetch product data based on id
  useEffect(() => {
    const selectedProduct = productData.find((prod) => prod.id === parseInt(id));
    if (selectedProduct) {
      setProduct(selectedProduct);
      setMainImage(selectedProduct.mainImage); // Set the initial main image
    }
  }, [id]);

  // Update breadcrumb path when product is fetched
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Our Products", link: "/products" },
    product && { name: product.name, link: `/product/${product.id}` } // Add product name to the breadcrumb
  ].filter(Boolean); // Remove any null or undefined values from the array

  if (!product) {
    return <div>Loading...</div>; // Or display an error message if no product is found
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to the cart`);
  };

  const handleDownload = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();
    link.click();
  };

  // Update main image when gallery image is clicked
  const handleGalleryImageClick = (image) => {
    setMainImage(image);
  };
  const galleryImages = [
    product.mainImage,
    ...product.images.slice(0, 3), // Get only the first 3 images
  ];

  return (
    <div className="product-details-container">
      <Breadcrumb paths={breadcrumbPaths} />

      <div className="product-details-content">
        {/* Left Section */}
        <div className="product-details-left">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-images">
            <div className="main-image">
              <img src={mainImage} alt={product.name} />
            </div>
            <div className="product-gallery">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-image ${image === mainImage ? "active" : ""}`}
                  onClick={() => handleGalleryImageClick(image)}
                >
                  <img src={image} alt={`product-thumbnail-${index}`} />
                </div>
                ))}
            </div>
          </div>

          {/* Download Buttons */}
          <div className="download-buttons">
            <button
              className="download-button"
              onClick={() => handleDownload(product.msdsFile)}
            >
              <FiFileText className="pdf-icon" />
              Material Safety Data Sheet (MSDS)
            </button>
            <button
              className="download-button"
              onClick={() => handleDownload(product.coaFile)}
            >
              <FiFileText className="pdf-icon" />
              Certificate of Analysis (COA)
            </button>
          </div>

          {/* Physical Properties Section */}
          <div className="physical-properties-section">
            <h3>Physical Properties</h3>
            <table className="details-table">
              <tbody>
                {Object.entries(product.physicalProperties).map(([key, value], index) => (
                  <tr key={index}>
                    <td>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section */}
        <div className="product-details-right">
          {/* Chemical Information */}
          <h3>Chemical Information</h3>
          <table className="details-table">
            <tbody>
              {Object.entries(product.chemicalInfo).map(([key, value]) => (
                <tr key={key}>
                  <td>{key.replace(/([A-Z])/g, " $1")}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pricing Table */}
          <h3>Pricing</h3>
          <table className="details-table">
            <thead>
              <tr>
                <th>Pack Size</th>
                <th>Price (INR)</th>
                <th>Price Request</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product.pricing.map((item, index) => (
                <tr key={index}>
                  <td>{item.packSize}</td>
                  <td>₹ {item.price}</td>
                  <td>{item.priceRequest}</td>
                  <td>
                    <input
                      type="number"
                      value={quantity}
                      min="1"
                      onChange={handleQuantityChange}
                      className="quantity-input"
                    />
                  </td>
                  <td>
                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Packaging Sizes */}
          <h3>Packaging Sizes Available On Demand</h3>
          <div className="packaging-sizes-row">
            {product.packagingSizesAvailable.map((size, index) => (
              <div key={index} className="packaging-size-item">
                {size}
              </div>
            ))}
          </div>

          {/* Safety Information */}
          <h3>Safety Information and Hazard Symbols</h3>
          <table className="details-table">
            <tbody>
              {Object.entries(product.safetyInfo).map(([key, value]) => (
                <tr key={key}>
                  <td>{key.replace(/([A-Z])/g, " $1")}</td>
                  <td>{Array.isArray(value) ? value.join(", ") : value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Specifications */}
          <h3>Specifications</h3>
          <table className="details-table">
            <tbody>
              {Object.entries(product.specifications).map(([key, value]) => (
                <tr key={key}>
                  <td>{key.replace(/([A-Z])/g, " $1")}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <LatestNews /> */}
    </div>
  );
};

export default ProductDetailsPage;
