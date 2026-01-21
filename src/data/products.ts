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
    "id": "collar-240-gsm-0",
    "name": "1.1",
    "sku": "ANT-COL-000",
    "category": "COLLAR 240 GSM",
    "description": "Premium collar 240 gsm apparel.",
    "images": [
      "/product-images/COLLAR 240 GSM/1.1.webp",
      "/product-images/COLLAR 240 GSM/1.2.webp",
      "/product-images/COLLAR 240 GSM/1.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "collar-240-gsm-1",
    "name": "2.1",
    "sku": "ANT-COL-001",
    "category": "COLLAR 240 GSM",
    "description": "Premium collar 240 gsm apparel.",
    "images": [
      "/product-images/COLLAR 240 GSM/2.1.webp",
      "/product-images/COLLAR 240 GSM/2.2.webp",
      "/product-images/COLLAR 240 GSM/2.3.webp",
      "/product-images/COLLAR 240 GSM/2.4.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "collar-budgeted-0",
    "name": "1.1",
    "sku": "ANT-COL-002",
    "category": "COLLAR BUDGETED",
    "description": "Premium collar budgeted apparel.",
    "images": [
      "/product-images/COLLAR BUDGETED/1.1.webp",
      "/product-images/COLLAR BUDGETED/1.2.webp",
      "/product-images/COLLAR BUDGETED/1.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "collar-budgeted-1",
    "name": "2.1",
    "sku": "ANT-COL-003",
    "category": "COLLAR BUDGETED",
    "description": "Premium collar budgeted apparel.",
    "images": [
      "/product-images/COLLAR BUDGETED/2.1.webp",
      "/product-images/COLLAR BUDGETED/2.2.webp",
      "/product-images/COLLAR BUDGETED/2.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "collar-budgeted-2",
    "name": "3.1",
    "sku": "ANT-COL-004",
    "category": "COLLAR BUDGETED",
    "description": "Premium collar budgeted apparel.",
    "images": [
      "/product-images/COLLAR BUDGETED/3.1.webp",
      "/product-images/COLLAR BUDGETED/3.2.webp",
      "/product-images/COLLAR BUDGETED/3.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "collar-print-pock-0",
    "name": "1",
    "sku": "ANT-COL-005",
    "category": "COLLAR PRINT POCK",
    "description": "Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR PRINT POCK/1.webp"
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
    "name": "2",
    "sku": "ANT-COL-006",
    "category": "COLLAR PRINT POCK",
    "description": "Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR PRINT POCK/2.webp"
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
    "name": "3",
    "sku": "ANT-COL-007",
    "category": "COLLAR PRINT POCK",
    "description": "Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR PRINT POCK/3.webp"
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
    "name": "1.1",
    "sku": "ANT-COL-008",
    "category": "COLLAR WITH POCK",
    "description": "Comfortable collar t-shirts with pocket. Made with 180 GSM premium fabric. Practical and stylish design for daily wear. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR WITH POCK/1.1.webp",
      "/product-images/COLLAR WITH POCK/1.2.webp",
      "/product-images/COLLAR WITH POCK/1.3.webp",
      "/product-images/COLLAR WITH POCK/1.4.webp"
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
    "name": "2.1",
    "sku": "ANT-COL-009",
    "category": "COLLAR WITH POCK",
    "description": "Comfortable collar t-shirts with pocket. Made with 180 GSM premium fabric. Practical and stylish design for daily wear. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR WITH POCK/2.1.webp",
      "/product-images/COLLAR WITH POCK/2.2.webp",
      "/product-images/COLLAR WITH POCK/2.3.webp"
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
    "name": "3.1",
    "sku": "ANT-COL-010",
    "category": "COLLAR WITH POCK",
    "description": "Comfortable collar t-shirts with pocket. Made with 180 GSM premium fabric. Practical and stylish design for daily wear. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR WITH POCK/3.1.webp",
      "/product-images/COLLAR WITH POCK/3.2.webp",
      "/product-images/COLLAR WITH POCK/3.3.webp"
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
    "id": "contrast-collar-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-CON-011",
    "category": "CONTRAST COLLAR T-SHIRT",
    "description": "Premium contrast collar t-shirt apparel.",
    "images": [
      "/product-images/CONTRAST COLLAR T-SHIRT/1.1.webp",
      "/product-images/CONTRAST COLLAR T-SHIRT/1.2.webp",
      "/product-images/CONTRAST COLLAR T-SHIRT/1.3.webp",
      "/product-images/CONTRAST COLLAR T-SHIRT/1.4.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "contrast-collar-t-shirt-1",
    "name": "2.1",
    "sku": "ANT-CON-012",
    "category": "CONTRAST COLLAR T-SHIRT",
    "description": "Premium contrast collar t-shirt apparel.",
    "images": [
      "/product-images/CONTRAST COLLAR T-SHIRT/2.1.webp",
      "/product-images/CONTRAST COLLAR T-SHIRT/2.2.webp",
      "/product-images/CONTRAST COLLAR T-SHIRT/2.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "crew-collar-t-shirt-0",
    "name": "1",
    "sku": "ANT-CRE-013",
    "category": "CREW COLLAR T-SHIRT",
    "description": "Crew collar t-shirts with modern design. Made with 180 GSM soft fabric for comfortable all-day wear. Custom GSM available on request.",
    "images": [
      "/product-images/CREW COLLAR T-SHIRT/1.webp"
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
    "name": "2",
    "sku": "ANT-CRE-014",
    "category": "CREW COLLAR T-SHIRT",
    "description": "Crew collar t-shirts with modern design. Made with 180 GSM soft fabric for comfortable all-day wear. Custom GSM available on request.",
    "images": [
      "/product-images/CREW COLLAR T-SHIRT/2.webp"
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
    "name": "3",
    "sku": "ANT-CRE-015",
    "category": "CREW COLLAR T-SHIRT",
    "description": "Crew collar t-shirts with modern design. Made with 180 GSM soft fabric for comfortable all-day wear. Custom GSM available on request.",
    "images": [
      "/product-images/CREW COLLAR T-SHIRT/3.webp"
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
    "id": "customized-collar-cut-and-sew-0",
    "name": "1.1",
    "sku": "ANT-CUS-016",
    "category": "CUSTOMIZED COLLAR CUT AND SEW",
    "description": "Premium customized collar cut and sew apparel.",
    "images": [
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/1.1.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/1.2.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/1.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-collar-cut-and-sew-1",
    "name": "2.1",
    "sku": "ANT-CUS-017",
    "category": "CUSTOMIZED COLLAR CUT AND SEW",
    "description": "Premium customized collar cut and sew apparel.",
    "images": [
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/2.1.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/2.2.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/2.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-collar-cut-and-sew-2",
    "name": "3.1",
    "sku": "ANT-CUS-018",
    "category": "CUSTOMIZED COLLAR CUT AND SEW",
    "description": "Premium customized collar cut and sew apparel.",
    "images": [
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/3.1.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/3.2.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/3.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-cut-and-sew-t-shirt-0",
    "name": "1",
    "sku": "ANT-CUS-019",
    "category": "CUSTOMIZED CUT AND SEW T-SHIRT",
    "description": "Premium customized cut and sew t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED CUT AND SEW T-SHIRT/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-cut-and-sew-t-shirt-1",
    "name": "2",
    "sku": "ANT-CUS-020",
    "category": "CUSTOMIZED CUT AND SEW T-SHIRT",
    "description": "Premium customized cut and sew t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED CUT AND SEW T-SHIRT/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-cut-and-sew-t-shirt-2",
    "name": "3",
    "sku": "ANT-CUS-021",
    "category": "CUSTOMIZED CUT AND SEW T-SHIRT",
    "description": "Premium customized cut and sew t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED CUT AND SEW T-SHIRT/3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-ganesha-0",
    "name": "1.1",
    "sku": "ANT-CUS-022",
    "category": "CUSTOMIZED GANESHA",
    "description": "Premium customized ganesha apparel.",
    "images": [
      "/product-images/CUSTOMIZED GANESHA/1.1.webp",
      "/product-images/CUSTOMIZED GANESHA/1.2.webp",
      "/product-images/CUSTOMIZED GANESHA/1.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-ganesha-1",
    "name": "2.1",
    "sku": "ANT-CUS-023",
    "category": "CUSTOMIZED GANESHA",
    "description": "Premium customized ganesha apparel.",
    "images": [
      "/product-images/CUSTOMIZED GANESHA/2.1.webp",
      "/product-images/CUSTOMIZED GANESHA/2.2.webp",
      "/product-images/CUSTOMIZED GANESHA/2.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-promo-collar-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-CUS-024",
    "category": "CUSTOMIZED PROMO COLLAR T-SHIRT",
    "description": "Premium customized promo collar t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED PROMO COLLAR T-SHIRT/1.1.webp",
      "/product-images/CUSTOMIZED PROMO COLLAR T-SHIRT/1.2.webp",
      "/product-images/CUSTOMIZED PROMO COLLAR T-SHIRT/1.3.webp",
      "/product-images/CUSTOMIZED PROMO COLLAR T-SHIRT/1.4.webp",
      "/product-images/CUSTOMIZED PROMO COLLAR T-SHIRT/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-promo-collar-t-shirt-1",
    "name": "2",
    "sku": "ANT-CUS-025",
    "category": "CUSTOMIZED PROMO COLLAR T-SHIRT",
    "description": "Premium customized promo collar t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED PROMO COLLAR T-SHIRT/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-promo-collar-t-shirt-2",
    "name": "3",
    "sku": "ANT-CUS-026",
    "category": "CUSTOMIZED PROMO COLLAR T-SHIRT",
    "description": "Premium customized promo collar t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED PROMO COLLAR T-SHIRT/3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-round-neck-t-shirt-0",
    "name": "1",
    "sku": "ANT-CUS-027",
    "category": "CUSTOMIZED ROUND NECK T-SHIRT",
    "description": "Premium customized round neck t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED ROUND NECK T-SHIRT/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-round-neck-t-shirt-1",
    "name": "2",
    "sku": "ANT-CUS-028",
    "category": "CUSTOMIZED ROUND NECK T-SHIRT",
    "description": "Premium customized round neck t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED ROUND NECK T-SHIRT/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-round-neck-t-shirt-2",
    "name": "3",
    "sku": "ANT-CUS-029",
    "category": "CUSTOMIZED ROUND NECK T-SHIRT",
    "description": "Premium customized round neck t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED ROUND NECK T-SHIRT/3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-round-neck-t-shirt-3",
    "name": "4",
    "sku": "ANT-CUS-030",
    "category": "CUSTOMIZED ROUND NECK T-SHIRT",
    "description": "Premium customized round neck t-shirt apparel.",
    "images": [
      "/product-images/CUSTOMIZED ROUND NECK T-SHIRT/4.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-tipping-collar-0",
    "name": "1.1",
    "sku": "ANT-CUS-031",
    "category": "CUSTOMIZED TIPPING COLLAR",
    "description": "Premium customized tipping collar apparel.",
    "images": [
      "/product-images/CUSTOMIZED TIPPING COLLAR/1.1.webp",
      "/product-images/CUSTOMIZED TIPPING COLLAR/1.2.webp",
      "/product-images/CUSTOMIZED TIPPING COLLAR/1.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-tipping-collar-1",
    "name": "2.1",
    "sku": "ANT-CUS-032",
    "category": "CUSTOMIZED TIPPING COLLAR",
    "description": "Premium customized tipping collar apparel.",
    "images": [
      "/product-images/CUSTOMIZED TIPPING COLLAR/2.1.webp",
      "/product-images/CUSTOMIZED TIPPING COLLAR/2.2.webp",
      "/product-images/CUSTOMIZED TIPPING COLLAR/2.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "customized-tipping-collar-2",
    "name": "3.1",
    "sku": "ANT-CUS-033",
    "category": "CUSTOMIZED TIPPING COLLAR",
    "description": "Premium customized tipping collar apparel.",
    "images": [
      "/product-images/CUSTOMIZED TIPPING COLLAR/3.1.webp",
      "/product-images/CUSTOMIZED TIPPING COLLAR/3.2.webp",
      "/product-images/CUSTOMIZED TIPPING COLLAR/3.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "event-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-EVE-034",
    "category": "EVENT T-SHIRT",
    "description": "Premium event t-shirt apparel.",
    "images": [
      "/product-images/EVENT T-SHIRT/1.1.webp",
      "/product-images/EVENT T-SHIRT/1.2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "event-t-shirt-1",
    "name": " 1.3",
    "sku": "ANT-EVE-035",
    "category": "EVENT T-SHIRT",
    "description": "Premium event t-shirt apparel.",
    "images": [
      "/product-images/EVENT T-SHIRT/ 1.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "event-t-shirt-2",
    "name": "2.1",
    "sku": "ANT-EVE-036",
    "category": "EVENT T-SHIRT",
    "description": "Premium event t-shirt apparel.",
    "images": [
      "/product-images/EVENT T-SHIRT/2.1.webp",
      "/product-images/EVENT T-SHIRT/2.2.webp",
      "/product-images/EVENT T-SHIRT/2.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "export-customized-promo-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-EXP-037",
    "category": "EXPORT CUSTOMIZED  PROMO T-SHIRT",
    "description": "Premium export customized  promo t-shirt apparel.",
    "images": [
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/1.1.webp",
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/1.2.webp",
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/1.3.webp",
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/1.4.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "export-customized-promo-t-shirt-1",
    "name": "2.1",
    "sku": "ANT-EXP-038",
    "category": "EXPORT CUSTOMIZED  PROMO T-SHIRT",
    "description": "Premium export customized  promo t-shirt apparel.",
    "images": [
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/2.1.webp",
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/2.2.webp",
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/2.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "export-customized-promo-t-shirt-2",
    "name": "3.1",
    "sku": "ANT-EXP-039",
    "category": "EXPORT CUSTOMIZED  PROMO T-SHIRT",
    "description": "Premium export customized  promo t-shirt apparel.",
    "images": [
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/3.1.webp",
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/3.2.webp",
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/3.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "export-customized-promo-t-shirt-3",
    "name": "4.1",
    "sku": "ANT-EXP-040",
    "category": "EXPORT CUSTOMIZED  PROMO T-SHIRT",
    "description": "Premium export customized  promo t-shirt apparel.",
    "images": [
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/4.1.webp",
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/4.2.webp",
      "/product-images/EXPORT CUSTOMIZED  PROMO T-SHIRT/4.3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "ganesha-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-GAN-041",
    "category": "GANESHA T-SHIRT",
    "description": "Traditional Ganesha-themed t-shirts with beautiful designs. Perfect for festive occasions and devotees.",
    "images": [
      "/product-images/GANESHA T-SHIRT/1.1.webp",
      "/product-images/GANESHA T-SHIRT/1.2.webp"
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
    "name": "2.1",
    "sku": "ANT-GAN-042",
    "category": "GANESHA T-SHIRT",
    "description": "Traditional Ganesha-themed t-shirts with beautiful designs. Perfect for festive occasions and devotees.",
    "images": [
      "/product-images/GANESHA T-SHIRT/2.1.webp",
      "/product-images/GANESHA T-SHIRT/2.2.webp",
      "/product-images/GANESHA T-SHIRT/2.3.webp",
      "/product-images/GANESHA T-SHIRT/2.4.webp",
      "/product-images/GANESHA T-SHIRT/2.5.webp"
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
    "id": "ganesha-t-shirt-2",
    "name": "3",
    "sku": "ANT-GAN-043",
    "category": "GANESHA T-SHIRT",
    "description": "Traditional Ganesha-themed t-shirts with beautiful designs. Perfect for festive occasions and devotees.",
    "images": [
      "/product-images/GANESHA T-SHIRT/3.webp"
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
    "id": "ganesha-t-shirt-3",
    "name": "4",
    "sku": "ANT-GAN-044",
    "category": "GANESHA T-SHIRT",
    "description": "Traditional Ganesha-themed t-shirts with beautiful designs. Perfect for festive occasions and devotees.",
    "images": [
      "/product-images/GANESHA T-SHIRT/4.webp"
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
    "id": "independence-day-0",
    "name": "1",
    "sku": "ANT-IND-045",
    "category": "INDEPENDENCE DAY",
    "description": "Celebrate Independence Day with our exclusive collection of themed t-shirts. High quality prints with patriotic designs.",
    "images": [
      "/product-images/INDEPENDENCE DAY/1.webp"
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
      "INDEPENDENCE DAY",
      "Premium Quality"
    ]
  },
  {
    "id": "independence-day-1",
    "name": "2",
    "sku": "ANT-IND-046",
    "category": "INDEPENDENCE DAY",
    "description": "Celebrate Independence Day with our exclusive collection of themed t-shirts. High quality prints with patriotic designs.",
    "images": [
      "/product-images/INDEPENDENCE DAY/2.webp"
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
      "INDEPENDENCE DAY",
      "Premium Quality"
    ]
  },
  {
    "id": "independence-day-2",
    "name": "3",
    "sku": "ANT-IND-047",
    "category": "INDEPENDENCE DAY",
    "description": "Celebrate Independence Day with our exclusive collection of themed t-shirts. High quality prints with patriotic designs.",
    "images": [
      "/product-images/INDEPENDENCE DAY/3.webp"
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
      "INDEPENDENCE DAY",
      "Premium Quality"
    ]
  },
  {
    "id": "independence-day-3",
    "name": "4",
    "sku": "ANT-IND-048",
    "category": "INDEPENDENCE DAY",
    "description": "Celebrate Independence Day with our exclusive collection of themed t-shirts. High quality prints with patriotic designs.",
    "images": [
      "/product-images/INDEPENDENCE DAY/4.webp"
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
      "INDEPENDENCE DAY",
      "Premium Quality"
    ]
  },
  {
    "id": "independence-day-4",
    "name": "5",
    "sku": "ANT-IND-049",
    "category": "INDEPENDENCE DAY",
    "description": "Celebrate Independence Day with our exclusive collection of themed t-shirts. High quality prints with patriotic designs.",
    "images": [
      "/product-images/INDEPENDENCE DAY/5.webp"
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
      "INDEPENDENCE DAY",
      "Premium Quality"
    ]
  },
  {
    "id": "independence-day-5",
    "name": "6",
    "sku": "ANT-IND-050",
    "category": "INDEPENDENCE DAY",
    "description": "Celebrate Independence Day with our exclusive collection of themed t-shirts. High quality prints with patriotic designs.",
    "images": [
      "/product-images/INDEPENDENCE DAY/6.webp"
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
      "INDEPENDENCE DAY",
      "Premium Quality"
    ]
  },
  {
    "id": "independence-day-6",
    "name": "7",
    "sku": "ANT-IND-051",
    "category": "INDEPENDENCE DAY",
    "description": "Celebrate Independence Day with our exclusive collection of themed t-shirts. High quality prints with patriotic designs.",
    "images": [
      "/product-images/INDEPENDENCE DAY/7.webp"
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
      "INDEPENDENCE DAY",
      "Premium Quality"
    ]
  },
  {
    "id": "independence-day-7",
    "name": "8",
    "sku": "ANT-IND-052",
    "category": "INDEPENDENCE DAY",
    "description": "Celebrate Independence Day with our exclusive collection of themed t-shirts. High quality prints with patriotic designs.",
    "images": [
      "/product-images/INDEPENDENCE DAY/8.webp"
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
      "INDEPENDENCE DAY",
      "Premium Quality"
    ]
  },
  {
    "id": "kids-collar-t-shirt-0",
    "name": "1",
    "sku": "ANT-KID-053",
    "category": "KIDS COLLAR T-SHIRT",
    "description": "Premium kids collar t-shirt apparel.",
    "images": [
      "/product-images/KIDS COLLAR T-SHIRT/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-collar-t-shirt-1",
    "name": "2",
    "sku": "ANT-KID-054",
    "category": "KIDS COLLAR T-SHIRT",
    "description": "Premium kids collar t-shirt apparel.",
    "images": [
      "/product-images/KIDS COLLAR T-SHIRT/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-collar-t-shirt-2",
    "name": "3",
    "sku": "ANT-KID-055",
    "category": "KIDS COLLAR T-SHIRT",
    "description": "Premium kids collar t-shirt apparel.",
    "images": [
      "/product-images/KIDS COLLAR T-SHIRT/3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-collar-t-shirt-3",
    "name": "4",
    "sku": "ANT-KID-056",
    "category": "KIDS COLLAR T-SHIRT",
    "description": "Premium kids collar t-shirt apparel.",
    "images": [
      "/product-images/KIDS COLLAR T-SHIRT/4.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-collar-t-shirt-4",
    "name": "5",
    "sku": "ANT-KID-057",
    "category": "KIDS COLLAR T-SHIRT",
    "description": "Premium kids collar t-shirt apparel.",
    "images": [
      "/product-images/KIDS COLLAR T-SHIRT/5.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-collar-t-shirt-5",
    "name": "6",
    "sku": "ANT-KID-058",
    "category": "KIDS COLLAR T-SHIRT",
    "description": "Premium kids collar t-shirt apparel.",
    "images": [
      "/product-images/KIDS COLLAR T-SHIRT/6.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-collar-t-shirt-6",
    "name": "7",
    "sku": "ANT-KID-059",
    "category": "KIDS COLLAR T-SHIRT",
    "description": "Premium kids collar t-shirt apparel.",
    "images": [
      "/product-images/KIDS COLLAR T-SHIRT/7.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-collar-t-shirt-7",
    "name": "8",
    "sku": "ANT-KID-060",
    "category": "KIDS COLLAR T-SHIRT",
    "description": "Premium kids collar t-shirt apparel.",
    "images": [
      "/product-images/KIDS COLLAR T-SHIRT/8.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-printed-rn-t-shirt-0",
    "name": "1",
    "sku": "ANT-KID-061",
    "category": "KIDS PRINTED R:N  T-SHIRT",
    "description": "Premium kids printed r:n  t-shirt apparel.",
    "images": [
      "/product-images/KIDS PRINTED R:N  T-SHIRT/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-printed-rn-t-shirt-1",
    "name": "2",
    "sku": "ANT-KID-062",
    "category": "KIDS PRINTED R:N  T-SHIRT",
    "description": "Premium kids printed r:n  t-shirt apparel.",
    "images": [
      "/product-images/KIDS PRINTED R:N  T-SHIRT/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-printed-rn-t-shirt-2",
    "name": "3",
    "sku": "ANT-KID-063",
    "category": "KIDS PRINTED R:N  T-SHIRT",
    "description": "Premium kids printed r:n  t-shirt apparel.",
    "images": [
      "/product-images/KIDS PRINTED R:N  T-SHIRT/3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-printed-rn-t-shirt-3",
    "name": "4",
    "sku": "ANT-KID-064",
    "category": "KIDS PRINTED R:N  T-SHIRT",
    "description": "Premium kids printed r:n  t-shirt apparel.",
    "images": [
      "/product-images/KIDS PRINTED R:N  T-SHIRT/4.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "kids-printed-rn-t-shirt-4",
    "name": "5",
    "sku": "ANT-KID-065",
    "category": "KIDS PRINTED R:N  T-SHIRT",
    "description": "Premium kids printed r:n  t-shirt apparel.",
    "images": [
      "/product-images/KIDS PRINTED R:N  T-SHIRT/5.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "ls-printed-0",
    "name": "1.1",
    "sku": "ANT-LS -066",
    "category": "LS PRINTED",
    "description": "Long sleeve printed t-shirts with premium quality prints. Perfect for cooler weather and outdoor activities.",
    "images": [
      "/product-images/LS PRINTED/1.1.webp",
      "/product-images/LS PRINTED/1.2.webp",
      "/product-images/LS PRINTED/1.3.webp"
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
    "name": "2.1",
    "sku": "ANT-LS -067",
    "category": "LS PRINTED",
    "description": "Long sleeve printed t-shirts with premium quality prints. Perfect for cooler weather and outdoor activities.",
    "images": [
      "/product-images/LS PRINTED/2.1.webp",
      "/product-images/LS PRINTED/2.2.webp",
      "/product-images/LS PRINTED/2.3.webp"
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
    "name": "3.1",
    "sku": "ANT-LS -068",
    "category": "LS PRINTED",
    "description": "Long sleeve printed t-shirts with premium quality prints. Perfect for cooler weather and outdoor activities.",
    "images": [
      "/product-images/LS PRINTED/3.1.webp",
      "/product-images/LS PRINTED/3.2.webp",
      "/product-images/LS PRINTED/3.3.webp"
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
    "id": "marathon-t-shirt-0",
    "name": "1",
    "sku": "ANT-MAR-069",
    "category": "MARATHON T-SHIRT",
    "description": "Premium marathon t-shirt apparel.",
    "images": [
      "/product-images/MARATHON T-SHIRT/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "marathon-t-shirt-1",
    "name": "2",
    "sku": "ANT-MAR-070",
    "category": "MARATHON T-SHIRT",
    "description": "Premium marathon t-shirt apparel.",
    "images": [
      "/product-images/MARATHON T-SHIRT/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "marathon-t-shirt-2",
    "name": "3",
    "sku": "ANT-MAR-071",
    "category": "MARATHON T-SHIRT",
    "description": "Premium marathon t-shirt apparel.",
    "images": [
      "/product-images/MARATHON T-SHIRT/3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "nirmalknit-v-neck-0",
    "name": "1",
    "sku": "ANT-NIR-072",
    "category": "NIRMALKNIT V NECK",
    "description": "Elegant Nirmalknit V-neck t-shirts with premium finish. Stylish design for modern fashion.",
    "images": [
      "/product-images/NIRMALKNIT V NECK/1.webp"
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
    "name": "2",
    "sku": "ANT-NIR-073",
    "category": "NIRMALKNIT V NECK",
    "description": "Elegant Nirmalknit V-neck t-shirts with premium finish. Stylish design for modern fashion.",
    "images": [
      "/product-images/NIRMALKNIT V NECK/2.webp"
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
    "name": "3",
    "sku": "ANT-NIR-074",
    "category": "NIRMALKNIT V NECK",
    "description": "Elegant Nirmalknit V-neck t-shirts with premium finish. Stylish design for modern fashion.",
    "images": [
      "/product-images/NIRMALKNIT V NECK/3.webp"
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
    "id": "political-pink-t-shirt-0",
    "name": "1",
    "sku": "ANT-POL-075",
    "category": "POLITICAL PINK T-SHIRT",
    "description": "Premium political pink t-shirt apparel.",
    "images": [
      "/product-images/POLITICAL PINK T-SHIRT/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "political-pink-t-shirt-1",
    "name": "2",
    "sku": "ANT-POL-076",
    "category": "POLITICAL PINK T-SHIRT",
    "description": "Premium political pink t-shirt apparel.",
    "images": [
      "/product-images/POLITICAL PINK T-SHIRT/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "political-pink-t-shirt-2",
    "name": "3",
    "sku": "ANT-POL-077",
    "category": "POLITICAL PINK T-SHIRT",
    "description": "Premium political pink t-shirt apparel.",
    "images": [
      "/product-images/POLITICAL PINK T-SHIRT/3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-110-gsm-rn-0",
    "name": "1",
    "sku": "ANT-POL-078",
    "category": "POLYESTER 110 GSM R:N",
    "description": "Premium polyester 110 gsm r:n apparel.",
    "images": [
      "/product-images/POLYESTER 110 GSM R:N/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-110-gsm-rn-1",
    "name": "2",
    "sku": "ANT-POL-079",
    "category": "POLYESTER 110 GSM R:N",
    "description": "Premium polyester 110 gsm r:n apparel.",
    "images": [
      "/product-images/POLYESTER 110 GSM R:N/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-110-gsm-rn-2",
    "name": "Ery0358",
    "sku": "ANT-POL-080",
    "category": "POLYESTER 110 GSM R:N",
    "description": "Premium polyester 110 gsm r:n apparel.",
    "images": [
      "/product-images/POLYESTER 110 GSM R:N/_ERY0358.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-140-gsm-rn-0",
    "name": "1",
    "sku": "ANT-POL-081",
    "category": "POLYESTER 140 GSM R:N",
    "description": "Premium polyester 140 gsm r:n apparel.",
    "images": [
      "/product-images/POLYESTER 140 GSM R:N/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-140-gsm-rn-1",
    "name": "2",
    "sku": "ANT-POL-082",
    "category": "POLYESTER 140 GSM R:N",
    "description": "Premium polyester 140 gsm r:n apparel.",
    "images": [
      "/product-images/POLYESTER 140 GSM R:N/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-140-gsm-rn-2",
    "name": "3",
    "sku": "ANT-POL-083",
    "category": "POLYESTER 140 GSM R:N",
    "description": "Premium polyester 140 gsm r:n apparel.",
    "images": [
      "/product-images/POLYESTER 140 GSM R:N/3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "salina-round-neck-0",
    "name": "1",
    "sku": "ANT-SAL-084",
    "category": "SALINA ROUND NECK",
    "description": "Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SALINA ROUND NECK/1.webp"
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
    "name": "2",
    "sku": "ANT-SAL-085",
    "category": "SALINA ROUND NECK",
    "description": "Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SALINA ROUND NECK/2.webp"
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
    "name": "3",
    "sku": "ANT-SAL-086",
    "category": "SALINA ROUND NECK",
    "description": "Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SALINA ROUND NECK/3.webp"
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
    "id": "sarina-170-gsm-rn-0",
    "name": "1",
    "sku": "ANT-SAR-087",
    "category": "SARINA 170 GSM R:N",
    "description": "Premium sarina 170 gsm r:n apparel.",
    "images": [
      "/product-images/SARINA 170 GSM R:N/1.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "sarina-170-gsm-rn-1",
    "name": "2",
    "sku": "ANT-SAR-088",
    "category": "SARINA 170 GSM R:N",
    "description": "Premium sarina 170 gsm r:n apparel.",
    "images": [
      "/product-images/SARINA 170 GSM R:N/2.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "sarina-170-gsm-rn-2",
    "name": "3",
    "sku": "ANT-SAR-089",
    "category": "SARINA 170 GSM R:N",
    "description": "Premium sarina 170 gsm r:n apparel.",
    "images": [
      "/product-images/SARINA 170 GSM R:N/3.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "sarina-170-gsm-rn-3",
    "name": "Ery0526",
    "sku": "ANT-SAR-090",
    "category": "SARINA 170 GSM R:N",
    "description": "Premium sarina 170 gsm r:n apparel.",
    "images": [
      "/product-images/SARINA 170 GSM R:N/_ERY0526.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "sarina-170-gsm-rn-4",
    "name": "Ery0527",
    "sku": "ANT-SAR-091",
    "category": "SARINA 170 GSM R:N",
    "description": "Premium sarina 170 gsm r:n apparel.",
    "images": [
      "/product-images/SARINA 170 GSM R:N/_ERY0527.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "sarina-170-gsm-rn-5",
    "name": "Ery0530",
    "sku": "ANT-SAR-092",
    "category": "SARINA 170 GSM R:N",
    "description": "Premium sarina 170 gsm r:n apparel.",
    "images": [
      "/product-images/SARINA 170 GSM R:N/_ERY0530.webp"
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
      "Premium Quality"
    ]
  },
  {
    "id": "slub-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-SLU-093",
    "category": "SLUB T-SHIRT",
    "description": "Slub t-shirts with unique textured fabric. Modern look with comfortable fit.",
    "images": [
      "/product-images/SLUB T-SHIRT/1.1.webp",
      "/product-images/SLUB T-SHIRT/1.2.webp",
      "/product-images/SLUB T-SHIRT/1.3.webp"
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
    "name": "2.1",
    "sku": "ANT-SLU-094",
    "category": "SLUB T-SHIRT",
    "description": "Slub t-shirts with unique textured fabric. Modern look with comfortable fit.",
    "images": [
      "/product-images/SLUB T-SHIRT/2.1.webp",
      "/product-images/SLUB T-SHIRT/2.2.webp",
      "/product-images/SLUB T-SHIRT/2.3.webp"
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
    "name": "3.1",
    "sku": "ANT-SLU-095",
    "category": "SLUB T-SHIRT",
    "description": "Slub t-shirts with unique textured fabric. Modern look with comfortable fit.",
    "images": [
      "/product-images/SLUB T-SHIRT/3.1.webp",
      "/product-images/SLUB T-SHIRT/3.2.webp",
      "/product-images/SLUB T-SHIRT/3.3.webp"
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

export const categories = ["All", "COLLAR 240 GSM", "COLLAR BUDGETED", "COLLAR PRINT POCK", "COLLAR WITH POCK", "CONTRAST COLLAR T-SHIRT", "CREW COLLAR T-SHIRT", "CUSTOMIZED COLLAR CUT AND SEW", "CUSTOMIZED CUT AND SEW T-SHIRT", "CUSTOMIZED GANESHA", "CUSTOMIZED PROMO COLLAR T-SHIRT", "CUSTOMIZED ROUND NECK T-SHIRT", "CUSTOMIZED TIPPING COLLAR", "EVENT T-SHIRT", "EXPORT CUSTOMIZED  PROMO T-SHIRT", "GANESHA T-SHIRT", "INDEPENDENCE DAY", "KIDS COLLAR T-SHIRT", "KIDS PRINTED R:N  T-SHIRT", "LS PRINTED", "MARATHON T-SHIRT", "NIRMALKNIT V NECK", "POLITICAL PINK T-SHIRT", "POLYESTER 110 GSM R:N", "POLYESTER 140 GSM R:N", "SALINA ROUND NECK", "SARINA 170 GSM R:N", "SLUB T-SHIRT"];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
};
