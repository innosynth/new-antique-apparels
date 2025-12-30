import { useState } from "react";
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
    title: "Factory Address",
    details: ["26/2A, N.V.B.LAYOUT,", "CHELLAM NAGAR EXTN.,", "MANGALAM ROAD,", "TIRUPUR - 641687"],
  },
  {
    icon: MapPin,
    title: "Branch Office",
    details: ["No.9, Elementary School Street,", "Karuvampalayam, Tiruppur - 641604", "Near Bus Stop, Tamil Nadu, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["6381379080", "9360308412"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["newantiqueapparels2018@gmail.com"],
  },
  {
    icon: Clock,
    title: "Response Rate",
    details: ["95% Response Rate", "98% User Satisfaction"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    requirement: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
*New Inquiry - New Antique Apparels*

*Customer Details:*
• Name: ${formData.name}
• Company: ${formData.company || 'Not provided'}
• Email: ${formData.email}
• Phone: ${formData.phone}

*Product Interest:* ${formData.productInterest || 'Not specified'}

*Requirement:*
${formData.requirement}

Please respond to this inquiry. Thank you!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919360308412?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp to send your inquiry!");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | New Antique Apparels - Tiruppur T-Shirt Manufacturer</title>
        <meta
          name="description"
          content="Get in touch with New Antique Apparels for bulk orders, custom T-shirt manufacturing, and corporate wear inquiries. Located in Tiruppur, India."
        />
        <meta name="keywords" content="Contact New Antique Apparels, T-Shirt Manufacturer Contact, Tiruppur Factory Address, Bulk Inquiry" />
        <link rel="canonical" href="https://newantiqueapparel.com/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newantiqueapparel.com/contact" />
        <meta property="og:title" content="Contact Us | New Antique Apparels" />
        <meta property="og:description" content="Reach out to us for premium quality apparel manufacturing. Bulk quotes and professional support available." />
        <meta property="og:image" content="https://newantiqueapparel.com/og-image.png" />
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
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
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
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="bg-transparent border-border focus:border-primary h-12"
                      placeholder="e.g., Polyester T-Shirt, Corporate T-Shirt"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground tracking-wider uppercase mb-2">
                      Describe Your Requirement
                    </label>
                    <Textarea
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-border focus:border-primary min-h-[150px] resize-none"
                      placeholder="Tell us about your requirements, quantity, specifications..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Get Best Quote via WhatsApp
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

                {/* Google Maps Embed */}
                <div className="mt-12 aspect-video bg-secondary border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.2471736305197!2d77.32508644536617!3d11.08888621093586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9077fcd3391db%3A0x8d0cf70669cd664e!2sNEW%20ANTIQUE%20APPARELS!5e1!3m2!1sen!2sin!4v1767019186893!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="New Antique Apparels Location"
                  />
                </div>

                {/* Quick Contact */}
                <div className="mt-8 p-6 bg-primary/10 border border-primary/30">
                  <p className="text-foreground font-display text-xl mb-2">Need Quick Response?</p>
                  <p className="text-muted-foreground font-light text-sm mb-4">
                    Call us directly for immediate assistance
                  </p>
                  <a
                    href="tel:6381379080"
                    className="inline-flex items-center gap-2 text-primary font-body tracking-widest text-lg hover:underline"
                  >
                    <Phone size={18} />
                    9360308412
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
