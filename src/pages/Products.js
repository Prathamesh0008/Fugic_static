import React from "react";
import "../styles/Products.css";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

// Full list of 90 products
const products = [
  // First 30 products
  "AAS Standard Solutions", "Acid Halides", "Acids-Inorganic", "Acids-Organic", "Acrylic Monomer",
  "Agarose", "Alcohols", "Aldehydes", "Alkyl Halides", "Allyl Halides",
  "Amides", "Amines & Amine Salts", "Amino Acids & Derivatives", "Ammonium Salts", "Aryl Halides",
  "Biological Stains and Dyes", "Buffer Solutions", "Buffer Solutions-NIST traceable", "Adsorption Indicators",
  "Buffer Substances", "Buffer Tablets", "Carbohydrates", "Cerium Salts", "Clinical Diagnostic Reagents",
  "Cesium Salts", "Column & Thin Layer Chromatographic Reagent", "Concentrate volumetric solutions (CVS)-Ampoule",
  "Complexometric Indicators", "Concentrated Volumetric Solutions (traceable to NIST)", "Conductivity Standards",

  // Next 30 products
  "Culture Media Additives", "Cyanides", "Dry Solvents", "Enzymes", "Esters", "Custom Synthesis", 
  "GC-HS Solvents", "Gas Chromatography Solvents (GC Solvents)", "GMP Products", "Good's Buffer (Biological Buffers)",
  "Histology Fixatives", "Homogeneous Catalyst", "High Purity Solvents", "HPLC Buffer Salts", 
  "HPLC, Spectroscopy Grade Solvents", "Hydrazides", "ICP Standard Solutions", "Inorganic Bases", 
  "Inorganic Phosphates", "Inorganic Salts", "Ion Pairing Reagents for HPLC", "Ketones", "Lithium Salts", 
  "Laboratory Chemicals", "Mercury Salts", "Metals", "Metallic Salts (Metal Salts)", "Nano Products", 
  "Nitro Compounds", "Nucleosides, Nucleotides & DNA",

  // Last 30 products
  "Organic Phosphates", "Organic Reagent Solutions", "Oximes", "Peroxides", 
  "Pesticide Residue Solvents (for Trace Analysis)", "pH Indicator (Solid)", "pH Indicator Papers", "Oxide",
  "pH Indicator Solutions", "Phenols & Derivatives", "Pre-Blended Solvents", "Proteins and Protein Derivatives",
  "Pyridines", "Quaternary Ammonium Compounds", "Reagent for Organic Chemistry", "Reagents & Solutions According to USP",
  "Reagents for Molecular Biology", "Reagents for Microscopy", "Solutions for Hematology and Histology", 
  "Redox Indicators", "Staining Kit", "Staining Solutions", "TLC Spray Reagents",
  "Trace Metal Acids (ACIPUR) & High Purity Acids", "Triazoles", "Vitamins", 
  "Volumetric Standard Solutions (NIST) -Ready to Use", "Wax & Oils", "Volumetric Solutions-Ready to Use"
];

const ProductsCategory = () => {
  const productGroups = [];
  for (let i = 0; i < products.length; i += 30) {
    productGroups.push(products.slice(i, i + 30)); // Splitting into groups of 30
  }
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Laboratory Chemicals Categories" }, // Add category name link
    // products && { name: products.name }, // Add product name to the breadcrumb
  ].filter(Boolean);

  return (
    <div className="products-page-container">
     <Breadcrumb paths={breadcrumbPaths} />
      <h2 className="products-header">Products Category</h2>
      {productGroups.map((group, index) => (
        <div key={index} className="product-group">
          <div className="product-columns">
            {[0, 1, 2].map((col) => (
              <div key={col} className="product-column">
                {group.slice(col * 10, (col + 1) * 10).map((product, idx) => (
                  
                  <Link to={`/products/category/${product.toLowerCase().replace(/ /g, "-")}`} className="product-item">{product}</Link>

                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCategory;
