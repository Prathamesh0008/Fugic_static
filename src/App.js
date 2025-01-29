import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import FullDescriptionPage from "./pages/FullDescriptionPage";
import RequestQuotePage from "./pages/RequestQuote";
import LoginRegisterPage from "./pages/LoginRegisterPage"; // Import the new page
import ChemicalPage from "./pages/ChemicalPage";
import GlasswarePage from "./pages/GlasswarePage";
import FilterPaperPage from "./pages/filterPaperData"; // Ensure the correct page name
import ProductDetailsPage from "./pages/ProductDetailsPage";
import GloballyHarmonizedSystemPage from "./pages/GloballyHarmonizedSystemPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-quote" element={<RequestQuotePage />} />
        <Route path="/login-register" element={<LoginRegisterPage />} /> {/* Add route for login/register */}
        <Route path="/products/chemical" element={<ChemicalPage />} />
        <Route path="/products/glassware" element={<GlasswarePage />} />
        <Route path="/products/filterpaper" element={<FilterPaperPage/>} /> {/* Corrected route */}
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/GloballyHarmonized" element={<GloballyHarmonizedSystemPage />} />
        {/* Catch-all route should be placed last to avoid conflicts with specific routes */}
        <Route path="/:link" element={<FullDescriptionPage />} />
      </Routes>
      {/* <WhatsAppButton/> */}
      <ScrollToTop/>
      <Footer />
    </Router>
  );
};

export default App;
