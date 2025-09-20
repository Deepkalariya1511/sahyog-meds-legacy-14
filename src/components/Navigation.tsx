import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import sahyogLogo from "@/assets/sahyog-logo.png";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/history", label: "Our Story" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center">
              <img src={sahyogLogo} alt="Sahyog Medical Store Logo" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Sahyog Medical Store</h1>
              <p className="text-xs text-muted-foreground">Serving since 2001</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919099802989" className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>9099802989</span>
            </a>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Jetpur-360370</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-card/95 backdrop-blur">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-2 py-3 text-sm font-medium transition-colors hover:text-primary rounded-md hover:bg-muted/50 ${
                    isActive(item.path) ? "text-primary bg-muted/50" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t space-y-2">
                <a 
                  href="tel:+919099802989" 
                  className="flex items-center space-x-2 px-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call: 9099802989</span>
                </a>
                <div className="flex items-center space-x-2 px-2 py-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Jetpur-360370</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;