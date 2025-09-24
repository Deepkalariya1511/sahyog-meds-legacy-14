import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import sahyogLogo from "@/assets/sahyog-logo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-primary/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="medical-icon">
              <img 
                src={sahyogLogo} 
                alt="Sahyog Medical Store Logo - Trusted Healthcare" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl lg:text-2xl font-semibold text-gradient">
                Sahyog Medical
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                Trusted Since 2001
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive("/")
                  ? "text-primary bg-gradient-trust shadow-subtle"
                  : "text-foreground hover:text-primary hover:bg-gradient-trust/50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/history"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive("/history")
                  ? "text-primary bg-gradient-trust shadow-subtle"
                  : "text-foreground hover:text-primary hover:bg-gradient-trust/50"
              }`}
            >
              Our Story
            </Link>
            <Link
              to="/contact"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive("/contact")
                  ? "text-primary bg-gradient-trust shadow-subtle"
                  : "text-foreground hover:text-primary hover:bg-gradient-trust/50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">9099802989</span>
            </div>
            <Button variant="premium" size="sm" className="animate-glow">
              Emergency Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleMenu}
            className="lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-primary/10 bg-gradient-card animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive("/")
                    ? "text-primary bg-gradient-trust shadow-subtle"
                    : "text-foreground hover:text-primary hover:bg-gradient-trust/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/history"
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive("/history")
                    ? "text-primary bg-gradient-trust shadow-subtle"
                    : "text-foreground hover:text-primary hover:bg-gradient-trust/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive("/contact")
                    ? "text-primary bg-gradient-trust shadow-subtle"
                    : "text-foreground hover:text-primary hover:bg-gradient-trust/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-primary/10 space-y-3">
                <div className="flex items-center space-x-3 px-4">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">9099802989</span>
                </div>
                <div className="flex items-center space-x-3 px-4">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Bus Station Road, Jetpur</span>
                </div>
                <div className="flex items-center space-x-3 px-4">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Open: 7 AM - 10 PM</span>
                </div>
                <div className="px-4 pt-2">
                  <Button variant="premium" size="sm" className="w-full">
                    Emergency Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}