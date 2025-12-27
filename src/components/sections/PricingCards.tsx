import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const consoles = [
  {
    name: "PlayStation 4",
    price: "₹90",
    period: "per hour",
    color: "neon-border-blue",
    glowClass: "neon-glow-blue",
    icon: "🎮",
  },
  {
    name: "PlayStation 5",
    price: "₹120",
    period: "per hour",
    color: "neon-border",
    glowClass: "neon-glow",
    icon: "🎮",
    featured: true,
  },
  {
    name: "Xbox",
    price: "₹100",
    period: "per hour",
    color: "neon-border-purple",
    glowClass: "neon-glow-purple",
    icon: "🎮",
  },
];

const PricingCards = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <Badge variant="outline" className="mb-3 md:mb-4 px-3 md:px-4 py-1 border-primary/50 text-primary text-xs md:text-sm">
            Pricing
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-gradient">Choose Your</span>{" "}
            <span className="text-foreground">Console</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto px-4">
            Affordable hourly rates for the ultimate gaming experience
          </p>
        </div>
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {consoles.map((console, index) => (
            <Card 
              key={console.name}
              className={`relative glass-card ${console.color} transition-all duration-500 hover:scale-105 hover:${console.glowClass} group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {console.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2 pt-8">
                <div className="text-5xl mb-4">{console.icon}</div>
                <CardTitle className="font-display text-2xl text-foreground">
                  {console.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center pb-8">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gradient">{console.price}</span>
                  <span className="text-muted-foreground ml-2">/{console.period}</span>
                </div>
                
                <Badge 
                  variant="secondary" 
                  className="bg-secondary/20 text-secondary border border-secondary/30 px-4 py-2"
                >
                  ✓ All Games Available
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
