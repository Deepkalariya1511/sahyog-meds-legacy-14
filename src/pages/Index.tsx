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
  Stethoscope
} from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/pharmacy-hero.jpg";
import sahyogLogo from "@/assets/sahyog-logo.png";
import sahyogStoreFront from "@/assets/sahyog-store-front.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="absolute inset-0 opacity-5">
          <img 
            src={sahyogStoreFront} 
            alt="Sahyog Medical Store Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge variant="secondary" className="mb-4 hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                  <img src={sahyogLogo} alt="Sahyog Medical Store" className="w-4 h-4 mr-2 object-contain" />
                  Trusted Since 2001
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
                  Your Health,
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent animate-pulse-glow">
                    {" "}Our Priority
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Sahyog Medical Store has been serving the Jetpur community for over 23 years with 
                  authentic medicines, expert guidance, and compassionate care.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="gradient"
                  className="animate-pulse-glow"
                  asChild
                >
                  <a href="tel:+919099802989">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 9099802989
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/history">
                    <Award className="w-5 h-5 mr-2" />
                    Our Story
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Jetpur-360370</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">8 AM - 9 PM</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <img 
                  src={heroImage} 
                  alt="Sahyog Medical Store - Your trusted pharmacy in Jetpur"
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-[image:var(--gradient-glass)] opacity-20"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={sahyogLogo} alt="Sahyog Medical Store" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">23+ Years</p>
                    <p className="text-sm text-muted-foreground">Trusted Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Healthcare Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From prescription medicines to health consultations, we provide comprehensive healthcare services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-card to-medical-light-blue hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                  <Pill className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Prescription Medicines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Authentic prescription medications from trusted manufacturers, ensuring quality and efficacy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-card to-medical-light-green hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-secondary/20">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>OTC Medications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Over-the-counter medicines for common ailments, available without prescription.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-card to-primary/5 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Health Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert pharmacist guidance and health consultations for better treatment outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">About Us</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Built on Trust, Driven by Care
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by Jitubhai Kalariya in 2001, Sahyog Medical Store has grown from a small 
                pharmacy to become Jetpur's most trusted healthcare destination. Our commitment to 
                quality, authenticity, and customer care has earned us the trust of thousands of families.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Authentic medicines guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-muted-foreground">Expert pharmacist guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Competitive pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-muted-foreground">Emergency medicine availability</span>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link to="/history">
                  Read Our Complete Story
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {/* Real Store Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <img 
                  src={sahyogStoreFront} 
                  alt="Sahyog Medical Store - Your trusted pharmacy in Jetpur showing authentic medicines and professional service"
                  className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-[image:var(--gradient-glass)] opacity-30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium drop-shadow-lg">Our Store Today</p>
                  <p className="text-xs opacity-90 drop-shadow-lg">Serving 5000+ families since 2001</p>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1 animate-pulse-glow">23+</div>
                    <div className="text-xs text-muted-foreground">Years of Service</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-gradient-to-br from-secondary/10 to-secondary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">5000+</div>
                    <div className="text-xs text-muted-foreground">Happy Customers</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-gradient-to-br from-secondary/10 to-secondary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground">Emergency Service</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-xs text-muted-foreground">Authentic Medicines</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Experience Quality Healthcare?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Visit us today or call for any healthcare needs. We're here to serve you with the same 
              dedication that has made us Jetpur's trusted pharmacy for over two decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="gradient"
                className="animate-pulse-glow"
                asChild
              >
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Now
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/history">
                  <Users className="w-5 h-5 mr-2" />
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md">
                  <img src={sahyogLogo} alt="Sahyog Medical Store" className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Sahyog Medical Store</h3>
                  <p className="text-xs text-muted-foreground">Serving since 2001</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted healthcare partner in Jetpur for over 23 years.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919099802989" className="hover:text-primary transition-colors">9099802989</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Jetpur-360370, Gujarat</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors block">
                  Home
                </Link>
                <Link to="/history" className="text-muted-foreground hover:text-primary transition-colors block">
                  Our Story
                </Link>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors block">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Sahyog Medical Store. All rights reserved. | Owner: Jitubhai Kalariya</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;