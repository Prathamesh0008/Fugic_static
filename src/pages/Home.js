import React from "react";
import Banner from "../components/Banner/Banner";
import ProductSection from "../components/Product/ProductSection";
import LatestNews from "../components/LatestNews/LatestNews";
import WhatMakesUsSpecial from "../components/WhatMakesUsSpecial/WhatMakesUsSpecial";
import FugicSpotlight from "../components/FugicSpotlight/FugicSpotlight";
import ContactUs from "../components/ContactUs/ContactUs";
import ProductComponent from "../components/Products/ProductComponent";
import GloballyHarmonizedSystem from "../components/GloballyHarmonizedSystem/GloballyHarmonizedSystem";
import Certifications from "../components/Certifications/Certifications";
import OurValues from "../components/Ourvalues/OurValues";
import FadeInSection from "../pages/FadeInSection"; // Import new wrapper

const Home = () => {
  return (
    <div>
      <Banner />

      <FadeInSection>
        <OurValues />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <LatestNews />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <ProductComponent />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <ProductSection />
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <WhatMakesUsSpecial />
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <Certifications />
      </FadeInSection>

      <FadeInSection delay={0.7}>
        <FugicSpotlight />
      </FadeInSection>

      <FadeInSection delay={0.8}>
        <GloballyHarmonizedSystem />
      </FadeInSection>

      <FadeInSection delay={0.9}>
        <ContactUs />
      </FadeInSection>
    </div>
  );
};

export default Home;
