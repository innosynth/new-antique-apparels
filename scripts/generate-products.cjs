const fs = require('fs');
const path = require('path');

// Default values
const defaultFabricWeights = [
    { value: '160', label: '160 GSM', description: 'Standard weight' },
    { value: '180', label: '180 GSM', description: 'Premium heavy' },
    { value: 'custom', label: 'Custom GSM', description: 'Specify your preferred GSM' }
];

const defaultCustomizationOptions = [
    { name: 'Sublimation' },
    { name: 'Table Print' },
    { name: 'Embroidery' }
];

// Configuration for each category
const categoryConfigs = {
    'COLLAR CUT AND SEW': {
        groupSize: 3,
        description: 'Premium collar cut and sew apparel manufactured with high quality 180 GSM fabric and precision stitching. Ideal for corporate wear, events, and promotions. Custom GSM available on request.',
        tags: ['COLLAR', 'Premium Quality'],
        minOrder: 100,
        fabricWeights: [
            { value: '180', label: '180 GSM', description: 'Premium heavy' },
            { value: 'custom', label: 'Custom GSM', description: 'Specify your preferred GSM' }
        ],
        customizationOptions: [
            { name: 'Sublimation' },
            { name: 'Table Print' },
            { name: 'Embroidery' }
        ]
    },
    'COLLAR PRINT POCK': {
        groupSize: 1, // Only 3 images - show all as separate cards
        allImages: true,
        description: 'Stylish collar t-shirts with print pocket design. Made with 180 GSM high quality fabric for comfortable fit and durability. Custom GSM available on request.',
        tags: ['COLLAR', 'Premium Quality'],
        minOrder: 100,
        fabricWeights: [
            { value: '180', label: '180 GSM', description: 'Premium heavy' },
            { value: 'custom', label: 'Custom GSM', description: 'Specify your preferred GSM' }
        ],
        customizationOptions: [
            { name: 'Sublimation' },
            { name: 'Table Print' },
            { name: 'Embroidery' }
        ]
    },
    'COLLAR SHOW PATTI': {
        groupSize: 1, // Only 3 images - show all as separate cards
        allImages: true,
        description: 'Elegant collar t-shirts with show patti design. Available in 110 GSM and 140 GSM fabric options. Perfect for casual and semi-formal occasions. Custom GSM available on request.',
        tags: ['COLLAR', 'Premium Quality'],
        minOrder: 100,
        fabricWeights: [
            { value: '110', label: '110 GSM', description: 'Light weight' },
            { value: '140', label: '140 GSM', description: 'Medium weight' },
            { value: 'custom', label: 'Custom GSM', description: 'Specify your preferred GSM' }
        ],
        customizationOptions: [
            { name: 'Sublimation' },
            { name: 'Table Print' },
            { name: 'Embroidery' }
        ]
    },
    'COLLAR T-SHIRT': {
        groupSize: 3,
        description: 'Classic collar t-shirts crafted with premium 180 GSM materials. Ideal for corporate uniforms, promotions, and events. Custom GSM available on request.',
        tags: ['COLLAR', 'Premium Quality'],
        minOrder: 100,
        fabricWeights: [
            { value: '180', label: '180 GSM', description: 'Premium heavy' },
            { value: 'custom', label: 'Custom GSM', description: 'Specify your preferred GSM' }
        ],
        customizationOptions: [
            { name: 'Sublimation' },
            { name: 'Table Print' },
            { name: 'Embroidery' }
        ]
    },
    'COLLAR WITH POCK': {
        groupSize: 3,
        description: 'Comfortable collar t-shirts with pocket. Made with 180 GSM premium fabric. Practical and stylish design for daily wear. Custom GSM available on request.',
        tags: ['COLLAR', 'Premium Quality'],
        minOrder: 100,
        fabricWeights: [
            { value: '180', label: '180 GSM', description: 'Premium heavy' },
            { value: 'custom', label: 'Custom GSM', description: 'Specify your preferred GSM' }
        ],
        customizationOptions: [
            { name: 'Sublimation' },
            { name: 'Table Print' },
            { name: 'Embroidery' }
        ]
    },
    'CREW COLLAR T-SHIRT': {
        groupSize: 1, // Only 3 images - show all as separate cards
        allImages: true,
        description: 'Crew collar t-shirts with modern design. Made with 180 GSM soft fabric for comfortable all-day wear. Custom GSM available on request.',
        tags: ['CREW', 'Premium Quality'],
        minOrder: 100,
        fabricWeights: [
            { value: '180', label: '180 GSM', description: 'Premium heavy' },
            { value: 'custom', label: 'Custom GSM', description: 'Specify your preferred GSM' }
        ],
        customizationOptions: [
            { name: 'Sublimation' },
            { name: 'Table Print' },
            { name: 'Embroidery' }
        ]
    },
    'FULL SUBLIMATION': {
        groupSize: 3,
        description: 'Full sublimation printed t-shirts with vibrant colors and intricate designs. Perfect for sports teams and promotional events.',
        tags: ['SUBLIMATION', 'Premium Quality'],
        minOrder: 100
    },
    'GANESHA T-SHIRT': {
        groupSize: 1, // Show each unique pattern as a separate product
        description: 'Traditional Ganesha-themed t-shirts with beautiful designs. Perfect for festive occasions and devotees.',
        tags: ['PRINTED', 'Premium Quality'],
        minOrder: 100
    },
    'INDEPENDENCE DAY': {
        groupSize: 1, // Show each unique pattern as a separate product
        description: 'Celebrate Independence Day with our exclusive collection of themed t-shirts. High quality prints with patriotic designs.',
        tags: ['PRINTED', 'INDEPENDENCE DAY', 'Premium Quality'],
        minOrder: 100
    },
    'KIDS PRINTED T-SHIRT': {
        groupSize: 3,
        description: 'Fun and colorful printed t-shirts for kids. Soft, comfortable fabric safe for children.',
        tags: ['KIDS', 'PRINTED'],
        minOrder: 100
    },
    'LS PRINTED': {
        groupSize: 3,
        description: 'Long sleeve printed t-shirts with premium quality prints. Perfect for cooler weather and outdoor activities.',
        tags: ['LONG SLEEVE', 'PRINTED'],
        minOrder: 100
    },
    'NIRMALKNIT ROUND NECK': {
        groupSize: 3,
        description: 'Premium Nirmalknit round neck t-shirts with superior fabric quality. Comfortable and durable for daily wear.',
        tags: ['ROUND NECK', 'Premium Quality'],
        minOrder: 100
    },
    'NIRMALKNIT V NECK': {
        groupSize: 1, // Only 3 images - show all as separate cards
        allImages: true,
        description: 'Elegant Nirmalknit V-neck t-shirts with premium finish. Stylish design for modern fashion.',
        tags: ['V NECK', 'Premium Quality'],
        minOrder: 100
    },
    'PRINTED FABRIC T-SHIRT': {
        groupSize: 3,
        description: 'Printed fabric t-shirts with unique patterns and designs. High quality prints that last wash after wash.',
        tags: ['PRINTED', 'Premium Quality'],
        minOrder: 100
    },
    'PROMOTIONAL COLLAR': {
        groupSize: 3,
        description: 'Collar t-shirts designed for promotional campaigns. Cost-effective with great quality for bulk orders.',
        tags: ['COLLAR', 'PROMOTIONAL'],
        minOrder: 100
    },
    'PROMOTIONAL ROUND T-SHIRT': {
        groupSize: 3,
        description: 'Round neck t-shirts perfect for promotional events and campaigns. Affordable bulk pricing with quality assurance.',
        tags: ['ROUND NECK', 'PROMOTIONAL'],
        minOrder: 100
    },
    'PLAIN POLYSTER': {
        groupSize: 3,
        description: 'Premium plain polyester apparel. High quality 110 GSM and 140 GSM options. Customizable for your needs.',
        tags: ['PLAIN', 'POLYESTER', 'Premium Quality'],
        minOrder: 100,
        fabricWeights: [
            { value: '110', label: '110 GSM', description: 'Light weight' },
            { value: '140', label: '140 GSM', description: 'Medium weight' },
            { value: 'custom', label: 'Custom GSM', description: 'Specify your preferred GSM' }
        ],
        customizationOptions: [
            { name: 'Sublimation' },
            { name: 'Table Print' },
            { name: 'Embroidery' }
        ]
    },
    'ROUND CUT AND SEW': {
        groupSize: 1, // SPECIAL CASE: Keep each image as separate product
        allImages: true, // Include all images in each product for detail page
        description: 'Premium round cut and sew t-shirts with precision tailoring. Comfortable fit and durable stitching.',
        tags: ['ROUND', 'Premium Quality'],
        minOrder: 100
    },
    'SALINA ROUND NECK': {
        groupSize: 3,
        description: 'Salina round neck t-shirts with premium fabric quality. Soft touch and comfortable wear.',
        tags: ['ROUND NECK', 'Premium Quality'],
        minOrder: 100
    },
    'SLUB T-SHIRT': {
        groupSize: 3,
        description: 'Slub t-shirts with unique textured fabric. Modern look with comfortable fit.',
        tags: ['SLUB', 'Premium Quality'],
        minOrder: 100
    }
};

