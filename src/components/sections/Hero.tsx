import { Gamepad2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Animated background elements - smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 right-1/3 w-36 md:w-72 h-36 md:h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />
      
      <div className="container relative z-10 px-4 text-center py-20">
        {/* Logo/Badge */}
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass-card neon-border mb-6 md:mb-8 animate-fade-up">
          <Gamepad2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          <span className="text-xs md:text-sm font-medium text-foreground">Premium Gaming Experience</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient">Console Gaming</span>
          <br />
          <span className="text-foreground">Starts Here</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-up px-2" style={{ animationDelay: '0.2s' }}>
          PS5, PS4 & Xbox with All Games Available
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-up px-4" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            className="group text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground neon-glow transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Contact on WhatsApp
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-border bg-card/50 hover:bg-card text-foreground hover:neon-border-blue transition-all duration-300 hover:scale-105"
          >
            View Pricing
          </Button>
        </div>
        
        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
