import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ArrowLeft, Navigation as NavIcon, Heart, Star, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import sahyogStoreExterior from "@/assets/sahyog-store-exterior.jpg";
import sahyogStoreCounter from "@/assets/sahyog-store-counter.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <Badge variant="secondary" className="mb-8 bg-white/10 text-white border-white/20">
              <Heart className="w-4 h-4 mr-2" />
              Ready to Serve You
            </Badge>
            
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-8">
              Visit <span className="text-gradient">Sahyog</span> Today
            </h1>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Your trusted healthcare destination in Jetpur. Experience 23+ years of authentic medicines, 
              expert care, and compassionate service at our modern pharmacy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <div className="card-premium text-center group cursor-pointer">
              <div className="p-8">
                <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Call Us Now</h3>
                <a href="tel:+919099802989" className="text-3xl font-bold text-primary hover:text-primary-dark transition-colors block mb-4">
                  9099802989
                </a>
                <p className="text-muted-foreground mb-6">
                  Available during store hours for consultations and emergency support
                </p>
                <Button variant="premium" className="w-full" asChild>
                  <a href="tel:+919099802989">Call Now</a>
                </Button>
              </div>
            </div>

            {/* Location Card */}
            <div className="card-premium text-center group cursor-pointer">
              <div className="p-8">
                <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Find Our Store</h3>
                <p className="text-lg font-medium text-foreground mb-2">Bus Station Road</p>
                <p className="text-muted-foreground mb-6">Jetpur-360370, Gujarat</p>
                <Button variant="secondary" className="w-full" onClick={() => window.open('https://maps.google.com/?q=Sahyog+Medical+Store,+Bus+Station+Road,+Jetpur,+Gujarat+360370', '_blank')}>
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Hours Card */}
            <div className="card-premium text-center group cursor-pointer">
              <div className="p-8">
                <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-medical-orange" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Store Hours</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mon - Sat</span>
                    <span className="font-medium">7 AM - 10 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">8 AM - 9 PM</span>
                  </div>
                </div>
                <Badge className="bg-medical-light-orange text-medical-orange">24/7 Emergency</Badge>
              </div>
            </div>
          </div>

          {/* Store Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-premium overflow-hidden">
              <img 
                src={sahyogStoreExterior} 
                alt="Sahyog Medical Store exterior - Your trusted pharmacy location"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Our Store Exterior</h3>
                <p className="text-muted-foreground">Easy to find location on Bus Station Road, Jetpur</p>
              </div>
            </div>
            
            <div className="card-premium overflow-hidden">
              <img 
                src={sahyogStoreCounter} 
                alt="Sahyog Medical Store interior showing professional service"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
                <p className="text-muted-foreground">Modern facilities with expert pharmaceutical care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Need Emergency Medicine?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            We're here for you 24/7. Call now for urgent healthcare needs and emergency prescriptions.
          </p>
          
          <Button variant="trust" size="xl" asChild>
            <a href="tel:+919099802989">
              <Phone className="w-6 h-6 mr-2" />
              Emergency: 9099802989
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;