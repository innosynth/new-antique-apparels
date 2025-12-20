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
    details: ["123 Fashion Avenue", "New York, NY 10001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (234) 567-890", "+1 (234) 567-891"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@aurum.com", "press@aurum.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Sat: 10AM - 8PM", "Sunday: 12PM - 6PM"],
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll be in touch soon.");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AURUM Luxury Fashion</title>
        <meta
          name="description"
          content="Get in touch with AURUM. Visit our flagship store in New York or reach out for inquiries about our luxury collections and services."
        />
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
                We'd love to hear from you. Whether you have a question about
                our collections, need styling advice, or want to schedule a
                private appointment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Form */}
              <div className="animate-fade-up opacity-0 stagger-3">
                <h2 className="font-display text-3xl text-foreground mb-8">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        required
                        className="bg-transparent border-border focus:border-primary h-12"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        required
                        className="bg-transparent border-border focus:border-primary h-12"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
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
                      Subject
                    </label>
                    <Input
                      type="text"
                      required
                      className="bg-transparent border-border focus:border-primary h-12"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                      Message
                    </label>
                    <Textarea
                      required
                      className="bg-transparent border-border focus:border-primary min-h-[150px] resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
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
                    <p className="text-muted-foreground font-light">
                      123 Fashion Avenue, New York
                    </p>
                  </div>
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
