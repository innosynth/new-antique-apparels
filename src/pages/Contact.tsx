import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["9, Elementary School Street,", "Karuvampalayam, Tiruppur - 641604", "Tamil Nadu, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["08047633835", "Nataraj Balakrishnan (Proprietor)"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["Contact via E-mail", "Send Inquiry"],
  },
  {
    icon: Clock,
    title: "Response Rate",
    details: ["90% Response Rate", "Prompt Support"],
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry. We will contact you soon!");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | New Antique Apparels - Tiruppur T-Shirt Manufacturer</title>
        <meta
          name="description"
          content="Contact New Antique Apparels - Tiruppur's leading T-Shirt manufacturer. Call 08047633835 or visit us at Karuvampalayam, Tiruppur-641604, Tamil Nadu."
        />
        <meta name="keywords" content="Contact New Antique Apparels, T-Shirt Manufacturer Tiruppur, Karuvampalayam" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Page Header */}
            <div className="text-center mb-16">
              <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0 stagger-1">
                Get in Touch
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground animate-fade-up opacity-0 stagger-2">
                Contact Us
              </h1>
              <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto mt-6 animate-fade-up opacity-0 stagger-3">
                Tell us what you are looking for. Describe your requirement and 
                get the best quote for your bulk orders.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Form */}
              <div className="animate-fade-up opacity-0 stagger-3">
                <h2 className="font-display text-3xl text-foreground mb-8">
                  Send Inquiry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        required
                        className="bg-transparent border-border focus:border-primary h-12"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        className="bg-transparent border-border focus:border-primary h-12"
                        placeholder="Your company (optional)"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        required
                        className="bg-transparent border-border focus:border-primary h-12"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        required
                        className="bg-transparent border-border focus:border-primary h-12"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                      Product Interest
                    </label>
                    <Input
                      type="text"
                      className="bg-transparent border-border focus:border-primary h-12"
                      placeholder="e.g., Polyester T-Shirt, Corporate T-Shirt"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                      Describe Your Requirement
                    </label>
                    <Textarea
                      required
                      className="bg-transparent border-border focus:border-primary min-h-[150px] resize-none"
                      placeholder="Tell us about your requirements, quantity, specifications..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Get Best Quote
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-up opacity-0 stagger-4">
                <h2 className="font-display text-3xl text-foreground mb-8">
                  Find Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                          <info.icon
                            className="text-primary"
                            size={20}
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-foreground mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, index) => (
                            <p
                              key={index}
                              className="text-muted-foreground font-light text-sm"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 aspect-video bg-secondary border border-border flex items-center justify-center">
                  <div className="text-center">
                    <MapPin
                      className="mx-auto text-primary mb-4"
                      size={32}
                      strokeWidth={1}
                    />
                    <p className="text-foreground font-display text-lg">Karuvampalayam, Tiruppur</p>
                    <p className="text-muted-foreground font-light text-sm">Tamil Nadu - 641604</p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-8 p-6 bg-primary/10 border border-primary/30">
                  <p className="text-foreground font-display text-xl mb-2">Need Quick Response?</p>
                  <p className="text-muted-foreground font-light text-sm mb-4">
                    Call us directly for immediate assistance
                  </p>
                  <a 
                    href="tel:08047633835" 
                    className="inline-flex items-center gap-2 text-primary font-body tracking-widest text-lg hover:underline"
                  >
                    <Phone size={18} />
                    08047633835
                  </a>
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

export default Contact;
