import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Minus, Plus, Phone, ChevronRight, X } from "lucide-react";
import { getProductById } from "@/data/products";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const displayName = product ? (/^\d+(\.\d+)?$/.test(product.name) ? product.category : product.name) : "";

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(250);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customGsmValue, setCustomGsmValue] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-display text-4xl text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Button variant="hero" asChild>
              <Link to="/collections">Browse All Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleCustomizationToggle = (option: string) => {
    setSelectedCustomizations((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleQuantityChange = (delta: number) => {
    const newQty = quantity + delta;
    if (newQty >= product.minOrder) {
      setQuantity(newQty);
    }
  };

  const generateWhatsAppMessage = (requestType: string) => {
    const selectedWeightInfo = product.fabricWeights[selectedWeight];
    const selectedColorInfo = product.colors[selectedColor];
    const selectedSizeInfo = product.sizes[selectedSize];

    // Determine fabric weight display text
    const isCustomGsm = selectedWeightInfo.value === 'custom';
    const fabricWeightText = isCustomGsm && customGsmValue
      ? `Custom GSM: ${customGsmValue} GSM`
      : `${selectedWeightInfo.label} (${selectedWeightInfo.description})`;

    const message = `
*${requestType} - New Antique Apparels*

*Product:* ${displayName}
*SKU:* ${product.sku}
*Category:* ${product.category}

*Selected Options:*
• Fabric Weight: ${fabricWeightText}
• Color: ${selectedColorInfo.name}
• Size: ${selectedSizeInfo}
• Quantity: ${quantity} pcs

${selectedCustomizations.length > 0 ? `*Customizations:*\n${selectedCustomizations.map(c => `• ${c}`).join('\n')}` : ''}

Please provide a quote for this order. Thank you!
    `.trim();

    return encodeURIComponent(message);
  };

  const handleRequestQuote = () => {
    const message = generateWhatsAppMessage("Quote Request");
    const whatsappUrl = `https://wa.me/919360308412?text=${message}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp to send your quote request!");
  };

  const handleRequestSample = () => {
    const message = generateWhatsAppMessage("Sample Request");
    const whatsappUrl = `https://wa.me/919360308412?text=${message}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp to request your sample!");
  };

  return (
    <>
      <Helmet>
        <title>{`${displayName} | New Antique Apparels - Tiruppur`}</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.category}, ${displayName}, T-Shirt Manufacturer, Tiruppur, Bulk Order`} />
        <link rel="canonical" href={`https://newantiqueapparel.com/product/${product.id}`} />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://newantiqueapparel.com/product/${product.id}`} />
        <meta property="og:title" content={`${displayName} | New Antique Apparels`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={`https://newantiqueapparel.com${product.images[0]}`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${displayName} | New Antique Apparels`} />
        <meta property="twitter:description" content={product.description} />
        <meta property="twitter:image" content={`https://newantiqueapparel.com${product.images[0]}`} />

        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": displayName,
            "image": product.images.map(img => `https://newantiqueapparel.com${img}`),
            "description": product.description,
            "sku": product.sku,
            "brand": {
              "@type": "Brand",
              "name": "New Antique Apparels"
            },
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "1",
              "lowPrice": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/collections" className="hover:text-primary transition-colors">Products</Link>
              <ChevronRight size={14} />
              <span className="text-foreground">{displayName}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div
                  className="aspect-[3/4] overflow-hidden bg-secondary cursor-zoom-in group/img relative"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    src={product.images[selectedImage]}
                    alt={displayName}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors" />
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={cn(
                        "w-20 h-20 flex-shrink-0 overflow-hidden border-2 transition-colors",
                        selectedImage === idx ? "border-primary" : "border-border hover:border-muted-foreground"
                      )}
                    >
                      <img src={img} alt={`${displayName} view ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Tags */}
                <div className="flex gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs font-body tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & SKU */}
                <div>
                  <h1 className="font-display text-3xl md:text-4xl text-foreground">{displayName}</h1>
                  <p className="text-muted-foreground text-sm mt-1">SKU: {product.sku}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-foreground text-sm">4.8</span>
                  <span className="text-muted-foreground text-sm">(156 reviews)</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Fabric Weight */}
                <div>
                  <h3 className="text-foreground font-body text-sm tracking-wider uppercase mb-3">Fabric Weight</h3>
                  <div className="flex gap-3 flex-wrap">
                    {product.fabricWeights.map((weight, idx) => (
                      <button
                        key={weight.value}
                        onClick={() => setSelectedWeight(idx)}
                        className={cn(
                          "px-4 py-3 border transition-all text-left",
                          selectedWeight === idx
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-muted-foreground"
                        )}
                      >
                        <p className="text-foreground font-medium">{weight.label}</p>
                        <p className="text-muted-foreground text-xs">{weight.description}</p>
                      </button>
                    ))}
                  </div>
                  {/* Custom GSM Input */}
                  {product.fabricWeights[selectedWeight]?.value === 'custom' && (
                    <div className="mt-3">
                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          placeholder="Enter your preferred GSM (e.g., 150)"
                          value={customGsmValue}
                          onChange={(e) => setCustomGsmValue(e.target.value)}
                          className="flex-1 px-4 py-3 border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        />
                        <span className="text-muted-foreground text-sm">GSM</span>
                      </div>
                      <p className="text-muted-foreground text-xs mt-2">Specify your custom fabric weight in GSM (grams per square meter)</p>
                    </div>
                  )}
                </div>

                {/* Colors */}
                <div>
                  <h3 className="text-foreground font-body text-sm tracking-wider uppercase mb-3">
                    Color: {product.colors[selectedColor].name}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color, idx) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(idx)}
                        className={cn(
                          "w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center",
                          selectedColor === idx ? "border-primary scale-110" : "border-border"
                        )}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor === idx && (
                          <span className={cn(
                            "text-sm",
                            color.hex === "#FFFFFF" ? "text-background" : "text-foreground"
                          )}>✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h3 className="text-foreground font-body text-sm tracking-wider uppercase mb-3">
                    Size: {product.sizes[selectedSize]}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(idx)}
                        className={cn(
                          "w-12 h-10 border transition-all text-sm",
                          selectedSize === idx
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-foreground hover:border-muted-foreground"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customization Options */}
                <div>
                  <h3 className="text-foreground font-body text-sm tracking-wider uppercase mb-3">
                    Customization Options
                  </h3>
                  <div className="space-y-2">
                    {product.customizationOptions.map((option) => (
                      <label
                        key={option.name}
                        className="flex items-center justify-between p-3 border border-border hover:border-muted-foreground transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={selectedCustomizations.includes(option.name)}
                            onCheckedChange={() => handleCustomizationToggle(option.name)}
                          />
                          <span className="text-foreground">{option.name}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>



                {/* Bottom Actions */}
                <div className="pt-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(-50)}
                        className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <div className="text-center">
                        <p className="font-display text-2xl text-foreground">{quantity}</p>
                        <p className="text-muted-foreground text-xs">pcs</p>
                      </div>
                      <button
                        onClick={() => handleQuantityChange(50)}
                        className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="hero" size="lg" className="flex-1" onClick={handleRequestQuote}>
                      Request Quote
                    </Button>
                    <Button variant="heroOutline" size="lg" onClick={handleRequestSample}>
                      Request Sample
                    </Button>
                  </div>

                  <a
                    href="tel:6381379080"
                    className="flex items-center justify-center gap-2 text-primary hover:underline"
                  >
                    <Phone size={16} />
                    <span>Call for bulk order inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={40} />
          </button>
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] p-6 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={product.images[selectedImage]}
              alt={displayName}
              className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
