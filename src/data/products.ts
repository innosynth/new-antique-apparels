export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  images: string[];
  fabricWeights: { value: string; label: string; description: string }[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  customizationOptions: { name: string }[];
  minOrder: number;
  tags: string[];
}

export const products: Product[] = [
  {
    "id": "collar-cut-and-sew-0",
    "name": "Ery0609",
    "sku": "ANT-COL-000",
    "category": "COLLAR CUT AND SEW",
    "description": "Premium collar cut and sew apparel manufactured with high quality 180 GSM fabric and precision stitching. Ideal for corporate wear, events, and promotions. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR CUT AND SEW/_ERY0609.webp",
      "/product-images/COLLAR CUT AND SEW/_ERY0610.webp",
      "/product-images/COLLAR CUT AND SEW/_ERY0612.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-cut-and-sew-1",
    "name": "Ery0633",
    "sku": "ANT-COL-001",
    "category": "COLLAR CUT AND SEW",
    "description": "Premium collar cut and sew apparel manufactured with high quality 180 GSM fabric and precision stitching. Ideal for corporate wear, events, and promotions. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR CUT AND SEW/_ERY0633.webp",
      "/product-images/COLLAR CUT AND SEW/_ERY0634.webp",
      "/product-images/COLLAR CUT AND SEW/_ERY0648.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-cut-and-sew-2",
    "name": "Ery0649",
    "sku": "ANT-COL-002",
    "category": "COLLAR CUT AND SEW",
    "description": "Premium collar cut and sew apparel manufactured with high quality 180 GSM fabric and precision stitching. Ideal for corporate wear, events, and promotions. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR CUT AND SEW/_ERY0649.webp",
      "/product-images/COLLAR CUT AND SEW/_ERY0653.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-print-pock-0",
    "name": "Ery9037",
    "sku": "ANT-COL-003",
    "category": "COLLAR PRINT POCK",
    "description": "Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR PRINT POCK/_ERY9037.webp",
      "/product-images/COLLAR PRINT POCK/_ERY9039.webp",
      "/product-images/COLLAR PRINT POCK/_ERY9041.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-print-pock-1",
    "name": "Ery9039",
    "sku": "ANT-COL-004",
    "category": "COLLAR PRINT POCK",
    "description": "Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR PRINT POCK/_ERY9037.webp",
      "/product-images/COLLAR PRINT POCK/_ERY9039.webp",
      "/product-images/COLLAR PRINT POCK/_ERY9041.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-print-pock-2",
    "name": "Ery9041",
    "sku": "ANT-COL-005",
    "category": "COLLAR PRINT POCK",
    "description": "Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR PRINT POCK/_ERY9037.webp",
      "/product-images/COLLAR PRINT POCK/_ERY9039.webp",
      "/product-images/COLLAR PRINT POCK/_ERY9041.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-show-patti-0",
    "name": "Ery0478",
    "sku": "ANT-COL-006",
    "category": "COLLAR SHOW PATTI",
    "description": "Elegant collar t-shirts with show patti design. Available in 110 GSM and 140 GSM fabric options. Perfect for casual and semi-formal occasions. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR SHOW PATTI/_ERY0478.webp",
      "/product-images/COLLAR SHOW PATTI/_ERY0479.webp",
      "/product-images/COLLAR SHOW PATTI/_ERY0481.webp"
    ],
    "fabricWeights": [
      {
        "value": "110",
        "label": "110 GSM",
        "description": "Light weight"
      },
      {
        "value": "140",
        "label": "140 GSM",
        "description": "Medium weight"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-show-patti-1",
    "name": "Ery0479",
    "sku": "ANT-COL-007",
    "category": "COLLAR SHOW PATTI",
    "description": "Elegant collar t-shirts with show patti design. Available in 110 GSM and 140 GSM fabric options. Perfect for casual and semi-formal occasions. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR SHOW PATTI/_ERY0478.webp",
      "/product-images/COLLAR SHOW PATTI/_ERY0479.webp",
      "/product-images/COLLAR SHOW PATTI/_ERY0481.webp"
    ],
    "fabricWeights": [
      {
        "value": "110",
        "label": "110 GSM",
        "description": "Light weight"
      },
      {
        "value": "140",
        "label": "140 GSM",
        "description": "Medium weight"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-show-patti-2",
    "name": "Ery0481",
    "sku": "ANT-COL-008",
    "category": "COLLAR SHOW PATTI",
    "description": "Elegant collar t-shirts with show patti design. Available in 110 GSM and 140 GSM fabric options. Perfect for casual and semi-formal occasions. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR SHOW PATTI/_ERY0478.webp",
      "/product-images/COLLAR SHOW PATTI/_ERY0479.webp",
      "/product-images/COLLAR SHOW PATTI/_ERY0481.webp"
    ],
    "fabricWeights": [
      {
        "value": "110",
        "label": "110 GSM",
        "description": "Light weight"
      },
      {
        "value": "140",
        "label": "140 GSM",
        "description": "Medium weight"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-0",
    "name": "Ery0336",
    "sku": "ANT-COL-009",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0336.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0338.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0340.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-1",
    "name": "Ery0341",
    "sku": "ANT-COL-010",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0341.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0344.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0346.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-2",
    "name": "Ery0347",
    "sku": "ANT-COL-011",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0347.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0348.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0463.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-3",
    "name": "Ery0464",
    "sku": "ANT-COL-012",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0464.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0466.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0473.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-4",
    "name": "Ery0474",
    "sku": "ANT-COL-013",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0474.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0476.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0604.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-5",
    "name": "Ery0605",
    "sku": "ANT-COL-014",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0605.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0607.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0622.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-6",
    "name": "Ery0623",
    "sku": "ANT-COL-015",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0623.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0625.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0643.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-7",
    "name": "Ery0644",
    "sku": "ANT-COL-016",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0644.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0646.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0664.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-8",
    "name": "Ery0666",
    "sku": "ANT-COL-017",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0666.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0669.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0670.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-9",
    "name": "Ery0671",
    "sku": "ANT-COL-018",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY0671.webp",
      "/product-images/COLLAR T-SHIRT/_ERY0673.webp",
      "/product-images/COLLAR T-SHIRT/_ERY9043.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-t-shirt-10",
    "name": "Ery9044",
    "sku": "ANT-COL-019",
    "category": "COLLAR T-SHIRT",
    "description": "Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR T-SHIRT/_ERY9044.webp",
      "/product-images/COLLAR T-SHIRT/_ERY9047.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-with-pock-0",
    "name": "Ery0325",
    "sku": "ANT-COL-020",
    "category": "COLLAR WITH POCK",
    "description": "Comfortable collar t-shirts with pocket. Made with 180 GSM premium fabric. Practical and stylish design for daily wear. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR WITH POCK/_ERY0325.webp",
      "/product-images/COLLAR WITH POCK/_ERY0326.webp",
      "/product-images/COLLAR WITH POCK/_ERY0327.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-with-pock-1",
    "name": "Ery0329",
    "sku": "ANT-COL-021",
    "category": "COLLAR WITH POCK",
    "description": "Comfortable collar t-shirts with pocket. Made with 180 GSM premium fabric. Practical and stylish design for daily wear. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR WITH POCK/_ERY0329.webp",
      "/product-images/COLLAR WITH POCK/_ERY0459.webp",
      "/product-images/COLLAR WITH POCK/_ERY0460.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-with-pock-2",
    "name": "Ery0462",
    "sku": "ANT-COL-022",
    "category": "COLLAR WITH POCK",
    "description": "Comfortable collar t-shirts with pocket. Made with 180 GSM premium fabric. Practical and stylish design for daily wear. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR WITH POCK/_ERY0462.webp",
      "/product-images/COLLAR WITH POCK/_ERY0638.webp",
      "/product-images/COLLAR WITH POCK/_ERY0639.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "collar-with-pock-3",
    "name": "Ery0641",
    "sku": "ANT-COL-023",
    "category": "COLLAR WITH POCK",
    "description": "Comfortable collar t-shirts with pocket. Made with 180 GSM premium fabric. Practical and stylish design for daily wear. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR WITH POCK/_ERY0641.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "Premium Quality"
    ]
  },
  {
    "id": "crew-collar-t-shirt-0",
    "name": "Ery0395",
    "sku": "ANT-CRE-024",
    "category": "CREW COLLAR T-SHIRT",
    "description": "Crew collar t-shirts with modern design. Made with 180 GSM soft fabric for comfortable all-day wear. Custom GSM available on request.",
    "images": [
      "/product-images/CREW COLLAR T-SHIRT/_ERY0395.webp",
      "/product-images/CREW COLLAR T-SHIRT/_ERY0396.webp",
      "/product-images/CREW COLLAR T-SHIRT/_ERY0398.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "CREW",
      "Premium Quality"
    ]
  },
  {
    "id": "crew-collar-t-shirt-1",
    "name": "Ery0396",
    "sku": "ANT-CRE-025",
    "category": "CREW COLLAR T-SHIRT",
    "description": "Crew collar t-shirts with modern design. Made with 180 GSM soft fabric for comfortable all-day wear. Custom GSM available on request.",
    "images": [
      "/product-images/CREW COLLAR T-SHIRT/_ERY0395.webp",
      "/product-images/CREW COLLAR T-SHIRT/_ERY0396.webp",
      "/product-images/CREW COLLAR T-SHIRT/_ERY0398.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "CREW",
      "Premium Quality"
    ]
  },
  {
    "id": "crew-collar-t-shirt-2",
    "name": "Ery0398",
    "sku": "ANT-CRE-026",
    "category": "CREW COLLAR T-SHIRT",
    "description": "Crew collar t-shirts with modern design. Made with 180 GSM soft fabric for comfortable all-day wear. Custom GSM available on request.",
    "images": [
      "/product-images/CREW COLLAR T-SHIRT/_ERY0395.webp",
      "/product-images/CREW COLLAR T-SHIRT/_ERY0396.webp",
      "/product-images/CREW COLLAR T-SHIRT/_ERY0398.webp"
    ],
    "fabricWeights": [
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "CREW",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-0",
    "name": "Ery8981",
    "sku": "ANT-FUL-027",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY8981.webp",
      "/product-images/FULL SUBLIMATION/_ERY8982.webp",
      "/product-images/FULL SUBLIMATION/_ERY8984.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-1",
    "name": "Ery8985",
    "sku": "ANT-FUL-028",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY8985.webp",
      "/product-images/FULL SUBLIMATION/_ERY8986.webp",
      "/product-images/FULL SUBLIMATION/_ERY8988.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-2",
    "name": "Ery8989",
    "sku": "ANT-FUL-029",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY8989.webp",
      "/product-images/FULL SUBLIMATION/_ERY8990.webp",
      "/product-images/FULL SUBLIMATION/_ERY8992.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-3",
    "name": "Ery8994",
    "sku": "ANT-FUL-030",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY8994.webp",
      "/product-images/FULL SUBLIMATION/_ERY8996.webp",
      "/product-images/FULL SUBLIMATION/_ERY8998.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-4",
    "name": "Ery9002",
    "sku": "ANT-FUL-031",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY9002.webp",
      "/product-images/FULL SUBLIMATION/_ERY9003.webp",
      "/product-images/FULL SUBLIMATION/_ERY9005.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-5",
    "name": "Ery9006",
    "sku": "ANT-FUL-032",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY9006.webp",
      "/product-images/FULL SUBLIMATION/_ERY9008.webp",
      "/product-images/FULL SUBLIMATION/_ERY9010.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-6",
    "name": "Ery9011",
    "sku": "ANT-FUL-033",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY9011.webp",
      "/product-images/FULL SUBLIMATION/_ERY9012.webp",
      "/product-images/FULL SUBLIMATION/_ERY9014.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-7",
    "name": "Ery9029",
    "sku": "ANT-FUL-034",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY9029.webp",
      "/product-images/FULL SUBLIMATION/_ERY9030.webp",
      "/product-images/FULL SUBLIMATION/_ERY9032.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-8",
    "name": "Ery9033",
    "sku": "ANT-FUL-035",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY9033.webp",
      "/product-images/FULL SUBLIMATION/_ERY9034.webp",
      "/product-images/FULL SUBLIMATION/_ERY9036.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-9",
    "name": "Ery9054",
    "sku": "ANT-FUL-036",
    "category": "FULL SUBLIMATION",
    "description": "Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.",
    "images": [
      "/product-images/FULL SUBLIMATION/_ERY9054.webp",
      "/product-images/FULL SUBLIMATION/_ERY9057.webp",
      "/product-images/FULL SUBLIMATION/_ERY9058.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "Premium Quality"
    ]
  },
  {
    "id": "full-sublimation-round-neck-0",
    "name": "Ery0424",
    "sku": "ANT-FUL-037",
    "category": "FULL SUBLIMATION ROUND NECK",
    "description": "Round neck t-shirts with full sublimation printing. Stunning designs with superior color retention.",
    "images": [
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0424.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0425.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0428.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "ROUND NECK"
    ]
  },
  {
    "id": "full-sublimation-round-neck-1",
    "name": "Ery0482",
    "sku": "ANT-FUL-038",
    "category": "FULL SUBLIMATION ROUND NECK",
    "description": "Round neck t-shirts with full sublimation printing. Stunning designs with superior color retention.",
    "images": [
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0482.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0483.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0485.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "ROUND NECK"
    ]
  },
  {
    "id": "full-sublimation-round-neck-2",
    "name": "Ery0531",
    "sku": "ANT-FUL-039",
    "category": "FULL SUBLIMATION ROUND NECK",
    "description": "Round neck t-shirts with full sublimation printing. Stunning designs with superior color retention.",
    "images": [
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0531.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0532.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0534.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "ROUND NECK"
    ]
  },
  {
    "id": "full-sublimation-round-neck-3",
    "name": "Ery0537",
    "sku": "ANT-FUL-040",
    "category": "FULL SUBLIMATION ROUND NECK",
    "description": "Round neck t-shirts with full sublimation printing. Stunning designs with superior color retention.",
    "images": [
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0537.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0538.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0541.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "ROUND NECK"
    ]
  },
  {
    "id": "full-sublimation-round-neck-4",
    "name": "Ery0542",
    "sku": "ANT-FUL-041",
    "category": "FULL SUBLIMATION ROUND NECK",
    "description": "Round neck t-shirts with full sublimation printing. Stunning designs with superior color retention.",
    "images": [
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0542.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0543.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0545.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "ROUND NECK"
    ]
  },
  {
    "id": "full-sublimation-round-neck-5",
    "name": "Ery0563",
    "sku": "ANT-FUL-042",
    "category": "FULL SUBLIMATION ROUND NECK",
    "description": "Round neck t-shirts with full sublimation printing. Stunning designs with superior color retention.",
    "images": [
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0563.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0564.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0566.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "ROUND NECK"
    ]
  },
  {
    "id": "full-sublimation-round-neck-6",
    "name": "Ery0571",
    "sku": "ANT-FUL-043",
    "category": "FULL SUBLIMATION ROUND NECK",
    "description": "Round neck t-shirts with full sublimation printing. Stunning designs with superior color retention.",
    "images": [
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0571.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0572.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0574.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "ROUND NECK"
    ]
  },
  {
    "id": "full-sublimation-round-neck-7",
    "name": "Ery0598",
    "sku": "ANT-FUL-044",
    "category": "FULL SUBLIMATION ROUND NECK",
    "description": "Round neck t-shirts with full sublimation printing. Stunning designs with superior color retention.",
    "images": [
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0598.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0599.webp",
      "/product-images/FULL SUBLIMATION ROUND NECK/_ERY0602.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SUBLIMATION",
      "ROUND NECK"
    ]
  },
  {
    "id": "ganesha-t-shirt-0",
    "name": "Ery9015",
    "sku": "ANT-GAN-045",
    "category": "GANESHA T-SHIRT",
    "description": "Traditional Ganesha-themed t-shirts with beautiful designs. Perfect for festive occasions and devotees.",
    "images": [
      "/product-images/GANESHA T-SHIRT/_ERY9015.webp",
      "/product-images/GANESHA T-SHIRT/_ERY9018.webp",
      "/product-images/GANESHA T-SHIRT/_ERY9020.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "ganesha-t-shirt-1",
    "name": "Ery9021",
    "sku": "ANT-GAN-046",
    "category": "GANESHA T-SHIRT",
    "description": "Traditional Ganesha-themed t-shirts with beautiful designs. Perfect for festive occasions and devotees.",
    "images": [
      "/product-images/GANESHA T-SHIRT/_ERY9021.webp",
      "/product-images/GANESHA T-SHIRT/_ERY9022.webp",
      "/product-images/GANESHA T-SHIRT/_ERY9024.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "kids-printed-t-shirt-0",
    "name": "Ery0220",
    "sku": "ANT-KID-047",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Fun and colorful printed t-shirts for kids. Soft, comfortable fabric safe for children.",
    "images": [
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0220.webp",
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0227.webp",
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0230.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "KIDS",
      "PRINTED"
    ]
  },
  {
    "id": "kids-printed-t-shirt-1",
    "name": "Ery0232",
    "sku": "ANT-KID-048",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Fun and colorful printed t-shirts for kids. Soft, comfortable fabric safe for children.",
    "images": [
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0232.webp",
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0233.webp",
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0235.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "KIDS",
      "PRINTED"
    ]
  },
  {
    "id": "kids-printed-t-shirt-2",
    "name": "Ery0236",
    "sku": "ANT-KID-049",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Fun and colorful printed t-shirts for kids. Soft, comfortable fabric safe for children.",
    "images": [
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0236.webp",
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0240.webp",
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0244.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "KIDS",
      "PRINTED"
    ]
  },
  {
    "id": "kids-printed-t-shirt-3",
    "name": "Ery0247",
    "sku": "ANT-KID-050",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Fun and colorful printed t-shirts for kids. Soft, comfortable fabric safe for children.",
    "images": [
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0247.webp",
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0251.webp",
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0252.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "KIDS",
      "PRINTED"
    ]
  },
  {
    "id": "kids-printed-t-shirt-4",
    "name": "Ery0256",
    "sku": "ANT-KID-051",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Fun and colorful printed t-shirts for kids. Soft, comfortable fabric safe for children.",
    "images": [
      "/product-images/KIDS PRINTED T-SHIRT/_ERY0256.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "KIDS",
      "PRINTED"
    ]
  },
  {
    "id": "ls-printed-0",
    "name": "Ery0387",
    "sku": "ANT-LS -052",
    "category": "LS PRINTED",
    "description": "Long sleeve printed t-shirts with premium quality prints. Perfect for cooler weather and outdoor activities.",
    "images": [
      "/product-images/LS PRINTED/_ERY0387.webp",
      "/product-images/LS PRINTED/_ERY0388.webp",
      "/product-images/LS PRINTED/_ERY0391.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "LONG SLEEVE",
      "PRINTED"
    ]
  },
  {
    "id": "ls-printed-1",
    "name": "Ery0506",
    "sku": "ANT-LS -053",
    "category": "LS PRINTED",
    "description": "Long sleeve printed t-shirts with premium quality prints. Perfect for cooler weather and outdoor activities.",
    "images": [
      "/product-images/LS PRINTED/_ERY0506.webp",
      "/product-images/LS PRINTED/_ERY0507.webp",
      "/product-images/LS PRINTED/_ERY0510.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "LONG SLEEVE",
      "PRINTED"
    ]
  },
  {
    "id": "ls-printed-2",
    "name": "Ery0521",
    "sku": "ANT-LS -054",
    "category": "LS PRINTED",
    "description": "Long sleeve printed t-shirts with premium quality prints. Perfect for cooler weather and outdoor activities.",
    "images": [
      "/product-images/LS PRINTED/_ERY0521.webp",
      "/product-images/LS PRINTED/_ERY0523.webp",
      "/product-images/LS PRINTED/_ERY0525.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "LONG SLEEVE",
      "PRINTED"
    ]
  },
  {
    "id": "nirmalknit-round-neck-0",
    "name": "Ery0431",
    "sku": "ANT-NIR-055",
    "category": "NIRMALKNIT ROUND NECK",
    "description": "Premium Nirmalknit round neck t-shirts with superior fabric quality. Comfortable and durable for daily wear.",
    "images": [
      "/product-images/NIRMALKNIT ROUND NECK/_ERY0431.webp",
      "/product-images/NIRMALKNIT ROUND NECK/_ERY0432.webp",
      "/product-images/NIRMALKNIT ROUND NECK/_ERY0436.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "nirmalknit-round-neck-1",
    "name": "Ery0442",
    "sku": "ANT-NIR-056",
    "category": "NIRMALKNIT ROUND NECK",
    "description": "Premium Nirmalknit round neck t-shirts with superior fabric quality. Comfortable and durable for daily wear.",
    "images": [
      "/product-images/NIRMALKNIT ROUND NECK/_ERY0442.webp",
      "/product-images/NIRMALKNIT ROUND NECK/_ERY0444.webp",
      "/product-images/NIRMALKNIT ROUND NECK/_ERY0446.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "nirmalknit-round-neck-2",
    "name": "Ery0495",
    "sku": "ANT-NIR-057",
    "category": "NIRMALKNIT ROUND NECK",
    "description": "Premium Nirmalknit round neck t-shirts with superior fabric quality. Comfortable and durable for daily wear.",
    "images": [
      "/product-images/NIRMALKNIT ROUND NECK/_ERY0495.webp",
      "/product-images/NIRMALKNIT ROUND NECK/_ERY0497.webp",
      "/product-images/NIRMALKNIT ROUND NECK/_ERY0499.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "nirmalknit-v-neck-0",
    "name": "Ery0511",
    "sku": "ANT-NIR-058",
    "category": "NIRMALKNIT V NECK",
    "description": "Elegant Nirmalknit V-neck t-shirts with premium finish. Stylish design for modern fashion.",
    "images": [
      "/product-images/NIRMALKNIT V NECK/_ERY0511.webp",
      "/product-images/NIRMALKNIT V NECK/_ERY0512.webp",
      "/product-images/NIRMALKNIT V NECK/_ERY0516.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "V NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "nirmalknit-v-neck-1",
    "name": "Ery0512",
    "sku": "ANT-NIR-059",
    "category": "NIRMALKNIT V NECK",
    "description": "Elegant Nirmalknit V-neck t-shirts with premium finish. Stylish design for modern fashion.",
    "images": [
      "/product-images/NIRMALKNIT V NECK/_ERY0511.webp",
      "/product-images/NIRMALKNIT V NECK/_ERY0512.webp",
      "/product-images/NIRMALKNIT V NECK/_ERY0516.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "V NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "nirmalknit-v-neck-2",
    "name": "Ery0516",
    "sku": "ANT-NIR-060",
    "category": "NIRMALKNIT V NECK",
    "description": "Elegant Nirmalknit V-neck t-shirts with premium finish. Stylish design for modern fashion.",
    "images": [
      "/product-images/NIRMALKNIT V NECK/_ERY0511.webp",
      "/product-images/NIRMALKNIT V NECK/_ERY0512.webp",
      "/product-images/NIRMALKNIT V NECK/_ERY0516.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "V NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-0",
    "name": "Ery0268",
    "sku": "ANT-PRI-061",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0268.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0269.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0271.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-1",
    "name": "Ery0272",
    "sku": "ANT-PRI-062",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0272.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0274.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0281.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-2",
    "name": "Ery0284",
    "sku": "ANT-PRI-063",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0284.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0286.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0292.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-3",
    "name": "Ery0293",
    "sku": "ANT-PRI-064",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0293.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0295.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0296.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-4",
    "name": "Ery0300",
    "sku": "ANT-PRI-065",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0300.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0303.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0304.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-5",
    "name": "Ery0305",
    "sku": "ANT-PRI-066",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0305.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0306.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0307.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-6",
    "name": "Ery0318",
    "sku": "ANT-PRI-067",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0318.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0321.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0323.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-7",
    "name": "Ery0369",
    "sku": "ANT-PRI-068",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0369.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0370.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0371.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-8",
    "name": "Ery0372",
    "sku": "ANT-PRI-069",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0372.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0438.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0439.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-9",
    "name": "Ery0441",
    "sku": "ANT-PRI-070",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0441.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0467.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0468.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-10",
    "name": "Ery0471",
    "sku": "ANT-PRI-071",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0471.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0500.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0501.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-11",
    "name": "Ery0504",
    "sku": "ANT-PRI-072",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0504.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0517.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0518.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-12",
    "name": "Ery0520",
    "sku": "ANT-PRI-073",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0520.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0549.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0550.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-13",
    "name": "Ery0552",
    "sku": "ANT-PRI-074",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0552.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0567.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0568.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-14",
    "name": "Ery0570",
    "sku": "ANT-PRI-075",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0570.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0582.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0583.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-15",
    "name": "Ery0585",
    "sku": "ANT-PRI-076",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0585.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0614.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0615.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-16",
    "name": "Ery0617",
    "sku": "ANT-PRI-077",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0617.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0618.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0619.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-17",
    "name": "Ery0621",
    "sku": "ANT-PRI-078",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0621.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0628.webp",
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0629.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "printed-fabric-t-shirt-18",
    "name": "Ery0631",
    "sku": "ANT-PRI-079",
    "category": "PRINTED FABRIC T-SHIRT",
    "description": "Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.",
    "images": [
      "/product-images/PRINTED FABRIC T-SHIRT/_ERY0631.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "PRINTED",
      "Premium Quality"
    ]
  },
  {
    "id": "promotional-collar-0",
    "name": "Ery0330",
    "sku": "ANT-PRO-080",
    "category": "PROMOTIONAL COLLAR",
    "description": "Collar t-shirts designed for promotional campaigns. Cost-effective with great quality for bulk orders.",
    "images": [
      "/product-images/PROMOTIONAL COLLAR/_ERY0330.webp",
      "/product-images/PROMOTIONAL COLLAR/_ERY0332.webp",
      "/product-images/PROMOTIONAL COLLAR/_ERY0333.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-collar-1",
    "name": "Ery0334",
    "sku": "ANT-PRO-081",
    "category": "PROMOTIONAL COLLAR",
    "description": "Collar t-shirts designed for promotional campaigns. Cost-effective with great quality for bulk orders.",
    "images": [
      "/product-images/PROMOTIONAL COLLAR/_ERY0334.webp",
      "/product-images/PROMOTIONAL COLLAR/_ERY0654.webp",
      "/product-images/PROMOTIONAL COLLAR/_ERY0655.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-collar-2",
    "name": "Ery0658",
    "sku": "ANT-PRO-082",
    "category": "PROMOTIONAL COLLAR",
    "description": "Collar t-shirts designed for promotional campaigns. Cost-effective with great quality for bulk orders.",
    "images": [
      "/product-images/PROMOTIONAL COLLAR/_ERY0658.webp",
      "/product-images/PROMOTIONAL COLLAR/_ERY9048.webp",
      "/product-images/PROMOTIONAL COLLAR/_ERY9049.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-collar-3",
    "name": "Ery9051",
    "sku": "ANT-PRO-083",
    "category": "PROMOTIONAL COLLAR",
    "description": "Collar t-shirts designed for promotional campaigns. Cost-effective with great quality for bulk orders.",
    "images": [
      "/product-images/PROMOTIONAL COLLAR/_ERY9051.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "COLLAR",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-0",
    "name": "Ery0350",
    "sku": "ANT-PRO-084",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0350.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0351.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0352.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-1",
    "name": "Ery0353",
    "sku": "ANT-PRO-085",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0353.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0354.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0356.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-2",
    "name": "Ery0357",
    "sku": "ANT-PRO-086",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0357.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0374.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0375.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-3",
    "name": "Ery0376",
    "sku": "ANT-PRO-087",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0376.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0378.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0382.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-4",
    "name": "Ery0384",
    "sku": "ANT-PRO-088",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0384.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0386.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0408.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-5",
    "name": "Ery0409",
    "sku": "ANT-PRO-089",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0409.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0415.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0557.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-6",
    "name": "Ery0558",
    "sku": "ANT-PRO-090",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0558.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0560.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0577.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-7",
    "name": "Ery0578",
    "sku": "ANT-PRO-091",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0578.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0581.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0592.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-8",
    "name": "Ery0594",
    "sku": "ANT-PRO-092",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0594.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY0596.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY9025.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "promotional-round-t-shirt-9",
    "name": "Ery9026",
    "sku": "ANT-PRO-093",
    "category": "PROMOTIONAL ROUND T-SHIRT",
    "description": "Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.",
    "images": [
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY9026.webp",
      "/product-images/PROMOTIONAL ROUND T-SHIRT/_ERY9028.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "PROMOTIONAL"
    ]
  },
  {
    "id": "round-cut-and-sew-0",
    "name": "Ery0399",
    "sku": "ANT-ROU-094",
    "category": "ROUND CUT AND SEW",
    "description": "Premium round cut and sew t-shirts with precision tailoring. Comfortable fit and durable stitching.",
    "images": [
      "/product-images/ROUND CUT AND SEW/_ERY0399.webp",
      "/product-images/ROUND CUT AND SEW/_ERY0400.webp",
      "/product-images/ROUND CUT AND SEW/_ERY0402.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND",
      "Premium Quality"
    ]
  },
  {
    "id": "round-cut-and-sew-1",
    "name": "Ery0400",
    "sku": "ANT-ROU-095",
    "category": "ROUND CUT AND SEW",
    "description": "Premium round cut and sew t-shirts with precision tailoring. Comfortable fit and durable stitching.",
    "images": [
      "/product-images/ROUND CUT AND SEW/_ERY0399.webp",
      "/product-images/ROUND CUT AND SEW/_ERY0400.webp",
      "/product-images/ROUND CUT AND SEW/_ERY0402.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND",
      "Premium Quality"
    ]
  },
  {
    "id": "round-cut-and-sew-2",
    "name": "Ery0402",
    "sku": "ANT-ROU-096",
    "category": "ROUND CUT AND SEW",
    "description": "Premium round cut and sew t-shirts with precision tailoring. Comfortable fit and durable stitching.",
    "images": [
      "/product-images/ROUND CUT AND SEW/_ERY0399.webp",
      "/product-images/ROUND CUT AND SEW/_ERY0400.webp",
      "/product-images/ROUND CUT AND SEW/_ERY0402.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND",
      "Premium Quality"
    ]
  },
  {
    "id": "salina-round-neck-0",
    "name": "Ery0358",
    "sku": "ANT-SAL-097",
    "category": "SALINA ROUND NECK",
    "description": "Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SALINA ROUND NECK/_ERY0358.webp",
      "/product-images/SALINA ROUND NECK/_ERY0359.webp",
      "/product-images/SALINA ROUND NECK/_ERY0360.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "salina-round-neck-1",
    "name": "Ery0404",
    "sku": "ANT-SAL-098",
    "category": "SALINA ROUND NECK",
    "description": "Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SALINA ROUND NECK/_ERY0404.webp",
      "/product-images/SALINA ROUND NECK/_ERY0405.webp",
      "/product-images/SALINA ROUND NECK/_ERY0407.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "salina-round-neck-2",
    "name": "Ery0420",
    "sku": "ANT-SAL-099",
    "category": "SALINA ROUND NECK",
    "description": "Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SALINA ROUND NECK/_ERY0420.webp",
      "/product-images/SALINA ROUND NECK/_ERY0421.webp",
      "/product-images/SALINA ROUND NECK/_ERY0423.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "salina-round-neck-3",
    "name": "Ery0526",
    "sku": "ANT-SAL-100",
    "category": "SALINA ROUND NECK",
    "description": "Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SALINA ROUND NECK/_ERY0526.webp",
      "/product-images/SALINA ROUND NECK/_ERY0527.webp",
      "/product-images/SALINA ROUND NECK/_ERY0530.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "salina-round-neck-4",
    "name": "Ery0587",
    "sku": "ANT-SAL-101",
    "category": "SALINA ROUND NECK",
    "description": "Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SALINA ROUND NECK/_ERY0587.webp",
      "/product-images/SALINA ROUND NECK/_ERY0588.webp",
      "/product-images/SALINA ROUND NECK/_ERY0590.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "salina-round-neck-5",
    "name": "Ery0660",
    "sku": "ANT-SAL-102",
    "category": "SALINA ROUND NECK",
    "description": "Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SALINA ROUND NECK/_ERY0660.webp",
      "/product-images/SALINA ROUND NECK/_ERY0661.webp",
      "/product-images/SALINA ROUND NECK/_ERY0663.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "ROUND NECK",
      "Premium Quality"
    ]
  },
  {
    "id": "slub-t-shirt-0",
    "name": "Ery0416",
    "sku": "ANT-SLU-103",
    "category": "SLUB T-SHIRT",
    "description": "Slub t-shirts with unique textured fabric. Modern look with comfortable fit.",
    "images": [
      "/product-images/SLUB T-SHIRT/_ERY0416.webp",
      "/product-images/SLUB T-SHIRT/_ERY0417.webp",
      "/product-images/SLUB T-SHIRT/_ERY0419.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SLUB",
      "Premium Quality"
    ]
  },
  {
    "id": "slub-t-shirt-1",
    "name": "Ery0448",
    "sku": "ANT-SLU-104",
    "category": "SLUB T-SHIRT",
    "description": "Slub t-shirts with unique textured fabric. Modern look with comfortable fit.",
    "images": [
      "/product-images/SLUB T-SHIRT/_ERY0448.webp",
      "/product-images/SLUB T-SHIRT/_ERY0449.webp",
      "/product-images/SLUB T-SHIRT/_ERY0453.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SLUB",
      "Premium Quality"
    ]
  },
  {
    "id": "slub-t-shirt-2",
    "name": "Ery0454",
    "sku": "ANT-SLU-105",
    "category": "SLUB T-SHIRT",
    "description": "Slub t-shirts with unique textured fabric. Modern look with comfortable fit.",
    "images": [
      "/product-images/SLUB T-SHIRT/_ERY0454.webp",
      "/product-images/SLUB T-SHIRT/_ERY0455.webp",
      "/product-images/SLUB T-SHIRT/_ERY0457.webp"
    ],
    "fabricWeights": [
      {
        "value": "160",
        "label": "160 GSM",
        "description": "Standard weight"
      },
      {
        "value": "180",
        "label": "180 GSM",
        "description": "Premium heavy"
      },
      {
        "value": "custom",
        "label": "Custom GSM",
        "description": "Specify your preferred GSM"
      }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      },
      {
        "name": "Fluorescent Green",
        "hex": "#39FF14"
      },
      {
        "name": "Gold Yellow",
        "hex": "#FFD700"
      },
      {
        "name": "Royal Blue",
        "hex": "#4169E1"
      },
      {
        "name": "Baby Pink",
        "hex": "#F4C2C2"
      },
      {
        "name": "Sky Blue",
        "hex": "#87CEEB"
      },
      {
        "name": "Light Gray",
        "hex": "#D3D3D3"
      },
      {
        "name": "Black",
        "hex": "#000000"
      },
      {
        "name": "Orange",
        "hex": "#FF6600"
      },
      {
        "name": "Red",
        "hex": "#FF0000"
      },
      {
        "name": "Lemon Yellow",
        "hex": "#FFF44F"
      },
      {
        "name": "Flag Green",
        "hex": "#138808"
      },
      {
        "name": "Fluorescent Orange",
        "hex": "#FF5F1F"
      },
      {
        "name": "Navy Blue",
        "hex": "#000080"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "customizationOptions": [
      {
        "name": "Sublimation"
      },
      {
        "name": "Table Print"
      },
      {
        "name": "Embroidery"
      }
    ],
    "minOrder": 100,
    "tags": [
      "SLUB",
      "Premium Quality"
    ]
  }
];

export const categories = ["All", "COLLAR CUT AND SEW", "COLLAR PRINT POCK", "COLLAR SHOW PATTI", "COLLAR T-SHIRT", "COLLAR WITH POCK", "CREW COLLAR T-SHIRT", "FULL SUBLIMATION", "FULL SUBLIMATION ROUND NECK", "GANESHA T-SHIRT", "KIDS PRINTED T-SHIRT", "LS PRINTED", "NIRMALKNIT ROUND NECK", "NIRMALKNIT V NECK", "PRINTED FABRIC T-SHIRT", "PROMOTIONAL COLLAR", "PROMOTIONAL ROUND T-SHIRT", "ROUND CUT AND SEW", "SALINA ROUND NECK", "SLUB T-SHIRT"];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
};
