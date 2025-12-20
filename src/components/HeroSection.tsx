import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury fashion hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="animate-fade-up opacity-0 stagger-1 text-primary font-body text-sm tracking-[0.3em] uppercase mb-6">
            New Collection 2024
          </p>
          <h1 className="animate-fade-up opacity-0 stagger-2 font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] mb-8">
            Timeless
            <span className="block italic text-primary">Elegance</span>
          </h1>
          <p className="animate-fade-up opacity-0 stagger-3 font-body text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12">
            Discover our curated collection of premium garments, where
            traditional craftsmanship meets contemporary design.
          </p>
          <div className="animate-fade-up opacity-0 stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/collections">
                Explore Collection
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
