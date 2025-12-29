import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Minus, Plus, Phone, ChevronRight } from "lucide-react";
import { getProductById } from "@/data/products";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);
  const [selectedPriceTier, setSelectedPriceTier] = useState(1);
  const [quantity, setQuantity] = useState(250);

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

  const handleRequestQuote = () => {
    toast.success("Quote request submitted! We'll contact you shortly.");
  };

  const handleRequestSample = () => {
    toast.success("Sample request submitted! We'll get back to you soon.");
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | New Antique Apparels</title>
        <meta
          name="description"
          content={`${product.name} - ${product.description.slice(0, 150)}...`}
        />
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
              <span className="text-foreground">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={cn(
                        "w-20 h-20 overflow-hidden border-2 transition-colors",
                        selectedImage === idx ? "border-primary" : "border-border hover:border-muted-foreground"
                      )}
                    >
                      <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
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
                  <h1 className="font-display text-3xl md:text-4xl text-foreground">{product.name}</h1>
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
                        <span className="text-primary">{option.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tiered Pricing */}
                <div>
                  <h3 className="text-foreground font-body text-sm tracking-wider uppercase mb-3">
                    Tiered Pricing (per unit)
                  </h3>
                  <div className="border border-border overflow-hidden">
                    <div className="flex bg-secondary">
                      <div className="flex-1 p-3 text-sm text-foreground font-medium">Quantity</div>
                      <div className="w-24 p-3 text-sm text-foreground font-medium text-right">Price</div>
                    </div>
                    {product.tieredPricing.map((tier, idx) => (
                      <button
                        key={tier.quantity}
                        onClick={() => setSelectedPriceTier(idx)}
                        className={cn(
                          "flex w-full border-t border-border transition-colors",
                          selectedPriceTier === idx ? "bg-primary/10" : "hover:bg-secondary/50"
                        )}
                      >
                        <div className="flex-1 p-3 text-sm text-muted-foreground text-left flex items-center gap-2">
                          {tier.quantity}
                          {selectedPriceTier === idx && (
                            <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded">
                              Selected
                            </span>
                          )}
                        </div>
                        <div className="w-24 p-3 text-sm text-foreground text-right font-medium">
                          {tier.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Unit Price</p>
                      <p className="font-display text-3xl text-primary">
                        {product.tieredPricing[selectedPriceTier].price}
                      </p>
                    </div>
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
                    href="tel:08047633835"
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
    </>
  );
};

export default ProductDetail;
