import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import productsData from "../assets/productsData";

// Sample product data (Replace this with real data from API if needed)
// const productsData = {
//   "aas-standard-solutions": [
//     {
//         articleNo: 'FC01460',
//         chemicalName: 'ANTIMONY AAS STANDARD SOLUTION - 1000 mg/L Sb IN DILUTED HCl',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         price: '₹ 1,000.00',
//         MSDS: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC01494',
//         chemicalName: 'ARSENIC AAS STANDARD SOLUTION - 1000 mg/L As IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1285/ARSENIC_AAS_STANDARD_SOLUTION_100',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC01537',
//         chemicalName: 'BARIUM AAS STANDARD SOLUTION - 1000 mg/L Ba IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1287/BARIUM_AAS_STANDARD_SOLUTION_100',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC01680',
//         chemicalName: 'BERYLLIUM AAS STANDARD SOLUTION - 1000 mg/L Be IN DILUTED HCl',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1288/BERYLLIUM_AAS_STANDARD_SOLUTION_1',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC01723',
//         chemicalName: 'BISMUTH AAS STANDARD SOLUTION - 1000 mg/L Bi IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1289/BISMUTH_AAS_STANDARD_SOLUTION_100',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC01781',
//         chemicalName: 'BORON AAS STANDARD SOLUTION - 1000 mg/L B IN H2O',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1290/BORON_AAS_STANDARD_SOLUTION_1000',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC02014',
//         chemicalName: 'CADMIUM AAS STANDARD SOLUTION - 1000 mg/L Cd IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1292/CADMIUM_AAS_STANDARD_SOLUTION_10',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC02050',
//         chemicalName: 'CALCIUM AAS STANDARD SOLUTION - 1000 mg/L Ca IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1294/CALCIUM_AAS_STANDARD_SOLUTION_100',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC02209',
//         chemicalName: 'CESIUM AAS STANDARD SOLUTION - 1000 mg/L Cs IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1296/CESIUM_AAS_STANDARD_SOLUTION_1000',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC02358',
//         chemicalName: 'CHROMIUM AAS STANDARD SOLUTION - 1000 mg/L Cr IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1298/CHROMIUM_AAS_STANDARD_SOLUTION_1',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC02417',
//         chemicalName: 'COBALT AAS STANDARD SOLUTION - 1000 mg/L Co IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1300/COBALT_AAS_STANDARD_SOLUTION_100',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC02483',
//         chemicalName: 'COPPER AAS STANDARD SOLUTION - 1000 mg/L Cu IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1302/COPPER_AAS_STANDARD_SOLUTION_100',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC03596',
//         chemicalName: 'IRON AAS STANDARD SOLUTION - 1000 mg/L Fe IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1304/IRON_AAS_STANDARD_SOLUTION_1000_',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC03659',
//         chemicalName: 'LANTHANUM AAS STANDARD SOLUTION - 1000 mg/LLa IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1306/LANTHANUM_AAS_STANDARD_SOLUTION',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC03678',
//         chemicalName: 'LEAD AAS STANDARD SOLUTION - 1000 mg/L Pb IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1307/LEAD_AAS_STANDARD_SOLUTION_1000_',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC03751',
//         chemicalName: 'LITHIUM AAS STANDARD SOLUTION - 1000 mg/LLi IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1308/LITHIUM_AAS_STANDARD_SOLUTION_100',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC03804',
//         chemicalName: 'MAGNESIUM AAS STANDARD SOLUTION - 1000 mg/L Mg IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1310/MAGNESIUM_AAS_STANDARD_SOLUTION_',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC03873',
//         chemicalName: 'MANGANESE AAS STANDARD SOLUTION - 1000 mg/L Mn IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1312/MANGANESE_AAS_STANDARD_SOLUTION_',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         articleNo: 'FC03927',
//         chemicalName: 'MERCURY AAS STANDARD SOLUTION - 1000 mg/L Hg IN DILUTED HNO3',
//         purity: '-',
//         casNo: 'traceable to NIST',
//         formula: '-',
//         unit: '125ml 500ml',
//         MSDS: 'https://www.alphachemika.co/chemical/1313/MERCURY_AAS_STANDARD_SOLUTION_10',
//         category: 'AAS Standard Solutions',
//         COA: 'https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1',
//       },
//       {
//         "articleNo": "FC04207",
//         "chemicalName": "NICKEL AAS STANDARD SOLUTION 1000 mg/L Ni IN DILUTED HNO3",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1314/NICKEL_AAS_STANDARD_SOLUTION_1000_mg_L_Ni_IN_DILUTED_HNO3_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC04378",
//         "chemicalName": "PALLADIUM AAS STANDARD SOLUTION 1000 mg/L Pd IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1315/PALLADIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Pd_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC04638",
//         "chemicalName": "POTASSIUM AAS STANDARD SOLUTION 1000mg/L K IN DILUTED HNO3",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1318/POTASSIUM_AAS_STANDARD_SOLUTION_1000mg_L_K_IN_DILUTED_HNO3_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC05001",
//         "chemicalName": "SILVER AAS STANDARD SOLUTION 1000 mg/L Ag DILUTED HNO3",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1319/SILVER_AAS_STANDARD_SOLUTION_1000_mg_L_Ag_DILUTED_HNO3_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC05049",
//         "chemicalName": "SODIUM AAS STANDARD SOLUTION 1000 mg/L Na IN DILUTED HNO3",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1321/SODIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Na_IN_DILUTED_HNO3_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC05352",
//         "chemicalName": "STRONTIUM AAS STANDARD SOLUTION 1000 mg/L Sr IN DILUTED HNO3",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1323/STRONTIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Sr_IN_DILUTED_HNO3_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC05446",
//         "chemicalName": "TELLURIUM AAS STANDARD SOLUTION 1000 mg/L Te IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1324/TELLURIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Te_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC05564",
//         "chemicalName": "TIN AAS STANDARD SOLUTION 1000 mg/L Sn IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1326/TIN_AAS_STANDARD_SOLUTION_1000_mg_L_Sn_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC05756",
//         "chemicalName": "VANADIUM AAS STANDARD SOLUTION 1000 mg/L V IN DILUTED HNO3",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1328/VANADIUM_AAS_STANDARD_SOLUTION_1000_mg_L_V_IN_DILUTED_HNO3_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC05825",
//         "chemicalName": "ZINC AAS STANDARD SOLUTION 1000 mg/L Zn IN DILUTED HNO3",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1330/ZINC_AAS_STANDARD_SOLUTION_1000_mg_L_Zn_IN_DILUTED_HNO3_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06369",
//         "chemicalName": "ALUMINIUM AAS STANDARD SOLUTION 1000 mg/L Al IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1281/ALUMINIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Al_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06370",
//         "chemicalName": "ARSENIC AAS STANDARD SOLUTION 1000 mg/L As IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1284/ARSENIC_AAS_STANDARD_SOLUTION_1000_mg_L_As_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06371",
//         "chemicalName": "BARIUM AAS STANDARD SOLUTION 1000 mg/L Ba IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1286/BARIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Ba_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06372",
//         "chemicalName": "CADMIUM AAS STANDARD SOLUTION 1000 mg/L Cd IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1291/CADMIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Cd_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06373",
//         "chemicalName": "CALCIUM AAS STANDARD SOLUTION 1000 mg/L Ca IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1293/CALCIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Ca_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06374",
//         "chemicalName": "CERIUM AAS STANDARD SOLUTION 1000 mg/L Ce IN DILUTED HNO3",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1295/CERIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Ce_IN_DILUTED_HNO3_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06375",
//         "chemicalName": "CHROMIUM AAS STANDARD SOLUTION 1000 mg/L Cr IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1297/CHROMIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Cr_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06376",
//         "chemicalName": "COBALT AAS STANDARD SOLUTION 1000 mg/L Co IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1299/COBALT_AAS_STANDARD_SOLUTION_1000_mg_L_Co_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06377",
//         "chemicalName": "COPPER AAS STANDARD SOLUTION 1000 mg/L Cu IN DILUTED HCl",
//         "purity": "NA",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1301/COPPER_AAS_STANDARD_SOLUTION_1000_mg_L_Cu_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1"
//       },
//       {
//         "articleNo": "FC06379",
//         "chemicalName": "LANTHANUM AAS STANDARD SOLUTION 1000 mg/LLa IN DILUTED HCl traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1305/LANTHANUM_AAS_STANDARD_SOLUTION_1000_mg_L_La_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=LANT"
//       },
//       {
//         "articleNo": "FC06380",
//         "chemicalName": "MAGNESIUM AAS STANDARD SOLUTION 1000 mg/L Mg IN DILUTED HCl traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1309/MAGNESIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Mg_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=MAGN"
//       },
//       {
//         "articleNo": "FC06381",
//         "chemicalName": "MANGANESE AAS STANDARD SOLUTION 1000 mg/L Mn IN DILUTED HCl traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1311/MANGANESE_AAS_STANDARD_SOLUTION_1000_mg_L_Mn_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=MANG"
//       },
//       {
//         "articleNo": "FC06382",
//         "chemicalName": "PHOSPHORUS AAS STANDARD SOLUTION 1000 mg/L P IN H2O traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1316/PHOSPHORUS_AAS_STANDARD_SOLUTION_1000_mg_L_P_IN_H2O_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=PHOS"
//       },
//       {
//         "articleNo": "FC06383",
//         "chemicalName": "POTASSIUM AAS STANDARD SOLUTION 1000 mg/L K IN DILUTED HCl traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1317/POTASSIUM_AAS_STANDARD_SOLUTION_1000_mg_L_K_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=POTA"
//       },
//       {
//         "articleNo": "FC06384",
//         "chemicalName": "SODIUM AAS STANDARD SOLUTION 1000 mg/L Na IN DILUTED HCl traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1320/SODIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Na_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=SODI"
//       },
//       {
//         "articleNo": "FC06385",
//         "chemicalName": "STRONTIUM AAS STANDARD SOLUTION 1000 mg/L Sr IN DILUTED HCl traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1322/STRONTIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Sr_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=STRO"
//       },
//       {
//         "articleNo": "FC06386",
//         "chemicalName": "TELLURIUM AAS STANDARD SOLUTION 1000 mg/L Te IN DILUTED HNO3 traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1325/TELLURIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Te_IN_DILUTED_HNO3_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=TELLU"
//       },
//       {
//         "articleNo": "FC06387",
//         "chemicalName": "VANADIUM AAS STANDARD SOLUTION 1000 mg/L V IN DILUTED H2SO4 traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1327/VANADIUM_AAS_STANDARD_SOLUTION_1000_mg_L_V_IN_DILUTED_H2SO4_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=VANA"
//       },
//       {
//         "articleNo": "FC06388",
//         "chemicalName": "ZINC AAS STANDARD SOLUTION 1000 mg/L Zn IN DILUTED HCl traceable to NIST",
//         "purity": "-",
//         "casNo": "traceable to NIST",
//         "formula": "-",
//         unit: '125ml 500ml',
//         "MSDS": "https://www.alphachemika.co/chemical/1329/ZINC_AAS_STANDARD_SOLUTION_1000_mg_L_Zn_IN_DILUTED_HCl_traceable_to_NIST.html",
//         "category": "AAS Standard Solutions",
//         "COA": "https://www.alphachemika.co/co?request?name=ZINC_"
//       }
//   ],
//   "acid-halides": [
//     {
//       articleNo: 'AL0067',
//       chemicalName: 'ACETYL BROMIDE For Synthesis',
//       purity: '98%',
//       casNo: '506-96-7',
//       formula: 'CH3COBr',
//       unit: '250ml 500ml',
//       price: '₹4,450 ₹8,570',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL0071',
//       chemicalName: 'ACETYL CHLORIDE Extra Pure',
//       purity: '98%',
//       casNo: '75-36-5',
//       formula: 'CH3COCl',
//       unit: '500ml 2.5L',
//       price: '₹980 ₹4,430',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL0638',
//       chemicalName: 'BENZOYL CHLORIDE Extra Pure',
//       purity: '98%',
//       casNo: '98-88-4',
//       formula: 'C6H5COCl',
//       unit: '500ml',
//       price: '₹870',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL0639',
//       chemicalName: 'BENZOYL CHLORIDE AR',
//       purity: '99%',
//       casNo: '98-88-4',
//       formula: 'C6H5COCl',
//       unit: '500ml',
//       price: '₹990',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL0976',
//       chemicalName: 'iso-BUTYLCHLOROFORMATE For Synthesis',
//       purity: '98%',
//       casNo: '543-27-1',
//       formula: 'C4H9ClO2',
//       unit: '100ml 500ml',
//       price: '₹2,100 ₹8,400',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL1006',
//       chemicalName: 'iso-BUTYRYL CHLORIDE For Synthesis',
//       purity: '98%',
//       casNo: '79-30-1',
//       formula: 'C4H7ClO',
//       unit: '250ml 1L',
//       price: '₹4,130 ₹12,380',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL1259',
//       chemicalName: 'CHLOROACETYL CHLORIDE For Synthesis',
//       purity: '98%',
//       casNo: '79-04-9',
//       formula: 'C2H3Cl2O',
//       unit: '500ml',
//       price: '₹1,940',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL1341',
//       chemicalName: 'CHLOROSULPHONIC ACID For Synthesis',
//       purity: '97%',
//       casNo: '7790-94-5',
//       formula: 'HSO3Cl',
//       unit: '500ml',
//       price: '₹1,820',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL2065',
//       chemicalName: 'ETHYL CHLOROFORMATE For Synthesis',
//       purity: '98%',
//       casNo: '541-41-3',
//       formula: 'C3H5ClO2',
//       unit: '500ml 2.5L',
//       price: '₹1,560 ₹6,230',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL3043',
//       chemicalName: 'METHYL CHLOROFORMATE For Synthesis',
//       purity: '98%',
//       casNo: '79-22-1',
//       formula: 'C3H5ClO2',
//       unit: '500ml',
//       price: '₹1,650',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL3493',
//       chemicalName: 'PHENYL CHLOROFORMATE For Synthesis',
//       purity: '98%',
//       casNo: '1885-14-9',
//       formula: 'C6H5COOCl',
//       unit: '100ml 500ml 2.5L',
//       price: '₹1,030 ₹4,610 ₹19,620',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL3546',
//       chemicalName: 'PHOSPHORUS OXYCHLORIDE Extra Pure',
//       purity: '98%',
//       casNo: '10025-87-3',
//       formula: 'POCl3',
//       unit: '500ml',
//       price: '₹1,530',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL3552',
//       chemicalName: 'PHOSPHORUS TRICHLORIDE For Synthesis',
//       purity: '99%',
//       casNo: '7719-12-2',
//       formula: 'PCl3',
//       unit: '500ml',
//       price: '₹1,880',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL4538',
//       chemicalName: 'THIONYL CHLORIDE For Synthesis',
//       purity: '99%',
//       casNo: '7719-09-7',
//       formula: 'SOCl2',
//       unit: '500ml',
//       price: '₹1,030',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL5389',
//       chemicalName: 'DECANOYL CHLORIDE For Synthesis',
//       purity: '98%',
//       casNo: '112-13-0',
//       formula: 'C10H19ClO',
//       unit: '100ml',
//       price: 'Inquiry',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL5391',
//       chemicalName: 'BUTYRYL CHLORIDE For Synthesis',
//       purity: '98%',
//       casNo: '141-75-3',
//       formula: 'C4H7ClO',
//       unit: '100ml 500ml',
//       price: 'Inquiry',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL5393',
//       chemicalName: '3-CHLOROPROPIONYL CHLORIDE For Synthesis',
//       purity: '97%',
//       casNo: '625-36-5',
//       formula: 'C6H11ClO2',
//       unit: '500ml',
//       price: 'Inquiry',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL5394',
//       chemicalName: 'DIETHYL CARBAMYL CHLORIDE For Synthesis',
//       purity: '99%',
//       casNo: '88-10-8',
//       formula: 'C5H10ClNO',
//       unit: '100gm',
//       price: 'Inquiry',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL5395',
//       chemicalName: 'ETHYL SUCCINYL CHLORIDE Extra Pure',
//       purity: '98%',
//       casNo: '14794-31-1',
//       formula: 'C6H9ClO2',
//       unit: '100ml',
//       price: 'Inquiry',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL5396',
//       chemicalName: 'Fmoc CHLORIDE For Synthesis',
//       purity: '97.50%',
//       casNo: '28920-43-6',
//       formula: 'C15H11ClO2',
//       unit: '5gm 25gm 100gm',
//       price: 'Inquiry',
//       MSDS: '-',
//       COA: '-',
//       category: 'Acid Halides',
//     },
//     {
//       articleNo: 'AL5399',
//       chemicalName: 'LAUROYL CHLORIDE Extra Pure',
//       purity: '97.50%',
//       casNo: '112-16-3',
//       formula: 'C12H23ClO',
//       unit: '100ml 250ml',
//       price: 'inquiry',
//       MSDS: 'https://www.alphachemika.co/chemical/1350/LAUROYL_CHLORIDE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Acid Halides'
//     },
//     {
//       articleNo: 'AL5400',
//       chemicalName: 'METHYL SUCCINYL CHLORIDE Extra Pure',
//       purity: '97%',
//       casNo: '1490-25-1',
//       formula: 'C6H9ClO2',
//       unit: '100ml 2.5L',
//       price: 'inquiry',
//       MSDS: 'https://www.alphachemika.co/chemical/1351/METHYL_SUCCINYL_CHLORIDE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Acid Halides'
//     },
//     {
//       articleNo: 'AL5401',
//       chemicalName: 'OCTANOYL CHLORIDE Extra Pure',
//       purity: '99%',
//       casNo: '111-64-8',
//       formula: 'C8H15ClO',
//       unit: '100ml 250ml',
//       price: 'inquiry',
//       MSDS: 'https://www.alphachemika.co/chemical/1352/OCTANOYL_CHLORIDE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Acid Halides'
//     },
//     {
//       articleNo: 'AL5403',
//       chemicalName: 'THIONYL CHLORIDE AR',
//       purity: '99.50%',
//       casNo: '7719-09-7',
//       formula: 'SOCl2',
//       unit: '500ml 2.5L',
//       price: 'inquiry',
//       MSDS: 'https://www.alphachemika.co/chemical/1354/THIONYL_CHLORIDE_AR.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Acid Halides'
//     },
//     {
//       articleNo: 'AL5404',
//       chemicalName: '2,2,2-TRICHLOROETHYL CHLOROFORMATE Extra Pure',
//       purity: '97%',
//       casNo: '17341-93-4',
//       formula: 'C5H7Cl3O2',
//       unit: '25gm 100gm',
//       price: 'inquiry',
//       MSDS: 'https://www.alphachemika.co/chemical/1355/2_2_2-TRICHLOROETHYL_CHLOROFORMATE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Acid Halides'
//     }
    
