import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations - smaller on mobile */}
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <Badge variant="outline" className="px-3 md:px-4 py-1 border-accent/50 text-accent text-xs md:text-sm">
              About Us
            </Badge>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Welcome to</span>{" "}
              <span className="text-gradient">Imperior Gaming</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Step into the ultimate console gaming destination. At Imperior Gaming, 
              we've crafted a premium environment where gamers come together to experience 
              the thrill of next-gen gaming. Whether you're here for casual fun with friends 
              or intense competitive sessions, our space is designed for every type of gamer.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Enjoy comfortable seating, high-quality displays, and a friendly atmosphere 
              that makes every visit memorable. Our collection spans the latest titles 
              across all major genres – from action-packed shooters to immersive sports games.
            </p>
            
            {/* Feature Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
              <div className="flex items-center gap-2 md:gap-3 text-foreground">
                <div className="p-2 md:p-3 rounded-lg bg-primary/10 neon-border">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="font-medium text-sm md:text-base">Premium Experience</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-foreground">
                <div className="p-2 md:p-3 rounded-lg bg-accent/10 neon-border-blue">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <span className="font-medium text-sm md:text-base">Friendly Community</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-foreground">
                <div className="p-2 md:p-3 rounded-lg bg-secondary/10 neon-border-purple">
                  <Trophy className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                </div>
                <span className="font-medium text-sm md:text-base">Competitive Vibe</span>
              </div>
            </div>
          </div>
          
          {/* Visual Side */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square max-w-sm mx-auto lg:max-w-none rounded-2xl glass-card neon-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3 md:space-y-4">
                  <div className="text-6xl md:text-8xl animate-float">🎮</div>
                  <p className="font-display text-lg md:text-2xl text-foreground px-4">Level Up Your Gaming</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges - hidden on small mobile */}
            <div className="hidden sm:block absolute -top-2 md:-top-4 -right-2 md:-right-4 glass-card neon-border-blue px-3 md:px-4 py-1 md:py-2 rounded-lg animate-float" style={{ animationDelay: '-1s' }}>
              <span className="text-accent font-semibold text-sm md:text-base">PS5 Ready</span>
            </div>
            <div className="hidden sm:block absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 glass-card neon-border-purple px-3 md:px-4 py-1 md:py-2 rounded-lg animate-float" style={{ animationDelay: '-3s' }}>
              <span className="text-secondary font-semibold text-sm md:text-base">Xbox Zone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
