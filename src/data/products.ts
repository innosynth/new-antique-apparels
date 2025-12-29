import womenCollection from "@/assets/collection-women.jpg";
import menCollection from "@/assets/collection-men.jpg";
import accessoriesCollection from "@/assets/collection-accessories.jpg";

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
  customizationOptions: { name: string; price: string }[];
  tieredPricing: { quantity: string; price: string }[];
  minOrder: number;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "polyester-tshirt-white",
    name: "White Polyester T-Shirt",
    sku: "TSH-POL-001",
    category: "Polyester",
    description: "Our flagship polyester t-shirt made from premium quality fabric. Perfect for everyday wear, promotional merchandise, or as a base for custom printing. Pre-shrunk and garment-washed for a soft, comfortable feel.",
    images: [womenCollection, menCollection, accessoriesCollection],
    fabricWeights: [
      { value: "110", label: "110 GSM", description: "Light, breathable" },
      { value: "120", label: "120 GSM", description: "Standard weight" },
      { value: "140", label: "140 GSM", description: "Premium heavy" },
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1a237e" },
      { name: "Grey", hex: "#9e9e9e" },
      { name: "Red", hex: "#e53935" },
      { name: "Green", hex: "#43a047" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    customizationOptions: [
      { name: "Logo Embroidery", price: "+₹50/pc" },
      { name: "Screen Print", price: "+₹30/pc" },
      { name: "DTF Print", price: "+₹80/pc" },
    ],
    tieredPricing: [
      { quantity: "100 - 249", price: "₹180" },
      { quantity: "250 - 499", price: "₹160" },
      { quantity: "500 - 999", price: "₹140" },
      { quantity: "1000 - 2499", price: "₹120" },
      { quantity: "2500+", price: "₹100" },
    ],
    minOrder: 100,
    tags: ["Low MOQ", "Quick Ship"],
  },
  {
    id: "polo-polyester-tshirt",
    name: "Polo Polyester T-Shirt",
    sku: "TSH-POL-002",
    category: "Polo",
    description: "Classic polo t-shirt crafted from high-quality polyester blend. Features a ribbed collar and cuffs with a three-button placket. Ideal for corporate uniforms, sports teams, and promotional events.",
    images: [menCollection, womenCollection, accessoriesCollection],
    fabricWeights: [
      { value: "180", label: "180 GSM", description: "Light, breathable" },
      { value: "200", label: "200 GSM", description: "Standard weight" },
      { value: "220", label: "220 GSM", description: "Premium heavy" },
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1a237e" },
      { name: "Maroon", hex: "#7b1fa2" },
      { name: "Royal Blue", hex: "#1976d2" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    customizationOptions: [
      { name: "Logo Embroidery", price: "+₹60/pc" },
      { name: "Screen Print", price: "+₹40/pc" },
      { name: "DTF Print", price: "+₹90/pc" },
    ],
    tieredPricing: [
      { quantity: "100 - 249", price: "₹280" },
      { quantity: "250 - 499", price: "₹250" },
      { quantity: "500 - 999", price: "₹220" },
      { quantity: "1000 - 2499", price: "₹200" },
      { quantity: "2500+", price: "₹180" },
    ],
    minOrder: 100,
    tags: ["Corporate", "Best Seller"],
  },
  {
    id: "corporate-tshirt",
    name: "Corporate T-Shirt",
    sku: "TSH-COR-001",
    category: "Corporate",
    description: "Professional corporate t-shirt designed for business environments. Made with premium polyester-cotton blend for comfort and durability. Perfect for office wear, team uniforms, and corporate events.",
    images: [accessoriesCollection, menCollection, womenCollection],
    fabricWeights: [
      { value: "160", label: "160 GSM", description: "Light, breathable" },
      { value: "180", label: "180 GSM", description: "Standard weight" },
      { value: "200", label: "200 GSM", description: "Premium heavy" },
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1a237e" },
      { name: "Grey", hex: "#757575" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    customizationOptions: [
      { name: "Logo Embroidery", price: "+₹70/pc" },
      { name: "Screen Print", price: "+₹45/pc" },
      { name: "DTF Print", price: "+₹100/pc" },
      { name: "Name Badge", price: "+₹25/pc" },
    ],
    tieredPricing: [
      { quantity: "50 - 149", price: "₹350" },
      { quantity: "150 - 299", price: "₹320" },
      { quantity: "300 - 599", price: "₹290" },
      { quantity: "600 - 999", price: "₹260" },
      { quantity: "1000+", price: "₹230" },
    ],
    minOrder: 50,
    tags: ["Corporate", "Premium"],
  },
  {
    id: "election-tshirt",
    name: "Election T-Shirt",
    sku: "TSH-ELC-001",
    category: "Polyester",
    description: "Budget-friendly polyester t-shirt perfect for election campaigns, rallies, and political events. Available for bulk orders with custom printing options. Quick turnaround time available.",
    images: [womenCollection, accessoriesCollection, menCollection],
    fabricWeights: [
      { value: "100", label: "100 GSM", description: "Ultra light" },
      { value: "110", label: "110 GSM", description: "Light, breathable" },
      { value: "120", label: "120 GSM", description: "Standard weight" },
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Saffron", hex: "#FF9933" },
      { name: "Green", hex: "#138808" },
      { name: "Blue", hex: "#0066CC" },
      { name: "Red", hex: "#CC0000" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    customizationOptions: [
      { name: "Screen Print (Front)", price: "+₹20/pc" },
      { name: "Screen Print (Back)", price: "+₹20/pc" },
      { name: "Both Sides Print", price: "+₹35/pc" },
    ],
    tieredPricing: [
      { quantity: "500 - 999", price: "₹85" },
      { quantity: "1000 - 2499", price: "₹75" },
      { quantity: "2500 - 4999", price: "₹65" },
      { quantity: "5000 - 9999", price: "₹55" },
      { quantity: "10000+", price: "₹45" },
    ],
    minOrder: 500,
    tags: ["Bulk Order", "Quick Ship"],
  },
  {
    id: "sports-tshirt",
    name: "Sports T-Shirt",
    sku: "TSH-SPT-001",
    category: "Polyester",
    description: "High-performance sports t-shirt with moisture-wicking technology. Lightweight and breathable fabric keeps you cool during workouts. Perfect for sports teams, gyms, and athletic events.",
    images: [menCollection, womenCollection, accessoriesCollection],
    fabricWeights: [
      { value: "120", label: "120 GSM", description: "Ultra light" },
      { value: "140", label: "140 GSM", description: "Light, breathable" },
      { value: "160", label: "160 GSM", description: "Standard weight" },
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Royal Blue", hex: "#1976d2" },
      { name: "Red", hex: "#d32f2f" },
      { name: "Yellow", hex: "#fbc02d" },
      { name: "Green", hex: "#388e3c" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    customizationOptions: [
      { name: "Team Logo Print", price: "+₹40/pc" },
      { name: "Player Number", price: "+₹25/pc" },
      { name: "Sublimation Print", price: "+₹120/pc" },
    ],
    tieredPricing: [
      { quantity: "50 - 149", price: "₹200" },
      { quantity: "150 - 299", price: "₹180" },
      { quantity: "300 - 599", price: "₹160" },
      { quantity: "600 - 999", price: "₹145" },
      { quantity: "1000+", price: "₹130" },
    ],
    minOrder: 50,
    tags: ["Sports", "Breathable"],
  },
  {
    id: "promotional-tshirt",
    name: "Promotional T-Shirt",
    sku: "TSH-PRO-001",
    category: "Corporate",
    description: "Cost-effective promotional t-shirt for brand marketing and events. Excellent canvas for screen printing and logo placement. Available in a wide range of colors for brand matching.",
    images: [accessoriesCollection, womenCollection, menCollection],
    fabricWeights: [
      { value: "120", label: "120 GSM", description: "Light, budget" },
      { value: "140", label: "140 GSM", description: "Standard weight" },
      { value: "160", label: "160 GSM", description: "Premium feel" },
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1a237e" },
      { name: "Red", hex: "#c62828" },
      { name: "Green", hex: "#2e7d32" },
      { name: "Yellow", hex: "#f9a825" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    customizationOptions: [
      { name: "Logo Print (Front)", price: "+₹25/pc" },
      { name: "Logo Print (Back)", price: "+₹25/pc" },
      { name: "Full Front Print", price: "+₹45/pc" },
    ],
    tieredPricing: [
      { quantity: "200 - 499", price: "₹120" },
      { quantity: "500 - 999", price: "₹100" },
      { quantity: "1000 - 2499", price: "₹85" },
      { quantity: "2500 - 4999", price: "₹75" },
      { quantity: "5000+", price: "₹65" },
    ],
    minOrder: 200,
    tags: ["Promotional", "Brand Ready"],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
};

export const categories = ["All", "Polyester", "Polo", "Corporate"];