//   ],
//   "amides": [
//     {
//       articleNo: 'AL0010',
//       chemicalName: 'ACETAMIDE For Synthesis',
//       purity: '99%',
//       casNo: '60-35-5',
//       formula: 'C2H5NO',
//       unit: '500gm',
//       price: '₹730',
//       MSDS: 'https://www.alphachemika.co/chemical/1682/ACETAMIDE_For_Synthesis.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL0011',
//       chemicalName: 'ACETAMIDE AR',
//       purity: '98%',
//       casNo: '60-35-5',
//       formula: 'C2H5NO',
//       unit: '500gm',
//       price: '₹980',
//       MSDS: 'https://www.alphachemika.co/chemical/2397/ACETAMIDE_AR.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL0013',
//       chemicalName: 'ACETAMIDINIUM CHLORIDE',
//       purity: '98%',
//       casNo: '124-42-5',
//       formula: 'C6H10NCl',
//       unit: '100gm 250gm',
//       price: '₹4970 ₹11060',
//       MSDS: 'https://www.alphachemika.co/chemical/3869/ACETAMIDINIUM_CHLORIDE.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL0016',
//       chemicalName: 'ACETANILIDE For Synthesis',
//       purity: '98.50%',
//       casNo: '103-84-4',
//       formula: 'C8H9NO',
//       unit: '500gm 5kg',
//       price: '₹980 ₹8430',
//       MSDS: 'https://www.alphachemika.co/chemical/1684/ACETANILIDE_For_Synthesis.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL0017',
//       chemicalName: 'ACETANILIDE AR (N-Phenylacetamide)',
//       purity: '99%',
//       casNo: '103-84-4',
//       formula: 'C8H9NO',
//       unit: '500gm',
//       price: '₹1230',
//       MSDS: 'https://www.alphachemika.co/chemical/2398/ACETANILIDE_AR__NPhenylacetamide_.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL0031',
//       chemicalName: 'ACETOACETANILIDE For Synthesis',
//       purity: '98%',
//       casNo: '102-01-2',
//       formula: 'C8H9NO2',
//       unit: '500gm',
//       price: '₹1040',
//       MSDS: 'https://www.alphachemika.co/chemical/1685/ACETOACETANILIDE_For_Synthesis.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL0599',
//       chemicalName: 'BENZAMIDE For Synthesis',
//       purity: '98%',
//       casNo: '55-21-0',
//       formula: 'C7H7NO',
//       unit: '500gm',
//       price: '₹1310',
//       MSDS: 'https://www.alphachemika.co/chemical/1687/BENZAMIDE_For_Synthesis.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL0600',
//       chemicalName: 'BENZANILIDE For Synthesis',
//       purity: '98%',
//       casNo: '93-98-1',
//       formula: 'C13H12NO',
//       unit: '100gm 500gm',
//       price: '₹660 ₹2360',
//       MSDS: 'https://www.alphachemika.co/chemical/1688/BENZANILIDE_For_Synthesis.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL0754',
//       chemicalName: 'N,O-BIS-(TRIMETHYLSILYL) TRIFLUORO ACETAMIDE',
//       purity: '98%',
//       casNo: '25561-30-2',
//       formula: 'C9H19F3NOSi2',
//       unit: '25ml 100ml',
//       price: '₹4190 ₹13620',
//       MSDS: 'https://www.alphachemika.co/chemical/1689/N_OBIS-_TRIMETHYLSILYL__TRIFLUORO_ACETAMIDE.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL1576',
//       chemicalName: 'CYANOACETAMIDE For Synthesis',
//       purity: '98%',
//       casNo: '107-91-5',
//       formula: 'C3H6N2O',
//       unit: '100gm 500gm',
//       price: '₹730 ₹2830',
//       MSDS: 'https://www.alphachemika.co/chemical/1690/CYANOACETAMIDE_For_Synthesis.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL1736',
//       chemicalName: 'DICYANODIAMIDE Pure',
//       purity: '98%',
//       casNo: '461-58-5',
//       formula: 'C2H4N4',
//       unit: '500gm 500ml',
//       price: '₹1090 ₹2000',
//       MSDS: 'https://www.alphachemika.co/chemical/1691/DICYANODIAMIDE_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL2223',
//       chemicalName: 'FORMAMIDE Extra Pure',
//       purity: '98%',
//       casNo: '75-12-7',
//       formula: 'HCO.NH2',
//       unit: '500ml 2.5L',
//       price: '₹790 ₹2520',
//       MSDS: 'https://www.alphachemika.co/chemical/1680/FORMAMIDE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL2224',
//       chemicalName: 'FORMAMIDE AR/ACS',
//       purity: '99%',
//       casNo: '75-12-7',
//       formula: 'HCO.NH2',
//       unit: '500ml 2.5L',
//       price: '₹930 ₹3280',
//       MSDS: 'https://www.alphachemika.co/chemical/1681/FORMAMIDE_AR_ACS.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL2392',
//       chemicalName: 'HEXAMETHYLPHOSPHORIC ACID TRIAMIDE',
//       purity: '98.50%',
//       casNo: '680-31-9',
//       formula: '[(CH3)2N]PO',
//       unit: '100ml 500ml',
//       price: '₹2930 ₹11720',
//       MSDS: 'https://www.alphachemika.co/chemical/1700/HEXAMETHYLPHOSPHORIC_ACID_TRIAMIDE.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL2592',
//       chemicalName: 'IODOSUCCINIMIDE For Synthesis',
//       purity: '97%',
//       casNo: '516-12-1',
//       formula: 'C4H5INO2',
//       unit: '25gm 100gm',
//       price: '₹3900 ₹12490',
//       MSDS: 'https://www.alphachemika.co/chemical/1692/IODOSUCCINIMIDE_For_Synthesis.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL3406',
//       chemicalName: '4-ACETAMIDOPHENOL Extra Pure',
//       purity: '98%',
//       casNo: '103-90-2',
//       formula: 'C8H9NO2',
//       unit: '100gm 500gm',
//       price: '₹700 ₹2900',
//       MSDS: 'https://www.alphachemika.co/chemical/1683/4-ACETAMIDOPHENOL_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL3557',
//       chemicalName: 'PHTHALAMIDE For Synthesis',
//       purity: '98.50%',
//       casNo: '88-96-0',
//       formula: 'C8H7NO2',
//       unit: '500gm',
//       price: '₹980',
//       MSDS: 'https://www.alphachemika.co/chemical/1693/PHTHALAMIDE_For_Synthesis.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL3947',
//       chemicalName: 'SALICYLAMIDE Extra Pure',
//       purity: '99%',
//       casNo: '65-45-2',
//       formula: 'C7H7NO2',
//       unit: '500gm',
//       price: '₹1170',
//       MSDS: 'https://www.alphachemika.co/chemical/1694/SALICYLAMIDE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL4048',
//       chemicalName: 'SODAMIDE Extra Pure',
//       purity: '95%',
//       casNo: '7782-92-5',
//       formula: 'NaNH2',
//       unit: '100gm 500gm',
//       price: '₹2230 ₹9870',
//       MSDS: 'https://www.alphachemika.co/chemical/1701/SODAMIDE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       articleNo: 'AL4398',
//       chemicalName: 'SULPHANILAMIDE Extra Pure',
//       purity: '99%',
//       casNo: '63-74-1',
//       formula: 'C6H8N2O2S',
//       unit: '100gm 500gm',
//       price: '₹640 ₹2800',
//       MSDS: 'https://www.alphachemika.co/chemical/1695/SULPHANILAMIDE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Amides'
//     },
//     {
//       "articleNo": "AL4399",
//       "chemicalName": "SULPHANILAMIDE AR",
//       "purity": "99%",
//       "casNo": "63-74-1",
//       "formula": "C6H8N2O2S",
//       "unit": "100gm 500gm",
//       "price": "₹670 ₹3230",
//       "MSDS": "https://www.alphachemika.co/chemical/1696/SULPHANILAMIDE_AR.html",
//       "COA": "https://www.alphachemika.co/co/us",
//       "category": "Amides"
//     },
//     {
//       "articleNo": "AL4527",
//       "chemicalName": "THIOACETAMIDE Extra Pure",
//       "purity": "98.50%",
//       "casNo": "62-55-5",
//       "formula": "CH3CS.NH2",
//       "unit": "100gm 500gm",
//       "price": "₹1860 ₹8110",
//       "MSDS": "https://www.alphachemika.co/chemical/1697/THIOACETAMIDE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co/us",
//       "category": "Amides"
//     },
//     {
//       "articleNo": "AL4528",
//       "chemicalName": "THIOACETAMIDE AR",
//       "purity": "99%",
//       "casNo": "62-55-5",
//       "formula": "CH3CSNH2",
//       "unit": "25gm 100gm",
//       "price": "₹620 ₹2240",
//       "MSDS": "https://www.alphachemika.co/chemical/1698/THIOACETAMIDE_AR.html",
//       "COA": "https://www.alphachemika.co/co/us",
//       "category": "Amides"
//     },
//     {
//       "articleNo": "AL4604",
//       "chemicalName": "p-TOLUENE SULPHONAMIDE For Synthesis",
//       "purity": "98%",
//       "casNo": "70-55-3",
//       "formula": "C6H7NO2S",
//       "unit": "500gm",
//       "price": "₹1020",
//       "MSDS": "https://www.alphachemika.co/chemical/1702/p-TOLUENE_SULPHONAMIDE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co/us",
//       "category": "Amides"
//     },
//     {
//       "articleNo": "AL5524",
//       "chemicalName": "FORMAMIDE For UV Spectroscopy",
//       "purity": "99%",
//       "casNo": "75-12-7",
//       "formula": "H.CO.NH2",
//       "unit": "1L 2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/chemical/1686/FORMAMIDE_For_UV_Spectroscopy.html",
//       "COA": "https://www.alphachemika.co/co/us",
//       "category": "Amides"
//     },
//     {
//       "articleNo": "AL5525",
//       "chemicalName": "2-ETHOXYBENZAMIDE Extra Pure",
//       "purity": "97%",
//       "casNo": "938-73-8",
//       "formula": "C8H9NO2",
//       "unit": "25gm 100gm",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/chemical/1699/2-ETHOXYBENZAMIDE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co/us",
//       "category": "Amides"
//     }
    
