import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { products, categories as categoryNames } from "@/data/products";

const CollectionsPreview = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  // Autoplay logic - sliding one by one
  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  // Prepare collection data from all real categories
  const collectionData = categoryNames.map((name) => {
    const firstProduct = products.find((p) => p.category === name);
    return {
      title: name,
      subtitle: "Premium Range",
      image: firstProduct?.images[0] || "",
      link: `/collections?category=${encodeURIComponent(name)}`,
    };
  });

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0 stagger-1">
            Our Specialization
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground animate-fade-up opacity-0 stagger-2">
            Our Products
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {collectionData.map((collection, index) => (
              <div
                key={collection.title}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3 md:px-4"
              >
                <Link
                  to={collection.link}
                  className="group relative block aspect-[3/4] overflow-hidden bg-secondary hover-lift animate-fade-up opacity-0"
                  style={{ animationDelay: `${(index % 3) * 0.15}s` }}
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
                      <h3 className="font-display text-2xl md:text-3xl text-foreground line-clamp-2">
                        {collection.title}
                      </h3>
                      <ArrowUpRight
                        className="text-primary opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shrink-0"
                        size={28}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsPreview;
