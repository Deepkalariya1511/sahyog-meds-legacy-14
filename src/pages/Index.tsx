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
    <div className="min-h-screen bg-[image:var(--gradient-subtle)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-elegant)]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 lg:space-y-8 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1.5">
                <img src={sahyogLogo} alt="Sahyog Medical Store" className="w-4 h-4 mr-2 object-contain" />
                Trusted Since 2001
              </Badge>
              
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 leading-tight">
                  Your Health,
                  <span className="block bg-[image:var(--gradient-vibrant)] bg-clip-text text-transparent mt-2">
                    Our Priority
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Sahyog Medical Store has been serving the Jetpur community for over 23 years with 
                  authentic medicines, expert guidance, and compassionate care.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="vibrant" asChild className="text-base">
                  <a href="tel:+919099802989">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 9099802989
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-base">
                  <Link to="/history">
                    <Award className="w-5 h-5 mr-2" />
                    Our Story
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Jetpur-360370</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>8 AM - 9 PM</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-[image:var(--gradient-vibrant)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-xl)]">
                  <img 
                    src={heroImage} 
                    alt="Sahyog Medical Store - Your trusted pharmacy in Jetpur"
                    className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-[var(--shadow-lg)] animate-wave">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[image:var(--gradient-elegant)] rounded-xl flex items-center justify-center">
                    <img src={sahyogLogo} alt="Sahyog Medical Store" className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">23+ Years</p>
                    <p className="text-sm text-muted-foreground">Trusted Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Complete Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From prescription medicines to health consultations, we provide comprehensive healthcare services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group border-0 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-[image:var(--gradient-elegant)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Pill className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Prescription Medicines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Authentic prescription medications from trusted manufacturers, ensuring quality and efficacy.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-xl">OTC Medications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Over-the-counter medicines for common ailments, available without prescription.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-14 h-14 bg-[image:var(--gradient-elegant)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Health Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Expert pharmacist guidance and health consultations for better treatment outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-[image:var(--gradient-elegant)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <Badge variant="secondary" className="mb-2 px-4 py-1.5">About Us</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Built on Trust, Driven by Care
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Jitubhai Kalariya in 2001, Sahyog Medical Store has grown from a small 
                pharmacy to become Jetpur's most trusted healthcare destination. Our commitment to 
                quality, authenticity, and customer care has earned us the trust of thousands of families.
              </p>
              
              <div className="space-y-4">
                {[
                  "Authentic medicines guaranteed",
                  "Expert pharmacist guidance",
                  "Competitive pricing",
                  "Emergency medicine availability"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="lg" asChild className="mt-4">
                <Link to="/history">
                  Read Our Complete Story
                </Link>
              </Button>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              {/* Store Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-[image:var(--gradient-vibrant)] rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-lg)]">
                  <img 
                    src={sahyogStoreFront} 
                    alt="Sahyog Medical Store - Your trusted pharmacy in Jetpur showing authentic medicines and professional service"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold drop-shadow-lg">Our Store Today</p>
                    <p className="text-xs opacity-90 drop-shadow-lg">Serving 5000+ families since 2001</p>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "23+", label: "Years of Service", color: "primary" },
                  { value: "5000+", label: "Happy Customers", color: "secondary" },
                  { value: "24/7", label: "Emergency Service", color: "secondary" },
                  { value: "100%", label: "Authentic Medicines", color: "primary" }
                ].map((stat, i) => (
                  <Card key={i} className="border-0 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-5 text-center">
                      <div className={`text-2xl sm:text-3xl font-bold ${stat.color === 'primary' ? 'text-primary' : 'text-secondary'} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Experience Quality Healthcare?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit us today or call for any healthcare needs. We're here to serve you with the same 
              dedication that has made us Jetpur's trusted pharmacy for over two decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="vibrant" asChild className="text-base">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base">
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
      <footer className="border-t bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[image:var(--gradient-elegant)] rounded-xl flex items-center justify-center shadow-[var(--shadow-sm)]">
                  <img src={sahyogLogo} alt="Sahyog Medical Store" className="w-6 h-6 object-contain" />
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
                <a href="tel:+919099802989" className="block hover:text-primary transition-colors">
                  <Phone className="inline w-4 h-4 mr-2" />9099802989
                </a>
                <p>
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Bus Station Road, Jetpur
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/history" className="block text-muted-foreground hover:text-primary transition-colors">Our Story</Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2001-2025 Sahyog Medical Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
