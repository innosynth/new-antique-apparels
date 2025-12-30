import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 bg-[#fdfcfb]">
        <img
          src={heroImage}
          alt="Premium T-Shirts and Corporate Wear"
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="animate-fade-up opacity-0 stagger-1 text-black font-body text-sm tracking-[0.3em] uppercase mb-6">
            Premium Quality Apparel Manufacturer
          </p>
          <h1 className="animate-fade-up opacity-0 stagger-2 font-cooper text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
            <span className="text-brand-purple">New Antique</span>
            <span className="block italic text-brand-tan">Apparels</span>
          </h1>
          <p className="animate-fade-up opacity-0 stagger-3 font-body text-lg md:text-xl text-black font-light max-w-2xl mx-auto mb-12">
            Leading manufacturer of premium Polyester T-Shirts, Polo T-Shirts, and Corporate Wear.
            Where quality meets innovation since 2017.
          </p>
          <div className="animate-fade-up opacity-0 stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/collections">
                Explore Products
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild className="text-black">
              <a href="tel:6381379080">
                <Phone className="mr-2" size={18} />
                Call Us Now
              </a>
            </Button>
          </div>

          <div className="animate-fade-up opacity-0 stagger-5 mt-16 text-center">
            <p className="text-violet-600 font-body text-base font-bold tracking-[0.2em] uppercase mb-2">Trusted Manufacturer</p>
            <p className="text-violet-700 font-semibold text-sm transition-colors duration-300">95% Response Rate • 98% User Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
