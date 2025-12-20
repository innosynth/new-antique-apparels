import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const AboutPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
            <img
              src={craftsmanshipImage}
              alt="Artisan craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-primary/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Heritage
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Crafted with
              <span className="block italic text-primary">Passion</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed text-lg mb-6">
              Since 1985, AURUM has been at the forefront of luxury fashion,
              blending traditional craftsmanship with contemporary innovation.
              Each piece is meticulously crafted by skilled artisans who share
              our commitment to excellence.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-10">
              We believe in the art of slow fashion—creating garments that
              transcend seasons and trends, becoming cherished pieces in your
              wardrobe for years to come.
            </p>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/about">
                Discover Our Story
                <ArrowRight className="ml-3" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
