import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Wallet, Sofa, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "High-Performance Consoles",
    description: "Latest PS5, PS4, and Xbox consoles with 4K displays for the ultimate gaming experience.",
    color: "primary",
    borderClass: "neon-border",
  },
  {
    icon: Wallet,
    title: "Affordable Hourly Pricing",
    description: "Competitive rates starting from just ₹90/hour. More gaming, less spending.",
    color: "accent",
    borderClass: "neon-border-blue",
  },
  {
    icon: Sofa,
    title: "Clean & Comfortable Space",
    description: "Ergonomic seating, air-conditioned environment, and a spotless gaming zone.",
    color: "secondary",
    borderClass: "neon-border-purple",
  },
  {
    icon: Users,
    title: "Perfect for Everyone",
    description: "Whether you're gaming solo or with friends, we've got the perfect setup for you.",
    color: "primary",
    borderClass: "neon-border",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/50 text-primary">
            Why Choose Us
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">The Imperior</span>{" "}
            <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            What makes us the go-to gaming destination
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`glass-card ${feature.borderClass} transition-all duration-500 hover:scale-105 group`}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-xl bg-${feature.color}/10 ${feature.borderClass} shrink-0`}>
                    <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
