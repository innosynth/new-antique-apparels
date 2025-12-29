import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const features = [
  "Premium quality materials",
  "Skilled workforce of 51-100 employees",
  "Annual turnover of 5-25 Cr",
  "GST registered & verified manufacturer",
];

const AboutPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
            <img
              src={craftsmanshipImage}
              alt="Manufacturing excellence"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-primary/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              About Our Company
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Trusted
              <span className="block italic text-primary">Manufacturer</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed text-lg mb-6">
              Based in Karuvampalayam, Tiruppur, Tamil Nadu, New Antique Apparels is a 
              leading proprietorship firm specializing in premium quality apparel manufacturing.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              We have a team of dedicated professionals who help us in purveying prompt 
              sales support to the client with a professional attitude which has helped 
              our company in accomplishing ultimate customer contentment.
            </p>
            
            {/* Features */}
            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span className="font-light">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="elegant" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
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
