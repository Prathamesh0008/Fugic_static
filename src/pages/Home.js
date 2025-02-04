// src/pages/Home.js
import React from "react";
import Banner from "../components/Banner/Banner"; // Import the Banner component
import ProductSection from "../components/Product/ProductSection";
import LatestNews from "../components/LatestNews/LatestNews";
import WhatMakesUsSpecial from "../components/WhatMakesUsSpecial/WhatMakesUsSpecial";
import FugicSpotlight from "../components/FugicSpotlight/FugicSpotlight";
import Contact from "./Contact";
import ContactUs from "../components/ContactUs/ContactUs";
import ProductComponent from "../components/Products/ProductComponent";
import GloballyHarmonizedSystem from "../components/GloballyHarmonizedSystem/GloballyHarmonizedSystem";
import Certifications from "../components/Certifications/Certifications";
import OurValues from "../components/Ourvalues/OurValues";
// import ScrollingProducts from "./ScrollingProducts";

const Home = () => {
  return (
    <div>
      <Banner /> 
      <OurValues/>
      <LatestNews/>
      <ProductComponent/>
      <ProductSection/>
      
      {/* <ScrollingProducts/> */}
      <WhatMakesUsSpecial/>
      <Certifications/>
      <FugicSpotlight/>
      <GloballyHarmonizedSystem/>
      <ContactUs/>
      {/* Other content of the home page */}
    
    </div>
  );
};

export default Home;
