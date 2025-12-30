import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/antique-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="New Antique Apparels"
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground font-light leading-relaxed max-w-md">
              As a trusted name in garment manufacturing, we design and produce best-in-class polyester T-shirts, polo tees, and corporate apparel. <br />Our commitment to quality, consistency, and timely delivery makes us the preferred choice for businesses and brands.
            </p>
            <p className="text-muted-foreground font-light mt-2">
              <span className="text-foreground">GST No.</span> 33AMIPB4062D1Z0
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="tel:6381379080"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                <span>6381379080</span>
              </a>
              <a
                href="tel:9360308412"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                <span>9360308412</span>
              </a>
              <a
                href="mailto:newantiqueapparels2018@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                <span>newantiqueapparels2018@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-8">
            <h4 className="font-display text-lg tracking-wider text-foreground mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Our Products", path: "/collections" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-light tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices - Main & Branch side by side */}
          <div className="md:col-span-2">
            <h4 className="font-display text-lg tracking-wider text-foreground mb-6">
              Our Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Factory Address */}
              <div>
                <p className="text-primary font-medium text-sm mb-3">Factory Address</p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div className="leading-relaxed">
                    <p>26/2A, N.V.B. LAYOUT,</p>
                    <p>CHELLAM NAGAR EXTN.,</p>
                    <p>MANGALAM ROAD,</p>
                    <p>TIRUPUR - 641687</p>
                  </div>
                </div>
              </div>
              {/* Branch Office */}
              <div>
                <p className="text-primary font-medium text-sm mb-3">Branch Office</p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div className="leading-relaxed">
                    <p>No.9, Elementary School Street,</p>
                    <p>Karuvampalayam, Tiruppur - 641604</p>
                    <p>Near Bus Stop</p>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-light tracking-wider">
            © {new Date().getFullYear()} New Antique Apparels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/about"
              className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
