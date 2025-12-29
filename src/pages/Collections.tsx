import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Products | New Antique Apparels - T-Shirt Manufacturer</title>
        <meta
          name="description"
          content="Explore New Antique Apparels' product range - Premium Polyester T-Shirts, Polo T-Shirts, Corporate Wear. Quality manufacturing from Tiruppur."
        />
        <meta name="keywords" content="Polyester T-Shirt, Polo T-Shirt, Corporate T-Shirt, White T-Shirt, Election T-Shirt" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Page Header */}
            <div className="text-center mb-16">
              <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0 stagger-1">
                Quality Products
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground animate-fade-up opacity-0 stagger-2">
                Our Products
              </h1>
              <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto mt-6 animate-fade-up opacity-0 stagger-3">
                Each product is manufactured with precision and care, ensuring the highest
                quality standards for our valued customers.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center gap-4 md:gap-8 mb-16 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "text-sm font-body tracking-widest uppercase transition-colors pb-2 border-b",
                    activeCategory === category
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground hover:border-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="group cursor-pointer animate-fade-up opacity-0"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />

                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary text-primary-foreground text-xs tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-foreground font-light text-sm">From</p>
                      <p className="text-primary font-display">
                        {product.tieredPricing[product.tieredPricing.length - 1].price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 pt-16 border-t border-border">
              <h2 className="font-display text-3xl text-foreground mb-4">Looking for Custom Orders?</h2>
              <p className="text-muted-foreground font-light mb-6">
                Tell us your requirements and get the best quote for your bulk orders.
              </p>
              <a
                href="tel:6381379080"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-body tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
              >
                Get Best Quote
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Collections;
