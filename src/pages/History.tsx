import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import sahyogLogo from "@/assets/sahyog-logo.png";
import jitubhaiPortrait from "@/assets/jitubhai-pharmacy-portrait.jpg";
import jitubhaiServingCustomers from "@/assets/jitubhai-serving-customers.jpg";
import jitubhaiEarlyDays from "@/assets/jitubhai-early-days.jpg";

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Our Legacy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Journey of Jitubhai Kalariya
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From relocating to Jetpur to serving 5k+ customers across villages - a 24-year journey of dedication and community trust
            </p>
            <div className="mt-8 flex justify-center">
              <div className="relative max-w-sm mx-auto">
                <img 
                  src={jitubhaiPortrait} 
                  alt="Jitubhai Kalariya - Owner of Sahyog Medical Store in his pharmacy" 
                  className="w-full h-auto aspect-[4/5] object-cover rounded-2xl shadow-hero border-4 border-white/20"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* The Beginning */}
            <Card className="mb-8 bg-gradient-to-br from-card to-medical-light-blue border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">2001 - The Beginning</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      After relocating to Jetpur with a dream to serve the community, Jitubhai Kalariya took the brave step 
                      of opening Sahyog Medical Store. Starting with just basic medicines and limited resources, he believed 
                      that everyone deserves access to quality healthcare.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The early days were challenging - long hours, financial constraints, and the responsibility of 
                      people's health weighed heavily. But Jitubhai's commitment to his new community never wavered.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Building Trust */}
            <Card className="mb-8 bg-gradient-to-br from-card to-medical-light-green border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <img src={sahyogLogo} alt="Sahyog Medical Store" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Building Trust & Relationships</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Success didn't come overnight. Jitubhai understood that a pharmacy is more than just a business - 
                      it's a pillar of community health. He spent countless hours learning about new medicines, 
                      understanding customer needs, and building genuine relationships with every person who walked through his doors.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      His dedication to providing authentic medicines at fair prices, combined with compassionate service, 
                      slowly but surely earned the trust of Jetpur's residents and people from nearby villages. Word spread 
                      about the honest pharmacist who truly cared about his customers' wellbeing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth & Recognition */}
            <Card className="mb-8 bg-gradient-to-br from-card to-primary/5 border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Growth & Recognition</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As years passed, Sahyog Medical Store grew not just in size but in reputation. Jitubhai's 
                      commitment to quality and service attracted customers from neighboring areas and small villages around Jetpur. 
                      The store expanded its inventory, added new services, and became a trusted healthcare destination for the entire region.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Through economic ups and downs, changing markets, and various challenges, Jitubhai's 
                      principles remained constant: integrity, quality, and genuine care for every customer's health and wellbeing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Today & Legacy */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Today - A Legacy of Service</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Today, after 24 years of dedicated service (2001-2025), Sahyog Medical Store stands as a testament to 
                      Jitubhai's vision and hard work. What started as a small pharmacy has become an integral part 
                      of the healthcare ecosystem, serving not just Jetpur but also nearby small villages with 5,000+ satisfied customers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      People from various villages trust Sahyog Medical Store and stay connected with us, bringing their families 
                      for medicines and healthcare needs. This trust has been built through years of consistent service and genuine care.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Jitubhai's journey inspires us all - showing that with determination, honesty, and genuine care 
                      for others, one person can make a significant difference in their community and beyond. His story continues 
                      to motivate others to pursue their dreams while staying true to their values.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 italic">
              "Success is not just about building a business, it's about building trust, 
              serving your community, and making a positive difference in people's lives."
            </blockquote>
            <cite className="text-lg text-muted-foreground">- The Philosophy of Jitubhai Kalariya</cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;