import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
          Error 404
        </p>
        <h1 className="font-display text-6xl md:text-8xl text-foreground mb-6">
          Page Not Found
        </h1>
        <p className="text-muted-foreground font-light text-lg max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <Home className="mr-2" size={18} />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
