import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-garba-night.jpg';
import AppStoreButton from '@/components/AppStoreButton';
import GooglePlayButton from '@/components/GooglePlayButton';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Find Your Beat.
          <br />
          <span className="text-transparent bg-gradient-festival bg-clip-text">
            Reconnect with Your Roots.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in-delay-1">
          Book passes. Discover cultural events. Celebrate like never before.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2">
          <Button
            size="lg"
            className="bg-black hover:bg-black/80 border border-white/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 p-0 h-12 w-40"
          >
            <AppStoreButton />
          </Button>
          
          <Button
            size="lg"
            className="bg-black hover:bg-black/80 border border-white/20 hover:shadow-glow transition-all duration-300 transform hover:scale-105 p-0 h-12 w-40"
          >
            <GooglePlayButton />
          </Button>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;