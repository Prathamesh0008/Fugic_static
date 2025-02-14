import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Article No.": "Article No.",
      "Chemical Name": "Chemical Name",
      "Purity": "Purity",
      "CAS No.": "CAS No.",
      "Formula": "Formula",
      "Unit": "Unit",
      "Price": "Price",
      "MSDS": "MSDS",
      "COA": "COA",
      "CART": "CART",
      "Select Unit": "Select Unit",
      "Add to Cart": "Add to Cart",
    },
  },
  hi: {
    translation: {
      "Article No.": "अनुच्छेद संख्या",
      "Chemical Name": "रासायनिक नाम",
      "Purity": "शुद्धता",
      "CAS No.": "सीएएस संख्या",
      "Formula": "सूत्र",
      "Unit": "इकाई",
      "Price": "मूल्य",
      "MSDS": "एमएसडीएस",
      "COA": "सीओए",
      "CART": "कार्ट",
      "Select Unit": "इकाई चुनें",
      "Add to Cart": "कार्ट में जोड़ें",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
