import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Leaf, Users } from "lucide-react";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import heroImage from "@/assets/hero-fashion.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Every stitch, every cut, every fabric choice reflects our unwavering commitment to perfection.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Fashion is our art form. We pour our hearts into creating pieces that inspire confidence.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Responsible fashion is beautiful fashion. We embrace eco-conscious practices at every step.",
  },
  {
    icon: Users,
    title: "Heritage",
    description:
      "Nearly four decades of expertise passed down through generations of skilled artisans.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AURUM - Our Story & Heritage</title>
        <meta
          name="description"
          content="Discover AURUM's journey from 1985 to today. Learn about our commitment to craftsmanship, sustainability, and timeless luxury fashion."
        />
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
                    Our Story
                  </p>
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight animate-fade-up opacity-0 stagger-2">
                    A Legacy of
                    <span className="block italic text-primary">Excellence</span>
                  </h1>
                  <p className="text-muted-foreground font-light text-lg leading-relaxed mt-8 animate-fade-up opacity-0 stagger-3">
                    Founded in 1985, AURUM emerged from a simple yet profound
                    vision: to create garments that transcend the ephemeral
                    nature of fashion trends and become timeless companions in
                    the lives of discerning individuals.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed mt-6 animate-fade-up opacity-0 stagger-4">
                    What began as a small atelier in the heart of New York has
                    grown into a globally recognized symbol of luxury and
                    craftsmanship, yet we remain true to our founding
                    principles.
                  </p>
                </div>
                <div className="relative animate-fade-up opacity-0 stagger-3">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={heroImage}
                      alt="AURUM atelier"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8">
                    <p className="font-display text-5xl">38</p>
                    <p className="text-sm tracking-widest uppercase mt-1">
                      Years of Excellence
                    </p>
                  </div>
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

          {/* Craftsmanship Section */}
          <section className="py-24">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
                    The Art of Making
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-8">
                    Uncompromising
                    <span className="block italic text-primary">
                      Craftsmanship
                    </span>
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Each AURUM garment passes through the hands of over 30
                    skilled artisans. From the initial pattern cutting to the
                    final pressing, every step is executed with precision and
                    care that machines simply cannot replicate.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    We source only the finest materials—Italian silks, Scottish
                    cashmere, Japanese denims—and transform them into pieces
                    that feel as luxurious as they look.
                  </p>
                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                    <div>
                      <p className="font-display text-4xl text-primary">50+</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Master Artisans
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-4xl text-primary">120+</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Hours per Piece
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-4xl text-primary">15</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Countries Sourced
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={craftsmanshipImage}
                      alt="AURUM craftsmanship"
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
