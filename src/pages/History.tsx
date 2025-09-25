import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Award, 
  Users, 
  TrendingUp, 
  ArrowLeft,
  CheckCircle,
  Star,
  Heart,
  Clock,
  Target
} from "lucide-react";
import Navigation from "@/components/Navigation";
import jituPortrait from "@/assets/jitubhai-real-portrait.jpg";
import jituEarlyDays from "@/assets/jitubhai-early-days.jpg";
import jituPharmacyPortrait from "@/assets/jitubhai-pharmacy-portrait.jpg";
import jituServingCustomers from "@/assets/jitubhai-serving-customers.jpg";
import storeExterior from "@/assets/sahyog-store-exterior.jpg";
import storeInterior from "@/assets/sahyog-store-interior.jpg";
import storeFront from "@/assets/sahyog-store-front.jpg";
import sahyogLogo from "@/assets/sahyog-logo.png";

const History = () => {
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
              <Award className="w-4 h-4 mr-2" />
              Our Legacy Since 2001
            </Badge>
            
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-8">
              The Story of <span className="text-gradient">Trust</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              From humble beginnings to becoming Jetpur's most trusted pharmacy - 
              discover the journey of passion, dedication, and unwavering commitment to community health.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Journey of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every milestone tells a story of growth, trust, and community service
            </p>
          </div>

          {/* Timeline Items */}
          <div className="max-w-6xl mx-auto">
            {/* 2001 - Foundation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="card-premium overflow-hidden">
                  <img 
                    src={jituPortrait} 
                    alt="Jitubhai Kalariya - Founder of Sahyog Medical Store"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-primary rounded-full mr-4"></div>
                  <Badge variant="outline">2001</Badge>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">The Beginning</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  <strong>Jitubhai Kalariya</strong> founded Sahyog Medical Store with a vision to provide 
                  accessible, quality healthcare to the people of Jetpur. With years of pharmaceutical experience 
                  and deep commitment to community health, he established this trusted medical store.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Licensed Pharmacy Established</span>
                </div>
              </div>
            </div>

            {/* 2008 - Expansion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-1">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-secondary rounded-full mr-4"></div>
                  <Badge variant="secondary">2008</Badge>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">First Expansion</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Growing demand and community trust led to the first major expansion. We enhanced our 
                  inventory, improved storage facilities, and introduced specialized healthcare products 
                  to better serve our growing customer base.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">Expanded Product Range</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">Improved Storage Systems</span>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <div className="card-premium overflow-hidden">
                  <img 
                    src={jituPharmacyPortrait} 
                    alt="Jitubhai Kalariya at Sahyog Medical Store serving customers"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 2015 - Modernization */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="card-premium overflow-hidden">
                  <img 
                    src={jituServingCustomers} 
                    alt="Jitubhai Kalariya personally serving customers with care and expertise"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-medical-orange rounded-full mr-4"></div>
                  <Badge className="bg-medical-light-orange text-medical-orange border-medical-orange">2015</Badge>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">Modern Transformation</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A complete modernization brought digital inventory management, climate-controlled storage, 
                  and enhanced customer service areas. This transformation positioned us as a leading 
                  modern pharmacy while maintaining our personal touch.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-medical-orange" />
                    <span className="text-foreground">Digital Inventory System</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-medical-orange" />
                    <span className="text-foreground">Climate-Controlled Storage</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-medical-orange" />
                    <span className="text-foreground">Enhanced Customer Areas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Present Day */}
            <div className="text-center glass p-12 rounded-3xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-primary rounded-full mr-4 animate-pulse"></div>
                <Badge variant="secondary" className="bg-gradient-primary text-white">2024 - Present</Badge>
              </div>
              <h3 className="font-display text-3xl font-bold mb-6">Continuing Excellence</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Today, Sahyog Medical Store stands as Jetpur's most trusted healthcare partner, 
                serving over 10,000 satisfied customers with 24/7 emergency support, 
                comprehensive healthcare solutions, and the same personal care that started it all.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">23+</div>
                  <div className="text-sm text-muted-foreground">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-orange mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Authentic Medicines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that have guided us for over two decades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-premium text-center group">
              <div className="p-8">
                <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Compassionate Care</h3>
                <p className="text-muted-foreground">
                  Every customer is treated with empathy, respect, and genuine concern for their wellbeing.
                </p>
              </div>
            </div>

            <div className="card-premium text-center group">
              <div className="p-8">
                <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality Excellence</h3>
                <p className="text-muted-foreground">
                  We ensure every product meets the highest standards of quality and authenticity.
                </p>
              </div>
            </div>

            <div className="card-premium text-center group">
              <div className="p-8">
                <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-medical-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community First</h3>
                <p className="text-muted-foreground">
                  Our commitment to the Jetpur community drives everything we do.
                </p>
              </div>
            </div>

            <div className="card-premium text-center group">
              <div className="p-8">
                <div className="medical-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-medical-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trust & Reliability</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships through consistent, dependable service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Be Part of Our Continuing Story
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Experience the care and trust that has made us Jetpur's preferred pharmacy for over two decades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">
                <TrendingUp className="w-5 h-5 mr-2" />
                Visit Our Store
              </Link>
            </Button>
            <Button variant="trust" size="lg" asChild>
              <a href="tel:+919099802989">
                <Clock className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;