//   ],
//  "buffer-tablets": [
//   {
//     "articleNo": "AL0918",
//     "chemicalName": "BUFFERTablets pH 6.80",
//     "purity": "(1 TABLET DISSOLVED TO 1000ml SOLUTION)",
//     "casNo": "-",
//     "formula": "-",
//     "unit": "10Tablets 20Tablets",
//     "price": "inquiry",
//     "MSDS": "https://www.alphachemika.co/chemical/2100/BUFFER_TABLETS_PH_6_80__1_TABLET_DISSOLVED_TO_1000_ML_SOLUTION_.html",
//     "COA": "https://www.alphachemika.co/co",
//     "category": "BufferTablets"
//   },
//   {
//     "articleNo": "AL0923A",
//     "chemicalName": "BUFFERTablets pH 9.2",
//     "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
//     "casNo": "-",
//     "formula": "NA",
//     "unit": "10Tablets 20Tablets",
//     "price": "inquiry",
//     "MSDS": "https://www.alphachemika.co/chemical/2097/BUFFER_TABLETS_pH_9_2__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
//     "COA": "https://www.alphachemika.co/co",
//     "category": "BufferTablets"
//   },
//   {
//     "articleNo": "AL0927",
//     "chemicalName": "BUFFERTablets pH 4.0",
//     "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
//     "casNo": "-",
//     "formula": "NA",
//     "unit": "10Tablets",
//     "price": "₹190",
//     "MSDS": "https://www.alphachemika.co/chemical/2095/BUFFER_TABLETS_pH_4_0__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
//     "COA": "https://www.alphachemika.co/co",
//     "category": "BufferTablets"
//   },
//   {
//     "articleNo": "AL0928",
//     "chemicalName": "BUFFERTablets pH 6.0",
//     "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
//     "casNo": "-",
//     "formula": "NA",
//     "unit": "10Tablets",
//     "price": "₹190",
//     "MSDS": "https://www.alphachemika.co/chemical/2098/BUFFER_TABLETS_pH_6_0__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
//     "COA": "https://www.alphachemika.co/co",
//     "category": "BufferTablets"
//   },
//   {
//     "articleNo": "AL0929",
//     "chemicalName": "BUFFERTablets pH 6.8",
//     "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
//     "casNo": "-",
//     "formula": "NA",
//     "unit": "10Tablets 20Tablets",
//     "price": "inquiry",
//     "MSDS": "https://www.alphachemika.co/chemical/2099/BUFFER_TABLETS_pH_6_8__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
//     "COA": "https://www.alphachemika.co/co",
//     "category": "BufferTablets"
//   },
//   {
//     "articleNo": "AL0930",
//     "chemicalName": "BUFFERTablets pH 7.0",
//     "purity": "(10Tablets DISSOLVED TO 100ml SOLUTION)",
//     "casNo": "-",
//     "formula": "NA",
//     "unit": "100Tablets",
//     "price": "inquiry",
//     "MSDS": "https://www.alphachemika.co/chemical/2101/BUFFER_TABLETS_pH_7_0__10_TABLETS_DISSOLVED_TO_100_ML_SOLUTION_.html",
//     "COA": "https://www.alphachemika.co/co",
//     "category": "BufferTablets"
//   },
//   {
//     "articleNo": "AL0933",
//     "chemicalName": "BUFFERTablets pH 7.0",
//     "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
//     "casNo": "-",
//     "formula": "NA",
//     "unit": "10Tablets",
//     "price": "inquiry",
//     "MSDS": "https://www.alphachemika.co/chemical/2096/BUFFER_TABLETS_pH_7_0__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
//     "COA": "https://www.alphachemika.co/co",
//     "category": "BufferTablets"
//   },
//   {
//     "articleNo": "AL5564",
//     "chemicalName": "BUFFERTablets pH 7.00",
//     "purity": "(1 TABLET DISSOLVED TO 1000ml SOLUTION)",
//     "casNo": "-",
//     "formula": "-",
//     "unit": "10Tablets 20Tablets",
//     "price": "inquiry",
//     "MSDS": "https://www.alphachemika.co/chemical/2102/BUFFER_TABLETS_PH_7_00__1_TABLET_DISSOLVED_TO_1000_ML_SOLUTION_.html",
//     "COA": "https://www.alphachemika.co/co",
//     "category": "BufferTablets"
//   },
//   {
//     "articleNo": "AL5565",
//     "chemicalName": "BUFFERTablets pH 7.20",
//     "purity": "(1 TABLET DISSOLVED TO 1000ml SOLUTION)",
//     "casNo": "-",
//     "formula": "-",
//     "unit": "10Tablets 20Tablets",
//     "price": "inquiry",
//     "MSDS": "https://www.alphachemika.co/chemical/2103/BUFFER_TABLETS_PH_7_20__1_TABLET_DISSOLVED_TO_1000_ML_SOLUTION_.html",
//     "COA": "https://www.alphachemika.co/co",
//     "category": "BufferTablets"
//   }
//   ],
//   "amines-&-amine-salts":[
//     {
//       "articleNo": "AL0173",
//       "chemicalName": "ALLYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "107-11-9",
//       "formula": "C3H7N",
//       "unit": "250ml 1L",
//       "price": "₹11250 ₹39360",
//       "MSDS": "https://www.alphachemika.co/chemical/1775/ALLYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0240",
//       "chemicalName": "4-AMINOACETANILIDE For Synthesis",
//       "purity": "99%",
//       "casNo": "122-80-5",
//       "formula": "C8H9NO",
//       "unit": "100gm 500gm",
//       "price": "₹750 ₹2980",
//       "MSDS": "https://www.alphachemika.co/chemical/1721/4-AMINOACETANILIDE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0249",
//       "chemicalName": "4-AMINOANTIPYRINE Extra Pure",
//       "purity": "99%",
//       "casNo": "83-07-8",
//       "formula": "C9H12N4O",
//       "unit": "25gm 100gm",
//       "price": "₹1100 ₹4050",
//       "MSDS": "https://www.alphachemika.co/chemical/1722/4-AMINOANTIPYRINE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0251",
//       "chemicalName": "4-AMINOAZOBENZENE For Synthesis",
//       "purity": "98%",
//       "casNo": "60-09-3",
//       "formula": "C6H6N2",
//       "unit": "25gm 100gm",
//       "price": "₹380 ₹1010",
//       "MSDS": "https://www.alphachemika.co/chemical/1723/4-AMINOAZOBENZENE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0433",
//       "chemicalName": "ANILINE Extra Pure",
//       "purity": "99%",
//       "casNo": "62-53-3",
//       "formula": "C6H5NH2",
//       "unit": "500ml 2.5Litre 5Litre",
//       "price": "₹590 ₹2650 ₹4750",
//       "MSDS": "https://www.alphachemika.co/chemical/1703/ANILINE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0434",
//       "chemicalName": "ANILINE AR",
//       "purity": "99.50%",
//       "casNo": "62-53-3",
//       "formula": "C6H5NH2",
//       "unit": "500ml 2.5L",
//       "price": "₹670 ₹2940",
//       "MSDS": "https://www.alphachemika.co/chemical/1704/ANILINE_AR.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0650",
//       "chemicalName": "BENZYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "100-46-9",
//       "formula": "C7H9N",
//       "unit": "500ml",
//       "price": "₹1320",
//       "MSDS": "https://www.alphachemika.co/chemical/1776/BENZYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0661",
//       "chemicalName": "N-BENZYLMETHYLAMINE For Synthesis",
//       "purity": "97%",
//       "casNo": "103-67-3",
//       "formula": "C8H11N",
//       "unit": "500ml",
//       "price": "₹4660",
//       "MSDS": "https://www.alphachemika.co/chemical/1705/NBENZYLMETHYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0823",
//       "chemicalName": "4-BROMO ANILINE For Synthesis",
//       "purity": "98%",
//       "casNo": "106-40-1",
//       "formula": "C6H6BrN",
//       "unit": "25gm 100gm 500gm",
//       "price": "₹550 ₹1490 ₹5610",
//       "MSDS": "https://www.alphachemika.co/chemical/1725/4-BROMO_ANILINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0861",
//       "chemicalName": "2-BROMOETHYLAMINE HYDROBROMIDE For Synthesis",
//       "purity": "99%",
//       "casNo": "2576-47-8",
//       "formula": "C2H6BrN",
//       "unit": "100gm",
//       "price": "₹2770",
//       "MSDS": "https://www.alphachemika.co/chemical/1726/2-BROMOETHYLAMINE_HYDROBROMIDE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0960",
//       "chemicalName": "n-BUTYLAMINE Extra Pure",
//       "purity": "98%",
//       "casNo": "109-73-9",
//       "formula": "C4H11N",
//       "unit": "500ml",
//       "price": "₹620",
//       "MSDS": "https://www.alphachemika.co/chemical/1706/nBUTYLAMINE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0961",
//       "chemicalName": "n-BUTYLAMINE AR",
//       "purity": "99%",
//       "casNo": "109-73-9",
//       "formula": "C4H11N",
//       "unit": "500ml 2.5L",
//       "price": "₹720 ₹2885",
//       "MSDS": "https://www.alphachemika.co/chemical/1707/nBUTYLAMINE_AR.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0962",
//       "chemicalName": "tert-BUTYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "75-64-9",
//       "formula": "C4H9N",
//       "unit": "500ml",
//       "price": "₹1040",
//       "MSDS": "https://www.alphachemika.co/chemical/1805/tertBUTYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0963",
//       "chemicalName": "tert-BUTYLAMINE AR",
//       "purity": "99.50%",
//       "casNo": "75-64-9",
//       "formula": "C4H9N",
//       "unit": "500ml",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/chemical/1806/tertBUTYLAMINE_AR.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL0978",
//       "chemicalName": "N,N-BUTYLDIETHANOLAMINE For Synthesis",
//       "purity": "98%",
//       "casNo": "102-79-4",
//       "formula": "C8H19NO",
//       "unit": "250ml 1L",
//       "price": "₹2440 ₹8310",
//       "MSDS": "https://www.alphachemika.co/chemical/1777/N_NBUTYLDIETHANOLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1132",
//       "chemicalName": "CARBAZOLE For Synthesis",
//       "purity": "95%",
//       "casNo": "86-74-8",
//       "formula": "C12H9N",
//       "unit": "100gm 500gm",
//       "price": "₹4230 ₹17990",
//       "MSDS": "https://www.alphachemika.co/chemical/1727/CARBAZOLE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1260",
//       "chemicalName": "3-CHLOROANILINE For Synthesis",
//       "purity": "98%",
//       "casNo": "108-42-9",
//       "formula": "C6H6ClN",
//       "unit": "500ml",
//       "price": "₹1480",
//       "MSDS": "https://www.alphachemika.co/chemical/1729/3-CHLOROANILINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1261",
//       "chemicalName": "2-CHLOROANILINE For Synthesis",
//       "purity": "98%",
//       "casNo": "95-51-2",
//       "formula": "C6H6ClN",
//       "unit": "500ml",
//       "price": "₹740",
//       "MSDS": "https://www.alphachemika.co/chemical/1728/2-CHLOROANILINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1312",
//       "chemicalName": "o-CHLORO-p-NITROANILINE For Synthesis",
//       "purity": "98%",
//       "casNo": "121-87-9",
//       "formula": "C6H5ClN2O2",
//       "unit": "250gm",
//       "price": "₹2360",
//       "MSDS": "https://www.alphachemika.co/chemical/1778/oCHLORO-p-NITROANILINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1600",
//       "chemicalName": "CYCLOHEXYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "108-91-8",
//       "formula": "C6H13N",
//       "unit": "500ml 2.5L",
//       "price": "₹670 ₹2960",
//       "MSDS": "https://www.alphachemika.co/chemical/1731/CYCLOHEXYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1609",
//       "chemicalName": "CYCLOPROPYLAMINE For Synthesis",
//       "purity": "98%",
//       "casNo": "765-30-0",
//       "formula": "C3H7N",
//       "unit": "100ml 500ml",
//       "price": "₹4940 ₹17530",
//       "MSDS": "https://www.alphachemika.co/chemical/1780/CYCLOPROPYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1612",
//       "chemicalName": "CYSTEAMINE HYDROCHLORIDE For Synthesis",
//       "purity": "98%",
//       "casNo": "156-57-0",
//       "formula": "C2H8ClNS",
//       "unit": "100gm 500gm",
//       "price": "₹5070 ₹15380",
//       "MSDS": "https://www.alphachemika.co/chemical/1781/CYSTEAMINE_HYDROCHLORIDE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1674",
//       "chemicalName": "DIBENZYLAMINE For Synthesis",
//       "purity": "96%",
//       "casNo": "103-49-1",
//       "formula": "C14H15N",
//       "unit": "250ml 500ml",
//       "price": "₹6230 ₹11850",
//       "MSDS": "https://www.alphachemika.co/chemical/1732/DIBENZYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1684",
//       "chemicalName": "DI-N-BUTYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "111-92-2",
//       "formula": "C8H19N",
//       "unit": "500ml 2.5L",
//       "price": "₹1080 ₹4730",
//       "MSDS": "https://www.alphachemika.co/chemical/1782/DIN-BUTYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1737",
//       "chemicalName": "DICYLOHEXYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "101-83-7",
//       "formula": "C12H23N",
//       "unit": "500ml",
//       "price": "₹2000",
//       "MSDS": "https://www.alphachemika.co/chemical/1733/DICYLOHEXYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1740",
//       "chemicalName": "DIETHANOLAMINE For Synthesis",
//       "purity": "98%",
//       "casNo": "111-42-2",
//       "formula": "[CH2(OH).CH2]NH",
//       "unit": "500ml 2.5L",
//       "price": "₹480 ₹2160",
//       "MSDS": "https://www.alphachemika.co/chemical/1708/DIETHANOLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1600",
//       "chemicalName": "CYCLOHEXYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "108-91-8",
//       "formula": "C6H13N",
//       "unit": "500ml 2.5L",
//       "price": "₹670 ₹2960",
//       "MSDS": "https://www.alphachemika.co/chemical/1731/CYCLOHEXYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co",
//       "category": "Amines & Amine Salts"
//     },
//     {
//       "articleNo": "AL1827",
//       "chemicalName": "N,N-DIMETHYLANILINE AR",
//       "purity": "99.50%",
//       "casNo": "121-69-7",
//       "formula": "C8H11N",
//       "unit": "500ml",
//       "price": "₹730",
//       "MSDS": "https://www.alphachemika.co/chemical/1738/N_NDIMETHYLANILINE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL1845",
//       "chemicalName": "N,N'-DIMETHYLFORMAMIDE DIMETHYLACETAL For Synthesis",
//       "purity": "93%",
//       "casNo": "4637-24-5",
//       "formula": "C5H13NO",
//       "unit": "100ml 500ml",
//       "price": "₹2290 ₹9020",
//       "MSDS": "https://www.alphachemika.co/chemical/1788/N_N_-DIMETHYLFORMAMIDE_DIMETHYLACETAL_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL1890",
//       "chemicalName": "2,4-DINITRO ANILINE For Synthesis",
//       "purity": "99%",
//       "casNo": "97-02-9",
//       "formula": "C6H5N3O4",
//       "unit": "100gm 500gm",
//       "price": "₹2460 ₹8450",
//       "MSDS": "https://www.alphachemika.co/chemical/1739/2_4-DINITRO_ANILINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL1955",
//       "chemicalName": "DODECYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "124-22-1",
//       "formula": "C12H27N",
//       "unit": "100ml 500ml",
//       "price": "₹1990 ₹8330",
//       "MSDS": "https://www.alphachemika.co/chemical/1789/DODECYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2046",
//       "chemicalName": "2-(ETHYLAMINO) ETHANOL For Synthesis",
//       "purity": "97%",
//       "casNo": "110-73-6",
//       "formula": "C4H11NO",
//       "unit": "250ml 1L",
//       "price": "₹730 ₹2370",
//       "MSDS": "https://www.alphachemika.co/chemical/1790/2-_ETHYLAMINO__ETHANOL_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2049",
//       "chemicalName": "N-ETHYLANILINE For Synthesis",
//       "purity": "98%",
//       "casNo": "103-69-5",
//       "formula": "C8H11N",
//       "unit": "500ml 2.5L",
//       "price": "₹860 ₹3680",
//       "MSDS": "https://www.alphachemika.co/chemical/1740/NETHYLANILINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2071",
//       "chemicalName": "ETHYLENEDIAMINE For Synthesis",
//       "purity": "98%",
//       "casNo": "107-15-3",
//       "formula": "C2H8N2",
//       "unit": "500ml 2.5L",
//       "price": "₹860 ₹3400",
//       "MSDS": "https://www.alphachemika.co/chemical/1715/ETHYLENEDIAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2072",
//       "chemicalName": "ETHYLENEDIAMINE DIHYDROCHLORIDE For Synthesis",
//       "purity": "99%",
//       "casNo": "333-18-6",
//       "formula": "C2H8N2·HCl",
//       "unit": "100gm 500gm",
//       "price": "₹520 ₹2240",
//       "MSDS": "https://www.alphachemika.co/chemical/1741/ETHYLENEDIAMINE_DIHYDROCHLORIDE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2114",
//       "chemicalName": "N-ETHYLMORPHOLINE For Synthesis",
//       "purity": "97%",
//       "casNo": "100-74-3",
//       "formula": "C6H13NO",
//       "unit": "250ml 1L",
//       "price": "₹1810 ₹5790",
//       "MSDS": "https://www.alphachemika.co/chemical/1742/NETHYLMORPHOLINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2413",
//       "chemicalName": "HISTAMINE DIHYDROCHLORIDE For Biochemistry",
//       "purity": "98.50%",
//       "casNo": "56-92-8",
//       "formula": "C5H9N3·HCl",
//       "unit": "1gm 5gm 25gm",
//       "price": "₹2440 ₹10580 ₹19730",
//       "MSDS": "https://www.alphachemika.co/chemical/1743/HISTAMINE_DIHYDROCHLORIDE_For_Biochemistry.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2426",
//       "chemicalName": "HYDRAZINE HYDRATE Extra Pure",
//       "purity": "60%",
//       "casNo": "10217-52-4",
//       "formula": "N2H4·H2O",
//       "unit": "2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/chemical/1794/HYDRAZINE_HYDRATE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2427",
//       "chemicalName": "HYDRAZINE HYDRATE Extra Pure",
//       "purity": "80%",
//       "casNo": "10217-52-4",
//       "formula": "N2H4·H2O",
//       "unit": "500ml 2.5L",
//       "price": "₹1400 ₹5950",
//       "MSDS": "https://www.alphachemika.co/chemical/1716/HYDRAZINE_HYDRATE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2427",
//       "chemicalName": "HYDRAZINE HYDRATE For Synthesis",
//       "purity": "99%",
//       "casNo": "7803-57-8",
//       "formula": "N2H4·H2O",
//       "unit": "500ml 2.5L",
//       "price": "₹1400 ₹5950",
//       "MSDS": "https://www.alphachemika.co/chemical/1744/HYDRAZINE_HYDRATE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2428",
//       "chemicalName": "HYDRAZINE HYDRATE AR",
//       "purity": "80%",
//       "casNo": "10217-52-4",
//       "formula": "N2H4·H2O",
//       "unit": "500ml 2.5L",
//       "price": "₹1580 ₹6700",
//       "MSDS": "https://www.alphachemika.co/chemical/1717/HYDRAZINE_HYDRATE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2431",
//       "chemicalName": "HYDRAZINE HYDRATE 24-26% SOLUTION IN WATER",
//       "purity": "-",
//       "casNo": "10217-52-4",
//       "formula": "N2H4·H2O",
//       "unit": "500ml 2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/chemical/1793/HYDRAZINE_HYDRATE_24-26__SOLUTION_IN_WATER.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2502",
//       "chemicalName": "HYDROXYLAMINE HYDROCHLORIDE For Synthesis",
//       "purity": "98%",
//       "casNo": "5470-11-1",
//       "formula": "H3ClNO",
//       "unit": "100gm 500gm 5kg",
//       "price": "₹470 ₹2030 ₹18120",
//       "MSDS": "https://www.alphachemika.co/chemical/1747/HYDROXYLAMINE_HYDROCHLORIDE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2503",
//       "chemicalName": "HYDROXYLAMINE HYDROCHLORIDE AR/ACS",
//       "purity": "99%",
//       "casNo": "5470-11-1",
//       "formula": "H3ClNO",
//       "unit": "100gm 500gm",
//       "price": "₹770 ₹2940",
//       "MSDS": "https://www.alphachemika.co/chemical/1748/HYDROXYLAMINE_HYDROCHLORIDE_AR_ACS.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2504",
//       "chemicalName": "HYDROXYLAMINE HYDROCHLORIDE ACS, ISO (Mercury Free)",
//       "purity": "99%",
//       "casNo": "5470-11-1",
//       "formula": "H3ClNO",
//       "unit": "100gm 500gm",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/chemical/1749/HYDROXYLAMINE_HYDROCHLORIDE_ACS__ISO__Mercury_Free_.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2505",
//       "chemicalName": "HYDROXYLAMINE SULPHATE Extra Pure",
//       "purity": "97%",
//       "casNo": "10039-54-0",
//       "formula": "H4ClNO3S",
//       "unit": "100gm 500gm 5kg",
//       "price": "₹210 ₹870 ₹7580",
//       "MSDS": "https://www.alphachemika.co/chemical/1750/HYDROXYLAMINE_SULPHATE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2506",
//       "chemicalName": "HYDROXYLAMINE SULPHATE AR",
//       "purity": "99%",
//       "casNo": "10039-54-0",
//       "formula": "H4ClNO3S",
//       "unit": "100gm 500gm 5kg",
//       "price": "₹240 ₹940 ₹8230",
//       "MSDS": "https://www.alphachemika.co/chemical/1751/HYDROXYLAMINE_SULPHATE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL2506",
//       "chemicalName": "HYDROXYLAMINE SULPHATE AR",
//       "purity": "99%",
//       "casNo": "10039-54-0",
//       "formula": "H4ClNO3S",
//       "unit": "100gm 500gm 5kg",
//       "price": "₹240 ₹940 ₹8230",
//       "MSDS": "https://www.alphachemika.co/chemical/1751/HYDROXYLAMINE_SULPHATE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3015",
//       "chemicalName": "DIMETHYLAMINE SOLUTION For Synthesis",
//       "purity": "40%",
//       "casNo": "124-40-3",
//       "formula": "C2H7N",
//       "unit": "500ml 2.5L 5L",
//       "price": "₹260 ₹990 ₹1880",
//       "MSDS": "https://www.alphachemika.co/chemical/1713/DIMETHYLAMINE_SOLUTION_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3016",
//       "chemicalName": "METHYLAMINE For Synthesis",
//       "purity": "40%",
//       "casNo": "74-89-5",
//       "formula": "CH3NH2",
//       "unit": "500ml 2.5L",
//       "price": "₹240 ₹1030",
//       "MSDS": "https://www.alphachemika.co/chemical/1795/METHYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3017",
//       "chemicalName": "TRIMETHYLAMINE For Synthesis",
//       "purity": "30%",
//       "casNo": "75-50-3",
//       "formula": "C3H9N",
//       "unit": "500ml",
//       "price": "₹240",
//       "MSDS": "https://www.alphachemika.co/chemical/1810/TRIMETHYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3020",
//       "chemicalName": "2-(METHYLAMINO) ETHANOL For Synthesis",
//       "purity": "98%",
//       "casNo": "109-83-1",
//       "formula": "C3H9NO",
//       "unit": "500ml 2.5L",
//       "price": "₹730 ₹2890",
//       "MSDS": "https://www.alphachemika.co/chemical/1796/2-_METHYLAMINO__ETHANOL_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3021",
//       "chemicalName": "N-METHYLANILINE For Synthesis",
//       "purity": "98%",
//       "casNo": "100-61-8",
//       "formula": "C7H9N",
//       "unit": "500ml 2.5L",
//       "price": "₹790 ₹3480",
//       "MSDS": "https://www.alphachemika.co/chemical/1753/NMETHYLANILINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3028",
//       "chemicalName": "4-METHYL BENZYL AMINE 97% For Synthesis",
//       "purity": "97%",
//       "casNo": "104-84-7",
//       "formula": "C8H11N",
//       "unit": "5gm 25gm",
//       "price": "₹2220 ₹8270",
//       "MSDS": "https://www.alphachemika.co/chemical/1754/4-METHYL_BENZYL_AMINE_97__For_Syntthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3080",
//       "chemicalName": "N-METHYL MORPHOLINE Extra Pure",
//       "purity": "98%",
//       "casNo": "109-02-4",
//       "formula": "C5H11NO",
//       "unit": "500ml 2.5L",
//       "price": "₹1900 ₹8410",
//       "MSDS": "https://www.alphachemika.co/chemical/1755/NMETHYL_MORPHOLINE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3149",
//       "chemicalName": "MORPHOLINE Extra Pure",
//       "purity": "98.50%",
//       "casNo": "110-91-8",
//       "formula": "C4H9NO",
//       "unit": "500ml 2.5L",
//       "price": "₹740 ₹3480",
//       "MSDS": "https://www.alphachemika.co/chemical/1718/MORPHOLINE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3181",
//       "chemicalName": "1-NAPHTHYLAMINE Extra Pure",
//       "purity": "98%",
//       "casNo": "134-32-7",
//       "formula": "C10H9N",
//       "unit": "500gm",
//       "price": "₹1350",
//       "MSDS": "https://www.alphachemika.co/chemical/1756/1-NAPHTHYLAMINE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3182",
//       "chemicalName": "1-NAPHTHYLAMINE AR",
//       "purity": "99%",
//       "casNo": "134-32-7",
//       "formula": "C10H9N",
//       "unit": "100gm 500gm",
//       "price": "₹1450 ₹5960",
//       "MSDS": "https://www.alphachemika.co/chemical/1757/1-NAPHTHYLAMINE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3184",
//       "chemicalName": "1-NAPHTHYLAMINE HYDROCHLORIDE For Synthesis",
//       "purity": "98%",
//       "casNo": "552-46-5",
//       "formula": "C10H9ClN",
//       "unit": "25gm 100gm",
//       "price": "₹980 ₹2930",
//       "MSDS": "https://www.alphachemika.co/chemical/1758/1-NAPHTHYLAMINE_HYDROCHLORIDE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3185",
//       "chemicalName": "N-1-NAPHTHYL ETHYLENE DIAMINE DIHYDROCHLORIDE AR",
//       "purity": "99%",
//       "casNo": "1465-25-4",
//       "formula": "C10H14ClN",
//       "unit": "5gm 10gm 25gm",
//       "price": "₹790 ₹1340 ₹2730",
//       "MSDS": "https://www.alphachemika.co/chemical/1759/N1-NAPHTHYL_ETHYLENE_DIAMINE_DIHYDROCHLORIDE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3270",
//       "chemicalName": "3-NITROANILINE Pure",
//       "purity": "99%",
//       "casNo": "99-09-2",
//       "formula": "C6H6N2O2",
//       "unit": "250gm 500gm",
//       "price": "₹790 ₹1490",
//       "MSDS": "https://www.alphachemika.co/chemical/1761/3-NITROANILINE_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3271",
//       "chemicalName": "2-NITROANILINE Pure",
//       "purity": "98%",
//       "casNo": "88-74-4",
//       "formula": "C6H6N2O2",
//       "unit": "250gm 500gm",
//       "price": "₹830 ₹1400",
//       "MSDS": "https://www.alphachemika.co/chemical/1760/2-NITROANILINE_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3272",
//       "chemicalName": "4-NITROANILINE Pure",
//       "purity": "98.50%",
//       "casNo": "100-01-6",
//       "formula": "C6H6N2O2",
//       "unit": "250gm 500gm",
//       "price": "₹590 ₹1120",
//       "MSDS": "https://www.alphachemika.co/chemical/1762/4-NITROANILINE_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3273",
//       "chemicalName": "4-NITROANILINE AR",
//       "purity": "99%",
//       "casNo": "100-01-6",
//       "formula": "C6H6N2O2",
//       "unit": "25gm 100gm 500gm",
//       "price": "₹190 ₹670 ₹3020",
//       "MSDS": "https://www.alphachemika.co/chemical/1763/4-NITROANILINE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3338",
//       "chemicalName": "n-OCTYLAMINE Extra Pure",
//       "purity": "99%",
//       "casNo": "111-86-4",
//       "formula": "C8H17N",
//       "unit": "250ml 500ml",
//       "price": "₹4400 ₹8360",
//       "MSDS": "https://www.alphachemika.co/chemical/1797/nOCTYLAMINE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3461",
//       "chemicalName": "1,10-PHENANTHROLINE HYDROCHLORIDE MONOHYDRATE AR",
//       "purity": "99.50%",
//       "casNo": "18851-33-7",
//       "formula": "C12H8ClN·H2O",
//       "unit": "5gm 25gm",
//       "price": "₹750 ₹3230",
//       "MSDS": "https://www.alphachemika.co/chemical/1764/1_10-PHENANTHROLINE_HYDROCHLORIDE_MONOHYDRATE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3494",
//       "chemicalName": "m-PHENYLENEDIAMINE For Synthesis",
//       "purity": "98%",
//       "casNo": "108-45-2",
//       "formula": "C6H7(NH2)2",
//       "unit": "250gm 500gm",
//       "price": "₹2190 ₹4170",
//       "MSDS": "https://www.alphachemika.co/chemical/1766/mPHENYLENEDIAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3495",
//       "chemicalName": "m-PHENYLENEDIAMINE DIHYDROCHLORIDE Extra Pure",
//       "purity": "99%",
//       "casNo": "541-69-5",
//       "formula": "C6H8N2·HCl",
//       "unit": "25gm 100gm",
//       "price": "₹9140 ₹32010",
//       "MSDS": "https://www.alphachemika.co/chemical/1799/mPHENYLENEDIAMINE_DIHYDROCHLORIDE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3495",
//       "chemicalName": "m-PHENYLENEDIAMINE DIHYDROCHLORIDE Extra Pure",
//       "purity": "99%",
//       "casNo": "541-69-5",
//       "formula": "C6H8N2·HCl",
//       "unit": "25gm 100gm",
//       "price": "₹9140, ₹32010",
//       "MSDS": "https://www.alphachemika.co/chemical/1799/mPHENYLENEDIAMINE_DIHYDROCHLORIDE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3496",
//       "chemicalName": "o-PHENYLENEDIAMINE For Synthesis",
//       "purity": "98%",
//       "casNo": "95-54-5",
//       "formula": "C6H4(NH2)2",
//       "unit": "100gm 250gm 500gm",
//       "price": "₹410, ₹890, ₹1610",
//       "MSDS": "https://www.alphachemika.co/chemical/1765/oPHENYLENEDIAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3498",
//       "chemicalName": "p-PHENYLENEDIAMINE Extra Pure",
//       "purity": "97%",
//       "casNo": "106-50-3",
//       "formula": "C6H4(NH2)2",
//       "unit": "250gm 500gm",
//       "price": "₹900, ₹1720",
//       "MSDS": "https://www.alphachemika.co/chemical/1767/pPHENYLENEDIAMINE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3499",
//       "chemicalName": "p-PHENYLENEDIAMINE DIHYDROCHLORIDE For Synthesis",
//       "purity": "99%",
//       "casNo": "624-18-0",
//       "formula": "C6H4(NH2)2·HCl",
//       "unit": "100gm 250gm",
//       "price": "₹3820, ₹8600",
//       "MSDS": "https://www.alphachemika.co/chemical/1800/pPHENYLENEDIAMINE_DIHYDROCHLORIDE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3580",
//       "chemicalName": "PIPERAZINE ANHYDROUS For Synthesis",
//       "purity": "98%",
//       "casNo": "110-85-0",
//       "formula": "C4H10N2",
//       "unit": "250gm 500gm",
//       "price": "₹980, ₹1850",
//       "MSDS": "https://www.alphachemika.co/chemical/1768/PIPERAZINE_ANHYDROUS_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3836",
//       "chemicalName": "iso-PROPYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "75-31-0",
//       "formula": "C3H9N",
//       "unit": "500ml 2.5L",
//       "price": "₹790, ₹3480",
//       "MSDS": "https://www.alphachemika.co/chemical/1752/isoPROPYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL3837",
//       "chemicalName": "n-PROPYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "107-10-8",
//       "formula": "C3H9N",
//       "unit": "500ml 2.5L",
//       "price": "₹760, ₹3370",
//       "MSDS": "https://www.alphachemika.co/chemical/1769/nPROPYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4508",
//       "chemicalName": "3,3'5,5'-TETRAMETHYLBENZIDINE AR",
//       "purity": "96%",
//       "casNo": "54827-17-7",
//       "formula": "C14H18N2",
//       "unit": "1gm 5gm",
//       "price": "₹2660, ₹11780",
//       "MSDS": "https://www.alphachemika.co/chemical/1802/3_3_5_5_-TETRAMETHYLBENZIDINE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4512",
//       "chemicalName": "N,N,N',N'-TETRAMETHYL-p-PHENYLENEDIAMINE DIHYDROCHLORIDE Extra Pure",
//       "purity": "99%",
//       "casNo": "637-01-4",
//       "formula": "C10H16Cl2N2",
//       "unit": "5gm 25gm",
//       "price": "₹1730, ₹7470",
//       "MSDS": "https://www.alphachemika.co/chemical/1770/N_N_N__N_-TETRAMETHYL-pPHENYLENEDIAMINE_DIHYDROCHLORIDE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4589",
//       "chemicalName": "o-TOLIDINE DIHYDROCHLORIDE HYDRATE AR",
//       "purity": "95%",
//       "casNo": "612-82-8",
//       "formula": "C7H10N2·HCl·xH2O",
//       "unit": "25gm 100gm 500gm",
//       "price": "₹930, ₹3420, ₹13680",
//       "MSDS": "https://www.alphachemika.co/chemical/1771/oTOLIDINE_DIHYDROCHLORIDE_HYDRATE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4616",
//       "chemicalName": "o-TOLUIDINE For Synthesis",
//       "purity": "99%",
//       "casNo": "95-53-4",
//       "formula": "C7H9N",
//       "unit": "500ml",
//       "price": "₹690",
//       "MSDS": "https://www.alphachemika.co/chemical/1772/oTOLUIDINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4619",
//       "chemicalName": "p-TOLUIDINE AR",
//       "purity": "99%",
//       "casNo": "106-49-0",
//       "formula": "C7H9N",
//       "unit": "100gm 500gm",
//       "price": "₹1130, ₹4820",
//       "MSDS": "https://www.alphachemika.co/chemical/1807/pTOLUIDINE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4620",
//       "chemicalName": "p-TOLUIDINIE HYDROCHLORIDE For Synthesis",
//       "purity": "99%",
//       "casNo": "540-23-8",
//       "formula": "C7H9ClN",
//       "unit": "100gm 250gm",
//       "price": "₹1560, ₹3510",
//       "MSDS": "https://www.alphachemika.co/chemical/1811/pTOLUIDINIE_HYDROCHLORIDE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4630",
//       "chemicalName": "TRIBUTYLAMINE For Synthesis",
//       "purity": "99%",
//       "casNo": "102-82-9",
//       "formula": "C4H11N",
//       "unit": "500ml 2.5L",
//       "price": "₹1120, ₹4470",
//       "MSDS": "https://www.alphachemika.co/chemical/1812/TRIBUTYLAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4644",
//       "chemicalName": "TRIETHANOLAMINE Extra Pure",
//       "purity": "98%",
//       "casNo": "102-71-6",
//       "formula": "C6H15NO3",
//       "unit": "500ml 2.5L",
//       "price": "₹610, ₹2680",
//       "MSDS": "https://www.alphachemika.co/chemical/1803/TRIETHANOLAMINE_Extra_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4645",
//       "chemicalName": "TRIETHANOLAMINE AR",
//       "purity": "99%",
//       "casNo": "102-71-6",
//       "formula": "C6H15NO3",
//       "unit": "250ml 500ml",
//       "price": "₹350, ₹670",
//       "MSDS": "https://www.alphachemika.co/chemical/1808/TRIETHANOLAMINE_AR.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4647",
//       "chemicalName": "TRIETHANOLAMINELAURYL SULPHATE",
//       "purity": "-",
//       "casNo": "139-96-8",
//       "formula": "(HOC6H4)2NOS(O)OC6H4",
//       "unit": "500gm",
//       "price": "₹530",
//       "MSDS": "https://www.alphachemika.co/chemical/1809/TRIETHANOLAMINE_LAURYL_SULPHATE.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4657",
//       "chemicalName": "TRIETHYLENE TETRAMINE For Synthesis",
//       "purity": "-",
//       "casNo": "112-24-3",
//       "formula": "C6H18N4",
//       "unit": "500ml",
//       "price": "₹980",
//       "MSDS": "https://www.alphachemika.co/chemical/1804/TRIETHYLENE_TETRAMINE_For_Synthesis.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4810",
//       "chemicalName": "2,4 -XYLIDINE Pure",
//       "purity": "98%",
//       "casNo": "95-68-1",
//       "formula": "C8H11N",
//       "unit": "250ml 2.5L",
//       "price": "₹1160, ₹9980",
//       "MSDS": "https://www.alphachemika.co/chemical/1773/2_4_-XYLIDINE_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL4811",
//       "chemicalName": "2,6 XYLIDINE Pure",
//       "purity": "98%",
//       "casNo": "87-62-7",
//       "formula": "C8H11N",
//       "unit": "250ml 2.5L",
//       "price": "₹1500, ₹11970",
//       "MSDS": "https://www.alphachemika.co/chemical/1774/2_6_XYLIDINE_Pure.html",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5526",
//       "chemicalName": "DIETHYLAMINE For HPLC",
//       "purity": "99.50%",
//       "casNo": "109-89-7",
//       "formula": "(C2H5)2NH",
//       "unit": "1L 2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5527",
//       "chemicalName": "AMYLAMINE For Synthesis",
//       "purity": "98.50%",
//       "casNo": "110-58-7",
//       "formula": "C5H13N",
//       "unit": "100ml 500ml 2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5528",
//       "chemicalName": "N-BENZYLETHANOLAMINE For Synthesis",
//       "purity": "95%",
//       "casNo": "104-63-2",
//       "formula": "C6H5CH2NHCH2CH2OH",
//       "unit": "100ml 2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5529",
//       "chemicalName": "4,4'-AZODIANILINE Extra Pure",
//       "purity": "94%",
//       "casNo": "538-41-0",
//       "formula": "C12H12N4",
//       "unit": "5gm 25gm",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5530",
//       "chemicalName": "N-(2-HYDROXYETHYL)MORPHOLIN For synthesis",
//       "purity": "99%",
//       "casNo": "622-40-2",
//       "formula": "C6H13NO2",
//       "unit": "250ml",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5531",
//       "chemicalName": "N-(2-HYDROXYETHYL) PHTHALIMIDE For synthesis",
//       "purity": "99%",
//       "casNo": "3891-07-4",
//       "formula": "C8H9NO2",
//       "unit": "100gm 500gm",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5532",
//       "chemicalName": "3-DIMETHYLAMINO PROPYL CHLORIDE HYDROCHLORIDE Extra Pure",
//       "purity": "98%",
//       "casNo": "5407-04-5",
//       "formula": "C6H14ClN·HCl",
//       "unit": "inquiry",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5533",
//       "chemicalName": "n-HEXYLAMINE Extra Pure",
//       "purity": "99%",
//       "casNo": "111-26-2",
//       "formula": "C6H15N",
//       "unit": "250ml 2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5534",
//       "chemicalName": "n-HEXYLAMINE For HPLC",
//       "purity": "99.50%",
//       "casNo": "111-26-2",
//       "formula": "C6H15N",
//       "unit": "100ml 2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5535",
//       "chemicalName": "PENTAETHYLENEHEXAMINE For Synthesis",
//       "purity": "70%",
//       "casNo": "4067-16-7",
//       "formula": "C6H15N3",
//       "unit": "250ml 1L 2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5536",
//       "chemicalName": "β-PHENYLETHYLAMINE Extra Pure",
//       "purity": "99%",
//       "casNo": "64-04-0",
//       "formula": "C8H11N",
//       "unit": "500ml 2.5L",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },
//     {
//       "articleNo": "AL5537",
//       "chemicalName": "TRIMETHYLAMINE HYDROCHLORIDE For Synthesis",
//       "purity": "98%",
//       "casNo": "593-81-7",
//       "formula": "C3H9ClN",
//       "unit": "500gm",
//       "price": "inquiry",
//       "MSDS": "https://www.alphachemika.co/co",
//       "COA": "https://www.alphachemika.co/co"
//     },

