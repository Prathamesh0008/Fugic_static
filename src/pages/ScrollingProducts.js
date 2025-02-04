import { useRef, useEffect, useState } from "react";
import "../styles/ScrollingProducts.css"; // Import the CSS file
import image1 from "../assets/products/ACETONITRILE.jpg";
import image2 from "../assets/products/ACETONITRILE.jpg";
import image3 from "../assets/products/ACETONITRILE.jpg";
import image4 from "../assets/products/ACETONITRILE.jpg";
import image5 from "../assets/products/ACETONITRILE.jpg";

// Product data (8 products per page)
const products = [
  { id: 1, name: "Product 1", image: image1 },
  { id: 2, name: "Product 2", image: image2 },
  { id: 3, name: "Product 3", image: image3 },
  { id: 4, name: "Product 4", image: image4 },
  { id: 5, name: "Product 5", image: image5 },
  { id: 6, name: "Product 6", image: image1 },
  { id: 7, name: "Product 7", image: image2 },
  { id: 8, name: "Product 8", image: image3 },
  { id: 9, name: "Product 9", image: image4 },
  { id: 10, name: "Product 10", image: image5 },
  { id: 11, name: "Product 11", image: image1 },
  { id: 12, name: "Product 12", image: image2 },
  { id: 13, name: "Product 13", image: image3 },
  { id: 14, name: "Product 14", image: image4 },
  { id: 15, name: "Product 15", image: image5 },
  { id: 16, name: "Product 16", image: image1 },
];

export default function ScrollingProducts() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll logic (scroll by 4 items at once)
  useEffect(() => {
    let scrollInterval;
    if (!isHovered) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          const containerWidth = scrollRef.current.clientWidth;
          const scrollWidth = scrollRef.current.scrollWidth;
          const scrollLeft = scrollRef.current.scrollLeft;
          
          // Scroll by 4 items (width of 4 cards)
          scrollRef.current.scrollLeft += containerWidth;

          // Reset to the beginning when the end is reached
          if (scrollLeft + containerWidth >= scrollWidth) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }, 3000); // Scroll every 3 seconds (adjust the time to your liking)

      return () => clearInterval(scrollInterval);
    }
  }, [isHovered]);

  // Handle mouse hover state
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="scrolling-products-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={scrollRef} className="scrolling-products-content">
        {products.map((product) => (
          <div key={product.id} className="scrolling-product-card">
            <img
              src={product.image}
              alt={product.name}
              className="scrolling-product-image"
            />
            <p className="scrolling-product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
