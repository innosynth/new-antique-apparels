import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const collections = [
  {
    title: "Polyester T-Shirts",
    subtitle: "Premium Quality",
    image: products[0]?.images[0],
    link: "/collections?category=polyester",
  },
  {
    title: "Polo T-Shirts",
    subtitle: "Corporate Style",
    image: products[1]?.images[0],
    link: "/collections?category=polo",
  },
  {
    title: "Corporate Wear",
    subtitle: "Professional Range",
    image: products[2]?.images[0],
    link: "/collections?category=corporate",
  },
];

const CollectionsPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Specialization
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Our Products
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              to={collection.link}
              className="group relative aspect-[3/4] overflow-hidden bg-secondary hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/40 transition-opacity duration-500 group-hover:bg-background/20" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2 font-body">
                  {collection.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">
                    {collection.title}
                  </h3>
                  <ArrowUpRight
                    className="text-primary opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    size={28}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsPreview;