//   ],
//   "carbohydrates": [
//     {
//       articleNo: 'AL0002',
//       chemicalName: 'ACACIA Extra Pure',
//       purity: '-',
//       casNo: '9000-01-5',
//       formula: '-',
//       unit: '500gm 5Kg',
//       price: '₹490 ₹4690',
//       MSDS: 'https://www.alphachemika.co/chemical/2107/ACACIA_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL0003',
//       chemicalName: 'ACACIA (Enzyme Free) AR',
//       purity: '-',
//       casNo: '9000-01-5',
//       formula: '-',
//       unit: '500gm',
//       price: '₹870',
//       MSDS: 'https://www.alphachemika.co/chemical/2108/ACACIA__Enzyme_Free__AR.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL0129',
//       chemicalName: 'ADONITOL For Biochemistry',
//       purity: '99%',
//       casNo: '488-81-3',
//       formula: 'C6H12O6',
//       unit: '5gm 25gm',
//       price: '₹2060 ₹8670',
//       MSDS: 'https://www.alphachemika.co/chemical/2109/ADONITOL_For_Biochemistry.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL0135',
//       chemicalName: 'AESCULIN Extra Pure',
//       purity: '98%',
//       casNo: '66778-17-4',
//       formula: 'C15H10O9',
//       unit: '5gm 25gm',
//       price: '₹4940 ₹23970',
//       MSDS: 'https://www.alphachemika.co/chemical/2110/AESCULIN_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL0484',
//       chemicalName: 'D(-)-ARABINOSE AR',
//       purity: '99%',
//       casNo: '10323-20-3',
//       formula: 'C5H10O5',
//       unit: '5gm 25gm 100gm',
//       price: '₹740 ₹3140 ₹11300',
//       MSDS: 'https://www.alphachemika.co/chemical/2111/D_-_ARABINOSE_AR.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL0485',
//       chemicalName: 'L(+)-ARABINOSE AR',
//       purity: '99%',
//       casNo: '5328-37-0',
//       formula: 'C5H10O5',
//       unit: '25gm 100gm',
//       price: '₹1170 ₹4210',
//       MSDS: 'https://www.alphachemika.co/chemical/2112/L___ARABINOSE_AR.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1087',
//       chemicalName: 'CALCIUM LACTATE HYDRATE Extra Pure',
//       purity: '98%',
//       casNo: '5743-47-5',
//       formula: 'C6H10CaO6·H2O',
//       unit: '250gm 1Kg',
//       price: 'inquiry',
//       MSDS: 'https://www.alphachemika.co/chemical/2114/CALCIUM_LACTATE_HYDRATE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1150',
//       chemicalName: 'CARBOXYMETHYL CELLULOSE SODIUM SALT HIGH VISCOSITY Extra Pure',
//       purity: '-',
//       casNo: '9004-32-4',
//       formula: '-',
//       unit: '500gm 5Kg 25Kg',
//       price: '₹990 ₹8460 ₹38070',
//       MSDS: 'https://www.alphachemika.co/chemical/2115/CARBOXYMETHYL_CELLULOSE_SODIUM_SALT_HIGH_VISCOSITY_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1151',
//       chemicalName: 'CARBOXYMETHYL CELLULOSE SODIUM SALT MEDIUM VISCOSITY For Molecular Biology',
//       purity: '-',
//       casNo: '9004-32-4',
//       formula: '-',
//       unit: '100gm',
//       price: '₹8620',
//       MSDS: 'https://www.alphachemika.co/chemical/2175/CARBOXYMETHYL_CELLULOSE_SODIUM_SALT_MEDIUM_VISCOSITY_For_Molecular_Biology.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1152',
//       chemicalName: 'CARBOXYMETHYL CELLULOSE SODIUM SALT MEDIUM VISCOSITY Extra Pure',
//       purity: '-',
//       casNo: '9004-32-4',
//       formula: '-',
//       unit: '500gm 25Kg',
//       price: '₹1010 ₹40550',
//       MSDS: 'https://www.alphachemika.co/chemical/2116/CARBOXYMETHYL_CELLULOSE_SODIUM_SALT_MEDIUM_VISCOSITY_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1181',
//       chemicalName: 'CELLOBIOSE For Biochemistry',
//       purity: '98%',
//       casNo: '528-50-7',
//       formula: 'C12H22O11',
//       unit: '5gm 25gm',
//       price: '₹950 ₹4270',
//       MSDS: 'https://www.alphachemika.co/chemical/2117/CELLOBIOSE_For_Biochemistry.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1641',
//       chemicalName: 'DEXTRINE WHITE',
//       purity: '-',
//       casNo: '9004-53-9',
//       formula: '(C6H10O5)n·xH2O',
//       unit: '500gm 5Kg',
//       price: '₹240 ₹2110',
//       MSDS: 'https://www.alphachemika.co/chemical/2118/DEXTRINE_WHITE.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1642',
//       chemicalName: 'DEXTRINE YELLOW',
//       purity: '-',
//       casNo: '9004-53-9',
//       formula: '(C6H10O5)n·xH2O',
//       unit: '500gm 5Kg',
//       price: '₹230 ₹2110',
//       MSDS: 'https://www.alphachemika.co/chemical/2119/DEXTRINE_YELLOW.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1643',
//       chemicalName: 'DEXTROSE ANHYDROUS Purified',
//       purity: '-',
//       casNo: '50-99-7',
//       formula: 'C6H12O6',
//       unit: '500gm 5Kg 25Kg',
//       price: '₹290 ₹2120 ₹9560',
//       MSDS: 'https://www.alphachemika.co/chemical/2122/DEXTROSE_ANHYDROUS_Puried.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1644',
//       chemicalName: 'DEXTROSE ANHYDROUS AR',
//       purity: '-',
//       casNo: '50-99-7',
//       formula: 'C6H12O6',
//       unit: '500gm 5Kg 25Kg',
//       price: '₹320 ₹2520 ₹11320',
//       MSDS: 'https://www.alphachemika.co/chemical/2123/DEXTROSE_ANHYDROUS_AR.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1646',
//       chemicalName: 'DEXTROSE MONOHYDRATE Extra Pure',
//       purity: '-',
//       casNo: '14431-43-7',
//       formula: 'C6H12O6·H2O',
//       unit: '500gm 5Kg 50Kg',
//       price: '₹200 ₹1670 ₹14640',
//       MSDS: 'https://www.alphachemika.co/chemical/2120/DEXTROSE_MONOHYDRATE_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1647',
//       chemicalName: 'DEXTROSE MONOHYDRATE For Microbiology',
//       purity: '-',
//       casNo: '14431-43-7',
//       formula: 'C6H12O6·H2O',
//       unit: '500gm 5Kg',
//       price: '₹240 ₹1910',
//       MSDS: 'https://www.alphachemika.co/chemical/2121/DEXTROSE_MONOHYDRATE_For_microbiology.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL1945',
//       chemicalName: 'DITHIOTHREITOL Extra Pure',
//       purity: '99%',
//       casNo: '3483-12-3',
//       formula: 'C4H10O2S2',
//       unit: '1gm 5gm 25gm',
//       price: '₹650 ₹2620 ₹10860',
//       MSDS: 'https://www.alphachemika.co/chemical/2104/DITHIOTHREITOL_Extra_Pure.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Other'
//     },
//     {
//       articleNo: 'AL1968',
//       chemicalName: 'DULCITOL For Microbiology',
//       purity: '-',
//       casNo: '608-66-2',
//       formula: 'C6H12O6',
//       unit: '25gm',
//       price: '₹1170',
//       MSDS: 'https://www.alphachemika.co/chemical/2124/DULCITOL_For_Microbiology.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       articleNo: 'AL2062',
//       chemicalName: 'ETHYL CELLULOSE Low Viscosity',
//       purity: '-',
//       casNo: '9004-57-3',
//       formula: '-',
//       unit: '250gm 500gm',
//       price: '₹2460 ₹4600',
//       MSDS: 'https://www.alphachemika.co/chemical/2126/ETHYL_CELLULOSE_Low_Viscosity.html',
//       COA: 'https://www.alphachemika.co/co/us',
//       category: 'Carbohydrates'
//     },
//     {
//       "articleNo": "AL2063",
//       "chemicalName": "ETHYL CELLULOSE High Viscosity",
//       "purity": "-",
//       "casNo": "9004-57-3",
//       "formula": "-",
//       "unit": "250 gm 500 gm",
//       "price": "₹ 2390 ₹ 4390",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2234",
//       "chemicalName": "D-FRUCTOSE Extra Pure",
//       "purity": "-",
//       "casNo": "57-48-7",
//       "formula": "C6H12O6",
//       "unit": "100 gm 500 gm 5 Kg",
//       "price": "₹ 180 ₹ 610 ₹ 5320",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2235",
//       "chemicalName": "D-FRUCTOSE AR",
//       "purity": "99%",
//       "casNo": "57-48-7",
//       "formula": "C6H12O6",
//       "unit": "100 gm 500 gm 5 Kg",
//       "price": "₹ 250 ₹ 900 ₹ 7860",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2255",
//       "chemicalName": "D-GALACTOSE Extra Pure",
//       "purity": "-",
//       "casNo": "59-23-4",
//       "formula": "C6H12O6",
//       "unit": "25 gm 100 gm 500 gm",
//       "price": "₹ 740 ₹ 2640 ₹ 11110",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2288",
//       "chemicalName": "GLUCOSE-1-PHOSPHATE DIPOTASSIUM SALT For Biochemistry",
//       "purity": "99%",
//       "casNo": "5996-14-5",
//       "formula": "C6H12K2O9P·H2O",
//       "unit": "1 gm 5 gm",
//       "price": "₹ 6240 ₹ 19990",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2291",
//       "chemicalName": "GLUCOSE STANDARD STOCK (1% W/V)",
//       "purity": "-",
//       "casNo": "NA",
//       "formula": "-",
//       "unit": "100 ml 500 ml",
//       "price": "₹ 210 ₹ 740",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2301",
//       "chemicalName": "GLYCEROL Purified",
//       "purity": "98%",
//       "casNo": "56-81-5",
//       "formula": "C3H8O3",
//       "unit": "250 ml 500 ml 2.5 L 5 L 25 L",
//       "price": "₹ 230 ₹ 400 ₹ 1590 ₹ 3000 ₹ 12460",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2302",
//       "chemicalName": "GLYCEROL AR",
//       "purity": "99.50%",
//       "casNo": "56-81-5",
//       "formula": "C3H8O3",
//       "unit": "500 ml 2.5 L",
//       "price": "₹ 470 ₹ 1830",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2303",
//       "chemicalName": "GLYCEROL AR",
//       "purity": "87%",
//       "casNo": "56-81-5",
//       "formula": "C3H8O3",
//       "unit": "500 ml",
//       "price": "inquiry",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2304",
//       "chemicalName": "GLYCOGEN For Biochemistry",
//       "purity": "-",
//       "casNo": "9005-79-2",
//       "formula": "(C6H10O5)n",
//       "unit": "1 gm 5 gm",
//       "price": "₹ 1830 ₹ 7210",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2305",
//       "chemicalName": "GUM GHATTI Extra Pure",
//       "purity": "-",
//       "casNo": "9000-28-6",
//       "formula": "-",
//       "unit": "100 gm 500 gm",
//       "price": "₹ 430 ₹ 1690",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2306",
//       "chemicalName": "GUAR GUM POWDER OF ENDOSPERM",
//       "purity": "-",
//       "casNo": "9000-30-0",
//       "formula": "-",
//       "unit": "500 gm",
//       "price": "₹ 1250",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2307",
//       "chemicalName": "GUM TRAGACANTH",
//       "purity": "-",
//       "casNo": "9000-65-1",
//       "formula": "-",
//       "unit": "500 gm 5 Kg",
//       "price": "₹ 960 ₹ 7660",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2308",
//       "chemicalName": "HEPARIN SODIUM PURE 20,000 IU/VIAL",
//       "purity": "-",
//       "casNo": "9041-08-1",
//       "formula": "-",
//       "unit": "1 Vial",
//       "price": "₹ 1830",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2309",
//       "chemicalName": "HEPARIN SODIUM PURE 1,00,000 IU/VIAL",
//       "purity": "-",
//       "casNo": "9041-08-1",
//       "formula": "-",
//       "unit": "1 Vial",
//       "price": "₹ 5980",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2310",
//       "chemicalName": "HYDROXYETHYL CELLULOSE HIGH VISCOSITY",
//       "purity": "-",
//       "casNo": "9004-62-0",
//       "formula": "-",
//       "unit": "100 gm 500 gm",
//       "price": "₹ 790 ₹ 2830",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//     },
//     {
//       "articleNo": "AL2311",
//       "chemicalName": "HYDROXY PROPYL METHYL CELLULOSE HPMC E 5 LV PREMIUM",
//       "purity": "-",
//       "casNo": "9004-65-3",
//       "formula": "-",
//       "unit": "250 gm 500 gm",
//       "price": "₹ 1550 ₹ 2850",
//       "MSDS": "https://www.alphac",
//       "COA": "https://ww",
//       "category": "Carbohydrates"
//   },
    
    
//   ],
  
  

