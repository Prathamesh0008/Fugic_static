import React, { createContext, useContext, useState } from "react";

// Create Context
const CurrencyContext = createContext(null);

// Custom Hook
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

// Provider Component
export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "INR" ? "USD" : "INR"));
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
