import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import womenCollection from "@/assets/collection-women.jpg";
import menCollection from "@/assets/collection-men.jpg";
import accessoriesCollection from "@/assets/collection-accessories.jpg";

const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    category: "Women",
    price: "$1,890",
    image: womenCollection,
  },
  {
    id: 2,
    name: "Tailored Wool Blazer",
    category: "Men",
    price: "$1,250",
    image: menCollection,
  },
  {
    id: 3,
    name: "Leather Tote Bag",
    category: "Accessories",
    price: "$680",
    image: accessoriesCollection,
  },
  {
    id: 4,
    name: "Cashmere Overcoat",
    category: "Women",
    price: "$2,400",
    image: womenCollection,
  },
  {
    id: 5,
    name: "Italian Leather Shoes",
    category: "Men",
    price: "$890",
    image: menCollection,
  },
  {
    id: 6,
    name: "Silk Scarf Collection",
    category: "Accessories",
    price: "$320",
    image: accessoriesCollection,
  },
];

const categories = ["All", "Women", "Men", "Accessories"];

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Collections | AURUM Luxury Fashion</title>
        <meta
          name="description"
          content="Explore AURUM's exclusive collections. Premium women's and men's fashion with luxury accessories. Timeless designs crafted with excellence."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Page Header */}
            <div className="text-center mb-16">
              <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0 stagger-1">
                Discover
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground animate-fade-up opacity-0 stagger-2">
                Our Collections
              </h1>
              <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto mt-6 animate-fade-up opacity-0 stagger-3">
                Each piece in our collection represents the pinnacle of
                craftsmanship and design excellence.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center gap-4 md:gap-8 mb-16 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors pb-2 border-b border-transparent hover:border-primary"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group cursor-pointer animate-fade-up opacity-0"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                    <button className="absolute bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </button>
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
                    <p className="text-foreground font-light">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Collections;
