import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import FullDescriptionPage from "./pages/FullDescriptionPage";
import RequestQuotePage from "./pages/RequestQuote";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import ChemicalPage from "./pages/ChemicalPage";
import GlasswarePage from "./pages/GlasswarePage";
import FilterPaperPage from "./pages/filterPaperData"; // Ensure correct casing
import ProductDetailsPage from "./pages/ProductDetailsPage";
import GloballyHarmonizedSystemPage from "./pages/GloballyHarmonizedSystemPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import ProductPage from "./pages/ProductPage";
import GloballyHarmonizedSystem from "./components/GloballyHarmonizedSystem/GloballyHarmonizedSystem";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./components/contexts/CartContext"; // Import CartProvider
import CheckoutPage from "./pages/CheckoutPage";
import CompanyInfoPage from "./pages/CompanyInfoPage";
import NavbarMenu from "./components/NavbarMenu";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        {/* <NavbarMenu/> */}
        <Routes>
          {/* General Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />

          {/* Product Categories */}
          <Route path="/products/chemical" element={<ChemicalPage />} />
          <Route path="/products/glassware" element={<GlasswarePage />} />
          <Route path="/products/filterpaper" element={<FilterPaperPage />} />

          {/* Product Pages */}
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/products/category/:category" element={<ProductPage />} />

          {/* Other Pages */}
          <Route path="/GloballyHarmonized" element={<GloballyHarmonizedSystemPage />} />
          <Route path="/GloballyHarmonizedSystem" element={<GloballyHarmonizedSystem />} />

          {/* Catch-all Route (Ensure it's last) */}
          <Route path="/:link" element={<FullDescriptionPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/company-info" element={<CompanyInfoPage />} />
        </Routes>

        <ScrollToTop />
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
