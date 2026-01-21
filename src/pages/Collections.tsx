import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, X, Filter, ChevronRight, LayoutGrid, Layers } from "lucide-react";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const setActiveCategory = (category: string) => {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearCategorySelection = () => {
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  // Get a preview image for each category
  const getCategoryImage = (category: string) => {
    const product = products.find(p => p.category === category);
    return product?.images[0] || "";
  };

  // Get count per category
  const getCategoryCount = (category: string) => {
    if (category === "All") return products.length;
    return products.filter(p => p.category === category).length;
  };

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
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Page Title & Breadcrumb */}
            <div className="mb-12 animate-fade-in text-center lg:text-left">
              <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
                Collections
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground uppercase tracking-widest text-[10px] font-bold">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight size={10} />
                <span className="text-primary">{activeCategory}</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Innovative Category Column */}
              <aside className="lg:w-80 flex-shrink-0">
                <div className="sticky top-32 space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-2xl text-foreground flex items-center gap-2">
                      <Layers size={20} className="text-primary" />
                      Categories
                    </h2>
                    {activeCategory !== "All" && (
                      <button
                        onClick={clearCategorySelection}
                        className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors"
                      >
                        Reset
                      </button>
                    )}
                  </div>

                  <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
                    {/* All Categories Card */}
                    <button
                      onClick={() => setActiveCategory("All")}
                      className={cn(
                        "group relative w-64 lg:w-full h-24 lg:h-20 rounded-2xl overflow-hidden transition-all duration-500 border border-white/5",
                        activeCategory === "All"
                          ? "ring-2 ring-primary ring-offset-4 ring-offset-background scale-[1.02] shadow-2xl shadow-primary/20"
                          : "hover:border-white/20"
                      )}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary opacity-40 group-hover:opacity-60 transition-opacity" />
                      <div className="relative z-10 h-full w-full p-5 flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                          <LayoutGrid size={24} className={activeCategory === "All" ? "text-primary" : "text-white/70"} />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-bold uppercase tracking-widest text-white/50">Browse</p>
                          <p className="text-lg font-display text-white">All Goods</p>
                        </div>
                        <div className="ml-auto text-white/30 font-body text-xl font-light">
                          {getCategoryCount("All")}
                        </div>
                      </div>
                    </button>

                    {categories.filter(c => c !== "All").map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                          "group relative w-64 lg:w-full h-24 lg:h-20 rounded-2xl overflow-hidden transition-all duration-500 border border-white/5",
                          activeCategory === category
                            ? "ring-2 ring-primary ring-offset-4 ring-offset-background scale-[1.02] shadow-2xl shadow-primary/20"
                            : "hover:border-white/20"
                        )}
                      >
                        {/* Dynamic Background Image */}
                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-20 group-hover:opacity-40">
                          <img
                            src={getCategoryImage(category)}
                            className="w-full h-full object-cover transform scale-125 group-hover:scale-100 transition-transform duration-1000"
                            alt=""
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

                        <div className="relative z-10 h-full w-full p-5 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shrink-0">
                            <img
                              src={getCategoryImage(category)}
                              alt={category}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-left overflow-hidden">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary truncate opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                              Collection
                            </p>
                            <p className={cn(
                              "text-sm font-display leading-tight truncate transition-colors",
                              activeCategory === category ? "text-primary" : "text-foreground group-hover:text-primary"
                            )}>
                              {category}
                            </p>
                          </div>
                          <div className="ml-auto text-muted-foreground/30 font-body text-lg font-light">
                            {getCategoryCount(category)}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Sidebar Help Card */}
                  <div className="hidden lg:block p-8 rounded-[2rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
                    <h3 className="relative z-10 font-display text-xl mb-3">Customization?</h3>
                    <p className="relative z-10 text-xs text-muted-foreground leading-relaxed mb-6">
                      We offer full sublimation and custom prints for all our blank apparel.
                    </p>
                    <Link to="/contact" className="relative z-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary group/link">
                      Inquire Now <ArrowUpRight size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Products Main Area */}
              <div className="flex-1">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <p className="text-muted-foreground text-sm font-body">
                    Found <span className="text-foreground font-bold">{filteredProducts.length}</span> items
                  </p>
                  <div className="flex items-center gap-4">
                    {/* Mobile Filter Reset Indicator */}
                    {activeCategory !== "All" && (
                      <button
                        onClick={clearCategorySelection}
                        className="lg:hidden flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest"
                      >
                        {activeCategory} <X size={12} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {filteredProducts.map((product, index) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="group relative flex flex-col animate-fade-up"
                      style={{ animationDelay: `${(index % 6) * 0.05}s` }}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/5 border border-white/5 transition-all duration-700 group-hover:border-primary/30 shadow-sm group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Minimal Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Floating Action */}
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                            <ArrowUpRight size={20} />
                          </div>
                        </div>

                        {/* Card Footer Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                          <div className="flex gap-2 mb-4">
                            {product.tags.slice(0, 1).map((tag) => (
                              <span key={tag} className="px-3 py-1 bg-primary text-primary-foreground rounded-lg text-[9px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="font-display text-2xl text-white mb-1 leading-tight">
                            {/^\d+(\.\d+)?$/.test(product.name) ? "" : product.name}
                          </h3>
                          <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">{product.sku}</p>
                        </div>
                      </div>

                      {/* Visible Static Info */}
                      <div className="mt-6 px-4">
                        <div>
                          <p className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase mb-1">
                            {product.category}
                          </p>
                          <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-all">
                            {/^\d+(\.\d+)?$/.test(product.name) ? <span className="opacity-0">.</span> : product.name}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                  <div className="text-center py-40 rounded-[3rem] border border-dashed border-white/10">
                    <Filter className="mx-auto mb-6 text-muted-foreground opacity-20" size={64} />
                    <h3 className="font-display text-3xl text-foreground mb-4">No results found</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                      Try selecting another category or resetting the filter.
                    </p>
                    <button
                      onClick={clearCategorySelection}
                      className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20"
                    >
                      Browse All Goods
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-32 p-12 lg:p-24 rounded-[4rem] bg-white/5 border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] -mr-80 -mt-80" />
              <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-[100px] -ml-60 -mb-60" />

              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6">Bulk Manufacturing</p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-foreground mb-8 leading-[1.1]">Partner with India's Finest <span>Apparel</span> Makers</h2>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                  From yarn to final garment, we handle the entire lifecycle of your custom apparel needs with unrivaled precision.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="tel:6381379080"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-primary text-primary-foreground px-12 py-6 rounded-2xl font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all shadow-2xl shadow-primary/30"
                  >
                    Start Project <ChevronRight size={18} />
                  </a>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white/5 text-foreground px-12 py-6 rounded-2xl font-bold tracking-widest uppercase text-xs border border-white/10 hover:bg-white/10 transition-all"
                  >
                    View Facilities
                  </Link>
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

export default Collections;
