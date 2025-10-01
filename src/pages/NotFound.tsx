import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="mb-8">
          <Search className="h-24 w-24 mx-auto text-muted-foreground/20" />
        </div>
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Seite nicht gefunden</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Die Seite, die Sie suchen, existiert leider nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Zur Startseite
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
