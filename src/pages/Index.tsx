import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CollectionsPreview from "@/components/CollectionsPreview";
import AboutPreview from "@/components/AboutPreview";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AURUM | Luxury Fashion & Garments</title>
        <meta
          name="description"
          content="Discover AURUM's curated collection of premium garments where traditional craftsmanship meets contemporary design. Luxury fashion since 1985."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <CollectionsPreview />
          <AboutPreview />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
