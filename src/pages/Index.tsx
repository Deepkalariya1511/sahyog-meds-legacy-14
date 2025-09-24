import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Clock, 
  Users, 
  Phone, 
  MapPin, 
  Award, 
  CheckCircle,
  Pill,
  Stethoscope,
  Heart,
  Star,
  ArrowRight,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/pharmacy-hero.jpg";
import sahyogLogo from "@/assets/sahyog-logo.png";
import sahyogStoreFront from "@/assets/sahyog-store-front.jpg";
import jituPortrait from "@/assets/jitubhai-portrait.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src={sahyogStoreFront} 
            alt="Sahyog Medical Store"
            className="w-full h-full object-cover animate-float"
          />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float delay-100"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float delay-300"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-3 trust-badge mb-8 animate-bounce-in">
              <img src={sahyogLogo} alt="Sahyog Medical Store" className="w-6 h-6" />
              <span className="text-primary font-semibold">23+ Years of Trust</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
              <span className="text-white">Healthcare</span>
              <br />
              <span className="text-gradient">Redefined</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Where tradition meets innovation. Sahyog Medical Store brings you 
              <span className="text-primary-light font-semibold"> authentic medicines</span> and 
              <span className="text-secondary-light font-semibold"> expert care</span> for over two decades.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-300">
              <Button 
                variant="premium" 
                size="xl" 
                className="group"
                asChild
              >
                <a href="tel:+919099802989">
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Emergency Call Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/contact">
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Our Store
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-500">
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-2">23+</div>
                <div className="text-sm text-white/70">Years of Service</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-white/70">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Modern Cards */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              Complete Healthcare Solutions
            </Badge>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient">Sahyog</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the perfect blend of traditional care and modern healthcare solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {/* Service Card 1 */}
            <div className="card-premium group cursor-pointer">
              <div className="p-8">
                <div className="medical-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Pill className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Authentic Medicines</h3>
                <p className="text-muted-foreground mb-6">
                  100% genuine medications from certified manufacturers with proper storage and handling.
                </p>
                <div className="flex items-center text-primary font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="card-premium group cursor-pointer">
              <div className="p-8">
                <div className="medical-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Expert Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  Professional healthcare guidance from experienced pharmacists and medical advisors.
                </p>
                <div className="flex items-center text-secondary font-medium">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="card-premium group cursor-pointer">
              <div className="p-8">
                <div className="medical-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-medical-orange" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Emergency Care</h3>
                <p className="text-muted-foreground mb-6">
                  Round-the-clock emergency support for urgent medical needs and prescriptions.
                </p>
                <div className="flex items-center text-medical-orange font-medium">
                  <span>Call Emergency</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <Badge variant="outline" className="mb-6">
                <Award className="w-4 h-4 mr-2" />
                Our Legacy
              </Badge>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Building <span className="text-gradient">Trust</span> Since 2001
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded by <strong>Jitubhai Kalariya</strong> with a vision to provide accessible, 
                authentic healthcare to the Jetpur community. What started as a small pharmacy 
                has grown into the most trusted medical store in the region.
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-8">
                {[
                  "Certified & Licensed Pharmacy",
                  "Expert Pharmaceutical Team",
                  "Advanced Inventory Management",
                  "Community Health Programs"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <Button variant="premium" size="lg" asChild>
                <Link to="/history">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Discover Our Journey
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="card-premium overflow-hidden">
                  <img 
                    src={jituPortrait} 
                    alt="Jitubhai Kalariya - Founder of Sahyog Medical Store"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">23+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Visit us today or call for emergency support. We're here to serve your health needs 24/7.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass p-6 rounded-2xl text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm opacity-80">Bus Station Road, Jetpur-360370</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm opacity-80">9099802989</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold mb-2">Open Hours</h3>
              <p className="text-sm opacity-80">7 AM - 10 PM Daily</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">
                <Target className="w-5 h-5 mr-2" />
                Get Directions
              </Link>
            </Button>
            <Button variant="trust" size="lg" asChild>
              <a href="tel:+919099802989">
                <Zap className="w-5 h-5 mr-2" />
                Emergency Call
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;