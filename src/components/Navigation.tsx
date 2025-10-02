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
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg shadow-[var(--shadow-sm)]">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[image:var(--gradient-elegant)] rounded-xl flex items-center justify-center shadow-[var(--shadow-sm)] group-hover:scale-105 transition-transform">
              <img src={sahyogLogo} alt="Sahyog Medical Store Logo" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Sahyog Medical Store</h1>
              <p className="text-xs text-muted-foreground">Serving since 2001</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(item.path) 
                    ? "bg-primary text-white shadow-[var(--shadow-colored)]" 
                    : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+919099802989" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <span>9099802989</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-4 w-4 text-secondary" />
              </div>
              <span>Jetpur-360370</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="md:hidden rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="space-y-2 mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(item.path) 
                      ? "bg-primary text-white" 
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Contact Info */}
            <div className="pt-4 border-t space-y-3">
              <a 
                href="tel:+919099802989" 
                className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>Call: 9099802989</span>
              </a>
              <div className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-secondary" />
                </div>
                <span>Jetpur-360370</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
