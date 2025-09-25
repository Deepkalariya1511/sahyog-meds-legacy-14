import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import sahyogStoreExterior from "@/assets/sahyog-store-exterior.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Visit Us Today
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted healthcare partner in Jetpur for over 23 years
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-br from-card to-medical-light-blue">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>Call Us</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+919099802989" className="text-2xl font-bold text-primary hover:text-primary-glow transition-colors cursor-pointer">9099802989</a>
                    <p className="text-muted-foreground mt-2">Available during store hours for any queries</p>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-card to-medical-light-green">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-secondary" />
                      <span>Location</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-foreground mb-2">Sahyog Medical Store</p>
                    <p className="text-muted-foreground mb-4">Bus Station Road, Natraj Loge, Jetpur, Gujarat 360370</p>
                    <Button variant="outline" size="sm" onClick={() => window.open('https://maps.google.com/?q=Sahyog+Medical+Store,+Bus+Station+Road,+Natraj+Loge,+Jetpur,+Gujarat+360370', '_blank')}>
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-card to-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Store Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Saturday</span>
                        <span className="font-medium">8:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="pt-2 text-sm text-muted-foreground border-t">
                        Emergency services available 24/7
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Store Information */}
              <div className="space-y-6">
                {/* Store Location Image */}
                <Card className="border-0 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={sahyogStoreExterior} 
                      alt="Sahyog Medical Store location - Visit us at Bus Station Road, Jetpur for all your healthcare needs"
                      className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-sm">Visit Our Store</p>
                      <p className="text-xs opacity-90">Bus Station Road, Jetpur</p>
                    </div>
                  </div>
                </Card>
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardHeader>
                    <CardTitle>About Our Store</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Owner</h4>
                        <p className="text-muted-foreground">Jitubhai Kalariya</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Established</h4>
                        <p className="text-muted-foreground">2001 - Serving for 23+ years</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Services</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Prescription medicines</li>
                          <li>• Over-the-counter drugs</li>
                          <li>• Health supplements</li>
                          <li>• Medical equipment</li>
                          <li>• Health consultations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-card to-secondary/5">
                  <CardHeader>
                    <CardTitle>Why Choose Us?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <p className="text-muted-foreground">Authentic medicines from trusted manufacturers</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <p className="text-muted-foreground">Expert pharmacist guidance</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <p className="text-muted-foreground">Competitive pricing</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <p className="text-muted-foreground">23+ years of trusted service</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <p className="text-muted-foreground">Emergency medicine availability</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our experienced team is here to help with all your healthcare needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary" asChild>
                <a href="tel:+919099802989">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 9099802989
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open('https://maps.google.com/?q=Sahyog+Medical+Store,+Bus+Station+Road,+Natraj+Loge,+Jetpur,+Gujarat+360370', '_blank')}>
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;