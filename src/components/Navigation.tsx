import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import sahyogLogo from "@/assets/sahyog-logo.png";

const Navigation = () => {
  const location = useLocation();

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
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>9099802989</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Jetpur-360370</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;