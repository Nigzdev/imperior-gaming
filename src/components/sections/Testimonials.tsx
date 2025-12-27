import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul S.",
    rating: 5,
    comment: "Best gaming café in the area! The PS5 experience is incredible, and the prices are very reasonable. Highly recommend!",
    avatar: "R",
  },
  {
    name: "Priya M.",
    rating: 5,
    comment: "Love coming here with my friends. The atmosphere is amazing and staff is super friendly. All the latest games available!",
    avatar: "P",
  },
  {
    name: "Arjun K.",
    rating: 5,
    comment: "Finally a gaming café that keeps their equipment clean and well-maintained. The Xbox section is my favorite spot!",
    avatar: "A",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <Badge variant="outline" className="mb-3 md:mb-4 px-3 md:px-4 py-1 border-secondary/50 text-secondary text-xs md:text-sm">
            Testimonials
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-foreground">What Gamers</span>{" "}
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto px-4">
            Don't just take our word for it
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="glass-card border-border/50 hover:neon-border transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-5 md:p-8">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  "{testimonial.comment}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground text-base md:text-lg">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <span className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
