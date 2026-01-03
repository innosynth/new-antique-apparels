import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, X } from "lucide-react";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

const Collections = () => {
  const productsGridRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const setActiveCategory = (category: string) => {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
    // Scroll products grid to top so user sees the filtered products
    productsGridRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearCategorySelection = () => {
    setSearchParams({});
    // Scroll products grid to top
    productsGridRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to top only on initial page load, not on category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);


  return (
    <>
      <Helmet>
        <title>Our Collections | New Antique Apparels - Tiruppur T-Shirt Manufacturer</title>
        <meta
          name="description"
          content="Explore our extensive range of premium apparel including Polyester, Polo, and Corporate T-Shirts. High-quality manufacturing from the heart of Tiruppur."
        />
        <meta name="keywords" content="Polyester T-Shirt, Polo T-Shirt, Corporate T-Shirt, Tiruppur Manufacturer, Bulk Apparel, Custom T-Shirts India" />
        <link rel="canonical" href="https://newantiqueapparel.com/collections" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newantiqueapparel.com/collections" />
        <meta property="og:title" content="Our Collections | New Antique Apparels" />
        <meta property="og:description" content="Browse our premium quality Polyester and Polo T-Shirts. Large-scale manufacturing for corporate and retail needs." />
        <meta property="og:image" content="https://newantiqueapparel.com/og-image.png" />
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

            {/* Main Content Area - Fixed viewport with independent scrolling */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12" style={{ height: 'calc(100vh - 280px)' }}>
              {/* Sidebar: Category Filter - Independent scroll */}
              <aside className="lg:w-64 flex-shrink-0 flex flex-col">
                <h2 className="font-display text-xl mb-4 flex items-center gap-2">
                  Categories
                  <span className="text-xs font-body text-muted-foreground font-normal">({filteredProducts.length} items)</span>
                </h2>

                {/* Selected Category Indicator */}
                {activeCategory !== "All" && (
                  <div className="mb-4 pb-4 border-b border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Selected</p>
                    <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2">
                      <span className="text-xs font-bold text-primary flex-1 uppercase tracking-wider">
                        {activeCategory}
                      </span>
                      <button
                        type="button"
                        onClick={clearCategorySelection}
                        className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-colors"
                        title="Clear selection"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Scrollable Categories List */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/50">
                  <div className="flex flex-row lg:flex-col gap-2 pb-4">
                    {categories.map((category) => (
                      <button
                        type="button"
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                          "text-sm font-body tracking-widest uppercase transition-all px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal border-l-2",
                          activeCategory === category
                            ? "text-primary border-primary bg-primary/5 font-bold"
                            : "text-muted-foreground border-transparent hover:text-foreground hover:border-foreground"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Main: Products Grid - Independent scroll */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/50" ref={productsGridRef}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-8">
                  {filteredProducts.map((product, index) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="group cursor-pointer animate-fade-up opacity-0"
                      style={{ animationDelay: `${0.1 + (index % 10) * 0.05}s` }}
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

                        {/* Tags */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold tracking-wider uppercase border border-black/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="absolute bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex justify-between items-start px-1">
                        <div>
                          <p className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase mb-1">
                            {product.category}
                          </p>
                          <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                            {product.name}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
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
