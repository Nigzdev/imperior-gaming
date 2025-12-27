import { Badge } from "@/components/ui/badge";

const galleryImages = [
  { id: 1, alt: "Gaming setup with PS5", placeholder: "PS5 Gaming Station" },
  { id: 2, alt: "Comfortable seating area", placeholder: "Lounge Area" },
  { id: 3, alt: "Xbox gaming zone", placeholder: "Xbox Zone" },
  { id: 4, alt: "Multiple gaming screens", placeholder: "Multi-Screen Setup" },
  { id: 5, alt: "Friends gaming together", placeholder: "Group Gaming" },
  { id: 6, alt: "Premium gaming controllers", placeholder: "Controllers" },
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <Badge variant="outline" className="mb-3 md:mb-4 px-3 md:px-4 py-1 border-accent/50 text-accent text-xs md:text-sm">
            Gallery
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-foreground">Inside</span>{" "}
            <span className="text-gradient">Imperior Gaming</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto px-4">
            Take a peek at our premium gaming environment
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-video rounded-lg md:rounded-xl overflow-hidden glass-card border border-border/50 
                       hover:neon-border transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2">📸</div>
                  <p className="text-foreground font-medium text-sm md:text-base">{image.placeholder}</p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1">Add your photo</p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground text-sm md:text-base mt-6 md:mt-8">
          Replace these placeholders with real photos of your gaming café!
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;
