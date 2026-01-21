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
    "id": "polyester-110-gsm-0",
    "name": "1",
    "sku": "ANT-POL-000",
    "category": "POLYESTER 110 GSM",
    "description": "Premium plain polyester apparel. High quality 110 GSM options. Customizable for your needs.",
    "images": [
      "/product-images/POLYESTER 110 GSM R:N/1.webp"
    ],
    "fabricWeights": [
      {
        "value": "110",
        "label": "110 GSM",
        "description": "Light weight"
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
      "PLAIN",
      "POLYESTER",
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-110-gsm-1",
    "name": "2",
    "sku": "ANT-POL-001",
    "category": "POLYESTER 110 GSM",
    "description": "Premium plain polyester apparel. High quality 110 GSM options. Customizable for your needs.",
    "images": [
      "/product-images/POLYESTER 110 GSM R:N/2.webp"
    ],
    "fabricWeights": [
      {
        "value": "110",
        "label": "110 GSM",
        "description": "Light weight"
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
      "PLAIN",
      "POLYESTER",
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-110-gsm-2",
    "name": "Ery0358",
    "sku": "ANT-POL-002",
    "category": "POLYESTER 110 GSM",
    "description": "Premium plain polyester apparel. High quality 110 GSM options. Customizable for your needs.",
    "images": [
      "/product-images/POLYESTER 110 GSM R:N/_ERY0358.webp"
    ],
    "fabricWeights": [
      {
        "value": "110",
        "label": "110 GSM",
        "description": "Light weight"
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
      "PLAIN",
      "POLYESTER",
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-140-gsm-0",
    "name": "1",
    "sku": "ANT-POL-003",
    "category": "POLYESTER 140 GSM",
    "description": "Premium plain polyester apparel. High quality 140 GSM options. Customizable for your needs.",
    "images": [
      "/product-images/POLYESTER 140 GSM R:N/1.webp"
    ],
    "fabricWeights": [
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
      "PLAIN",
      "POLYESTER",
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-140-gsm-1",
    "name": "2",
    "sku": "ANT-POL-004",
    "category": "POLYESTER 140 GSM",
    "description": "Premium plain polyester apparel. High quality 140 GSM options. Customizable for your needs.",
    "images": [
      "/product-images/POLYESTER 140 GSM R:N/2.webp"
    ],
    "fabricWeights": [
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
      "PLAIN",
      "POLYESTER",
      "Premium Quality"
    ]
  },
  {
    "id": "polyester-140-gsm-2",
    "name": "3",
    "sku": "ANT-POL-005",
    "category": "POLYESTER 140 GSM",
    "description": "Premium plain polyester apparel. High quality 140 GSM options. Customizable for your needs.",
    "images": [
      "/product-images/POLYESTER 140 GSM R:N/3.webp"
    ],
    "fabricWeights": [
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
      "PLAIN",
      "POLYESTER",
      "Premium Quality"
    ]
  },
  {
    "id": "sarina-140-gsm-0",
    "name": "1",
    "sku": "ANT-SAR-006",
    "category": "SARINA 140 GSM",
    "description": "Sarina 140 GSM round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SARINA 140 GSM R:N/1.webp"
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
    "id": "sarina-140-gsm-1",
    "name": "2",
    "sku": "ANT-SAR-007",
    "category": "SARINA 140 GSM",
    "description": "Sarina 140 GSM round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SARINA 140 GSM R:N/2.webp"
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
    "id": "sarina-140-gsm-2",
    "name": "3",
    "sku": "ANT-SAR-008",
    "category": "SARINA 140 GSM",
    "description": "Sarina 140 GSM round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.",
    "images": [
      "/product-images/SARINA 140 GSM R:N/3.webp"
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
    "id": "sarina-170-gsm-0",
    "name": "1",
    "sku": "ANT-SAR-009",
    "category": "SARINA 170 GSM",
    "description": "Premium sarina 170 gsm apparel.",
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
    "id": "sarina-170-gsm-1",
    "name": "2",
    "sku": "ANT-SAR-010",
    "category": "SARINA 170 GSM",
    "description": "Premium sarina 170 gsm apparel.",
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
    "id": "sarina-170-gsm-2",
    "name": "3",
    "sku": "ANT-SAR-011",
    "category": "SARINA 170 GSM",
    "description": "Premium sarina 170 gsm apparel.",
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
    "id": "sarina-170-gsm-3",
    "name": "Ery0526",
    "sku": "ANT-SAR-012",
    "category": "SARINA 170 GSM",
    "description": "Premium sarina 170 gsm apparel.",
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
    "id": "sarina-170-gsm-4",
    "name": "Ery0527",
    "sku": "ANT-SAR-013",
    "category": "SARINA 170 GSM",
    "description": "Premium sarina 170 gsm apparel.",
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
    "id": "sarina-170-gsm-5",
    "name": "Ery0530",
    "sku": "ANT-SAR-014",
    "category": "SARINA 170 GSM",
    "description": "Premium sarina 170 gsm apparel.",
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
    "id": "political-pink-t-shirt-0",
    "name": "1",
    "sku": "ANT-POL-015",
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
    "sku": "ANT-POL-016",
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
    "sku": "ANT-POL-017",
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
    "id": "slub-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-SLU-018",
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
    "sku": "ANT-SLU-019",
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
    "sku": "ANT-SLU-020",
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
  },
  {
    "id": "customized-cut-and-sew-t-shirt-0",
    "name": "1",
    "sku": "ANT-CUS-021",
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
    "sku": "ANT-CUS-022",
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
    "sku": "ANT-CUS-023",
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
    "id": "marathon-t-shirt-0",
    "name": "1",
    "sku": "ANT-MAR-027",
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
    "sku": "ANT-MAR-028",
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
    "sku": "ANT-MAR-029",
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
    "id": "export-customized-promo-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-EXP-030",
    "category": "EXPORT CUSTOMIZED PROMO T-SHIRT",
    "description": "Premium export customized promo t-shirt apparel.",
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
    "sku": "ANT-EXP-031",
    "category": "EXPORT CUSTOMIZED PROMO T-SHIRT",
    "description": "Premium export customized promo t-shirt apparel.",
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
    "sku": "ANT-EXP-032",
    "category": "EXPORT CUSTOMIZED PROMO T-SHIRT",
    "description": "Premium export customized promo t-shirt apparel.",
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
    "sku": "ANT-EXP-033",
    "category": "EXPORT CUSTOMIZED PROMO T-SHIRT",
    "description": "Premium export customized promo t-shirt apparel.",
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
    "id": "customized-round-neck-t-shirt-0",
    "name": "1",
    "sku": "ANT-CUS-037",
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
    "sku": "ANT-CUS-038",
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
    "sku": "ANT-CUS-039",
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
    "sku": "ANT-CUS-040",
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
    "id": "crew-collar-t-shirt-0",
    "name": "1",
    "sku": "ANT-CRE-041",
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
    "sku": "ANT-CRE-042",
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
    "sku": "ANT-CRE-043",
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
    "id": "nirmalknit-v-neck-0",
    "name": "1",
    "sku": "ANT-NIR-044",
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
    "sku": "ANT-NIR-045",
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
    "sku": "ANT-NIR-046",
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
    "id": "ls-printed-0",
    "name": "1.1",
    "sku": "ANT-LS -047",
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
    "sku": "ANT-LS -048",
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
    "sku": "ANT-LS -049",
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
    "id": "kids-printed-t-shirt-0",
    "name": "1",
    "sku": "ANT-KID-050",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Premium kids printed t-shirt apparel.",
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
    "id": "kids-printed-t-shirt-1",
    "name": "2",
    "sku": "ANT-KID-051",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Premium kids printed t-shirt apparel.",
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
    "id": "kids-printed-t-shirt-2",
    "name": "3",
    "sku": "ANT-KID-052",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Premium kids printed t-shirt apparel.",
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
    "id": "kids-printed-t-shirt-3",
    "name": "4",
    "sku": "ANT-KID-053",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Premium kids printed t-shirt apparel.",
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
    "id": "kids-printed-t-shirt-4",
    "name": "5",
    "sku": "ANT-KID-054",
    "category": "KIDS PRINTED T-SHIRT",
    "description": "Premium kids printed t-shirt apparel.",
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
    "id": "kids-collar-t-shirt-0",
    "name": "1",
    "sku": "ANT-KID-055",
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
    "sku": "ANT-KID-056",
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
    "sku": "ANT-KID-057",
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
    "sku": "ANT-KID-058",
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
    "sku": "ANT-KID-059",
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
    "sku": "ANT-KID-060",
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
    "sku": "ANT-KID-061",
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
    "sku": "ANT-KID-062",
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
    "id": "independence-day-0",
    "name": "1",
    "sku": "ANT-IND-063",
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
    "sku": "ANT-IND-064",
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
    "sku": "ANT-IND-065",
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
    "sku": "ANT-IND-066",
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
    "sku": "ANT-IND-067",
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
    "sku": "ANT-IND-068",
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
    "sku": "ANT-IND-069",
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
    "sku": "ANT-IND-070",
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
    "id": "customized-ganesha-0",
    "name": "1.1",
    "sku": "ANT-CUS-071",
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
    "sku": "ANT-CUS-072",
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
    "id": "ganesha-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-GAN-073",
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
    "sku": "ANT-GAN-074",
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
    "sku": "ANT-GAN-075",
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
    "sku": "ANT-GAN-076",
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
    "id": "collar-print-pocket-0",
    "name": "1",
    "sku": "ANT-COL-077",
    "category": "COLLAR PRINT POCKET",
    "description": "Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR PRINT POCKET/1.webp"
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
    "id": "collar-print-pocket-1",
    "name": "2",
    "sku": "ANT-COL-078",
    "category": "COLLAR PRINT POCKET",
    "description": "Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR PRINT POCKET/2.webp"
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
    "id": "collar-print-pocket-2",
    "name": "3",
    "sku": "ANT-COL-079",
    "category": "COLLAR PRINT POCKET",
    "description": "Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.",
    "images": [
      "/product-images/COLLAR PRINT POCKET/3.webp"
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
    "id": "customized-collar-cut-and-sew-0",
    "name": "1.1",
    "sku": "ANT-CUS-080",
    "category": "CUSTOMIZED COLLAR CUT AND SEW",
    "description": "Premium collar cut and sew apparel manufactured with high quality 180 GSM fabric and precision stitching. Ideal for corporate wear, events, and promotions. Custom GSM available on request.",
    "images": [
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/1.1.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/1.2.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/1.3.webp"
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
    "id": "customized-collar-cut-and-sew-1",
    "name": "2.1",
    "sku": "ANT-CUS-081",
    "category": "CUSTOMIZED COLLAR CUT AND SEW",
    "description": "Premium collar cut and sew apparel manufactured with high quality 180 GSM fabric and precision stitching. Ideal for corporate wear, events, and promotions. Custom GSM available on request.",
    "images": [
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/2.1.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/2.2.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/2.3.webp"
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
    "id": "customized-collar-cut-and-sew-2",
    "name": "3.1",
    "sku": "ANT-CUS-082",
    "category": "CUSTOMIZED COLLAR CUT AND SEW",
    "description": "Premium collar cut and sew apparel manufactured with high quality 180 GSM fabric and precision stitching. Ideal for corporate wear, events, and promotions. Custom GSM available on request.",
    "images": [
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/3.1.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/3.2.webp",
      "/product-images/CUSTOMIZED COLLAR CUT AND SEW/3.3.webp"
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
    "id": "customized-tipping-collar-0",
    "name": "1.1",
    "sku": "ANT-CUS-083",
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
    "sku": "ANT-CUS-084",
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
    "sku": "ANT-CUS-085",
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
    "id": "collar-budgeted-0",
    "name": "1.1",
    "sku": "ANT-COL-086",
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
    "sku": "ANT-COL-087",
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
    "sku": "ANT-COL-088",
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
    "id": "collar-240-gsm-0",
    "name": "1.1",
    "sku": "ANT-COL-089",
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
    "sku": "ANT-COL-090",
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
    "id": "contrast-collar-t-shirt-0",
    "name": "1.1",
    "sku": "ANT-CON-091",
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
    "sku": "ANT-CON-092",
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
    "id": "collar-with-pock-0",
    "name": "1.1",
    "sku": "ANT-COL-093",
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
    "sku": "ANT-COL-094",
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
    "sku": "ANT-COL-095",
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
  }
];

export const categories = ["All", "POLYESTER 110 GSM", "POLYESTER 140 GSM", "SARINA 140 GSM", "SARINA 170 GSM", "POLITICAL PINK T-SHIRT", "SLUB T-SHIRT", "CUSTOMIZED CUT AND SEW T-SHIRT", "CUSTOMIZED PROMO COLLAR T-SHIRT", "MARATHON T-SHIRT", "EXPORT CUSTOMIZED PROMO T-SHIRT", "EVENT T-SHIRT", "CUSTOMIZED ROUND NECK T-SHIRT", "CREW COLLAR T-SHIRT", "NIRMALKNIT V NECK", "LS PRINTED", "KIDS PRINTED T-SHIRT", "KIDS COLLAR T-SHIRT", "INDEPENDENCE DAY", "CUSTOMIZED GANESHA", "GANESHA T-SHIRT", "COLLAR PRINT POCKET", "CUSTOMIZED COLLAR CUT AND SEW", "CUSTOMIZED TIPPING COLLAR", "COLLAR BUDGETED", "COLLAR 240 GSM", "CONTRAST COLLAR T-SHIRT", "COLLAR WITH POCK"];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
};
