import appMockup from '@/assets/app-mockup.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What is{' '}
              <span className="text-transparent bg-gradient-heritage bg-clip-text">
                Raas & Roots?
              </span>
            </h2>
            
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
              <p>
                Raas & Roots is where <strong className="text-primary">technology meets tradition</strong>. 
                Born from a deep love for Navratri nights, folk music, and community spirit, 
                this platform preserves and elevates cultural celebrations.
              </p>
              
              <p>
                It's not just about buying passes—it's about{' '}
                <strong className="text-accent">coming home to your heritage</strong>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-warm">
                <div className="w-3 h-3 bg-festival-orange rounded-full"></div>
                <span className="text-sm font-medium">Cultural Preservation</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-warm">
                <div className="w-3 h-3 bg-festival-gold rounded-full"></div>
                <span className="text-sm font-medium">Community Spirit</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-warm">
                <div className="w-3 h-3 bg-festival-purple rounded-full"></div>
                <span className="text-sm font-medium">Modern Technology</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={appMockup}
                alt="Raas & Roots App Interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-cultural transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-festival rounded-full animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-heritage rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;