//   // Add more categories as needed...
// };

const ProductPage = () => {
  const { category } = useParams(); // Get the selected category from URL
  const formattedCategory = category.toUpperCase().replace(/-/g, " ");

  // Retrieve products for the selected category
  const products = productsData[category] || [];

  // Pagination settings
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Cart state
  const [cart, setCart] = useState([]);

  // Calculate indices of products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Function to add products to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Added to cart:", product);
  };
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "Laboratory Chemicals Categories", link:"/products" }, // Add category nameLink
  category ? { name: category.toUpperCase() } : null, // Add product name to breadcrumb if category is defined
].filter(Boolean);

return (
  <div className="product-page-container">
    <Breadcrumb paths={breadcrumbPaths} />
    <h2 className="product-page-header">{formattedCategory}</h2>
    {currentProducts.length > 0 ? (
      <table className="product-table">
          <thead>
            <tr>
              <th>Article No.</th>
              <th>Chemical Name</th>
              <th>Purity</th>
              <th>CAS No.</th>
              <th>Formula</th>
              <th>Unit</th>
              <th>Price</th>
              <th>MSDS</th>
              <th>COA</th>
              <th>CART</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                <td data-label="Article No.">{product.articleNo}</td>
                <td data-label="Chemical Name">{product.chemicalName}</td>
                <td data-label="Purity">{product.purity}</td>
                <td data-label="CAS No.">{product.casNo}</td>
                <td data-label="Formula">{product.formula}</td>
                <td data-label="Unit">
                  <div className="unit-checkbox-container">
                    {product.unit.split(" ").map((unit, unitIndex) => (
                      <div key={unitIndex} className="unit-checkbox">
                        <input
                          type="checkbox"
                          id={`unit-${index}-${unitIndex}`}
                        />
                        <label htmlFor={`unit-${index}-${unitIndex}`}>{unit}</label>
                      </div>
                    ))}
                  </div>
                </td>
                <td data-label="Price">{product.price}</td>
                <td data-label="MSDS">
                  <a
                    href={product.MSDS}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MSDS
                  </a>
                </td>
                <td data-label="COA">
                  <a
                    href={product.COA}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    COA
                  </a>
                </td>
                <td data-label="ADD TO CART">
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p> We are comming Soon!</p>
      )}

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
