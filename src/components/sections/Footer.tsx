import { Gamepad2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/50 bg-muted/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 neon-border">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-xl font-bold text-gradient">
              Imperior Gaming
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#games" className="text-muted-foreground hover:text-primary transition-colors">
              Games
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Social Links Placeholder */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="p-2 rounded-lg bg-card border border-border/50 hover:neon-border transition-all duration-300"
              aria-label="Instagram"
            >
              <span className="text-xl">📷</span>
            </a>
            <a 
              href="#" 
              className="p-2 rounded-lg bg-card border border-border/50 hover:neon-border-blue transition-all duration-300"
              aria-label="Facebook"
            >
              <span className="text-xl">📘</span>
            </a>
            <a 
              href="#" 
              className="p-2 rounded-lg bg-card border border-border/50 hover:neon-border-purple transition-all duration-300"
              aria-label="WhatsApp"
            >
              <span className="text-xl">💬</span>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Imperior Gaming. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
