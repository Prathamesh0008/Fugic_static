import React, { useState } from "react";
import "../styles/GloballyHarmonizedSystemPage.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

// Import the GHS images for the pictograms
import GHs01 from "../assets/globally/GHS01.png";
import GHs02 from "../assets/globally/GHS02.png";
import GHs03 from "../assets/globally/GHS03.png";
import GHs04 from "../assets/globally/GHS04.png";
import GHs05 from "../assets/globally/GHS05.png";
import GHs06 from "../assets/globally/GHS06.png";
import GHs07 from "../assets/globally/GHS07.png";
import GHs08 from "../assets/globally/GHS08.png";
import GHs09 from "../assets/globally/GHS09.png";

const GloballyHarmonizedSystemPage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    GHs01,
    GHs02,
    GHs03,
    GHs04,
  ];
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Safety", link: "/safety" },
    { name: "Globally Harmonized System", link: "/ghs" }
  ];

  // Change the image every 5 seconds
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="ghs-page-container">
      {/* Title Section */}
      <Breadcrumb paths={breadcrumbPaths} />
      <h1 className="page-title">Globally Harmonized System (GHS)</h1>

      <div className="ghs-content">
        {/* Left Section - Introduction and Pictogram Table */}
        <div className="ghs-left">
          <section className="introduction">
            <h2>Introduction</h2>
            <p>
              The Globally Harmonized System was initiated at the UN Conference on the Environment and Development in Rio de Janeiro in 1992. It aims, amongst other goals, to harmonize the classification and the hazard communication elements of chemicals (labeling and safety data sheets). The first version became available in 2003 in the form of the so-called purple book (compared to the orange book for transportation). Regular updates should take place every 2 years. GHS harmonizes most classification criteria for supply and transportation and is based on the intrinsic properties of substances. GHS allows individual countries or regions to implement building blocks at their own discretion. The building blocks, however, may not be altered. Additionally, there is room for Competent Authority Options and special limits for the communication of components in mixtures.
            </p>
            <h3>Reasons for the Development of GHS</h3>
            <ul>
              <li>Growing international trade</li>
              <li>Different requirements for labeling of chemicals</li>
              <li>Different classifications of identical products in different countries</li>
              <li>Requirement for an international safety standard</li>
            </ul>
            <h3>GHS Elements</h3>
            <p>
              Compared to the current EU system, the most noticeable change is the pictograms (formerly: hazard symbols). While most of the GHS pictograms have an equivalent in the old system, the pictograms GHS 04, GHS 07, and GHS 08 are completely new. The GHS System is built on 16 physical, 10 health, and 3 environmental hazard classes and comprises the following communication elements:
            </p>
          </section>

          {/* Pictogram Table Section */}
          <section className="pictogram-table">
            <h2>Warning Pictograms</h2>
            <table className="details-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Pictogram</th>
                  <th>Hazard Class and Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Exploding Bomb (GHS01)</td>
                  <td><img src={GHs01} alt="Exploding Bomb" className="ghs-pictogram" /></td>
                  <td>Unstable explosives, Explosives of Divisions 1.1, 1.2, 1.3, 1.4, Self-reactive substances and mixtures, Types A,B, Organic peroxides, Types A,B</td>
                </tr>
                <tr>
                  <td>Flame (GHS02)</td>
                  <td><img src={GHs02} alt="Flame" className="ghs-pictogram" /></td>
                  <td>Flammable gases, category 1, Flammable aerosols, categories 1,2, Flammable liquids, categories 1,2,3, Flammable solids, categories 1,2, Self-reactive substances and mixtures, Types B,C,D,E,F</td>
                </tr>
                <tr>
                  <td>Flame Over Circle (GHS03)</td>
                  <td><img src={GHs03} alt="Flame Over Circle" className="ghs-pictogram" /></td>
                  <td>Oxidizing gases, category 1, Oxidizing liquids, categories 1,2,3</td>
                </tr>
                <tr>
                  <td>Gas Cylinder (GHS04)</td>
                  <td><img src={GHs04} alt="Gas Cylinder" className="ghs-pictogram" /></td>
                  <td>Gases under pressure: Compressed gases, Liquefied gases, Refrigerated liquefied gases, Dissolved gases</td>
                </tr>
                <tr>
                  <td>Corrosion (GHS05)</td>
                  <td><img src={GHs05} alt="Corrosion" className="ghs-pictogram" /></td>
                  <td>Corrosive to metals, category 1, Skin corrosion, categories 1A,1B,1C, Serious eye damage, category 1</td>
                </tr>
                <tr>
                  <td>Skull and Crossbones (GHS06)</td>
                  <td><img src={GHs06} alt="Skull and Crossbones" className="ghs-pictogram" /></td>
                  <td>Acute toxicity (oral, dermal, inhalation), categories 1,2,3</td>
                </tr>
                <tr>
                  <td>Exclamation Mark (GHS07)</td>
                  <td><img src={GHs07} alt="Exclamation Mark" className="ghs-pictogram" /></td>
                  <td>Acute toxicity (oral, dermal, inhalation), category 4, Skin irritation, category 2, Eye irritation, category 2, Skin sensitisation, category 1</td>
                </tr>
                <tr>
                  <td>Health Hazard (GHS08)</td>
                  <td><img src={GHs08} alt="Health Hazard" className="ghs-pictogram" /></td>
                  <td>Respiratory sensitization, category 1, Germ cell mutagenicity, categories 1A,1B,2, Carcinogenicity, categories 1A,1B,2, Reproductive toxicity, categories 1A,1B,2</td>
                </tr>
                <tr>
                  <td>Environment (GHS09)</td>
                  <td><img src={GHs09} alt="Environment" className="ghs-pictogram" /></td>
                  <td>Hazardous to the aquatic environment: Acute hazard, category 1, Chronic hazard, categories 1,2</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        {/* Right Section - Image Gallery and Tables */}
        <div className="ghs-right">
          <div className="image-box">
            <img src={images[imageIndex]} alt="GHS visuals" className="ghs-image" />
          </div>

          {/* Company Table */}
          <section className="company-table">
            <h2>THE COMPANY</h2>
            <table className="details-table">
              <tbody>
                <tr><td>Introduction</td></tr>
                <tr><td>Mission & Vision</td></tr>
                <tr><td>Our Certifications</td></tr>
                <tr><td>Quality Control & Assurance</td></tr>
                <tr><td>Manufacturing Facilities</td></tr>
                <tr><td>Research and Development</td></tr>
              </tbody>
            </table>
          </section>

          {/* Resources Table */}
          <section className="resources-table">
            <h2>RESOURCES</h2>
            <table className="details-table">
              <tbody>
                <tr><td>Globally Harmonized System</td></tr>
                <tr><td>Hazard & Precautionary Statements</td></tr>
                <tr><td>Periodic Table</td></tr>
                <tr><td>Fractions</td></tr>
              </tbody>
            </table>
          </section>
          <section className="resources-table">
            <h2>OUR BROCHURE</h2>
            <table className="details-table">
              <tbody>
                <tr><td>Price List Download</td></tr>
                <tr><td>Packaging List Download</td></tr>
                <tr><td>Price View Flipbook</td></tr>                
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GloballyHarmonizedSystemPage;
