import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Building, CheckCircle } from "lucide-react";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import heroImage from "@/assets/hero-fashion.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Every stitch, every fabric choice reflects our unwavering commitment to delivering premium quality products.",
  },
  {
    icon: Users,
    title: "Skilled Team",
    description:
      "Our team of 51-100 dedicated professionals ensures prompt sales support and ultimate customer satisfaction.",
  },
  {
    icon: Building,
    title: "Established",
    description:
      "GST registered since January 2018, we are a trusted proprietorship firm with a proven track record.",
  },
  {
    icon: CheckCircle,
    title: "Verified",
    description:
      "IndiaMART Trust Seal verified manufacturer with 95% response rate and excellent customer reviews.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | New Antique Apparels - T-Shirt Manufacturer Tiruppur</title>
        <meta
          name="description"
          content="Learn about New Antique Apparels - Leading T-Shirt manufacturer in Tiruppur, Tamil Nadu. 51-100 employees, 5-25 Cr annual turnover. GST: 33AMIPB4062D1ZO"
        />
        <meta name="keywords" content="New Antique Apparels, T-Shirt Manufacturer, Tiruppur, Tamil Nadu, Proprietorship" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 lg:py-40">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0 stagger-1">
                    About Us
                  </p>
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight animate-fade-up opacity-0 stagger-2">
                    Welcome to
                    <span className="block italic text-primary">New Antique Apparels</span>
                  </h1>
                  <p className="text-muted-foreground font-light text-lg leading-relaxed mt-8 animate-fade-up opacity-0 stagger-3">
                    Based in Karuvampalayam, Tiruppur, Tamil Nadu, we are the foremost
                    manufacturer of best in class products comprising of Polyester T-Shirt,
                    Polo Polyester T-Shirt, Corporate T-Shirt and many more.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed mt-6 animate-fade-up opacity-0 stagger-4">
                    We have a team of dedicated professionals who help us in purveying prompt
                    sales support to the client with a professional attitude which has helped
                    our company in accomplishing ultimate customer contentment.
                  </p>
                </div>
                <div className="relative animate-fade-up opacity-0 stagger-3">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={heroImage}
                      alt="New Antique Apparels Manufacturing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8">
                    <p className="font-display text-5xl">7+</p>
                    <p className="text-sm tracking-widest uppercase mt-1">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Stats */}
          <section className="py-16 bg-secondary/50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="font-display text-4xl text-primary">51-100</p>
                  <p className="text-muted-foreground text-sm mt-2">Employees</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-primary">5-25 Cr</p>
                  <p className="text-muted-foreground text-sm mt-2">Annual Turnover</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-primary">95%</p>
                  <p className="text-muted-foreground text-sm mt-2">Response Rate</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-primary">98%</p>
                  <p className="text-muted-foreground text-sm mt-2">User Satisfaction</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 bg-secondary">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
                  What We Stand For
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground">
                  Our Values
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="text-center p-8 border border-border hover:border-primary transition-colors duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <value.icon
                      className="mx-auto text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                      size={40}
                      strokeWidth={1}
                    />
                    <h3 className="font-display text-2xl text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Details Section */}
          <section className="py-24">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
                    Company Details
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-8">
                    Quality
                    <span className="block italic text-primary">
                      Manufacturing
                    </span>
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Our skilled personnel, technically advanced production unit, a dynamic
                    approach to customer affiliations, and an ongoing assurance to product
                    innovation are just some of the attributes for our survival in the most
                    competitive environment.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Nature of Business</p>
                      <p className="font-display text-xl text-foreground mt-1">Manufacturer</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Legal Status</p>
                      <p className="font-display text-xl text-foreground mt-1">Proprietorship</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GST Number</p>
                      <p className="font-display text-lg text-foreground mt-1">33AMIPB4062D1ZO</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">IEC Code</p>
                      <p className="font-display text-xl text-foreground mt-1">AMIPB4062D</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={craftsmanshipImage}
                      alt="New Antique Apparels craftsmanship"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
