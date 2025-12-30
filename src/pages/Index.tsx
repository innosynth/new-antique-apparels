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
          content="New Antique Apparels - Leading manufacturer of premium Polyester T-Shirts, Polo T-Shirts, and Corporate Wear in Tiruppur, Tamil Nadu. Quality apparel manufacturer since 2017."
        />
        <meta name="keywords" content="Polyester T-Shirt, Polo T-Shirt, Corporate T-Shirt, T-Shirt Manufacturer, Tiruppur, Tamil Nadu, Bulk T-Shirt Manufacturer, Custom Apparel Tiruppur" />
        <link rel="canonical" href="https://newantiqueapparel.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newantiqueapparel.com" />
        <meta property="og:title" content="New Antique Apparels | Premium T-Shirt Manufacturer" />
        <meta property="og:description" content="Premium manufacturer of Polyester and Polo T-Shirts in Tiruppur. Quality and innovation in every stitch." />
        <meta property="og:image" content="https://newantiqueapparel.com/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://newantiqueapparel.com" />
        <meta property="twitter:title" content="New Antique Apparels | Premium T-Shirt Manufacturer" />
        <meta property="twitter:description" content="Premium manufacturer of Polyester and Polo T-Shirts in Tiruppur. Quality and innovation since 2017." />
        <meta property="twitter:image" content="https://newantiqueapparel.com/og-image.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "New Antique Apparels",
            "description": "Leading manufacturer of premium Polyester T-Shirts, Polo T-Shirts, and Corporate Wear in Tiruppur, Tamil Nadu.",
            "url": "https://newantiqueapparel.com",
            "telephone": "+916381379080",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "26/2A, N.V.B.LAYOUT, CHELLAM NAGAR EXTN., MANGALAM ROAD",
              "addressLocality": "Tiruppur",
              "postalCode": "641687",
              "addressCountry": "IN"
            },
            "founder": "Proprietorship",
            "foundingDate": "2017"
          })}
        </script>
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
