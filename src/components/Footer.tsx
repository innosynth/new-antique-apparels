import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/antique-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src={logo} 
              alt="New Antique Apparels" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground font-light leading-relaxed max-w-md">
              We are the foremost manufacturer of best in class products comprising of 
              Polyester T-Shirt, Polo Polyester T-Shirt, Corporate T-Shirt and many more. 
              GST No. 33AMIPB4062D1ZO
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="tel:08047633835"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                <span>08047633835</span>
              </a>
              <a
                href="mailto:contact@newantiqueapparels.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg tracking-wider text-foreground mb-6">
              Visit Us
            </h4>
            <div className="flex items-start gap-2 text-sm text-muted-foreground font-light">
              <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p>9, Elementary School Street,</p>
                <p>Karuvampalayam</p>
                <p>Tiruppur - 641604</p>
                <p>Tamil Nadu, India</p>
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
