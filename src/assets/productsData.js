const exchangeRate = 0.012;

const productsData = {
  "aas-standard-solutions": [
    {
      "articleNo": "FC01460",
      "chemicalName": "ANTIMONY AAS STANDARD SOLUTION - 1000 mg/L Sb IN DILUTED HCl",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": 1000
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC01494",
      "chemicalName": "ARSENIC AAS STANDARD SOLUTION - 1000 mg/L As IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1285/ARSENIC_AAS_STANDARD_SOLUTION_100",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC01537",
      "chemicalName": "BARIUM AAS STANDARD SOLUTION - 1000 mg/L Ba IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1287/BARIUM_AAS_STANDARD_SOLUTION_100",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC01680",
      "chemicalName": "BERYLLIUM AAS STANDARD SOLUTION - 1000 mg/L Be IN DILUTED HCl",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1288/BERYLLIUM_AAS_STANDARD_SOLUTION_1",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC01723",
      "chemicalName": "BISMUTH AAS STANDARD SOLUTION - 1000 mg/L Bi IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1289/BISMUTH_AAS_STANDARD_SOLUTION_100",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC01781",
      "chemicalName": "BORON AAS STANDARD SOLUTION - 1000 mg/L B IN H2O",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1290/BORON_AAS_STANDARD_SOLUTION_1000",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC02014",
      "chemicalName": "CADMIUM AAS STANDARD SOLUTION - 1000 mg/L Cd IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1292/CADMIUM_AAS_STANDARD_SOLUTION_10",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC02050",
      "chemicalName": "CALCIUM AAS STANDARD SOLUTION - 1000 mg/L Ca IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1294/CALCIUM_AAS_STANDARD_SOLUTION_100",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC02209",
      "chemicalName": "CESIUM AAS STANDARD SOLUTION - 1000 mg/L Cs IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1296/CESIUM_AAS_STANDARD_SOLUTION_1000",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC02358",
      "chemicalName": "CHROMIUM AAS STANDARD SOLUTION - 1000 mg/L Cr IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1298/CHROMIUM_AAS_STANDARD_SOLUTION_1",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC02417",
      "chemicalName": "COBALT AAS STANDARD SOLUTION - 1000 mg/L Co IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1300/COBALT_AAS_STANDARD_SOLUTION_100",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC02483",
      "chemicalName": "COPPER AAS STANDARD SOLUTION - 1000 mg/L Cu IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1302/COPPER_AAS_STANDARD_SOLUTION_100",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC03596",
      "chemicalName": "IRON AAS STANDARD SOLUTION - 1000 mg/L Fe IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1304/IRON_AAS_STANDARD_SOLUTION_1000_",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC03659",
      "chemicalName": "LANTHANUM AAS STANDARD SOLUTION - 1000 mg/LLa IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1306/LANTHANUM_AAS_STANDARD_SOLUTION",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC03678",
      "chemicalName": "LEAD AAS STANDARD SOLUTION - 1000 mg/L Pb IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1307/LEAD_AAS_STANDARD_SOLUTION_1000_",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC03751",
      "chemicalName": "LITHIUM AAS STANDARD SOLUTION - 1000 mg/LLi IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1308/LITHIUM_AAS_STANDARD_SOLUTION_100",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC03804",
      "chemicalName": "MAGNESIUM AAS STANDARD SOLUTION - 1000 mg/L Mg IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1310/MAGNESIUM_AAS_STANDARD_SOLUTION_",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC03873",
      "chemicalName": "MANGANESE AAS STANDARD SOLUTION - 1000 mg/L Mn IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1312/MANGANESE_AAS_STANDARD_SOLUTION_",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC03927",
      "chemicalName": "MERCURY AAS STANDARD SOLUTION - 1000 mg/L Hg IN DILUTED HNO3",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1313/MERCURY_AAS_STANDARD_SOLUTION_10",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC04207",
      "chemicalName": "NICKEL AAS STANDARD SOLUTION 1000 mg/L Ni IN DILUTED HNO3",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1314/NICKEL_AAS_STANDARD_SOLUTION_1000_mg_L_Ni_IN_DILUTED_HNO3_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC04378",
      "chemicalName": "PALLADIUM AAS STANDARD SOLUTION 1000 mg/L Pd IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1315/PALLADIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Pd_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC04638",
      "chemicalName": "POTASSIUM AAS STANDARD SOLUTION 1000mg/L K IN DILUTED HNO3",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1318/POTASSIUM_AAS_STANDARD_SOLUTION_1000mg_L_K_IN_DILUTED_HNO3_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC05001",
      "chemicalName": "SILVER AAS STANDARD SOLUTION 1000 mg/L Ag DILUTED HNO3",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1319/SILVER_AAS_STANDARD_SOLUTION_1000_mg_L_Ag_DILUTED_HNO3_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC05049",
      "chemicalName": "SODIUM AAS STANDARD SOLUTION 1000 mg/L Na IN DILUTED HNO3",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1321/SODIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Na_IN_DILUTED_HNO3_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC05352",
      "chemicalName": "STRONTIUM AAS STANDARD SOLUTION 1000 mg/L Sr IN DILUTED HNO3",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1323/STRONTIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Sr_IN_DILUTED_HNO3_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC05446",
      "chemicalName": "TELLURIUM AAS STANDARD SOLUTION 1000 mg/L Te IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1324/TELLURIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Te_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC05564",
      "chemicalName": "TIN AAS STANDARD SOLUTION 1000 mg/L Sn IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1326/TIN_AAS_STANDARD_SOLUTION_1000_mg_L_Sn_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC05756",
      "chemicalName": "VANADIUM AAS STANDARD SOLUTION 1000 mg/L V IN DILUTED HNO3",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1328/VANADIUM_AAS_STANDARD_SOLUTION_1000_mg_L_V_IN_DILUTED_HNO3_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC05825",
      "chemicalName": "ZINC AAS STANDARD SOLUTION 1000 mg/L Zn IN DILUTED HNO3",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1330/ZINC_AAS_STANDARD_SOLUTION_1000_mg_L_Zn_IN_DILUTED_HNO3_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06369",
      "chemicalName": "ALUMINIUM AAS STANDARD SOLUTION 1000 mg/L Al IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1281/ALUMINIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Al_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06370",
      "chemicalName": "ARSENIC AAS STANDARD SOLUTION 1000 mg/L As IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1284/ARSENIC_AAS_STANDARD_SOLUTION_1000_mg_L_As_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06371",
      "chemicalName": "BARIUM AAS STANDARD SOLUTION 1000 mg/L Ba IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1286/BARIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Ba_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06372",
      "chemicalName": "CADMIUM AAS STANDARD SOLUTION 1000 mg/L Cd IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1291/CADMIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Cd_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06373",
      "chemicalName": "CALCIUM AAS STANDARD SOLUTION 1000 mg/L Ca IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1293/CALCIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Ca_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06374",
      "chemicalName": "CERIUM AAS STANDARD SOLUTION 1000 mg/L Ce IN DILUTED HNO3",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1295/CERIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Ce_IN_DILUTED_HNO3_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06375",
      "chemicalName": "CHROMIUM AAS STANDARD SOLUTION 1000 mg/L Cr IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1297/CHROMIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Cr_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06376",
      "chemicalName": "COBALT AAS STANDARD SOLUTION 1000 mg/L Co IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1299/COBALT_AAS_STANDARD_SOLUTION_1000_mg_L_Co_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06377",
      "chemicalName": "COPPER AAS STANDARD SOLUTION 1000 mg/L Cu IN DILUTED HCl",
      "purity": "NA",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1301/COPPER_AAS_STANDARD_SOLUTION_1000_mg_L_Cu_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/chemical/1283/ANTIMONY_AAS_STANDARD_SOLUTION_1",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06379",
      "chemicalName": "LANTHANUM AAS STANDARD SOLUTION 1000 mg/LLa IN DILUTED HCl traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1305/LANTHANUM_AAS_STANDARD_SOLUTION_1000_mg_L_La_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=LANT",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06380",
      "chemicalName": "MAGNESIUM AAS STANDARD SOLUTION 1000 mg/L Mg IN DILUTED HCl traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1309/MAGNESIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Mg_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=MAGN",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06381",
      "chemicalName": "MANGANESE AAS STANDARD SOLUTION 1000 mg/L Mn IN DILUTED HCl traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1311/MANGANESE_AAS_STANDARD_SOLUTION_1000_mg_L_Mn_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=MANG",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06382",
      "chemicalName": "PHOSPHORUS AAS STANDARD SOLUTION 1000 mg/L P IN H2O traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1316/PHOSPHORUS_AAS_STANDARD_SOLUTION_1000_mg_L_P_IN_H2O_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=PHOS",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06383",
      "chemicalName": "POTASSIUM AAS STANDARD SOLUTION 1000 mg/L K IN DILUTED HCl traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1317/POTASSIUM_AAS_STANDARD_SOLUTION_1000_mg_L_K_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=POTA",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06384",
      "chemicalName": "SODIUM AAS STANDARD SOLUTION 1000 mg/L Na IN DILUTED HCl traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1320/SODIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Na_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=SODI",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06385",
      "chemicalName": "STRONTIUM AAS STANDARD SOLUTION 1000 mg/L Sr IN DILUTED HCl traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1322/STRONTIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Sr_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=STRO",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06386",
      "chemicalName": "TELLURIUM AAS STANDARD SOLUTION 1000 mg/L Te IN DILUTED HNO3 traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1325/TELLURIUM_AAS_STANDARD_SOLUTION_1000_mg_L_Te_IN_DILUTED_HNO3_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=TELLU",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06387",
      "chemicalName": "VANADIUM AAS STANDARD SOLUTION 1000 mg/L V IN DILUTED H2SO4 traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1327/VANADIUM_AAS_STANDARD_SOLUTION_1000_mg_L_V_IN_DILUTED_H2SO4_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=VANA",
      "category": "AAS Standard Solutions"
    },
    {
      "articleNo": "FC06388",
      "chemicalName": "ZINC AAS STANDARD SOLUTION 1000 mg/L Zn IN DILUTED HCl traceable to NIST",
      "purity": "-",
      "casNo": "traceable to NIST",
      "formula": "-",
      "units": [
        {
          "size": "125ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1329/ZINC_AAS_STANDARD_SOLUTION_1000_mg_L_Zn_IN_DILUTED_HCl_traceable_to_NIST.html",
      "COA": "https://www.alphachemika.co/co?request?name=ZINC_",
      "category": "AAS Standard Solutions"
    }
  ],
  "acid-halides": [
    {
      "articleNo": "AL0067",
      "chemicalName": "ACETYL BROMIDE For Synthesis",
      "purity": "98%",
      "casNo": "506-96-7",
      "formula": "CH3COBr",
      "units": [
        {
          "size": "250ml",
          "priceINR": 4450
        },
        {
          "size": "500ml",
          "priceINR": 8570
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL0071",
      "chemicalName": "ACETYL CHLORIDE Extra Pure",
      "purity": "98%",
      "casNo": "75-36-5",
      "formula": "CH3COCl",
      "units": [
        {
          "size": "500ml",
          "priceINR": 980
        },
        {
          "size": "2.5L",
          "priceINR": 4430
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL0638",
      "chemicalName": "BENZOYL CHLORIDE Extra Pure",
      "purity": "98%",
      "casNo": "98-88-4",
      "formula": "C6H5COCl",
      "units": [
        {
          "size": "500ml",
          "priceINR": 870
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL0639",
      "chemicalName": "BENZOYL CHLORIDE AR",
      "purity": "99%",
      "casNo": "98-88-4",
      "formula": "C6H5COCl",
      "units": [
        {
          "size": "500ml",
          "priceINR": 990
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL0976",
      "chemicalName": "iso-BUTYLCHLOROFORMATE For Synthesis",
      "purity": "98%",
      "casNo": "543-27-1",
      "formula": "C4H9ClO2",
      "units": [
        {
          "size": "100ml",
          "priceINR": 2100
        },
        {
          "size": "500ml",
          "priceINR": 8400
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL1006",
      "chemicalName": "iso-BUTYRYL CHLORIDE For Synthesis",
      "purity": "98%",
      "casNo": "79-30-1",
      "formula": "C4H7ClO",
      "units": [
        {
          "size": "250ml",
          "priceINR": 4130
        },
        {
          "size": "1L",
          "priceINR": 12380
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL1259",
      "chemicalName": "CHLOROACETYL CHLORIDE For Synthesis",
      "purity": "98%",
      "casNo": "79-04-9",
      "formula": "C2H3Cl2O",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1940
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL1341",
      "chemicalName": "CHLOROSULPHONIC ACID For Synthesis",
      "purity": "97%",
      "casNo": "7790-94-5",
      "formula": "HSO3Cl",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1820
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL2065",
      "chemicalName": "ETHYL CHLOROFORMATE For Synthesis",
      "purity": "98%",
      "casNo": "541-41-3",
      "formula": "C3H5ClO2",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1560
        },
        {
          "size": "2.5L",
          "priceINR": 6230
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL3043",
      "chemicalName": "METHYL CHLOROFORMATE For Synthesis",
      "purity": "98%",
      "casNo": "79-22-1",
      "formula": "C3H5ClO2",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1650
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL3493",
      "chemicalName": "PHENYL CHLOROFORMATE For Synthesis",
      "purity": "98%",
      "casNo": "1885-14-9",
      "formula": "C6H5COOCl",
      "units": [
        {
          "size": "100ml",
          "priceINR": 1030
        },
        {
          "size": "500ml",
          "priceINR": 4610
        },
        {
          "size": "2.5L",
          "priceINR": 19620
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL3546",
      "chemicalName": "PHOSPHORUS OXYCHLORIDE Extra Pure",
      "purity": "98%",
      "casNo": "10025-87-3",
      "formula": "POCl3",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1530
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL3552",
      "chemicalName": "PHOSPHORUS TRICHLORIDE For Synthesis",
      "purity": "99%",
      "casNo": "7719-12-2",
      "formula": "PCl3",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1880
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL4538",
      "chemicalName": "THIONYL CHLORIDE For Synthesis",
      "purity": "99%",
      "casNo": "7719-09-7",
      "formula": "SOCl2",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1030
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5389",
      "chemicalName": "DECANOYL CHLORIDE For Synthesis",
      "purity": "98%",
      "casNo": "112-13-0",
      "formula": "C10H19ClO",
      "units": [
        {
          "size": "100ml",
          "priceINR": null
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5391",
      "chemicalName": "BUTYRYL CHLORIDE For Synthesis",
      "purity": "98%",
      "casNo": "141-75-3",
      "formula": "C4H7ClO",
      "units": [
        {
          "size": "100ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5393",
      "chemicalName": "3-CHLOROPROPIONYL CHLORIDE For Synthesis",
      "purity": "97%",
      "casNo": "625-36-5",
      "formula": "C6H11ClO2",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5394",
      "chemicalName": "DIETHYL CARBAMYL CHLORIDE For Synthesis",
      "purity": "99%",
      "casNo": "88-10-8",
      "formula": "C5H10ClNO",
      "units": [
        {
          "size": "100gm",
          "priceINR": null
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5395",
      "chemicalName": "ETHYL SUCCINYL CHLORIDE Extra Pure",
      "purity": "98%",
      "casNo": "14794-31-1",
      "formula": "C6H9ClO2",
      "units": [
        {
          "size": "100ml",
          "priceINR": null
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5396",
      "chemicalName": "Fmoc CHLORIDE For Synthesis",
      "purity": "97.50%",
      "casNo": "28920-43-6",
      "formula": "C15H11ClO2",
      "units": [
        {
          "size": "5gm",
          "priceINR": null
        },
        {
          "size": "25gm",
          "priceINR": null
        },
        {
          "size": "100gm",
          "priceINR": null
        }
      ],
      "MSDS": "-",
      "COA": "-",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5399",
      "chemicalName": "LAUROYL CHLORIDE Extra Pure",
      "purity": "97.50%",
      "casNo": "112-16-3",
      "formula": "C12H23ClO",
      "units": [
        {
          "size": "100ml",
          "priceINR": null
        },
        {
          "size": "250ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1350/LAUROYL_CHLORIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5400",
      "chemicalName": "METHYL SUCCINYL CHLORIDE Extra Pure",
      "purity": "97%",
      "casNo": "1490-25-1",
      "formula": "C6H9ClO2",
      "units": [
        {
          "size": "100ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1351/METHYL_SUCCINYL_CHLORIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5401",
      "chemicalName": "OCTANOYL CHLORIDE Extra Pure",
      "purity": "99%",
      "casNo": "111-64-8",
      "formula": "C8H15ClO",
      "units": [
        {
          "size": "100ml",
          "priceINR": null
        },
        {
          "size": "250ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1352/OCTANOYL_CHLORIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5403",
      "chemicalName": "THIONYL CHLORIDE AR",
      "purity": "99.50%",
      "casNo": "7719-09-7",
      "formula": "SOCl2",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1354/THIONYL_CHLORIDE_AR.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Acid Halides"
    },
    {
      "articleNo": "AL5404",
      "chemicalName": "2,2,2-TRICHLOROETHYL CHLOROFORMATE Extra Pure",
      "purity": "97%",
      "casNo": "17341-93-4",
      "formula": "C5H7Cl3O2",
      "units": [
        {
          "size": "25gm",
          "priceINR": null
        },
        {
          "size": "100gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1355/2_2_2-TRICHLOROETHYL_CHLOROFORMATE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Acid Halides"
    }
  ],
  "amides": [
    {
      "articleNo": "AL0010",
      "chemicalName": "ACETAMIDE For Synthesis",
      "purity": "99%",
      "casNo": "60-35-5",
      "formula": "C2H5NO",
      "units": [
        {
          "size": "500gm",
          "priceINR": 730
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1682/ACETAMIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL0011",
      "chemicalName": "ACETAMIDE AR",
      "purity": "98%",
      "casNo": "60-35-5",
      "formula": "C2H5NO",
      "units": [
        {
          "size": "500gm",
          "priceINR": 980
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2397/ACETAMIDE_AR.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL0013",
      "chemicalName": "ACETAMIDINIUM CHLORIDE",
      "purity": "98%",
      "casNo": "124-42-5",
      "formula": "C6H10NCl",
      "units": [
        {
          "size": "100gm",
          "priceINR": 4970
        },
        {
          "size": "250gm",
          "priceINR": 11060
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/3869/ACETAMIDINIUM_CHLORIDE.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL0016",
      "chemicalName": "ACETANILIDE For Synthesis",
      "purity": "98.50%",
      "casNo": "103-84-4",
      "formula": "C8H9NO",
      "units": [
        {
          "size": "500gm",
          "priceINR": 980
        },
        {
          "size": "5kg",
          "priceINR": 8430
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1684/ACETANILIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL0017",
      "chemicalName": "ACETANILIDE AR (N-Phenylacetamide)",
      "purity": "99%",
      "casNo": "103-84-4",
      "formula": "C8H9NO",
      "units": [
        {
          "size": "500gm",
          "priceINR": 1230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2398/ACETANILIDE_AR__NPhenylacetamide_.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL0031",
      "chemicalName": "ACETOACETANILIDE For Synthesis",
      "purity": "98%",
      "casNo": "102-01-2",
      "formula": "C8H9NO2",
      "units": [
        {
          "size": "500gm",
          "priceINR": 1040
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1685/ACETOACETANILIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL0599",
      "chemicalName": "BENZAMIDE For Synthesis",
      "purity": "98%",
      "casNo": "55-21-0",
      "formula": "C7H7NO",
      "units": [
        {
          "size": "500gm",
          "priceINR": 1310
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1687/BENZAMIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL0600",
      "chemicalName": "BENZANILIDE For Synthesis",
      "purity": "98%",
      "casNo": "93-98-1",
      "formula": "C13H12NO",
      "units": [
        {
          "size": "100gm",
          "priceINR": 660
        },
        {
          "size": "500gm",
          "priceINR": 2360
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1688/BENZANILIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL0754",
      "chemicalName": "N,O-BIS-(TRIMETHYLSILYL) TRIFLUORO ACETAMIDE",
      "purity": "98%",
      "casNo": "25561-30-2",
      "formula": "C9H19F3NOSi2",
      "units": [
        {
          "size": "25ml",
          "priceINR": 4190
        },
        {
          "size": "100ml",
          "priceINR": 13620
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1689/N_OBIS-_TRIMETHYLSILYL__TRIFLUORO_ACETAMIDE.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL1576",
      "chemicalName": "CYANOACETAMIDE For Synthesis",
      "purity": "98%",
      "casNo": "107-91-5",
      "formula": "C3H6N2O",
      "units": [
        {
          "size": "100gm",
          "priceINR": 730
        },
        {
          "size": "500gm",
          "priceINR": 2830
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1690/CYANOACETAMIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL1736",
      "chemicalName": "DICYANODIAMIDE Pure",
      "purity": "98%",
      "casNo": "461-58-5",
      "formula": "C2H4N4",
      "units": [
        {
          "size": "500gm",
          "priceINR": 1090
        },
        {
          "size": "500ml",
          "priceINR": 2000
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1691/DICYANODIAMIDE_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL2223",
      "chemicalName": "FORMAMIDE Extra Pure",
      "purity": "98%",
      "casNo": "75-12-7",
      "formula": "HCO.NH2",
      "units": [
        {
          "size": "500ml",
          "priceINR": 790
        },
        {
          "size": "2.5L",
          "priceINR": 2520
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1680/FORMAMIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL2224",
      "chemicalName": "FORMAMIDE AR/ACS",
      "purity": "99%",
      "casNo": "75-12-7",
      "formula": "HCO.NH2",
      "units": [
        {
          "size": "500ml",
          "priceINR": 930
        },
        {
          "size": "2.5L",
          "priceINR": 3280
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1681/FORMAMIDE_AR_ACS.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL2392",
      "chemicalName": "HEXAMETHYLPHOSPHORIC ACID TRIAMIDE",
      "purity": "98.50%",
      "casNo": "680-31-9",
      "formula": "[(CH3)2N]PO",
      "units": [
        {
          "size": "100ml",
          "priceINR": 2930
        },
        {
          "size": "500ml",
          "priceINR": 11720
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1700/HEXAMETHYLPHOSPHORIC_ACID_TRIAMIDE.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL2592",
      "chemicalName": "IODOSUCCINIMIDE For Synthesis",
      "purity": "97%",
      "casNo": "516-12-1",
      "formula": "C4H5INO2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 3900
        },
        {
          "size": "100gm",
          "priceINR": 12490
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1692/IODOSUCCINIMIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL3406",
      "chemicalName": "4-ACETAMIDOPHENOL Extra Pure",
      "purity": "98%",
      "casNo": "103-90-2",
      "formula": "C8H9NO2",
      "units": [
        {
          "size": "100gm",
          "priceINR": 700
        },
        {
          "size": "500gm",
          "priceINR": 2900
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1683/4-ACETAMIDOPHENOL_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL3557",
      "chemicalName": "PHTHALAMIDE For Synthesis",
      "purity": "98.50%",
      "casNo": "88-96-0",
      "formula": "C8H7NO2",
      "units": [
        {
          "size": "500gm",
          "priceINR": 980
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1693/PHTHALAMIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL3947",
      "chemicalName": "SALICYLAMIDE Extra Pure",
      "purity": "99%",
      "casNo": "65-45-2",
      "formula": "C7H7NO2",
      "units": [
        {
          "size": "500gm",
          "priceINR": 1170
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1694/SALICYLAMIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL4048",
      "chemicalName": "SODAMIDE Extra Pure",
      "purity": "95%",
      "casNo": "7782-92-5",
      "formula": "NaNH2",
      "units": [
        {
          "size": "100gm",
          "priceINR": 2230
        },
        {
          "size": "500gm",
          "priceINR": 9870
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1701/SODAMIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL4398",
      "chemicalName": "SULPHANILAMIDE Extra Pure",
      "purity": "99%",
      "casNo": "63-74-1",
      "formula": "C6H8N2O2S",
      "units": [
        {
          "size": "100gm",
          "priceINR": 640
        },
        {
          "size": "500gm",
          "priceINR": 2800
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1695/SULPHANILAMIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL4399",
      "chemicalName": "SULPHANILAMIDE AR",
      "purity": "99%",
      "casNo": "63-74-1",
      "formula": "C6H8N2O2S",
      "units": [
        {
          "size": "100gm",
          "priceINR": 670
        },
        {
          "size": "500gm",
          "priceINR": 3230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1696/SULPHANILAMIDE_AR.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL4527",
      "chemicalName": "THIOACETAMIDE Extra Pure",
      "purity": "98.50%",
      "casNo": "62-55-5",
      "formula": "CH3CS.NH2",
      "units": [
        {
          "size": "100gm",
          "priceINR": 1860
        },
        {
          "size": "500gm",
          "priceINR": 8110
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1697/THIOACETAMIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL4528",
      "chemicalName": "THIOACETAMIDE AR",
      "purity": "99%",
      "casNo": "62-55-5",
      "formula": "CH3CSNH2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 620
        },
        {
          "size": "100gm",
          "priceINR": 2240
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1698/THIOACETAMIDE_AR.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL4604",
      "chemicalName": "p-TOLUENE SULPHONAMIDE For Synthesis",
      "purity": "98%",
      "casNo": "70-55-3",
      "formula": "C6H7NO2S",
      "units": [
        {
          "size": "500gm",
          "priceINR": 1020
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1702/p-TOLUENE_SULPHONAMIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL5524",
      "chemicalName": "FORMAMIDE For UV Spectroscopy",
      "purity": "99%",
      "casNo": "75-12-7",
      "formula": "H.CO.NH2",
      "units": [
        {
          "size": "1L",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1686/FORMAMIDE_For_UV_Spectroscopy.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    },
    {
      "articleNo": "AL5525",
      "chemicalName": "2-ETHOXYBENZAMIDE Extra Pure",
      "purity": "97%",
      "casNo": "938-73-8",
      "formula": "C8H9NO2",
      "units": [
        {
          "size": "25gm",
          "priceINR": null
        },
        {
          "size": "100gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1699/2-ETHOXYBENZAMIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Amides"
    }
  ],
  "buffer-tablets": [
    {
      "articleNo": "AL0918",
      "chemicalName": "BUFFERTablets pH 6.80",
      "purity": "(1 TABLET DISSOLVED TO 1000ml SOLUTION)",
      "casNo": "-",
      "formula": "-",
      "units": [
        {
          "size": "10Tablets",
          "priceINR": null
        },
        {
          "size": "20Tablets",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2100/BUFFER_TABLETS_PH_6_80__1_TABLET_DISSOLVED_TO_1000_ML_SOLUTION_.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "BufferTablets"
    },
    {
      "articleNo": "AL0923A",
      "chemicalName": "BUFFERTablets pH 9.2",
      "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
      "casNo": "-",
      "formula": "NA",
      "units": [
        {
          "size": "10Tablets",
          "priceINR": null
        },
        {
          "size": "20Tablets",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2097/BUFFER_TABLETS_pH_9_2__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "BufferTablets"
    },
    {
      "articleNo": "AL0927",
      "chemicalName": "BUFFERTablets pH 4.0",
      "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
      "casNo": "-",
      "formula": "NA",
      "units": [
        {
          "size": "10Tablets",
          "priceINR": 190
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2095/BUFFER_TABLETS_pH_4_0__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "BufferTablets"
    },
    {
      "articleNo": "AL0928",
      "chemicalName": "BUFFERTablets pH 6.0",
      "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
      "casNo": "-",
      "formula": "NA",
      "units": [
        {
          "size": "10Tablets",
          "priceINR": 190
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2098/BUFFER_TABLETS_pH_6_0__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "BufferTablets"
    },
    {
      "articleNo": "AL0929",
      "chemicalName": "BUFFERTablets pH 6.8",
      "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
      "casNo": "-",
      "formula": "NA",
      "units": [
        {
          "size": "10Tablets",
          "priceINR": null
        },
        {
          "size": "20Tablets",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2099/BUFFER_TABLETS_pH_6_8__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "BufferTablets"
    },
    {
      "articleNo": "AL0930",
      "chemicalName": "BUFFERTablets pH 7.0",
      "purity": "(10Tablets DISSOLVED TO 100ml SOLUTION)",
      "casNo": "-",
      "formula": "NA",
      "units": [
        {
          "size": "100Tablets",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2101/BUFFER_TABLETS_pH_7_0__10_TABLETS_DISSOLVED_TO_100_ML_SOLUTION_.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "BufferTablets"
    },
    {
      "articleNo": "AL0933",
      "chemicalName": "BUFFERTablets pH 7.0",
      "purity": "(1 TABLET DISSOLVED TO 100ml SOLUTION)",
      "casNo": "-",
      "formula": "NA",
      "units": [
        {
          "size": "10Tablets",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2096/BUFFER_TABLETS_pH_7_0__1_TABLET_DISSOLVED_TO_100_ML_SOLUTION_.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "BufferTablets"
    },
    {
      "articleNo": "AL5564",
      "chemicalName": "BUFFERTablets pH 7.00",
      "purity": "(1 TABLET DISSOLVED TO 1000ml SOLUTION)",
      "casNo": "-",
      "formula": "-",
      "units": [
        {
          "size": "10Tablets",
          "priceINR": null
        },
        {
          "size": "20Tablets",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2102/BUFFER_TABLETS_PH_7_00__1_TABLET_DISSOLVED_TO_1000_ML_SOLUTION_.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "BufferTablets"
    },
    {
      "articleNo": "AL5565",
      "chemicalName": "BUFFERTablets pH 7.20",
      "purity": "(1 TABLET DISSOLVED TO 1000ml SOLUTION)",
      "casNo": "-",
      "formula": "-",
      "units": [
        {
          "size": "10Tablets",
          "priceINR": null
        },
        {
          "size": "20Tablets",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2103/BUFFER_TABLETS_PH_7_20__1_TABLET_DISSOLVED_TO_1000_ML_SOLUTION_.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "BufferTablets"
    }
  ],
  "amines-&-amine-salts": [
    {
      "articleNo": "AL0173",
      "chemicalName": "ALLYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "107-11-9",
      "formula": "C3H7N",
      "units": [
        {
          "size": "250ml",
          "priceINR": 11250
        },
        {
          "size": "1L",
          "priceINR": 39360
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1775/ALLYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0240",
      "chemicalName": "4-AMINOACETANILIDE For Synthesis",
      "purity": "99%",
      "casNo": "122-80-5",
      "formula": "C8H9NO",
      "units": [
        {
          "size": "100gm",
          "priceINR": 750
        },
        {
          "size": "500gm",
          "priceINR": 2980
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1721/4-AMINOACETANILIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0249",
      "chemicalName": "4-AMINOANTIPYRINE Extra Pure",
      "purity": "99%",
      "casNo": "83-07-8",
      "formula": "C9H12N4O",
      "units": [
        {
          "size": "25gm",
          "priceINR": 1100
        },
        {
          "size": "100gm",
          "priceINR": 4050
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1722/4-AMINOANTIPYRINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0251",
      "chemicalName": "4-AMINOAZOBENZENE For Synthesis",
      "purity": "98%",
      "casNo": "60-09-3",
      "formula": "C6H6N2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 380
        },
        {
          "size": "100gm",
          "priceINR": 1010
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1723/4-AMINOAZOBENZENE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0433",
      "chemicalName": "ANILINE Extra Pure",
      "purity": "99%",
      "casNo": "62-53-3",
      "formula": "C6H5NH2",
      "units": [
        {
          "size": "500ml",
          "priceINR": 590
        },
        {
          "size": "2.5Litre",
          "priceINR": 2650
        },
        {
          "size": "5Litre",
          "priceINR": 4750
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1703/ANILINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0434",
      "chemicalName": "ANILINE AR",
      "purity": "99.50%",
      "casNo": "62-53-3",
      "formula": "C6H5NH2",
      "units": [
        {
          "size": "500ml",
          "priceINR": 670
        },
        {
          "size": "2.5L",
          "priceINR": 2940
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1704/ANILINE_AR.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0650",
      "chemicalName": "BENZYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "100-46-9",
      "formula": "C7H9N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1320
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1776/BENZYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0661",
      "chemicalName": "N-BENZYLMETHYLAMINE For Synthesis",
      "purity": "97%",
      "casNo": "103-67-3",
      "formula": "C8H11N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 4660
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1705/NBENZYLMETHYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0823",
      "chemicalName": "4-BROMO ANILINE For Synthesis",
      "purity": "98%",
      "casNo": "106-40-1",
      "formula": "C6H6BrN",
      "units": [
        {
          "size": "25gm",
          "priceINR": 550
        },
        {
          "size": "100gm",
          "priceINR": 1490
        },
        {
          "size": "500gm",
          "priceINR": 5610
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1725/4-BROMO_ANILINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0861",
      "chemicalName": "2-BROMOETHYLAMINE HYDROBROMIDE For Synthesis",
      "purity": "99%",
      "casNo": "2576-47-8",
      "formula": "C2H6BrN",
      "units": [
        {
          "size": "100gm",
          "priceINR": 2770
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1726/2-BROMOETHYLAMINE_HYDROBROMIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0960",
      "chemicalName": "n-BUTYLAMINE Extra Pure",
      "purity": "98%",
      "casNo": "109-73-9",
      "formula": "C4H11N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 620
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1706/nBUTYLAMINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0961",
      "chemicalName": "n-BUTYLAMINE AR",
      "purity": "99%",
      "casNo": "109-73-9",
      "formula": "C4H11N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 720
        },
        {
          "size": "2.5L",
          "priceINR": 2885
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1707/nBUTYLAMINE_AR.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0962",
      "chemicalName": "tert-BUTYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "75-64-9",
      "formula": "C4H9N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1040
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1805/tertBUTYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0963",
      "chemicalName": "tert-BUTYLAMINE AR",
      "purity": "99.50%",
      "casNo": "75-64-9",
      "formula": "C4H9N",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1806/tertBUTYLAMINE_AR.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL0978",
      "chemicalName": "N,N-BUTYLDIETHANOLAMINE For Synthesis",
      "purity": "98%",
      "casNo": "102-79-4",
      "formula": "C8H19NO",
      "units": [
        {
          "size": "250ml",
          "priceINR": 2440
        },
        {
          "size": "1L",
          "priceINR": 8310
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1777/N_NBUTYLDIETHANOLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1132",
      "chemicalName": "CARBAZOLE For Synthesis",
      "purity": "95%",
      "casNo": "86-74-8",
      "formula": "C12H9N",
      "units": [
        {
          "size": "100gm",
          "priceINR": 4230
        },
        {
          "size": "500gm",
          "priceINR": 17990
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1727/CARBAZOLE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1260",
      "chemicalName": "3-CHLOROANILINE For Synthesis",
      "purity": "98%",
      "casNo": "108-42-9",
      "formula": "C6H6ClN",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1729/3-CHLOROANILINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1261",
      "chemicalName": "2-CHLOROANILINE For Synthesis",
      "purity": "98%",
      "casNo": "95-51-2",
      "formula": "C6H6ClN",
      "units": [
        {
          "size": "500ml",
          "priceINR": 740
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1728/2-CHLOROANILINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1312",
      "chemicalName": "o-CHLORO-p-NITROANILINE For Synthesis",
      "purity": "98%",
      "casNo": "121-87-9",
      "formula": "C6H5ClN2O2",
      "units": [
        {
          "size": "250gm",
          "priceINR": 2360
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1778/oCHLORO-p-NITROANILINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1600",
      "chemicalName": "CYCLOHEXYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "108-91-8",
      "formula": "C6H13N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 670
        },
        {
          "size": "2.5L",
          "priceINR": 2960
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1731/CYCLOHEXYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1609",
      "chemicalName": "CYCLOPROPYLAMINE For Synthesis",
      "purity": "98%",
      "casNo": "765-30-0",
      "formula": "C3H7N",
      "units": [
        {
          "size": "100ml",
          "priceINR": 4940
        },
        {
          "size": "500ml",
          "priceINR": 17530
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1780/CYCLOPROPYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1612",
      "chemicalName": "CYSTEAMINE HYDROCHLORIDE For Synthesis",
      "purity": "98%",
      "casNo": "156-57-0",
      "formula": "C2H8ClNS",
      "units": [
        {
          "size": "100gm",
          "priceINR": 5070
        },
        {
          "size": "500gm",
          "priceINR": 15380
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1781/CYSTEAMINE_HYDROCHLORIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1674",
      "chemicalName": "DIBENZYLAMINE For Synthesis",
      "purity": "96%",
      "casNo": "103-49-1",
      "formula": "C14H15N",
      "units": [
        {
          "size": "250ml",
          "priceINR": 6230
        },
        {
          "size": "500ml",
          "priceINR": 11850
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1732/DIBENZYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1684",
      "chemicalName": "DI-N-BUTYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "111-92-2",
      "formula": "C8H19N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1080
        },
        {
          "size": "2.5L",
          "priceINR": 4730
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1782/DIN-BUTYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1737",
      "chemicalName": "DICYLOHEXYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "101-83-7",
      "formula": "C12H23N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 2000
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1733/DICYLOHEXYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1740",
      "chemicalName": "DIETHANOLAMINE For Synthesis",
      "purity": "98%",
      "casNo": "111-42-2",
      "formula": "[CH2(OH).CH2]NH",
      "units": [
        {
          "size": "500ml",
          "priceINR": 480
        },
        {
          "size": "2.5L",
          "priceINR": 2160
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1708/DIETHANOLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1600",
      "chemicalName": "CYCLOHEXYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "108-91-8",
      "formula": "C6H13N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 670
        },
        {
          "size": "2.5L",
          "priceINR": 2960
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1731/CYCLOHEXYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co",
      "category": "Amines & Amine Salts"
    },
    {
      "articleNo": "AL1827",
      "chemicalName": "N,N-DIMETHYLANILINE AR",
      "purity": "99.50%",
      "casNo": "121-69-7",
      "formula": "C8H11N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 730
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1738/N_NDIMETHYLANILINE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL1845",
      "chemicalName": "N,N'-DIMETHYLFORMAMIDE DIMETHYLACETAL For Synthesis",
      "purity": "93%",
      "casNo": "4637-24-5",
      "formula": "C5H13NO",
      "units": [
        {
          "size": "100ml",
          "priceINR": 2290
        },
        {
          "size": "500ml",
          "priceINR": 9020
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1788/N_N_-DIMETHYLFORMAMIDE_DIMETHYLACETAL_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL1890",
      "chemicalName": "2,4-DINITRO ANILINE For Synthesis",
      "purity": "99%",
      "casNo": "97-02-9",
      "formula": "C6H5N3O4",
      "units": [
        {
          "size": "100gm",
          "priceINR": 2460
        },
        {
          "size": "500gm",
          "priceINR": 8450
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1739/2_4-DINITRO_ANILINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL1955",
      "chemicalName": "DODECYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "124-22-1",
      "formula": "C12H27N",
      "units": [
        {
          "size": "100ml",
          "priceINR": 1990
        },
        {
          "size": "500ml",
          "priceINR": 8330
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1789/DODECYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2046",
      "chemicalName": "2-(ETHYLAMINO) ETHANOL For Synthesis",
      "purity": "97%",
      "casNo": "110-73-6",
      "formula": "C4H11NO",
      "units": [
        {
          "size": "250ml",
          "priceINR": 730
        },
        {
          "size": "1L",
          "priceINR": 2370
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1790/2-_ETHYLAMINO__ETHANOL_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2049",
      "chemicalName": "N-ETHYLANILINE For Synthesis",
      "purity": "98%",
      "casNo": "103-69-5",
      "formula": "C8H11N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 860
        },
        {
          "size": "2.5L",
          "priceINR": 3680
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1740/NETHYLANILINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2071",
      "chemicalName": "ETHYLENEDIAMINE For Synthesis",
      "purity": "98%",
      "casNo": "107-15-3",
      "formula": "C2H8N2",
      "units": [
        {
          "size": "500ml",
          "priceINR": 860
        },
        {
          "size": "2.5L",
          "priceINR": 3400
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1715/ETHYLENEDIAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2072",
      "chemicalName": "ETHYLENEDIAMINE DIHYDROCHLORIDE For Synthesis",
      "purity": "99%",
      "casNo": "333-18-6",
      "formula": "C2H8N2·HCl",
      "units": [
        {
          "size": "100gm",
          "priceINR": 520
        },
        {
          "size": "500gm",
          "priceINR": 2240
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1741/ETHYLENEDIAMINE_DIHYDROCHLORIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2114",
      "chemicalName": "N-ETHYLMORPHOLINE For Synthesis",
      "purity": "97%",
      "casNo": "100-74-3",
      "formula": "C6H13NO",
      "units": [
        {
          "size": "250ml",
          "priceINR": 1810
        },
        {
          "size": "1L",
          "priceINR": 5790
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1742/NETHYLMORPHOLINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2413",
      "chemicalName": "HISTAMINE DIHYDROCHLORIDE For Biochemistry",
      "purity": "98.50%",
      "casNo": "56-92-8",
      "formula": "C5H9N3·HCl",
      "units": [
        {
          "size": "1gm",
          "priceINR": 2440
        },
        {
          "size": "5gm",
          "priceINR": 10580
        },
        {
          "size": "25gm",
          "priceINR": 19730
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1743/HISTAMINE_DIHYDROCHLORIDE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2426",
      "chemicalName": "HYDRAZINE HYDRATE Extra Pure",
      "purity": "60%",
      "casNo": "10217-52-4",
      "formula": "N2H4·H2O",
      "units": [
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1794/HYDRAZINE_HYDRATE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2427",
      "chemicalName": "HYDRAZINE HYDRATE Extra Pure",
      "purity": "80%",
      "casNo": "10217-52-4",
      "formula": "N2H4·H2O",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1400
        },
        {
          "size": "2.5L",
          "priceINR": 5950
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1716/HYDRAZINE_HYDRATE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2427",
      "chemicalName": "HYDRAZINE HYDRATE For Synthesis",
      "purity": "99%",
      "casNo": "7803-57-8",
      "formula": "N2H4·H2O",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1400
        },
        {
          "size": "2.5L",
          "priceINR": 5950
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1744/HYDRAZINE_HYDRATE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2428",
      "chemicalName": "HYDRAZINE HYDRATE AR",
      "purity": "80%",
      "casNo": "10217-52-4",
      "formula": "N2H4·H2O",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1580
        },
        {
          "size": "2.5L",
          "priceINR": 6700
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1717/HYDRAZINE_HYDRATE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2431",
      "chemicalName": "HYDRAZINE HYDRATE 24-26% SOLUTION IN WATER",
      "purity": "-",
      "casNo": "10217-52-4",
      "formula": "N2H4·H2O",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1793/HYDRAZINE_HYDRATE_24-26__SOLUTION_IN_WATER.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2502",
      "chemicalName": "HYDROXYLAMINE HYDROCHLORIDE For Synthesis",
      "purity": "98%",
      "casNo": "5470-11-1",
      "formula": "H3ClNO",
      "units": [
        {
          "size": "100gm",
          "priceINR": 470
        },
        {
          "size": "500gm",
          "priceINR": 2030
        },
        {
          "size": "5kg",
          "priceINR": 18120
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1747/HYDROXYLAMINE_HYDROCHLORIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2503",
      "chemicalName": "HYDROXYLAMINE HYDROCHLORIDE AR/ACS",
      "purity": "99%",
      "casNo": "5470-11-1",
      "formula": "H3ClNO",
      "units": [
        {
          "size": "100gm",
          "priceINR": 770
        },
        {
          "size": "500gm",
          "priceINR": 2940
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1748/HYDROXYLAMINE_HYDROCHLORIDE_AR_ACS.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2504",
      "chemicalName": "HYDROXYLAMINE HYDROCHLORIDE ACS, ISO (Mercury Free)",
      "purity": "99%",
      "casNo": "5470-11-1",
      "formula": "H3ClNO",
      "units": [
        {
          "size": "100gm",
          "priceINR": null
        },
        {
          "size": "500gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1749/HYDROXYLAMINE_HYDROCHLORIDE_ACS__ISO__Mercury_Free_.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2505",
      "chemicalName": "HYDROXYLAMINE SULPHATE Extra Pure",
      "purity": "97%",
      "casNo": "10039-54-0",
      "formula": "H4ClNO3S",
      "units": [
        {
          "size": "100gm",
          "priceINR": 210
        },
        {
          "size": "500gm",
          "priceINR": 870
        },
        {
          "size": "5kg",
          "priceINR": 7580
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1750/HYDROXYLAMINE_SULPHATE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2506",
      "chemicalName": "HYDROXYLAMINE SULPHATE AR",
      "purity": "99%",
      "casNo": "10039-54-0",
      "formula": "H4ClNO3S",
      "units": [
        {
          "size": "100gm",
          "priceINR": 240
        },
        {
          "size": "500gm",
          "priceINR": 940
        },
        {
          "size": "5kg",
          "priceINR": 8230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1751/HYDROXYLAMINE_SULPHATE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL2506",
      "chemicalName": "HYDROXYLAMINE SULPHATE AR",
      "purity": "99%",
      "casNo": "10039-54-0",
      "formula": "H4ClNO3S",
      "units": [
        {
          "size": "100gm",
          "priceINR": 240
        },
        {
          "size": "500gm",
          "priceINR": 940
        },
        {
          "size": "5kg",
          "priceINR": 8230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1751/HYDROXYLAMINE_SULPHATE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3015",
      "chemicalName": "DIMETHYLAMINE SOLUTION For Synthesis",
      "purity": "40%",
      "casNo": "124-40-3",
      "formula": "C2H7N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 260
        },
        {
          "size": "2.5L",
          "priceINR": 990
        },
        {
          "size": "5L",
          "priceINR": 1880
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1713/DIMETHYLAMINE_SOLUTION_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3016",
      "chemicalName": "METHYLAMINE For Synthesis",
      "purity": "40%",
      "casNo": "74-89-5",
      "formula": "CH3NH2",
      "units": [
        {
          "size": "500ml",
          "priceINR": 240
        },
        {
          "size": "2.5L",
          "priceINR": 1030
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1795/METHYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3017",
      "chemicalName": "TRIMETHYLAMINE For Synthesis",
      "purity": "30%",
      "casNo": "75-50-3",
      "formula": "C3H9N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 240
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1810/TRIMETHYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3020",
      "chemicalName": "2-(METHYLAMINO) ETHANOL For Synthesis",
      "purity": "98%",
      "casNo": "109-83-1",
      "formula": "C3H9NO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 730
        },
        {
          "size": "2.5L",
          "priceINR": 2890
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1796/2-_METHYLAMINO__ETHANOL_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3021",
      "chemicalName": "N-METHYLANILINE For Synthesis",
      "purity": "98%",
      "casNo": "100-61-8",
      "formula": "C7H9N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 790
        },
        {
          "size": "2.5L",
          "priceINR": 3480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1753/NMETHYLANILINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3028",
      "chemicalName": "4-METHYL BENZYL AMINE 97% For Synthesis",
      "purity": "97%",
      "casNo": "104-84-7",
      "formula": "C8H11N",
      "units": [
        {
          "size": "5gm",
          "priceINR": 2220
        },
        {
          "size": "25gm",
          "priceINR": 8270
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1754/4-METHYL_BENZYL_AMINE_97__For_Syntthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3080",
      "chemicalName": "N-METHYL MORPHOLINE Extra Pure",
      "purity": "98%",
      "casNo": "109-02-4",
      "formula": "C5H11NO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1900
        },
        {
          "size": "2.5L",
          "priceINR": 8410
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1755/NMETHYL_MORPHOLINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3149",
      "chemicalName": "MORPHOLINE Extra Pure",
      "purity": "98.50%",
      "casNo": "110-91-8",
      "formula": "C4H9NO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 740
        },
        {
          "size": "2.5L",
          "priceINR": 3480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1718/MORPHOLINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3181",
      "chemicalName": "1-NAPHTHYLAMINE Extra Pure",
      "purity": "98%",
      "casNo": "134-32-7",
      "formula": "C10H9N",
      "units": [
        {
          "size": "500gm",
          "priceINR": 1350
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1756/1-NAPHTHYLAMINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3182",
      "chemicalName": "1-NAPHTHYLAMINE AR",
      "purity": "99%",
      "casNo": "134-32-7",
      "formula": "C10H9N",
      "units": [
        {
          "size": "100gm",
          "priceINR": 1450
        },
        {
          "size": "500gm",
          "priceINR": 5960
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1757/1-NAPHTHYLAMINE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3184",
      "chemicalName": "1-NAPHTHYLAMINE HYDROCHLORIDE For Synthesis",
      "purity": "98%",
      "casNo": "552-46-5",
      "formula": "C10H9ClN",
      "units": [
        {
          "size": "25gm",
          "priceINR": 980
        },
        {
          "size": "100gm",
          "priceINR": 2930
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1758/1-NAPHTHYLAMINE_HYDROCHLORIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3185",
      "chemicalName": "N-1-NAPHTHYL ETHYLENE DIAMINE DIHYDROCHLORIDE AR",
      "purity": "99%",
      "casNo": "1465-25-4",
      "formula": "C10H14ClN",
      "units": [
        {
          "size": "5gm",
          "priceINR": 790
        },
        {
          "size": "10gm",
          "priceINR": 1340
        },
        {
          "size": "25gm",
          "priceINR": 2730
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1759/N1-NAPHTHYL_ETHYLENE_DIAMINE_DIHYDROCHLORIDE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3270",
      "chemicalName": "3-NITROANILINE Pure",
      "purity": "99%",
      "casNo": "99-09-2",
      "formula": "C6H6N2O2",
      "units": [
        {
          "size": "250gm",
          "priceINR": 790
        },
        {
          "size": "500gm",
          "priceINR": 1490
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1761/3-NITROANILINE_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3271",
      "chemicalName": "2-NITROANILINE Pure",
      "purity": "98%",
      "casNo": "88-74-4",
      "formula": "C6H6N2O2",
      "units": [
        {
          "size": "250gm",
          "priceINR": 830
        },
        {
          "size": "500gm",
          "priceINR": 1400
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1760/2-NITROANILINE_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3272",
      "chemicalName": "4-NITROANILINE Pure",
      "purity": "98.50%",
      "casNo": "100-01-6",
      "formula": "C6H6N2O2",
      "units": [
        {
          "size": "250gm",
          "priceINR": 590
        },
        {
          "size": "500gm",
          "priceINR": 1120
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1762/4-NITROANILINE_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3273",
      "chemicalName": "4-NITROANILINE AR",
      "purity": "99%",
      "casNo": "100-01-6",
      "formula": "C6H6N2O2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 190
        },
        {
          "size": "100gm",
          "priceINR": 670
        },
        {
          "size": "500gm",
          "priceINR": 3020
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1763/4-NITROANILINE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3338",
      "chemicalName": "n-OCTYLAMINE Extra Pure",
      "purity": "99%",
      "casNo": "111-86-4",
      "formula": "C8H17N",
      "units": [
        {
          "size": "250ml",
          "priceINR": 4400
        },
        {
          "size": "500ml",
          "priceINR": 8360
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1797/nOCTYLAMINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3461",
      "chemicalName": "1,10-PHENANTHROLINE HYDROCHLORIDE MONOHYDRATE AR",
      "purity": "99.50%",
      "casNo": "18851-33-7",
      "formula": "C12H8ClN·H2O",
      "units": [
        {
          "size": "5gm",
          "priceINR": 750
        },
        {
          "size": "25gm",
          "priceINR": 3230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1764/1_10-PHENANTHROLINE_HYDROCHLORIDE_MONOHYDRATE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3494",
      "chemicalName": "m-PHENYLENEDIAMINE For Synthesis",
      "purity": "98%",
      "casNo": "108-45-2",
      "formula": "C6H7(NH2)2",
      "units": [
        {
          "size": "250gm",
          "priceINR": 2190
        },
        {
          "size": "500gm",
          "priceINR": 4170
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1766/mPHENYLENEDIAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3495",
      "chemicalName": "m-PHENYLENEDIAMINE DIHYDROCHLORIDE Extra Pure",
      "purity": "99%",
      "casNo": "541-69-5",
      "formula": "C6H8N2·HCl",
      "units": [
        {
          "size": "25gm",
          "priceINR": 9140
        },
        {
          "size": "100gm",
          "priceINR": 32010
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1799/mPHENYLENEDIAMINE_DIHYDROCHLORIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3495",
      "chemicalName": "m-PHENYLENEDIAMINE DIHYDROCHLORIDE Extra Pure",
      "purity": "99%",
      "casNo": "541-69-5",
      "formula": "C6H8N2·HCl",
      "units": [
        {
          "size": "25gm",
          "priceINR": 9140
        },
        {
          "size": "100gm",
          "priceINR": 32010
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1799/mPHENYLENEDIAMINE_DIHYDROCHLORIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3496",
      "chemicalName": "o-PHENYLENEDIAMINE For Synthesis",
      "purity": "98%",
      "casNo": "95-54-5",
      "formula": "C6H4(NH2)2",
      "units": [
        {
          "size": "100gm",
          "priceINR": 410
        },
        {
          "size": "250gm",
          "priceINR": 890
        },
        {
          "size": "500gm",
          "priceINR": 1610
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1765/oPHENYLENEDIAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3498",
      "chemicalName": "p-PHENYLENEDIAMINE Extra Pure",
      "purity": "97%",
      "casNo": "106-50-3",
      "formula": "C6H4(NH2)2",
      "units": [
        {
          "size": "250gm",
          "priceINR": 900
        },
        {
          "size": "500gm",
          "priceINR": 1720
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1767/pPHENYLENEDIAMINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3499",
      "chemicalName": "p-PHENYLENEDIAMINE DIHYDROCHLORIDE For Synthesis",
      "purity": "99%",
      "casNo": "624-18-0",
      "formula": "C6H4(NH2)2·HCl",
      "units": [
        {
          "size": "100gm",
          "priceINR": 3820
        },
        {
          "size": "250gm",
          "priceINR": 8600
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1800/pPHENYLENEDIAMINE_DIHYDROCHLORIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3580",
      "chemicalName": "PIPERAZINE ANHYDROUS For Synthesis",
      "purity": "98%",
      "casNo": "110-85-0",
      "formula": "C4H10N2",
      "units": [
        {
          "size": "250gm",
          "priceINR": 980
        },
        {
          "size": "500gm",
          "priceINR": 1850
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1768/PIPERAZINE_ANHYDROUS_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3836",
      "chemicalName": "iso-PROPYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "75-31-0",
      "formula": "C3H9N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 790
        },
        {
          "size": "2.5L",
          "priceINR": 3480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1752/isoPROPYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL3837",
      "chemicalName": "n-PROPYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "107-10-8",
      "formula": "C3H9N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 760
        },
        {
          "size": "2.5L",
          "priceINR": 3370
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1769/nPROPYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4508",
      "chemicalName": "3,3'5,5'-TETRAMETHYLBENZIDINE AR",
      "purity": "96%",
      "casNo": "54827-17-7",
      "formula": "C14H18N2",
      "units": [
        {
          "size": "1gm",
          "priceINR": 2660
        },
        {
          "size": "5gm",
          "priceINR": 11780
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1802/3_3_5_5_-TETRAMETHYLBENZIDINE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4512",
      "chemicalName": "N,N,N',N'-TETRAMETHYL-p-PHENYLENEDIAMINE DIHYDROCHLORIDE Extra Pure",
      "purity": "99%",
      "casNo": "637-01-4",
      "formula": "C10H16Cl2N2",
      "units": [
        {
          "size": "5gm",
          "priceINR": 1730
        },
        {
          "size": "25gm",
          "priceINR": 7470
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1770/N_N_N__N_-TETRAMETHYL-pPHENYLENEDIAMINE_DIHYDROCHLORIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4589",
      "chemicalName": "o-TOLIDINE DIHYDROCHLORIDE HYDRATE AR",
      "purity": "95%",
      "casNo": "612-82-8",
      "formula": "C7H10N2·HCl·xH2O",
      "units": [
        {
          "size": "25gm",
          "priceINR": 930
        },
        {
          "size": "100gm",
          "priceINR": 3420
        },
        {
          "size": "500gm",
          "priceINR": 13680
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1771/oTOLIDINE_DIHYDROCHLORIDE_HYDRATE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4616",
      "chemicalName": "o-TOLUIDINE For Synthesis",
      "purity": "99%",
      "casNo": "95-53-4",
      "formula": "C7H9N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 690
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1772/oTOLUIDINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4619",
      "chemicalName": "p-TOLUIDINE AR",
      "purity": "99%",
      "casNo": "106-49-0",
      "formula": "C7H9N",
      "units": [
        {
          "size": "100gm",
          "priceINR": 1130
        },
        {
          "size": "500gm",
          "priceINR": 4820
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1807/pTOLUIDINE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4620",
      "chemicalName": "p-TOLUIDINIE HYDROCHLORIDE For Synthesis",
      "purity": "99%",
      "casNo": "540-23-8",
      "formula": "C7H9ClN",
      "units": [
        {
          "size": "100gm",
          "priceINR": 1560
        },
        {
          "size": "250gm",
          "priceINR": 3510
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1811/pTOLUIDINIE_HYDROCHLORIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4630",
      "chemicalName": "TRIBUTYLAMINE For Synthesis",
      "purity": "99%",
      "casNo": "102-82-9",
      "formula": "C4H11N",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1120
        },
        {
          "size": "2.5L",
          "priceINR": 4470
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1812/TRIBUTYLAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4644",
      "chemicalName": "TRIETHANOLAMINE Extra Pure",
      "purity": "98%",
      "casNo": "102-71-6",
      "formula": "C6H15NO3",
      "units": [
        {
          "size": "500ml",
          "priceINR": 610
        },
        {
          "size": "2.5L",
          "priceINR": 2680
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1803/TRIETHANOLAMINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4645",
      "chemicalName": "TRIETHANOLAMINE AR",
      "purity": "99%",
      "casNo": "102-71-6",
      "formula": "C6H15NO3",
      "units": [
        {
          "size": "250ml",
          "priceINR": 350
        },
        {
          "size": "500ml",
          "priceINR": 670
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1808/TRIETHANOLAMINE_AR.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4647",
      "chemicalName": "TRIETHANOLAMINELAURYL SULPHATE",
      "purity": "-",
      "casNo": "139-96-8",
      "formula": "(HOC6H4)2NOS(O)OC6H4",
      "units": [
        {
          "size": "500gm",
          "priceINR": 530
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1809/TRIETHANOLAMINE_LAURYL_SULPHATE.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4657",
      "chemicalName": "TRIETHYLENE TETRAMINE For Synthesis",
      "purity": "-",
      "casNo": "112-24-3",
      "formula": "C6H18N4",
      "units": [
        {
          "size": "500ml",
          "priceINR": 980
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1804/TRIETHYLENE_TETRAMINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4810",
      "chemicalName": "2,4 -XYLIDINE Pure",
      "purity": "98%",
      "casNo": "95-68-1",
      "formula": "C8H11N",
      "units": [
        {
          "size": "250ml",
          "priceINR": 1160
        },
        {
          "size": "2.5L",
          "priceINR": 9980
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1773/2_4_-XYLIDINE_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL4811",
      "chemicalName": "2,6 XYLIDINE Pure",
      "purity": "98%",
      "casNo": "87-62-7",
      "formula": "C8H11N",
      "units": [
        {
          "size": "250ml",
          "priceINR": 1500
        },
        {
          "size": "2.5L",
          "priceINR": 11970
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1774/2_6_XYLIDINE_Pure.html",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5526",
      "chemicalName": "DIETHYLAMINE For HPLC",
      "purity": "99.50%",
      "casNo": "109-89-7",
      "formula": "(C2H5)2NH",
      "units": [
        {
          "size": "1L",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5527",
      "chemicalName": "AMYLAMINE For Synthesis",
      "purity": "98.50%",
      "casNo": "110-58-7",
      "formula": "C5H13N",
      "units": [
        {
          "size": "100ml",
          "priceINR": null
        },
        {
          "size": "500ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5528",
      "chemicalName": "N-BENZYLETHANOLAMINE For Synthesis",
      "purity": "95%",
      "casNo": "104-63-2",
      "formula": "C6H5CH2NHCH2CH2OH",
      "units": [
        {
          "size": "100ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5529",
      "chemicalName": "4,4'-AZODIANILINE Extra Pure",
      "purity": "94%",
      "casNo": "538-41-0",
      "formula": "C12H12N4",
      "units": [
        {
          "size": "5gm",
          "priceINR": null
        },
        {
          "size": "25gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5530",
      "chemicalName": "N-(2-HYDROXYETHYL)MORPHOLIN For synthesis",
      "purity": "99%",
      "casNo": "622-40-2",
      "formula": "C6H13NO2",
      "units": [
        {
          "size": "250ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5531",
      "chemicalName": "N-(2-HYDROXYETHYL) PHTHALIMIDE For synthesis",
      "purity": "99%",
      "casNo": "3891-07-4",
      "formula": "C8H9NO2",
      "units": [
        {
          "size": "100gm",
          "priceINR": null
        },
        {
          "size": "500gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5532",
      "chemicalName": "3-DIMETHYLAMINO PROPYL CHLORIDE HYDROCHLORIDE Extra Pure",
      "purity": "98%",
      "casNo": "5407-04-5",
      "formula": "C6H14ClN·HCl",
      "units": [
        {
          "size": "inquiry",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5533",
      "chemicalName": "n-HEXYLAMINE Extra Pure",
      "purity": "99%",
      "casNo": "111-26-2",
      "formula": "C6H15N",
      "units": [
        {
          "size": "250ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5534",
      "chemicalName": "n-HEXYLAMINE For HPLC",
      "purity": "99.50%",
      "casNo": "111-26-2",
      "formula": "C6H15N",
      "units": [
        {
          "size": "100ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5535",
      "chemicalName": "PENTAETHYLENEHEXAMINE For Synthesis",
      "purity": "70%",
      "casNo": "4067-16-7",
      "formula": "C6H15N3",
      "units": [
        {
          "size": "250ml",
          "priceINR": null
        },
        {
          "size": "1L",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5536",
      "chemicalName": "β-PHENYLETHYLAMINE Extra Pure",
      "purity": "99%",
      "casNo": "64-04-0",
      "formula": "C8H11N",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    },
    {
      "articleNo": "AL5537",
      "chemicalName": "TRIMETHYLAMINE HYDROCHLORIDE For Synthesis",
      "purity": "98%",
      "casNo": "593-81-7",
      "formula": "C3H9ClN",
      "units": [
        {
          "size": "500gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/co",
      "COA": "https://www.alphachemika.co/co"
    }
  ],
  "carbohydrates": [
    {
      "articleNo": "AL0002",
      "chemicalName": "ACACIA Extra Pure",
      "purity": "-",
      "casNo": "9000-01-5",
      "formula": "-",
      "units": [
        {
          "size": "500gm",
          "priceINR": 490
        },
        {
          "size": "5Kg",
          "priceINR": 4690
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2107/ACACIA_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL0003",
      "chemicalName": "ACACIA (Enzyme Free) AR",
      "purity": "-",
      "casNo": "9000-01-5",
      "formula": "-",
      "units": [
        {
          "size": "500gm",
          "priceINR": 870
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2108/ACACIA__Enzyme_Free__AR.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL0129",
      "chemicalName": "ADONITOL For Biochemistry",
      "purity": "99%",
      "casNo": "488-81-3",
      "formula": "C6H12O6",
      "units": [
        {
          "size": "5gm",
          "priceINR": 2060
        },
        {
          "size": "25gm",
          "priceINR": 8670
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2109/ADONITOL_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL0135",
      "chemicalName": "AESCULIN Extra Pure",
      "purity": "98%",
      "casNo": "66778-17-4",
      "formula": "C15H10O9",
      "units": [
        {
          "size": "5gm",
          "priceINR": 4940
        },
        {
          "size": "25gm",
          "priceINR": 23970
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2110/AESCULIN_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL0484",
      "chemicalName": "D(-)-ARABINOSE AR",
      "purity": "99%",
      "casNo": "10323-20-3",
      "formula": "C5H10O5",
      "units": [
        {
          "size": "5gm",
          "priceINR": 740
        },
        {
          "size": "25gm",
          "priceINR": 3140
        },
        {
          "size": "100gm",
          "priceINR": 11300
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2111/D_-_ARABINOSE_AR.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL0485",
      "chemicalName": "L(+)-ARABINOSE AR",
      "purity": "99%",
      "casNo": "5328-37-0",
      "formula": "C5H10O5",
      "units": [
        {
          "size": "25gm",
          "priceINR": 1170
        },
        {
          "size": "100gm",
          "priceINR": 4210
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2112/L___ARABINOSE_AR.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1087",
      "chemicalName": "CALCIUM LACTATE HYDRATE Extra Pure",
      "purity": "98%",
      "casNo": "5743-47-5",
      "formula": "C6H10CaO6·H2O",
      "units": [
        {
          "size": "250gm",
          "priceINR": null
        },
        {
          "size": "1Kg",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2114/CALCIUM_LACTATE_HYDRATE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1150",
      "chemicalName": "CARBOXYMETHYL CELLULOSE SODIUM SALT HIGH VISCOSITY Extra Pure",
      "purity": "-",
      "casNo": "9004-32-4",
      "formula": "-",
      "units": [
        {
          "size": "500gm",
          "priceINR": 990
        },
        {
          "size": "5Kg",
          "priceINR": 8460
        },
        {
          "size": "25Kg",
          "priceINR": 38070
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2115/CARBOXYMETHYL_CELLULOSE_SODIUM_SALT_HIGH_VISCOSITY_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1151",
      "chemicalName": "CARBOXYMETHYL CELLULOSE SODIUM SALT MEDIUM VISCOSITY For Molecular Biology",
      "purity": "-",
      "casNo": "9004-32-4",
      "formula": "-",
      "units": [
        {
          "size": "100gm",
          "priceINR": 8620
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2175/CARBOXYMETHYL_CELLULOSE_SODIUM_SALT_MEDIUM_VISCOSITY_For_Molecular_Biology.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1152",
      "chemicalName": "CARBOXYMETHYL CELLULOSE SODIUM SALT MEDIUM VISCOSITY Extra Pure",
      "purity": "-",
      "casNo": "9004-32-4",
      "formula": "-",
      "units": [
        {
          "size": "500gm",
          "priceINR": 1010
        },
        {
          "size": "25Kg",
          "priceINR": 40550
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2116/CARBOXYMETHYL_CELLULOSE_SODIUM_SALT_MEDIUM_VISCOSITY_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1181",
      "chemicalName": "CELLOBIOSE For Biochemistry",
      "purity": "98%",
      "casNo": "528-50-7",
      "formula": "C12H22O11",
      "units": [
        {
          "size": "5gm",
          "priceINR": 950
        },
        {
          "size": "25gm",
          "priceINR": 4270
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2117/CELLOBIOSE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1641",
      "chemicalName": "DEXTRINE WHITE",
      "purity": "-",
      "casNo": "9004-53-9",
      "formula": "(C6H10O5)n·xH2O",
      "units": [
        {
          "size": "500gm",
          "priceINR": 240
        },
        {
          "size": "5Kg",
          "priceINR": 2110
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2118/DEXTRINE_WHITE.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1642",
      "chemicalName": "DEXTRINE YELLOW",
      "purity": "-",
      "casNo": "9004-53-9",
      "formula": "(C6H10O5)n·xH2O",
      "units": [
        {
          "size": "500gm",
          "priceINR": 230
        },
        {
          "size": "5Kg",
          "priceINR": 2110
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2119/DEXTRINE_YELLOW.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1643",
      "chemicalName": "DEXTROSE ANHYDROUS Purified",
      "purity": "-",
      "casNo": "50-99-7",
      "formula": "C6H12O6",
      "units": [
        {
          "size": "500gm",
          "priceINR": 290
        },
        {
          "size": "5Kg",
          "priceINR": 2120
        },
        {
          "size": "25Kg",
          "priceINR": 9560
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2122/DEXTROSE_ANHYDROUS_Puried.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1644",
      "chemicalName": "DEXTROSE ANHYDROUS AR",
      "purity": "-",
      "casNo": "50-99-7",
      "formula": "C6H12O6",
      "units": [
        {
          "size": "500gm",
          "priceINR": 320
        },
        {
          "size": "5Kg",
          "priceINR": 2520
        },
        {
          "size": "25Kg",
          "priceINR": 11320
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2123/DEXTROSE_ANHYDROUS_AR.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1646",
      "chemicalName": "DEXTROSE MONOHYDRATE Extra Pure",
      "purity": "-",
      "casNo": "14431-43-7",
      "formula": "C6H12O6·H2O",
      "units": [
        {
          "size": "500gm",
          "priceINR": 200
        },
        {
          "size": "5Kg",
          "priceINR": 1670
        },
        {
          "size": "50Kg",
          "priceINR": 14640
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2120/DEXTROSE_MONOHYDRATE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1647",
      "chemicalName": "DEXTROSE MONOHYDRATE For Microbiology",
      "purity": "-",
      "casNo": "14431-43-7",
      "formula": "C6H12O6·H2O",
      "units": [
        {
          "size": "500gm",
          "priceINR": 240
        },
        {
          "size": "5Kg",
          "priceINR": 1910
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2121/DEXTROSE_MONOHYDRATE_For_microbiology.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL1945",
      "chemicalName": "DITHIOTHREITOL Extra Pure",
      "purity": "99%",
      "casNo": "3483-12-3",
      "formula": "C4H10O2S2",
      "units": [
        {
          "size": "1gm",
          "priceINR": 650
        },
        {
          "size": "5gm",
          "priceINR": 2620
        },
        {
          "size": "25gm",
          "priceINR": 10860
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2104/DITHIOTHREITOL_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Other"
    },
    {
      "articleNo": "AL1968",
      "chemicalName": "DULCITOL For Microbiology",
      "purity": "-",
      "casNo": "608-66-2",
      "formula": "C6H12O6",
      "units": [
        {
          "size": "25gm",
          "priceINR": 1170
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2124/DULCITOL_For_Microbiology.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2062",
      "chemicalName": "ETHYL CELLULOSE Low Viscosity",
      "purity": "-",
      "casNo": "9004-57-3",
      "formula": "-",
      "units": [
        {
          "size": "250gm",
          "priceINR": 2460
        },
        {
          "size": "500gm",
          "priceINR": 4600
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2126/ETHYL_CELLULOSE_Low_Viscosity.html",
      "COA": "https://www.alphachemika.co/co/us",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2063",
      "chemicalName": "ETHYL CELLULOSE High Viscosity",
      "purity": "-",
      "casNo": "9004-57-3",
      "formula": "-",
      "units": [
        {
          "size": "250gm",
          "priceINR": 2390
        },
        {
          "size": "500gm",
          "priceINR": 4390
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2234",
      "chemicalName": "D-FRUCTOSE Extra Pure",
      "purity": "-",
      "casNo": "57-48-7",
      "formula": "C6H12O6",
      "units": [
        {
          "size": "100gm",
          "priceINR": 180
        },
        {
          "size": "500gm",
          "priceINR": 610
        },
        {
          "size": "5Kg",
          "priceINR": 5320
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2235",
      "chemicalName": "D-FRUCTOSE AR",
      "purity": "99%",
      "casNo": "57-48-7",
      "formula": "C6H12O6",
      "units": [
        {
          "size": "100gm",
          "priceINR": 250
        },
        {
          "size": "500gm",
          "priceINR": 900
        },
        {
          "size": "5Kg",
          "priceINR": 7860
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2255",
      "chemicalName": "D-GALACTOSE Extra Pure",
      "purity": "-",
      "casNo": "59-23-4",
      "formula": "C6H12O6",
      "units": [
        {
          "size": "25gm",
          "priceINR": 740
        },
        {
          "size": "100gm",
          "priceINR": 2640
        },
        {
          "size": "500gm",
          "priceINR": 11110
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2288",
      "chemicalName": "GLUCOSE-1-PHOSPHATE DIPOTASSIUM SALT For Biochemistry",
      "purity": "99%",
      "casNo": "5996-14-5",
      "formula": "C6H12K2O9P·H2O",
      "units": [
        {
          "size": "1gm",
          "priceINR": 6240
        },
        {
          "size": "5gm",
          "priceINR": 19990
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2291",
      "chemicalName": "GLUCOSE STANDARD STOCK (1% W/V)",
      "purity": "-",
      "casNo": "NA",
      "formula": "-",
      "units": [
        {
          "size": "100ml",
          "priceINR": 210
        },
        {
          "size": "500ml",
          "priceINR": 740
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2301",
      "chemicalName": "GLYCEROL Purified",
      "purity": "98%",
      "casNo": "56-81-5",
      "formula": "C3H8O3",
      "units": [
        {
          "size": "250ml",
          "priceINR": 230
        },
        {
          "size": "500ml",
          "priceINR": 400
        },
        {
          "size": "2.5L",
          "priceINR": 1590
        },
        {
          "size": "5L",
          "priceINR": 3000
        },
        {
          "size": "25L",
          "priceINR": 12460
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2302",
      "chemicalName": "GLYCEROL AR",
      "purity": "99.50%",
      "casNo": "56-81-5",
      "formula": "C3H8O3",
      "units": [
        {
          "size": "500ml",
          "priceINR": 470
        },
        {
          "size": "2.5L",
          "priceINR": 1830
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2303",
      "chemicalName": "GLYCEROL AR",
      "purity": "87%",
      "casNo": "56-81-5",
      "formula": "C3H8O3",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2304",
      "chemicalName": "GLYCOGEN For Biochemistry",
      "purity": "-",
      "casNo": "9005-79-2",
      "formula": "(C6H10O5)n",
      "units": [
        {
          "size": "1gm",
          "priceINR": 1830
        },
        {
          "size": "5gm",
          "priceINR": 7210
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2305",
      "chemicalName": "GUM GHATTI Extra Pure",
      "purity": "-",
      "casNo": "9000-28-6",
      "formula": "-",
      "units": [
        {
          "size": "100gm",
          "priceINR": 430
        },
        {
          "size": "500gm",
          "priceINR": 1690
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2306",
      "chemicalName": "GUAR GUM POWDER OF ENDOSPERM",
      "purity": "-",
      "casNo": "9000-30-0",
      "formula": "-",
      "units": [
        {
          "size": "500gm",
          "priceINR": 1250
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2307",
      "chemicalName": "GUM TRAGACANTH",
      "purity": "-",
      "casNo": "9000-65-1",
      "formula": "-",
      "units": [
        {
          "size": "500gm",
          "priceINR": 960
        },
        {
          "size": "5Kg",
          "priceINR": 7660
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2308",
      "chemicalName": "HEPARIN SODIUM PURE 20,000 IU/VIAL",
      "purity": "-",
      "casNo": "9041-08-1",
      "formula": "-",
      "units": [
        {
          "size": "1Vial",
          "priceINR": 1830
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2309",
      "chemicalName": "HEPARIN SODIUM PURE 1,00,000 IU/VIAL",
      "purity": "-",
      "casNo": "9041-08-1",
      "formula": "-",
      "units": [
        {
          "size": "1Vial",
          "priceINR": 5980
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2310",
      "chemicalName": "HYDROXYETHYL CELLULOSE HIGH VISCOSITY",
      "purity": "-",
      "casNo": "9004-62-0",
      "formula": "-",
      "units": [
        {
          "size": "100gm",
          "priceINR": 790
        },
        {
          "size": "500gm",
          "priceINR": 2830
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2311",
      "chemicalName": "HYDROXY PROPYL METHYL CELLULOSE HPMC E 5LV PREMIUM",
      "purity": "-",
      "casNo": "9004-65-3",
      "formula": "-",
      "units": [
        {
          "size": "250gm",
          "priceINR": 1550
        },
        {
          "size": "500gm",
          "priceINR": 2850
        }
      ],
      "MSDS": "https://www.alphac",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2516",
      "chemicalName": "HYDROXY PROPYL METHYL CELLULOSE HPMC E 50 LV PREMIUM",
      "purity": "-",
      "casNo": "9004-65-3",
      "formula": "-",
      "units": [
        {
          "size": "1Kg",
          "priceINR": 4740
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2141/HYDROXY_PROPYL_METHYL_CELLULOSE_HPMC_E_50_LV_PREMIUM.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2517",
      "chemicalName": "HYDROXY PROPYL METHYL CELLULOSE HPMC E 15LV PREMIUM",
      "purity": "-",
      "casNo": "9004-65-3",
      "formula": "-",
      "units": [
        {
          "size": "1Kg",
          "priceINR": 4740
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2140/HYDROXY_PROPYL_METHYL_CELLULOSE_HPMC_E_15_LV_PREMIUM.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2566",
      "chemicalName": "meso-INOSITOL For Biochemistry",
      "purity": "99%",
      "casNo": "87-89-8",
      "formula": "C6H12O6",
      "units": [
        {
          "size": "25gm",
          "priceINR": 360
        },
        {
          "size": "100gm",
          "priceINR": 1160
        },
        {
          "size": "500gm",
          "priceINR": 4950
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2142/mesoINOSITOL_For_Biochemistry.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2655",
      "chemicalName": "LACTOSE MONOHYDRATE Extra Pure",
      "purity": "-",
      "casNo": "10039-26-6",
      "formula": "C12H22O11.H2O",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 540
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 4830
        },
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 21740
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2143/LACTOSE_MONOHYDRATE_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2656",
      "chemicalName": "LACTOSE MONOHYDRATE AR",
      "purity": "-",
      "casNo": "10039-26-6",
      "formula": "C12H22O11.H2O",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 620
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 5600
        },
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 23950
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2144/LACTOSE_MONOHYDRATE_AR.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2866",
      "chemicalName": "MALT EXTRACT For Bacteriology",
      "purity": "-",
      "casNo": "8002-48-0",
      "formula": "-",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1240
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2145/MALT_EXTRACT_For_Bacteriology.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2867",
      "chemicalName": "MALTODEXTRINE POWDER",
      "purity": "-",
      "casNo": "9050-36-6",
      "formula": "-",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 230
        },
        {
          "size": "2.5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 1060
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2176/MALTODEXTRINE_POWDER.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2868",
      "chemicalName": "MALTOSE MONOHYDRATE For Bacteriology",
      "purity": "92%",
      "casNo": "6363-53-7",
      "formula": "C12H22O11.H2O",
      "units": [
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 330
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1360
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 10000
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2147/MALTOSE_MONOHYDRATE_For_Bacteriology.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2869",
      "chemicalName": "MALTOSE MONOHYDRATE NRC Grade",
      "purity": "95%",
      "casNo": "6363-53-7",
      "formula": "C12H22O11.H2O",
      "units": [
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 400
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1830
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 16440
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2148/MALTOSE_MONOHYDRATE_NRC_Grade.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2901",
      "chemicalName": "D (-) MANNITOL Extra Pure",
      "purity": "98%",
      "casNo": "69-65-8",
      "formula": "C6H14O6",
      "units": [
        {
          "size": "250",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1100
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 2090
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 18820
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2149/D__MANNITOL_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2902",
      "chemicalName": "D (-) MANNITOL AR",
      "purity": "99%",
      "casNo": "69-65-8",
      "formula": "C6H14O6",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 2400
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 21670
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2150/D__MANNITOL_AR.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2903",
      "chemicalName": "D-MANNOSE For Biochemistry",
      "purity": "99%",
      "casNo": "3458-28-4",
      "formula": "C6H12O6",
      "units": [
        {
          "size": "10",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 520
        },
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1190
        },
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 4150
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2151/DMANNOSE_For_Biochemistry.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL2915",
      "chemicalName": "D (+) MELIBIOSE For Bacteriology",
      "purity": "-",
      "casNo": "66009-10-7",
      "formula": "C12H22O11.H2O",
      "units": [
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 7440
        },
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 33480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2152/D_____MELIBIOSE_For_Bacteriology.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL3041",
      "chemicalName": "METHYL CELLULOSE (LOW VISCOSITY)",
      "purity": "-",
      "casNo": "9004-67-5",
      "formula": "-",
      "units": [
        {
          "size": "250",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1670
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 3170
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2153/METHYL_CELLULOSE__LOW_VISCOSITY_.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL3041A",
      "chemicalName": "METHYL CELLULOSE (HIGH VISCOSITY) 4000 CPS",
      "purity": "-",
      "casNo": "9004-67-5",
      "formula": "-",
      "units": [
        {
          "size": "250",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1670
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 3170
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2154/METHYL_CELLULOSE__HIGH_VISCOSITY__4000_CPS.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL3421",
      "chemicalName": "PECTIN Pure",
      "purity": "-",
      "casNo": "9000-69-5",
      "formula": "-",
      "units": [
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 870
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 3910
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 37480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2155/PECTIN_Pure.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL3899",
      "chemicalName": "D-RAFFINOSE PENTAHYDRATE AR",
      "purity": "99%",
      "casNo": "17629-30-0",
      "formula": "C18H32O16.H2O",
      "units": [
        {
          "size": "10",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1040
        },
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 2040
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2156/DRAFFINOSE_PENTAHYDRATE_AR.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL3907",
      "chemicalName": "L (+) RHAMNOSE MONOHYDRATE For Biochemistry",
      "purity": "99%",
      "casNo": "10030-85-0",
      "formula": "C6H12O6.H2O",
      "units": [
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 740
        },
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 3120
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2157/L_____RHAMNOSE_MONOHYDRATE_For_Biochemistry.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL3914",
      "chemicalName": "D (-) RIBOSE For Biochemistry",
      "purity": "99%",
      "casNo": "50-69-1",
      "formula": "C5H10O5",
      "units": [
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 350
        },
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1240
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2158/D__RIBOSE_For_Biochemistry.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL3918",
      "chemicalName": "RICE STARCH (Starch Rice)",
      "purity": "-",
      "casNo": "9005-25-8",
      "formula": "(C6H10O5)n",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 650
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2168/RICE_STARCH__Starch_Rice_.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL3944",
      "chemicalName": "SALICIN For Microbiology",
      "purity": "99%",
      "casNo": "138-52-3",
      "formula": "C13H18O7",
      "units": [
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 2340
        },
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 9350
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2159/SALICIN_For_Microbiology.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4062",
      "chemicalName": "SODIUM ALGINATE LOW VISCOSITY",
      "purity": "-",
      "casNo": "9005-38-3",
      "formula": "-",
      "units": [
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1020
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 3590
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2160/SODIUM_ALGINATE_LOW_VISCOSITY.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4149",
      "chemicalName": "SODIUM GLUCONATE For Synthesis",
      "purity": "98%",
      "casNo": "527-07-1",
      "formula": "C6H11NaO7",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 350
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2161/SODIUM_GLUCONATE_For_Synthesis.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4151",
      "chemicalName": "SODIUM-β-GLYCEROPHOSPHATE PENTAHYDRATE AR",
      "purity": "99%",
      "casNo": "13408-09-8",
      "formula": "Na₂C₃H₅(OH)₂PO₄·5H₂O",
      "units": [
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 460
        },
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1470
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2162/SODIUM-_beta_-_GLYCEROPHOSPHATE_PENTAHYDRATE_AR.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4269",
      "chemicalName": "SODIUM STARCH GLYCOLATE Extra Pure",
      "purity": "-",
      "casNo": "9063-38-1",
      "formula": "-",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 830
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2163/SODIUM_STARCH_GLYCOLATE_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4315",
      "chemicalName": "SORBITOL LIQUID Extra Pure",
      "purity": "70%",
      "casNo": "50-70-4",
      "formula": "C₆H₁₄O₆",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 270
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2164/SORBITOL_LIQUID_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4316",
      "chemicalName": "SORBITOL POWDER Extra Pure",
      "purity": "98%",
      "casNo": "50-70-4",
      "formula": "C₆H₁₄O₆",
      "units": [
        {
          "size": "250",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 370
        },
        {
          "size": "1",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 1380
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2165/SORBITOL_POWDER_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4318",
      "chemicalName": "L(-) SORBOSE For Biochemistry",
      "purity": "98%",
      "casNo": "87-79-6",
      "formula": "C₆H₁₂O₆",
      "units": [
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1220
        },
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 4270
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2166/L_-_SORBOSE_For_Biochemistry.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4342",
      "chemicalName": "STARCH MAIZE (CORN Powder)",
      "purity": "-",
      "casNo": "9005-25-8",
      "formula": "(C₆H₁₀O₅)n",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 240
        },
        {
          "size": "2.5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 1090
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2167/STARCH_MAIZE__CORN_Powder_.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4380",
      "chemicalName": "SUCROSE Extra Pure",
      "purity": "99.50%",
      "casNo": "57-50-1",
      "formula": "C₁₂H₂₂O₁₁",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 280
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 2230
        },
        {
          "size": "50",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 19840
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2169/SUCROSE_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4381",
      "chemicalName": "SUCROSE AR",
      "purity": "99%",
      "casNo": "57-50-1",
      "formula": "C₁₂H₂₂O₁₁",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2170/SUCROSE_AR.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4628",
      "chemicalName": "TREHALOSE For Biochemistry",
      "purity": "99%",
      "casNo": "6138-23-4",
      "formula": "C₁₂H₂₂O₁₁·H₂O",
      "units": [
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 520
        },
        {
          "size": "10",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 990
        },
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 2260
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2171/TREHALOSE_For_Biochemistry.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4796",
      "chemicalName": "XANTHAN GUM PURE Food Grade",
      "purity": "-",
      "casNo": "11138-66-2",
      "formula": "-",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1120
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2172/XANTHAN_GUM_PURE_Food_Grade.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4813",
      "chemicalName": "XYLITOL Extra pure",
      "purity": "99%",
      "casNo": "87-99-0",
      "formula": "C₆H₁₄O₆",
      "units": [
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1100
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 4330
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2173/XYLITOL_Extra_pure.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL4814",
      "chemicalName": "D-XYLOSE Extra Pure",
      "purity": "-",
      "casNo": "58-86-6",
      "formula": "C₅H₁₀O₅",
      "units": [
        {
          "size": "25",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 410
        },
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1080
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 4580
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2174/DXYLOSE_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    },
    {
      "articleNo": "AL5566",
      "chemicalName": "MALT EXTRACT CERTIFIED For Microbiology",
      "purity": "-",
      "casNo": "8002-48-0",
      "formula": "-",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/2146/MALT_EXTRACT_CERTIFIED_For_Microbiology.html",
      "COA": "https://ww",
      "category": "Carbohydrates"
    }
  ],
  "acids-inorganic": [
    {
      "articleNo": "AL0776",
      "chemicalName": "BORIC ACID (Fine Powder)",
      "purity": "99.50%",
      "casNo": "10043-35-3",
      "formula": "H₃BO₃",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 380
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 3240
        },
        {
          "size": "50",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 27540
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1375/BORIC_ACID__Fine_Powder_.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL0777",
      "chemicalName": "BORIC ACID AR/ACS",
      "purity": "99.50%",
      "casNo": "10043-35-3",
      "formula": "H₃BO₃",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 520
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 4140
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1376/BORIC_ACID_AR_ACS.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL0779",
      "chemicalName": "BORIC ACID (Crystals)",
      "purity": "99.50%",
      "casNo": "10043-35-3",
      "formula": "H₃BO₃",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 430
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1374/BORIC_ACID__Crystals_.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL0780",
      "chemicalName": "meta-BORIC ACID Extra Pure",
      "purity": "98.50%",
      "casNo": "13460-50-9",
      "formula": "HBO₃",
      "units": [
        {
          "size": "50",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 2110
        },
        {
          "size": "250",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 4000
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1403/metaBORIC_ACID_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2199",
      "chemicalName": "FLUOROBORIC ACID For Synthesis",
      "purity": "40%",
      "casNo": "16872-11-0",
      "formula": "HBF₄",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 730
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1382/FLUOROBORIC_ACID_For_Synthesis.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2435",
      "chemicalName": "HYDRIODIC ACID (With Stabilizer) AR",
      "purity": "55%",
      "casNo": "10034-85-2",
      "formula": "HI",
      "units": [
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": null
        },
        {
          "size": "250",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": null
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1383/HYDRIODIC_ACID__With_Stabilizer__AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2436",
      "chemicalName": "HYDRIODIC ACID (Stabilized) AR",
      "purity": "57%",
      "casNo": "10034-85-2",
      "formula": "HI",
      "units": [
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 2490
        },
        {
          "size": "250",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 4990
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 9490
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1404/HYDRIODIC_ACID__Stabilized__AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2437",
      "chemicalName": "HYDROBROMIC ACID Extra Pure",
      "purity": "48%",
      "casNo": "10035-10-6",
      "formula": "HBr",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 810
        },
        {
          "size": "2.5",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 3560
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1384/HYDROBROMIC_ACID_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2438",
      "chemicalName": "HYDROBROMIC ACID AR",
      "purity": "48%",
      "casNo": "10035-10-6",
      "formula": "HBr",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 910
        },
        {
          "size": "2.5",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 4180
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1385/HYDROBROMIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2440",
      "chemicalName": "HYDROCHLORIC ACID Pure",
      "purity": "35-38%",
      "casNo": "7647-01-0",
      "formula": "HCl",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 230
        },
        {
          "size": "2.5",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 580
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 1070
        },
        {
          "size": "20",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 4010
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1356/HYDROCHLORIC_ACID_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2441",
      "chemicalName": "HYDROCHLORIC ACID AR",
      "purity": "35.40%",
      "casNo": "7647-01-0",
      "formula": "HCl",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 270
        },
        {
          "size": "2.5",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 780
        },
        {
          "size": "5",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 1310
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1357/HYDROCHLORIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2463",
      "chemicalName": "HYDROFLUORIC ACID For Synthesis",
      "purity": "40%",
      "casNo": "7664-39-3",
      "formula": "HF",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 590
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1359/HYDROFLUORIC_ACID_For_Synthesis.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2464",
      "chemicalName": "HYDROFLUORIC ACID",
      "purity": "60%",
      "casNo": "7664-39-3",
      "formula": "HF",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 990
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1373/HYDROFLUORIC_ACID.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2465",
      "chemicalName": "HYDROFLUORIC ACID AR/ACS",
      "purity": "48%",
      "casNo": "7664-39-3",
      "formula": "HF",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 1230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1360/HYDROFLUORIC_ACID_AR_ACS.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2466",
      "chemicalName": "HYDROFLUORIC ACID Electronic grade",
      "purity": "48%",
      "casNo": "7664-39-3",
      "formula": "HF",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 1400
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1361/HYDROFLUORIC_ACID_Electronic_grade.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL2529",
      "chemicalName": "HYPOPHOSPHORUS ACID Extra Pure",
      "purity": "30%",
      "casNo": "6303-21-5",
      "formula": "H₃PO₂",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 790
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1386/HYPOPHOSPHORUS_ACID_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL3143",
      "chemicalName": "MOLYBDIC ACID Extra Pure",
      "purity": "85%",
      "casNo": "7782-91-4",
      "formula": "H₂MoO₄",
      "units": [
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1420
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 5610
        },
        {
          "size": "2.5",
          "priceINR": null
        },
        {
          "size": "Kg",
          "priceINR": 25230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1389/MOLYBDIC_ACID_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL3144",
      "chemicalName": "MOLYBDIC ACID AR/ACS",
      "purity": "85%",
      "casNo": "7782-91-4",
      "formula": "H₂MoO₄",
      "units": [
        {
          "size": "100",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 1500
        },
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "gm",
          "priceINR": 5890
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1390/MOLYBDIC_ACID_AR_ACS.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL3255",
      "chemicalName": "NITRIC ACID Pure",
      "purity": "69%",
      "casNo": "7697-37-2",
      "formula": "HNO₃",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 330
        },
        {
          "size": "2.5",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 980
        },
        {
          "size": "20",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 6870
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1362/NITRIC_ACID_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL3256",
      "chemicalName": "NITRIC ACID AR/ACS",
      "purity": "69%",
      "casNo": "7697-37-2",
      "formula": "HNO₃",
      "units": [
        {
          "size": "500",
          "priceINR": null
        },
        {
          "size": "ml",
          "priceINR": 360
        },
        {
          "size": "2.5",
          "priceINR": null
        },
        {
          "size": "L",
          "priceINR": 1080
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1363/NITRIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1378",
      "chemicalName": "PERCHLORIC ACID SOLUTION",
      "purity": "20%",
      "casNo": "7601-90-3",
      "formula": "HCIO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 870
        },
        {
          "size": "2.5L",
          "priceINR": 3710
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1378/PERCHLORIC_ACID_SOLUTION.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1367",
      "chemicalName": "PERCHLORIC ACID AR/ACS",
      "purity": "60%",
      "casNo": "7601-90-3",
      "formula": "HCIO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1360
        },
        {
          "size": "2.5L",
          "priceINR": 6520
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1367/PERCHLORIC_ACID_AR_ACS.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1377",
      "chemicalName": "PERCHLORIC ACID AR/ACS",
      "purity": "70%",
      "casNo": "7601-90-3",
      "formula": "HCIO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1550
        },
        {
          "size": "2.5L",
          "priceINR": 7070
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1377/PERCHLORIC_ACID_AR_ACS.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1392",
      "chemicalName": "PERIODIC ACID For Synthesis",
      "purity": "99%",
      "casNo": "10450-60-9",
      "formula": "H IO",
      "units": [
        {
          "size": "25gm",
          "priceINR": 780
        },
        {
          "size": "100gm",
          "priceINR": 2730
        },
        {
          "size": "500gm",
          "priceINR": 12950
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1392/PERIODIC_ACID_For_Synthesis.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1393",
      "chemicalName": "PERIODIC ACID AR",
      "purity": "99.50%",
      "casNo": "10450-60-9",
      "formula": "H IO",
      "units": [
        {
          "size": "25gm",
          "priceINR": 1000
        },
        {
          "size": "100gm",
          "priceINR": 3480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1393/PERIODIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1364",
      "chemicalName": "PHOSPHORIC ACID (ortho) Extra Pure",
      "purity": "85%",
      "casNo": "7664-38-2",
      "formula": "H PO",
      "units": [
        {
          "size": "250ml",
          "priceINR": 320
        },
        {
          "size": "500ml",
          "priceINR": 550
        },
        {
          "size": "2.5L",
          "priceINR": 2450
        },
        {
          "size": "5L",
          "priceINR": 4480
        },
        {
          "size": "30L",
          "priceINR": 24980
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1364/PHOSPHORIC_ACID__ortho__Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1405",
      "chemicalName": "PHOSPHORIC ACID (ortho) 88% AR",
      "purity": "88%",
      "casNo": "7664-38-2",
      "formula": "H PO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 640
        },
        {
          "size": "2.5L",
          "priceINR": 2760
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1405/PHOSPHORIC_ACID__ortho__88__AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1366",
      "chemicalName": "PHOSPHORIC ACID (ortho) 85% AR (For steel industry)",
      "purity": "85%",
      "casNo": "7664-38-2",
      "formula": "H PO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 710
        },
        {
          "size": "2.5L",
          "priceINR": 3110
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1366/PHOSPHORIC_ACID__ortho__85__AR__For_steel_industry_.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1391",
      "chemicalName": "PHOSPHORIC ACID (ortho) For HPLC & SPECTROSCOPY",
      "purity": "85%",
      "casNo": "7664-38-2",
      "formula": "H PO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 2110
        },
        {
          "size": "2.5L",
          "priceINR": 8590
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1391/PHOSPHORIC_ACID__ortho__For_HPLC___SPECTROSCOPY.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1365",
      "chemicalName": "PHOSPHORIC ACID (ortho) (Molecular Biology)",
      "purity": "85%",
      "casNo": "7664-38-2",
      "formula": "H PO",
      "units": [
        {
          "size": "250ml",
          "priceINR": 4480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1365/PHOSPHORIC_ACID__ortho___Molecular_Biology_.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1394",
      "chemicalName": "PHOSPHORIC ACID (meta) For Synthesis",
      "purity": "60%",
      "casNo": "37267-86-0",
      "formula": "HO P",
      "units": [
        {
          "size": "100gm",
          "priceINR": 970
        },
        {
          "size": "500gm",
          "priceINR": 3720
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1394/PHOSPHORIC_ACID__meta__For_Synthesis.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1395",
      "chemicalName": "PHOSPHORIC ACID (meta) AR",
      "purity": "60%",
      "casNo": "37267-86-0",
      "formula": "HO P",
      "units": [
        {
          "size": "100gm",
          "priceINR": 4190
        },
        {
          "size": "500gm",
          "priceINR": 13620
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1395/PHOSPHORIC_ACID__meta__AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1396",
      "chemicalName": "PHOSPHOTUNGSTIC ACID (hydrate) Extra Pure",
      "purity": "-",
      "casNo": "12501-23-4",
      "formula": "H [P(W O ) ]xH O",
      "units": [
        {
          "size": "100gm",
          "priceINR": 1990
        },
        {
          "size": "500gm",
          "priceINR": 8970
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1396/PHOSPHOTUNGSTIC_ACID__hydrate__Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1397",
      "chemicalName": "PHOSPHOTUNGSTIC ACID AR (hydrate) AR",
      "purity": "-",
      "casNo": "12501-23-4",
      "formula": "H [P(W O ) ]xH O",
      "units": [
        {
          "size": "25gm",
          "priceINR": 970
        },
        {
          "size": "100gm",
          "priceINR": 2480
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1397/PHOSPHOTUNGSTIC_ACID_AR__hydrate__AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1407",
      "chemicalName": "POLYPHOSPHORIC ACID (for synthesis)",
      "purity": "~85%",
      "casNo": "8017-16-1",
      "formula": "Hn+ PnO n+",
      "units": [
        {
          "size": "500gm",
          "priceINR": 800
        },
        {
          "size": "2.5Kg",
          "priceINR": 3420
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1407/POLYPHOSPHORIC_ACID__for_synthesis_.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1400",
      "chemicalName": "SULPHAMIC ACID (practical)",
      "purity": "99%",
      "casNo": "5329-14-6",
      "formula": "NH .SO H",
      "units": [
        {
          "size": "500gm",
          "priceINR": 320
        },
        {
          "size": "5Kg",
          "priceINR": 2580
        },
        {
          "size": "50Kg",
          "priceINR": 22540
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1400/SULPHAMIC_ACID__practical_.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1401",
      "chemicalName": "SULPHAMIC ACID AR",
      "purity": "99.50%",
      "casNo": "5329-14-6",
      "formula": "H NSO H",
      "units": [
        {
          "size": "100gm",
          "priceINR": 330
        },
        {
          "size": "500gm",
          "priceINR": 1340
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1401/SULPHAMIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1369",
      "chemicalName": "SULPHURIC ACID Sp. Gr. 1.835",
      "purity": "98%",
      "casNo": "7664-93-9",
      "formula": "H SO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 330
        },
        {
          "size": "2.5L",
          "priceINR": 1090
        },
        {
          "size": "5L",
          "priceINR": 1450
        },
        {
          "size": "20L",
          "priceINR": 5440
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1369/SULPHURIC_ACID_Sp__Gr__1_835.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1370",
      "chemicalName": "SULPHURIC ACID Sp. Gr. 1.84",
      "purity": "98%",
      "casNo": "7664-93-9",
      "formula": "H SO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 350
        },
        {
          "size": "2.5L",
          "priceINR": 1230
        },
        {
          "size": "5L",
          "priceINR": 1830
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1370/SULPHURIC_ACID_Sp__Gr__1_84.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL1381",
      "chemicalName": "SULPHURIC ACID Extra Pure",
      "purity": "10%",
      "casNo": "7664-93-9",
      "formula": "H SO",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1381/SULPHURIC_ACID_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL4411",
      "chemicalName": "SULPHURIC ACID For Synthesis",
      "purity": "20%",
      "casNo": "7664-93-9",
      "formula": "H SO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 300
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1368/SULPHURIC_ACID_For_Synthesis.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL4412",
      "chemicalName": "SULPHURIC ACID AR",
      "purity": "25%",
      "casNo": "7664-93-9",
      "formula": "H SO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1130
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1380/SULPHURIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL4413",
      "chemicalName": "SULPHURIC ACID AR",
      "purity": "40%",
      "casNo": "7664-93-9",
      "formula": "H SO",
      "units": [
        {
          "size": "500ml",
          "priceINR": 1110
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1379/SULPHURIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL5405",
      "chemicalName": "HYDROCHLORIC ACID AR",
      "purity": "37%",
      "casNo": "7647-01-0",
      "formula": "HCI",
      "units": [
        {
          "size": "5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1358/HYDROCHLORIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL5406",
      "chemicalName": "HYDROCHLORIC ACID 10% Extra Pure",
      "purity": "-",
      "casNo": "7647-01-0",
      "formula": "HCl",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1371/HYDROCHLORIC_ACID_10__Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL5407",
      "chemicalName": "HYDROCHLORIC ACID Extra Pure",
      "purity": "37%",
      "casNo": "7647-01-0",
      "formula": "HCI",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        },
        {
          "size": "5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1372/HYDROCHLORIC_ACID_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL5413",
      "chemicalName": "HYPOPHOSPHORUS ACID AR",
      "purity": "50%",
      "casNo": "6303-21-5",
      "formula": "HPH O",
      "units": [
        {
          "size": "500ml",
          "priceINR": null
        },
        {
          "size": "2.5L",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1387/HYPOPHOSPHORUS_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL5414",
      "chemicalName": "IODIC ACID AR",
      "purity": "99.50%",
      "casNo": "7782-68-5",
      "formula": "HIO",
      "units": [
        {
          "size": "100gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1388/IODIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL5423",
      "chemicalName": "SELENOUS ACID Extra Pure",
      "purity": "93%",
      "casNo": "7783-00-8",
      "formula": "H SeO",
      "units": [
        {
          "size": "100gm",
          "priceINR": null
        },
        {
          "size": "1Kg",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1398/SELENOUS_ACID_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL5424",
      "chemicalName": "SILICOTUNGSTIC ACID AR",
      "purity": "99.50%",
      "casNo": "12027-43-9",
      "formula": "H (SiW O )x H O",
      "units": [
        {
          "size": "25gm",
          "priceINR": null
        },
        {
          "size": "100gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1399/SILICOTUNGSTIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL5427",
      "chemicalName": "TUNGSTIC ACID AR",
      "purity": "99%",
      "casNo": "7783-03-1",
      "formula": "H WO",
      "units": [
        {
          "size": "100gm",
          "priceINR": null
        },
        {
          "size": "1Kg",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1402/TUNGSTIC_ACID_AR.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    },
    {
      "articleNo": "AL5430",
      "chemicalName": "PHOSPHORUS ACID CRYSTALS Extra Pure",
      "purity": "98%",
      "casNo": "13598-36-2",
      "formula": "H PO",
      "units": [
        {
          "size": "500gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1406/PHOSPHORUS_ACID_CRYSTALS_Extra_Pure.html",
      "COA": "https://ww",
      "category": "Acids-Inorganic"
    }
  ],
  "amino-acids-&-derivatives": [
    {
      "articleNo": "AL0076",
      "chemicalName": "N-ACETYL-L-CYSTEINE For Biochemistry",
      "purity": "99%",
      "casNo": "616-91-1",
      "formula": "C₆H₉NO₃S",
      "units": [
        {
          "size": "10gm",
          "priceINR": 800
        },
        {
          "size": "100gm",
          "priceINR": 7170
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1814/NACETYL-L-CYSTEINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1814/NACETYL-L-CYSTEINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0101",
      "chemicalName": "N-ACETYL-DL-TRYPTOPHAN For Biochemistry",
      "purity": "99%",
      "casNo": "87-32-1",
      "formula": "C₁₁H₁₁NO₂",
      "units": [
        {
          "size": "25gm",
          "priceINR": 4570
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1815/NACETYL-DL-TRYPTOPHAN_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1815/NACETYL-DL-TRYPTOPHAN_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0143",
      "chemicalName": "β-ALANINE For Biochemistry",
      "purity": "99%",
      "casNo": "107-95-9",
      "formula": "C₃H₇NO₂",
      "units": [
        {
          "size": "25gm",
          "priceINR": 440
        },
        {
          "size": "100gm",
          "priceINR": 1490
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1816/_beta_-ALANINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1816/_beta_-ALANINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0144",
      "chemicalName": "D-ALANINE For Biochemistry",
      "purity": "99%",
      "casNo": "338-69-2",
      "formula": "C₃H₇NO₂",
      "units": [
        {
          "size": "1gm",
          "priceINR": 400
        },
        {
          "size": "5gm",
          "priceINR": 1820
        },
        {
          "size": "25gm",
          "priceINR": 8180
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1817/DALANINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1817/DALANINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0145",
      "chemicalName": "DL-ALANINE For Biochemistry",
      "purity": "99%",
      "casNo": "302-72-7",
      "formula": "C₃H₇NO₂",
      "units": [
        {
          "size": "25gm",
          "priceINR": 360
        },
        {
          "size": "100gm",
          "priceINR": 1170
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1818/DLALANINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1818/DLALANINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0146",
      "chemicalName": "L-ALANINE For Biochemistry",
      "purity": "99%",
      "casNo": "56-41-7",
      "formula": "C₃H₇NO₂",
      "units": [
        {
          "size": "25gm",
          "priceINR": 390
        },
        {
          "size": "100gm",
          "priceINR": 1350
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1819/LALANINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1819/LALANINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0243",
      "chemicalName": "GLYCINE Extra Pure",
      "purity": "98.50%",
      "casNo": "56-40-6",
      "formula": "NH₂CH₂COOH",
      "units": [
        {
          "size": "250gm",
          "priceINR": 410
        },
        {
          "size": "500gm",
          "priceINR": 770
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1846/GLYCINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1846/GLYCINE_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0244",
      "chemicalName": "GLYCINE AR/ACS",
      "purity": "99%",
      "casNo": "56-40-6",
      "formula": "H₂NCH₂COOH",
      "units": [
        {
          "size": "100gm",
          "priceINR": 250
        },
        {
          "size": "500gm",
          "priceINR": 1000
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1847/GLYCINE_AR_ACS.html",
      "COA": "https://www.alphachemika.co/chemical/1847/GLYCINE_AR_ACS.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0254",
      "chemicalName": "3-AMINOBENZOIC ACID For Synthesis",
      "purity": "98%",
      "casNo": "99-05-8",
      "formula": "C₆H₇NO₂",
      "units": [
        {
          "size": "100gm",
          "priceINR": 780
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1821/3-AMINOBENZOIC_ACID_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/chemical/1821/3-AMINOBENZOIC_ACID_For_Synthesis.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0255",
      "chemicalName": "4-AMINOBENZOIC ACID Extra Pure",
      "purity": "99%",
      "casNo": "150-13-0",
      "formula": "C₆H₇NO₂",
      "units": [
        {
          "size": "100gm",
          "priceINR": 700
        },
        {
          "size": "500gm",
          "priceINR": 2100
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1822/4-AMINOBENZOIC_ACID_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1822/4-AMINOBENZOIC_ACID_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0266",
      "chemicalName": "4-AMINO BUTYRIC ACID For Biochemistry",
      "purity": "98%",
      "casNo": "56-12-2",
      "formula": "C₄H₉NO₂",
      "units": [
        {
          "size": "25gm",
          "priceINR": 1170
        },
        {
          "size": "100gm",
          "priceINR": 3710
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1823/4-AMINO_BUTYRIC_ACID_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1823/4-AMINO_BUTYRIC_ACID_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0267",
      "chemicalName": "6-AMINO CAPROIC ACID For Biochemistry",
      "purity": "99%",
      "casNo": "60-32-2",
      "formula": "C₆H₁₁NO₂",
      "units": [
        {
          "size": "100gm",
          "priceINR": 1810
        },
        {
          "size": "500gm",
          "priceINR": 8340
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1878/6-AMINO_CAPROIC_ACID_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1878/6-AMINO_CAPROIC_ACID_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0489",
      "chemicalName": "L-ARGININE For Biochemistry",
      "purity": "99%",
      "casNo": "74-79-3",
      "formula": "C₆H₁₄N₄O₂",
      "units": [
        {
          "size": "25gm",
          "priceINR": 270
        },
        {
          "size": "100gm",
          "priceINR": 850
        },
        {
          "size": "500gm",
          "priceINR": 3830
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1824/LARGININE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1824/LARGININE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0490",
      "chemicalName": "L-ARGININE MONOHYDROCHLORIDE For Biochemistry",
      "purity": "99%",
      "casNo": "1119-34-2",
      "formula": "C₆H₁₄ClN₃O₂",
      "units": [
        {
          "size": "25gm",
          "priceINR": 300
        },
        {
          "size": "100gm",
          "priceINR": 1030
        },
        {
          "size": "500gm",
          "priceINR": 4340
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1825/LARGININE_MONOHYDROCHLORIDE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1825/LARGININE_MONOHYDROCHLORIDE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0505",
      "chemicalName": "L-ASPARGINE MONOHYDRATE AR (For Biochemistry)",
      "purity": "99%",
      "casNo": "5794-13-8",
      "formula": "C₄H₈N₂O₄·H₂O",
      "units": [
        {
          "size": "25gm",
          "priceINR": 340
        },
        {
          "size": "100gm",
          "priceINR": 1050
        },
        {
          "size": "500gm",
          "priceINR": 4690
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1826/LASPARGINE_MONOHYDRATE_AR__For_Biochemistry_.html",
      "COA": "https://www.alphachemika.co/chemical/1826/LASPARGINE_MONOHYDRATE_AR__For_Biochemistry_.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0507",
      "chemicalName": "DL-ASPARTIC ACID Extra Pure",
      "purity": "99%",
      "casNo": "617-45-8",
      "formula": "C₄H₇NO₄",
      "units": [
        {
          "size": "25gm",
          "priceINR": 190
        },
        {
          "size": "100gm",
          "priceINR": 620
        },
        {
          "size": "500gm",
          "priceINR": 2360
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1827/DLASPARTIC_ACID_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1827/DLASPARTIC_ACID_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL0508",
      "chemicalName": "L-ASPARTIC ACID For Biochemistry",
      "purity": "98.50%",
      "casNo": "56-84-8",
      "formula": "C₄H₇NO₄",
      "units": [
        {
          "size": "25gm",
          "priceINR": 170
        },
        {
          "size": "100gm",
          "priceINR": 460
        },
        {
          "size": "500gm",
          "priceINR": 2060
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1828/LASPARTIC_ACID_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1828/LASPARTIC_ACID_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1409",
      "chemicalName": "L-CITRULLINE For Biochemistry",
      "purity": "99%",
      "casNo": "372-75-8",
      "formula": "C₆H₁₄N₄O₃",
      "units": [
        {
          "size": "10gm",
          "priceINR": 1230
        },
        {
          "size": "25gm",
          "priceINR": 2750
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1829/LCITRULLINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1829/LCITRULLINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1539",
      "chemicalName": "CREATINE MONOHYDRATE Extra Pure",
      "purity": "99%",
      "casNo": "6020-87-7",
      "formula": "C₄H₉N₃O₂·H₂O",
      "units": [
        {
          "size": "25gm",
          "priceINR": 270
        },
        {
          "size": "100gm",
          "priceINR": 870
        },
        {
          "size": "500gm",
          "priceINR": 3060
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1830/CREATINE_MONOHYDRATE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1830/CREATINE_MONOHYDRATE_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1541",
      "chemicalName": "CREATININE Extra Pure",
      "purity": "99%",
      "casNo": "60-27-5",
      "formula": "C₄H₇N₃O₃",
      "units": [
        {
          "size": "25gm",
          "priceINR": 690
        },
        {
          "size": "100gm",
          "priceINR": 2060
        },
        {
          "size": "500gm",
          "priceINR": 8870
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1831/CREATININE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1831/CREATININE_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1542",
      "chemicalName": "CREATININE AR",
      "purity": "99%",
      "casNo": "60-27-5",
      "formula": "C₄H₇N₃O₃",
      "units": [
        {
          "size": "25gm",
          "priceINR": 740
        },
        {
          "size": "100gm",
          "priceINR": 2590
        },
        {
          "size": "500gm",
          "priceINR": 10370
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1832/CREATININE_AR.html",
      "COA": "https://www.alphachemika.co/chemical/1832/CREATININE_AR.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1543",
      "chemicalName": "CREATININE HYDROCHLORIDE For Biochemistry",
      "purity": "-",
      "casNo": "19230-81-0",
      "formula": "C₄H₇N₃O₃·HCl",
      "units": [
        {
          "size": "25gm",
          "priceINR": 740
        },
        {
          "size": "100gm",
          "priceINR": 2520
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1833/CREATININE_HYDROCHLORIDE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1833/CREATININE_HYDROCHLORIDE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1544",
      "chemicalName": "CREATININE ZINC CHLORIDE Extra Pure",
      "purity": "99%",
      "casNo": "62708-52-5",
      "formula": "C₄H₇ClN₃O₂·Zn",
      "units": [
        {
          "size": "10gm",
          "priceINR": 1620
        },
        {
          "size": "25gm",
          "priceINR": 3660
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1834/CREATININE_ZINC_CHLORIDE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1834/CREATININE_ZINC_CHLORIDE_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1613",
      "chemicalName": "L-CYSTEINE For Biochemistry",
      "purity": "99%",
      "casNo": "52-90-4",
      "formula": "C₆H₁₄N₄O₃",
      "units": [
        {
          "size": "5gm",
          "priceINR": 190
        },
        {
          "size": "25gm",
          "priceINR": 550
        },
        {
          "size": "100gm",
          "priceINR": 1940
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1835/LCYSTEINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1835/LCYSTEINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1614",
      "chemicalName": "L-CYSTEINE HYDROCHLORIDE MONOHYDRATE For Biochemistry",
      "purity": "98.50%",
      "casNo": "7048-04-6",
      "formula": "C₆H₁₄ClNO₃·H₂O",
      "units": [
        {
          "size": "25gm",
          "priceINR": 310
        },
        {
          "size": "100gm",
          "priceINR": 1110
        },
        {
          "size": "500gm",
          "priceINR": 3500
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1836/LCYSTEINE_HYDROCHLORIDE_MONOHYDRATE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1836/LCYSTEINE_HYDROCHLORIDE_MONOHYDRATE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1616",
      "chemicalName": "L-CYSTINE For Biochemistry",
      "purity": "98.50%",
      "casNo": "56-89-3",
      "formula": "C₆H₁₄N₄O₂S₂",
      "units": [
        {
          "size": "25gm",
          "priceINR": 340
        },
        {
          "size": "100gm",
          "priceINR": 1040
        },
        {
          "size": "500gm",
          "priceINR": 4940
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1837/LCYSTINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1837/LCYSTINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1617",
      "chemicalName": "CYTIDINE For Biochemistry",
      "purity": "99%",
      "casNo": "65-46-3",
      "formula": "C₉H₁₃N₃O₅",
      "units": [
        {
          "size": "5gm",
          "priceINR": 680
        },
        {
          "size": "25gm",
          "priceINR": 2040
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1838/CYTIDINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1838/CYTIDINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1655",
      "chemicalName": "3-5'-DIAMINOBENZOIC ACID For Synthesis",
      "purity": "98%",
      "casNo": "535-87-5",
      "formula": "C₆H₈N₂O₂",
      "units": [
        {
          "size": "100gm",
          "priceINR": 1910
        },
        {
          "size": "500gm",
          "priceINR": 7140
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1839/3-5_-DIAMINOBENZOIC_ACID_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/chemical/1839/3-5_-DIAMINOBENZOIC_ACID_For_Synthesis.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1789",
      "chemicalName": "DL-DOPA For Biochemistry",
      "purity": "99%",
      "casNo": "63-84-3",
      "formula": "C₉H₁₁NO₄",
      "units": [
        {
          "size": "5gm",
          "priceINR": 3030
        },
        {
          "size": "25gm",
          "priceINR": 5110
        },
        {
          "size": "100gm",
          "priceINR": 28430
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1841/DLDOPA_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1841/DLDOPA_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL1790",
      "chemicalName": "L-DOPA For Biochemistry",
      "purity": "99+%",
      "casNo": "59-92-7",
      "formula": "C₉H₁₁NO₄",
      "units": [
        {
          "size": "25gm",
          "priceINR": 8880
        },
        {
          "size": "100gm",
          "priceINR": 28870
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1840/LDOPA_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1840/LDOPA_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2297",
      "chemicalName": "L-GLUTAMIC ACID For Bacteriology",
      "purity": "99%",
      "casNo": "58-86-0",
      "formula": "C₅H₉NO₄",
      "units": [
        {
          "size": "100gm",
          "priceINR": 260
        },
        {
          "size": "500gm",
          "priceINR": 960
        },
        {
          "size": "5Kg",
          "priceINR": 8620
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1842/LGLUTAMIC_ACID_For_Bacteriology.html",
      "COA": "https://www.alphachemika.co/chemical/1842/LGLUTAMIC_ACID_For_Bacteriology.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2298",
      "chemicalName": "L-GLUTAMINE For Biochemistry",
      "purity": "99%",
      "casNo": "56-85-9",
      "formula": "C₅H₁₀N₂O₃",
      "units": [
        {
          "size": "25gm",
          "priceINR": 350
        },
        {
          "size": "100gm",
          "priceINR": 990
        },
        {
          "size": "500gm",
          "priceINR": 4600
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1844/LGLUTAMINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1844/LGLUTAMINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2304",
      "chemicalName": "GLUTATHIONE (REDUCED) For Biochemistry",
      "purity": "99%",
      "casNo": "70-18-8",
      "formula": "C₁₀H₁₆N₃O₆S₂",
      "units": [
        {
          "size": "1gm",
          "priceINR": 370
        },
        {
          "size": "5gm",
          "priceINR": 1530
        },
        {
          "size": "25gm",
          "priceINR": 6150
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1845/GLUTATHIONE__REDUCED__For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1845/GLUTATHIONE__REDUCED__For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2315",
      "chemicalName": "GLYCINE ETHYL ESTER HYDROCHLORIDE For Synthesis",
      "purity": "99%",
      "casNo": "623-33-6",
      "formula": "C₄H₉NO₂·HCl",
      "units": [
        {
          "size": "100gm",
          "priceINR": 980
        },
        {
          "size": "500gm",
          "priceINR": 3930
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1848/GLYCINE_ETHYL_ESTER_HYDROCHLORIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/chemical/1848/GLYCINE_ETHYL_ESTER_HYDROCHLORIDE_For_Synthesis.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2410",
      "chemicalName": "HIPPURIC ACID For Synthesis",
      "purity": "98%",
      "casNo": "495-69-2",
      "formula": "C₉H₉NO₂",
      "units": [
        {
          "size": "100gm",
          "priceINR": 550
        },
        {
          "size": "500gm",
          "priceINR": 1860
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1849/HIPPURIC_ACID_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/chemical/1849/HIPPURIC_ACID_For_Synthesis.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2411",
      "chemicalName": "HIPPURIC ACID SODIUM SALT Extra Pure",
      "purity": "99%",
      "casNo": "532-94-5",
      "formula": "C₉H₉NO₂·Na",
      "units": [
        {
          "size": "25gm",
          "priceINR": 1990
        },
        {
          "size": "100gm",
          "priceINR": 6950
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1850/HIPPURIC_ACID_SODIUM_SALT_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1850/HIPPURIC_ACID_SODIUM_SALT_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2414",
      "chemicalName": "L-HISTIDINE For Biochemistry",
      "purity": "99%",
      "casNo": "71-00-1",
      "formula": "C₆H₁₇N₃O₂",
      "units": [
        {
          "size": "25gm",
          "priceINR": 860
        },
        {
          "size": "100gm",
          "priceINR": 3270
        },
        {
          "size": "500gm",
          "priceINR": 14360
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1851/LHISTIDINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1851/LHISTIDINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2415",
      "chemicalName": "L-HISTIDINE MONOHYDROCHLORIDE MONOHYDRATE For Biochemistry",
      "purity": "99%",
      "casNo": "5934-29-2",
      "formula": "C₆H₁₉ClN₃O₄·H₂O",
      "units": [
        {
          "size": "25gm",
          "priceINR": 1190
        },
        {
          "size": "100gm",
          "priceINR": 4600
        },
        {
          "size": "500gm",
          "priceINR": 18400
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1852/LHISTIDINE_MONOHYDROCHLORIDE_MONOHYDRATE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1852/LHISTIDINE_MONOHYDROCHLORIDE_MONOHYDRATE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2513",
      "chemicalName": "L-HYDROXYPROLINE For Synthesis",
      "purity": "99%",
      "casNo": "51-35-4",
      "formula": "C₆H₁₁NO₃",
      "units": [
        {
          "size": "5gm",
          "priceINR": 490
        },
        {
          "size": "25gm",
          "priceINR": 1620
        },
        {
          "size": "100gm",
          "priceINR": 5230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1853/LHYDROXYPROLINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/chemical/1853/LHYDROXYPROLINE_For_Synthesis.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2535",
      "chemicalName": "IMINODIACETIC ACID For Synthesis",
      "purity": "98%",
      "casNo": "142-73-4",
      "formula": "C₄H₈NO₄",
      "units": [
        {
          "size": "250gm",
          "priceINR": 2360
        },
        {
          "size": "500gm",
          "priceINR": 4370
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1854/IMINODIACETIC_ACID_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/chemical/1854/IMINODIACETIC_ACID_For_Synthesis.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2732",
      "chemicalName": "L-ISOLEUCINE For Biochemistry",
      "purity": "99%",
      "casNo": "73-32-5",
      "formula": "C6H13NO2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 470
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1856/LISOLEUCINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1856/LISOLEUCINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2733",
      "chemicalName": "L-LEUCINE For Biochemistry",
      "purity": "99%",
      "casNo": "61-90-5",
      "formula": "C6H13NO2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 300
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1857/LLEUCINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1857/LLEUCINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2734",
      "chemicalName": "DL-nor-LEUCINE For Biochemistry",
      "purity": "99+%",
      "casNo": "616-06-8",
      "formula": "C6H13NO2",
      "units": [
        {
          "size": "10gm",
          "priceINR": 1610
        },
        {
          "size": "25gm",
          "priceINR": 2750
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1858/DLnor-LEUCINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1858/DLnor-LEUCINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2798",
      "chemicalName": "L-LYSINE MONOHYDROCHLORIDE For Synthesis",
      "purity": "98.50%",
      "casNo": "657-27-2",
      "formula": "C6H13ClN2O2",
      "units": [
        {
          "size": "100gm",
          "priceINR": 280
        },
        {
          "size": "500gm",
          "priceINR": 1220
        },
        {
          "size": "5Kg",
          "priceINR": 10960
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1859/LLYSINE_MONOHYDROCHLORIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/chemical/1859/LLYSINE_MONOHYDROCHLORIDE_For_Synthesis.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2878",
      "chemicalName": "MANGANESE (II) ACETATE TETRAHYDRATE Extra Pure",
      "purity": "98.50%",
      "casNo": "6156-78-1",
      "formula": "(CH3COO)2Mn·4H2O",
      "units": [
        {
          "size": "500gm",
          "priceINR": 400
        },
        {
          "size": "5Kg",
          "priceINR": 3600
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1860/MANGANESE__II__ACETATE_TETRAHYDRATE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1860/MANGANESE__II__ACETATE_TETRAHYDRATE_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2995",
      "chemicalName": "DL-METHIONINE For Biochemistry",
      "purity": "99%",
      "casNo": "59-51-8",
      "formula": "C5H11NO2S",
      "units": [
        {
          "size": "100gm",
          "priceINR": 1100
        },
        {
          "size": "500gm",
          "priceINR": 5230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1862/DLMETHIONINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1862/DLMETHIONINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL2996",
      "chemicalName": "L-METHIONINE For Biochemistry",
      "purity": "99%",
      "casNo": "63-68-3",
      "formula": "C5H11NO2S",
      "units": [
        {
          "size": "25gm",
          "priceINR": 340
        },
        {
          "size": "100gm",
          "priceINR": 1180
        },
        {
          "size": "500gm",
          "priceINR": 5560
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1861/LMETHIONINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1861/LMETHIONINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL3357",
      "chemicalName": "L-ORNITHINE MONOHYDROCHLORIDE For Biochemistry",
      "purity": "99%",
      "casNo": "3184-13-2",
      "formula": "C5H12ClN3O2",
      "units": [
        {
          "size": "5gm",
          "priceINR": 210
        },
        {
          "size": "25gm",
          "priceINR": 740
        },
        {
          "size": "100gm",
          "priceINR": 2530
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1863/LORNITHINE_MONOHYDROCHLORIDE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1863/LORNITHINE_MONOHYDROCHLORIDE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL3485",
      "chemicalName": "L-PHENYLALANINE For Biochemistry",
      "purity": "99%",
      "casNo": "63-91-2",
      "formula": "C9H11NO2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 250
        },
        {
          "size": "100gm",
          "priceINR": 860
        },
        {
          "size": "500gm",
          "priceINR": 3490
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1864/LPHENYLALANINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1864/LPHENYLALANINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL3486",
      "chemicalName": "DL-PHENYLALANINE For Biochemistry",
      "purity": "99%",
      "casNo": "150-30-1",
      "formula": "C9H11NO2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 930
        },
        {
          "size": "100gm",
          "priceINR": 3250
        },
        {
          "size": "500gm",
          "priceINR": 14640
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1865/DLPHENYLALANINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1865/DLPHENYLALANINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL3488",
      "chemicalName": "n-PHENYLANTHRANILIC ACID AR",
      "purity": "97%",
      "casNo": "91-40-7",
      "formula": "C7H7NO2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 830
        },
        {
          "size": "100gm",
          "priceINR": 2940
        },
        {
          "size": "500gm",
          "priceINR": 13200
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1866/nPHENYLANTHRANILIC_ACID_AR.html",
      "COA": "https://www.alphachemika.co/chemical/1866/nPHENYLANTHRANILIC_ACID_AR.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL3808",
      "chemicalName": "L-PROLINE For Biochemistry",
      "purity": "99%",
      "casNo": "147-85-3",
      "formula": "C5H9NO2",
      "units": [
        {
          "size": "5gm",
          "priceINR": 110
        },
        {
          "size": "25gm",
          "priceINR": 380
        },
        {
          "size": "500gm",
          "priceINR": 4980
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1867/LPROLINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1867/LPROLINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL3974",
      "chemicalName": "L-SERINE For Biochemistry",
      "purity": "99%",
      "casNo": "56-45-1",
      "formula": "C3H7NO3",
      "units": [
        {
          "size": "5gm",
          "priceINR": 210
        },
        {
          "size": "25gm",
          "priceINR": 840
        },
        {
          "size": "100gm",
          "priceINR": 2530
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1868/LSERINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1868/LSERINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL3975",
      "chemicalName": "DL-SERINE Extra Pure",
      "purity": "99%",
      "casNo": "302-84-1",
      "formula": "C3H7NO3",
      "units": [
        {
          "size": "25gm",
          "priceINR": 1340
        },
        {
          "size": "100gm",
          "priceINR": 3700
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1869/DLSERINE_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1869/DLSERINE_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL4150",
      "chemicalName": "L-GLUTAMIC ACID MONO SODIUM SALT Extra Pure",
      "purity": "99%",
      "casNo": "6106-04-3",
      "formula": "C5H8NO4Na·H2O",
      "units": [
        {
          "size": "100gm",
          "priceINR": 150
        },
        {
          "size": "500gm",
          "priceINR": 520
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1843/LGLUTAMIC_ACID_MONO_SODIUM_SALT_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1843/LGLUTAMIC_ACID_MONO_SODIUM_SALT_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL4445",
      "chemicalName": "TAURINE For Synthesis",
      "purity": "99%",
      "casNo": "107-35-7",
      "formula": "C2H7NO3S",
      "units": [
        {
          "size": "25gm",
          "priceINR": 610
        },
        {
          "size": "100gm",
          "priceINR": 1980
        },
        {
          "size": "1Kg",
          "priceINR": 13400
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1870/TAURINE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/chemical/1870/TAURINE_For_Synthesis.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL4550",
      "chemicalName": "DL-THREONINE For Biochemistry",
      "purity": "99%",
      "casNo": "80-68-2",
      "formula": "C4H9NO3",
      "units": [
        {
          "size": "25gm",
          "priceINR": 3600
        },
        {
          "size": "100gm",
          "priceINR": 13390
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1872/DLTHREONINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1872/DLTHREONINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL4551",
      "chemicalName": "L-THREONINE For Biochemistry",
      "purity": "99%",
      "casNo": "72-19-5",
      "formula": "C4H9NO3",
      "units": [
        {
          "size": "5gm",
          "priceINR": 150
        },
        {
          "size": "25gm",
          "priceINR": 600
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1871/LTHREONINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1871/LTHREONINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL4705",
      "chemicalName": "L-TRYPTOPHAN For Biochemistry",
      "purity": "99%",
      "casNo": "73-22-3",
      "formula": "C11H12N2O2",
      "units": [
        {
          "size": "5gm",
          "priceINR": 270
        },
        {
          "size": "25gm",
          "priceINR": 1050
        },
        {
          "size": "100gm",
          "priceINR": 3690
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1873/LTRYPTOPHAN_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1873/LTRYPTOPHAN_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL4706",
      "chemicalName": "DL-TRYPTOPHAN For Biochemistry",
      "purity": "99%",
      "casNo": "73-22-3",
      "formula": "C11H12N2O2",
      "units": [
        {
          "size": "25gm",
          "priceINR": 1900
        },
        {
          "size": "100gm",
          "priceINR": 6350
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1874/DLTRYPTOPHAN_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1874/DLTRYPTOPHAN_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL4725",
      "chemicalName": "L-TYROSINE For Biochemistry",
      "purity": "99%",
      "casNo": "60-18-4",
      "formula": "C9H11NO3",
      "units": [
        {
          "size": "25gm",
          "priceINR": 320
        },
        {
          "size": "100gm",
          "priceINR": 1100
        },
        {
          "size": "500gm",
          "priceINR": 4830
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1875/LTYROSINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1875/LTYROSINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL4754",
      "chemicalName": "L-VALINE For Biochemistry",
      "purity": "99%",
      "casNo": "72-18-4",
      "formula": "C5H11NO2",
      "units": [
        {
          "size": "5gm",
          "priceINR": 130
        },
        {
          "size": "25gm",
          "priceINR": 380
        },
        {
          "size": "100gm",
          "priceINR": 1130
        },
        {
          "size": "500gm",
          "priceINR": 4230
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1876/LVALINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1876/LVALINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL4755",
      "chemicalName": "DL-VALINE For Biochemistry",
      "purity": "99%",
      "casNo": "516-06-3",
      "formula": "C5H11NO2",
      "units": [
        {
          "size": "5gm",
          "priceINR": 190
        },
        {
          "size": "25gm",
          "priceINR": 730
        },
        {
          "size": "100gm",
          "priceINR": 2660
        },
        {
          "size": "500gm",
          "priceINR": 10800
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1877/DLVALINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1877/DLVALINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL5538",
      "chemicalName": "AMINO ACID KIT OF 24 ITEMS SET",
      "purity": "-",
      "casNo": "NA",
      "formula": "-",
      "units": [
        {
          "size": "1",
          "priceINR": null
        },
        {
          "size": "Set",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1820/AMINO_ACID_KIT_OF_24_ITEMS_SET.html",
      "COA": "https://www.alphachemika.co/chemical/1820/AMINO_ACID_KIT_OF_24_ITEMS_SET.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL5539",
      "chemicalName": "DL-ISOLEUCINE For Biochemistry",
      "purity": "99%",
      "casNo": "443-79-8",
      "formula": "C6H13NO2",
      "units": [
        {
          "size": "10gm",
          "priceINR": null
        },
        {
          "size": "25gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1855/DLISOLEUCINE_For_Biochemistry.html",
      "COA": "https://www.alphachemika.co/chemical/1855/DLISOLEUCINE_For_Biochemistry.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL5540",
      "chemicalName": "(S)-(-)-2-PYRROLIDONE-5-CARBOXYLIC ACID Extra Pure",
      "purity": "98%",
      "casNo": "98-79-3",
      "formula": "C5H9NO3",
      "units": [
        {
          "size": "25gm",
          "priceINR": null
        },
        {
          "size": "100gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1879/_S_-_2-PYRROLIDONE-5-CARBOXYLIC_ACID_Extra_Pure.html",
      "COA": "https://www.alphachemika.co/chemical/1879/_S_-_2-PYRROLIDONE-5-CARBOXYLIC_ACID_Extra_Pure.html",
      "category": "Amino Acids & Derivatives"
    },
    {
      "articleNo": "AL5541",
      "chemicalName": "TYRAMINE HYDROCHLORIDE For Synthesis",
      "purity": "98%",
      "casNo": "60-19-5",
      "formula": "C8H11NO2.HCl",
      "units": [
        {
          "size": "1gm",
          "priceINR": null
        },
        {
          "size": "5gm",
          "priceINR": null
        }
      ],
      "MSDS": "https://www.alphachemika.co/chemical/1880/TYRAMINE_HYDROCHLORIDE_For_Synthesis.html",
      "COA": "https://www.alphachemika.co/chemical/1880/TYRAMINE_HYDROCHLORIDE_For_Synthesis.html",
      "category": "Amino Acids & Derivatives"
    }
  ]
}

export default productsData
