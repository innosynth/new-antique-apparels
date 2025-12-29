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
        <title>New Antique Apparels | Premium T-Shirt Manufacturer in Tiruppur</title>
        <meta
          name="description"
          content="New Antique Apparels - Leading manufacturer of premium Polyester T-Shirts, Polo T-Shirts, and Corporate Wear in Tiruppur, Tamil Nadu. Quality apparel since 2018."
        />
        <meta name="keywords" content="Polyester T-Shirt, Polo T-Shirt, Corporate T-Shirt, T-Shirt Manufacturer, Tiruppur, Tamil Nadu" />
        <link rel="canonical" href="https://newantiqueapparels.com" />
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
