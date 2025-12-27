import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <Badge variant="outline" className="px-4 py-1 border-accent/50 text-accent">
              About Us
            </Badge>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Welcome to</span>{" "}
              <span className="text-gradient">Imperior Gaming</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Step into the ultimate console gaming destination. At Imperior Gaming, 
              we've crafted a premium environment where gamers come together to experience 
              the thrill of next-gen gaming. Whether you're here for casual fun with friends 
              or intense competitive sessions, our space is designed for every type of gamer.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enjoy comfortable seating, high-quality displays, and a friendly atmosphere 
              that makes every visit memorable. Our collection spans the latest titles 
              across all major genres – from action-packed shooters to immersive sports games.
            </p>
            
            {/* Feature Icons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-3 rounded-lg bg-primary/10 neon-border">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Premium Experience</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-3 rounded-lg bg-accent/10 neon-border-blue">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium">Friendly Community</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-3 rounded-lg bg-secondary/10 neon-border-purple">
                  <Trophy className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-medium">Competitive Vibe</span>
              </div>
            </div>
          </div>
          
          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl glass-card neon-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-8xl animate-float">🎮</div>
                  <p className="font-display text-2xl text-foreground">Level Up Your Gaming</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass-card neon-border-blue px-4 py-2 rounded-lg animate-float" style={{ animationDelay: '-1s' }}>
              <span className="text-accent font-semibold">PS5 Ready</span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card neon-border-purple px-4 py-2 rounded-lg animate-float" style={{ animationDelay: '-3s' }}>
              <span className="text-secondary font-semibold">Xbox Zone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
