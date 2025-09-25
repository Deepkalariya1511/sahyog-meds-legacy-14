import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import jituPortrait from "@/assets/jitubhai-real-portrait.jpg";
import jituPharmacyPortrait from "@/assets/jitubhai-pharmacy-portrait.jpg";
import jituServingCustomers from "@/assets/jitubhai-serving-customers.jpg";
import storeExterior from "@/assets/sahyog-store-exterior.jpg";
import storeInterior from "@/assets/sahyog-store-interior.jpg";

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <Badge variant="secondary" className="mb-6">
              Our Story
            </Badge>
            
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About Sahyog Medical Store
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Serving Jetpur community with trusted healthcare solutions since 2001
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Founder Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Meet Our Founder
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  <strong>Jitubhai Kalariya</strong> is the founder and heart of Sahyog Medical Store. 
                  With over two decades of experience in pharmaceutical services, he has dedicated his 
                  life to providing quality healthcare to the people of Jetpur.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  His vision was simple yet powerful: to create a medical store where every customer 
                  receives not just medicines, but genuine care and trusted guidance for their health needs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Under his leadership, Sahyog Medical Store has grown from a small neighborhood pharmacy 
                  to become one of the most trusted healthcare destinations in Jetpur.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <Card className="overflow-hidden">
                  <img 
                    src={jituPortrait} 
                    alt="Jitubhai Kalariya - Founder of Sahyog Medical Store"
                    className="w-full h-96 object-cover"
                  />
                </Card>
              </div>
            </div>

            {/* Our Journey */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Our Journey
                </h2>
                <p className="text-xl text-muted-foreground">
                  Two decades of serving our community with dedication
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="outline" className="mr-3">2001</Badge>
                      The Beginning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sahyog Medical Store was established with a mission to provide authentic 
                      medicines and healthcare products to the Jetpur community.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="outline" className="mr-3">2024</Badge>
                      Today
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Now serving thousands of satisfied customers with 24/7 emergency support 
                      and a comprehensive range of healthcare solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <img 
                    src={jituPharmacyPortrait} 
                    alt="Jitubhai Kalariya at his pharmacy"
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Dedicated Service</h3>
                    <p className="text-muted-foreground">
                      Jitubhai personally ensures every customer receives the right medication 
                      and proper guidance for their health needs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <img 
                    src={jituServingCustomers} 
                    alt="Serving customers with care"
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Personal Care</h3>
                    <p className="text-muted-foreground">
                      Every interaction is built on trust, ensuring customers feel valued 
                      and receive personalized healthcare advice.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Our Values
                </h2>
                <p className="text-xl text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-4">Trust</h3>
                    <p className="text-muted-foreground">
                      Building lasting relationships through honest service and genuine care for our customers' health.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-4">Quality</h3>
                    <p className="text-muted-foreground">
                      Ensuring every product meets the highest standards of quality and authenticity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-4">Care</h3>
                    <p className="text-muted-foreground">
                      Treating every customer with compassion and providing personalized healthcare guidance.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Store Images */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Visit Our Store
                </h2>
                <p className="text-xl text-muted-foreground">
                  Experience our welcoming environment and comprehensive healthcare solutions
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <img 
                    src={storeExterior} 
                    alt="Sahyog Medical Store exterior"
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Store Exterior</h3>
                    <p className="text-muted-foreground">
                      Conveniently located in the heart of Jetpur for easy access
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <img 
                    src={storeInterior} 
                    alt="Sahyog Medical Store interior"
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Store Interior</h3>
                    <p className="text-muted-foreground">
                      Well-organized space with comprehensive medicine inventory
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Experience Trusted Healthcare Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Visit Sahyog Medical Store and experience the difference of personalized, caring service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                <MapPin className="w-5 h-5 mr-2" />
                Visit Our Store
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white/20 hover:bg-white/20">
              <a href="tel:+919099802989">
                <Phone className="w-5 h-5 mr-2" />
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