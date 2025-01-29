import React from "react";
import { Link } from "react-router-dom";  // Import Link
import "./GloballyHarmonizedSystem.css";

// Importing the images (assuming they are in the assets folder)
import GHs01 from "../../assets/globally/GHS01.png";
import GHs02 from "../../assets/globally/GHS02.png";
import GHs03 from "../../assets/globally/GHS03.png";
import GHs04 from "../../assets/globally/GHS04.png";
import GHs05 from "../../assets/globally/GHS05.png";
import GHs06 from "../../assets/globally/GHS06.png";
import GHs07 from "../../assets/globally/GHS07.png";
import GHs08 from "../../assets/globally/GHS08.png";
import GHs09 from "../../assets/globally/GHS09.png";

// Defining image data with more explicit naming for each image
const images = [
  { src: GHs01, alt: "GHS01", to: "/GloballyHarmonized" },
  { src: GHs02, alt: "GHS02", to: "/GloballyHarmonized" },
  { src: GHs03, alt: "GHS03", to: "/GloballyHarmonized" },
  { src: GHs04, alt: "GHS04", to: "/GloballyHarmonized" },
  { src: GHs05, alt: "GHS05", to: "/GloballyHarmonized" },
  { src: GHs06, alt: "GHS06", to: "/GloballyHarmonized" },
  { src: GHs07, alt: "GHS07", to: "/GloballyHarmonized" },
  { src: GHs08, alt: "GHS08", to: "/GloballyHarmonized" },
  { src: GHs09, alt: "GHS09", to: "/GloballyHarmonized" },
];

const GloballyHarmonizedSystem = () => {
  return (
    <div className="ghs-container">
      <h2 className="ghs-header">Globally Harmonized System (GHS)</h2>
      <div className="ghs-images-container">
        {images.map((image, index) => (
          <div className="ghs-image-box" key={index}>
            <Link to={image.to}> {/* Wrap image with Link */}
              <img src={image.src} alt={image.alt} className="ghs-image" />
            </Link>
            <p className="ghs-image-name">{image.alt}</p> {/* Display the name below each image */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GloballyHarmonizedSystem;