const colors = [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Fluorescent Green', hex: '#39FF14' },
    { name: 'Gold Yellow', hex: '#FFD700' },
    { name: 'Royal Blue', hex: '#4169E1' },
    { name: 'Baby Pink', hex: '#F4C2C2' },
    { name: 'Sky Blue', hex: '#87CEEB' },
    { name: 'Light Gray', hex: '#D3D3D3' },
    { name: 'Black', hex: '#000000' },
    { name: 'Orange', hex: '#FF6600' },
    { name: 'Red', hex: '#FF0000' },
    { name: 'Lemon Yellow', hex: '#FFF44F' },
    { name: 'Flag Green', hex: '#138808' },
    { name: 'Fluorescent Orange', hex: '#FF5F1F' },
    { name: 'Navy Blue', hex: '#000080' }
];

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const productImagesDir = path.join(__dirname, '..', 'public', 'product-images');

function generateSlug(category, index) {
    return category.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') + '-' + index;
}

function extractNameFromFile(filename) {
    // Extract name like "Ery0609" from "_ERY0609.webp"
    const match = filename.match(/_?([A-Za-z]+)(\d+)/i);
    if (match) {
        return match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase() + match[2];
    }
    return filename.replace('.webp', '');
}

function generateProducts() {
    const products = [];
    let globalIndex = 0;

    const categories = fs.readdirSync(productImagesDir).filter(name => {
        const fullPath = path.join(productImagesDir, name);
        return fs.statSync(fullPath).isDirectory();
    }).sort();

    for (const category of categories) {
        const categoryPath = path.join(productImagesDir, category);
        const config = categoryConfigs[category] || {};

        const files = fs.readdirSync(categoryPath)
            .filter(f => f.endsWith('.webp') && !f.includes('-Recovered'))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

        if (files.length === 0) continue;

        // Group files by prefix (e.g., "1" from "1.1.webp", "1.2.webp", "_ERY0358" from "_ERY0358.webp")
        const groups = {};

        files.forEach(file => {
            const basename = file.replace('.webp', '');
            // Extract prefix: "1.1" -> "1", "1.2" -> "1", "5" -> "5", "_ERY0358" -> "_ERY0358"
            const match = basename.match(/^(\d+)(?:\.|$)|^([^.]+)$/);
            const prefix = match ? (match[1] || match[2]) : basename;

            if (!groups[prefix]) {
                groups[prefix] = [];
            }
            groups[prefix].push(file);
        });

        // Sort group keys: numbers first (numerically), then others (alphabetically)
        const sortedGroupKeys = Object.keys(groups).sort((a, b) => {
            const aNum = parseInt(a);
            const bNum = parseInt(b);
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return aNum - bNum;
            }
            if (!isNaN(aNum)) return -1;
            if (!isNaN(bNum)) return 1;
            return a.localeCompare(b);
        });

        // Create one product per group
        sortedGroupKeys.forEach((groupKey, productIndex) => {
            const groupFiles = groups[groupKey];
            const firstFile = groupFiles[0];

            let productName = extractNameFromFile(firstFile);
            if (/^\d+$/.test(productName)) {
                productName = String(productIndex + 1);
            }

            const images = groupFiles.map(f => `/product-images/${category}/${f}`);

            const product = {
                id: generateSlug(category, productIndex),
                name: productName,
                sku: `ANT-${category.substring(0, 3).toUpperCase()}-${String(globalIndex).padStart(3, '0')}`,
                category: category,
                description: config.description || `Premium ${category.toLowerCase()} apparel.`,
                images: images,
                fabricWeights: config.fabricWeights || defaultFabricWeights,
                colors: colors,
                sizes: sizes,
                customizationOptions: config.customizationOptions || defaultCustomizationOptions,
                minOrder: config.minOrder || 100,
                tags: config.tags || ['Premium Quality']
            };

            products.push(product);
            globalIndex++;
        });
    }

    return products;
}

function main() {
    const products = generateProducts();
    const categoriesList = [...new Set(products.map(p => p.category))];

    const output = `export interface Product {
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

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export const categories = ["All", ${categoriesList.map(c => `"${c}"`).join(', ')}];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
};
`;

    const outputPath = path.join(__dirname, '..', 'src', 'data', 'products.ts');
    fs.writeFileSync(outputPath, output, 'utf-8');

    console.log(`Generated ${products.length} products across ${categoriesList.length} categories`);
    console.log('Categories:', categoriesList);
    console.log('\nProducts per category:');
    for (const cat of categoriesList) {
        const count = products.filter(p => p.category === cat).length;
        console.log(`  ${cat}: ${count} products`);
    }
}

main();
