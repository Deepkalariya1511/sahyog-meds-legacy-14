import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import sahyogLogo from "@/assets/sahyog-logo.png";
import jitubhaiPortrait from "@/assets/jitubhai-clear-portrait.jpg";
import sahyogStoreFront from "@/assets/sahyog-store-front.jpg";

const History = () => {
  return (
    <div className="min-h-screen bg-[image:var(--gradient-subtle)]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-[image:var(--gradient-elegant)]">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-1.5 bg-secondary/10 text-secondary border-secondary/20">
              Our Legacy
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              The Journey of Jitubhai Kalariya
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From relocating to Jetpur to serving 5k+ customers across villages - a 24-year journey of dedication and community trust
            </p>
            
            <div className="mt-12 max-w-sm mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-[image:var(--gradient-vibrant)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-xl)]">
                  <img 
                    src={jitubhaiPortrait} 
                    alt="Jitubhai Kalariya - Owner of Sahyog Medical Store in his pharmacy" 
                    className="w-full aspect-[3/4] object-cover"
                    style={{ imageRendering: 'crisp-edges', filter: 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* The Beginning */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full shadow-[var(--shadow-colored)]"></div>
              <Card className="border-0 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">2001 - The Beginning</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    After relocating to Jetpur with a dream to serve the community, Jitubhai Kalariya took the brave step 
                    of opening Sahyog Medical Store. Starting with just basic medicines and limited resources, he believed 
                    that everyone deserves access to quality healthcare.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The early days were challenging - long hours, financial constraints, and the responsibility of 
                    people's health weighed heavily. But Jitubhai's commitment to his new community never wavered.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Building Trust */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-white rounded-full shadow-[var(--shadow-md)] p-1">
                <img src={sahyogLogo} alt="Sahyog Medical Store" className="w-full h-full object-contain" />
              </div>
              <Card className="border-0 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Building Trust & Relationships</h3>
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
                </CardContent>
              </Card>
            </div>

            {/* Growth & Recognition */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[image:var(--gradient-vibrant)] rounded-full shadow-[var(--shadow-colored)]"></div>
              <Card className="border-0 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Growth & Recognition</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As years passed, Sahyog Medical Store grew not just in size but in reputation. Jitubhai's 
                    commitment to quality and service attracted customers from neighboring areas and small villages around Jetpur. 
                    The store expanded its inventory, added new services, and became a trusted healthcare destination for the entire region.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Through economic ups and downs, changing markets, and various challenges, Jitubhai's 
                    principles remained constant: integrity, quality, and genuine care for every customer's health and wellbeing.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Today & Legacy */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-secondary rounded-full shadow-[var(--shadow-colored)]"></div>
              <Card className="border-0 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[image:var(--gradient-elegant)] rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Today - A Legacy of Service</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Today, after 24 years of dedicated service (2001-2025), Sahyog Medical Store stands as a testament to 
                    Jitubhai's vision and hard work. What started as a small pharmacy has become an integral part 
                    of the healthcare ecosystem, serving not just Jetpur but also nearby small villages with 5,000+ satisfied customers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    People from various villages trust Sahyog Medical Store and stay connected with us, bringing their families 
                    for medicines and healthcare needs. This trust has been built through years of consistent service and genuine care.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Jitubhai's journey inspires us all - showing that with determination, honesty, and genuine care 
                    for others, one person can make a significant difference in their community and beyond. His story continues 
                    to motivate others to pursue their dreams while staying true to their values.
                  </p>
                  
                  {/* Current Store Image */}
                  <div className="mt-6 rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]">
                    <img 
                      src={sahyogStoreFront} 
                      alt="Sahyog Medical Store today - A testament to 24 years of dedicated service with modern facilities and authentic medicines"
                      className="w-full h-56 object-cover"
                    />
                    <div className="bg-[image:var(--gradient-elegant)] p-4">
                      <p className="font-semibold text-foreground">Sahyog Medical Store Today</p>
                      <p className="text-sm text-muted-foreground">Modern facilities, same trusted service since 2001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="py-16 sm:py-24 bg-[image:var(--gradient-elegant)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -top-8 -left-4 text-primary/20 text-8xl font-serif">"</div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed italic relative z-10">
                Success is not just about building a business, it's about building trust, 
                serving your community, and making a positive difference in people's lives.
              </blockquote>
              <div className="absolute -bottom-8 -right-4 text-primary/20 text-8xl font-serif">"</div>
            </div>
            <cite className="block mt-8 text-lg text-muted-foreground not-italic">
              - The Philosophy of Jitubhai Kalariya
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
