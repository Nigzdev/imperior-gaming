import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/50 text-primary">
            Visit Us
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Location &</span>{" "}
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Come experience the thrill of gaming at Imperior Gaming
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <Card className="glass-card neon-border">
            <CardContent className="p-8 space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 neon-border shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    123 Gaming Street, Main Road<br />
                    Your City, State - 123456
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 neon-border-blue shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 neon-border-purple shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Mon - Fri: 10:00 AM - 11:00 PM<br />
                    Sat - Sun: 9:00 AM - 12:00 AM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* WhatsApp CTA Card */}
          <Card className="glass-card neon-border-purple flex flex-col justify-center">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">💬</div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Quick Contact via WhatsApp
              </h3>
              <p className="text-muted-foreground mb-8">
                Got questions? Want to book a slot? Message us directly on WhatsApp for instant response!
              </p>
              <Button 
                size="lg" 
                className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground neon-glow 
                         transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
