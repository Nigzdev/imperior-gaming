import { Badge } from "@/components/ui/badge";

const games = [
  "FIFA", "GTA", "Call of Duty", "WWE", "Racing", "NBA", 
  "Spider-Man", "God of War", "Fortnite", "Minecraft"
];

const GamesSection = () => {
  return (
    <section id="games" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-3 md:mb-4 px-3 md:px-4 py-1 border-secondary/50 text-secondary text-xs md:text-sm">
            Game Library
          </Badge>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-foreground">All Popular</span>{" "}
            <span className="text-gradient">Games Available</span>
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 px-4">
            Play the latest and greatest titles across PS4, PS5, and Xbox. 
            From action-packed adventures to competitive sports – we've got it all.
          </p>
          
          {/* Game Tags */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {games.map((game, index) => (
              <span
                key={game}
                className="px-4 md:px-6 py-2 md:py-3 rounded-full glass-card border border-border/50 text-foreground font-medium text-sm md:text-base
                         hover:neon-border transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {game}
              </span>
            ))}
          </div>
          
          {/* Highlighted message */}
          <div className="glass-card neon-border-purple rounded-xl md:rounded-2xl p-5 md:p-8 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-display text-foreground mb-2">
              & Many More!
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              Our library is constantly updated with new releases and popular classics.
              Just ask and we'll have it ready for you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
