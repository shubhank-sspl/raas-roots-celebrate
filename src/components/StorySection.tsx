import storyImage from '@/assets/story-illustration.jpg';

const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Story of{' '}
            <span className="text-transparent bg-gradient-heritage bg-clip-text">
              Raas & Roots
            </span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <img
              src={storyImage}
              alt="From chaos to celebration"
              className="w-full rounded-2xl shadow-cultural"
            />
          </div>
          
          {/* Story Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Remember the chaos?
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  The <strong className="text-destructive">endless WhatsApp forwards</strong>, 
                  last-minute ticket links that never worked, sold-out passes when you finally 
                  decided to go, and those never-ending queues that tested your patience.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Every Navratri season brought the same frustration: 
                  <em className="text-accent"> "Where do I even get tickets?"</em>
                </p>
              </div>
            </div>
            
            <div className="border-l-4 border-primary pl-6 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                How Raas & Roots changes everything
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Just <strong className="text-primary">open the app</strong>, 
                  explore nearby events, book your pass, and dance worry-free.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong className="text-accent">From ticket to twirl, we've got you covered.</strong> 
                  Because celebration should feel effortless—before the music even starts.
                </p>
              </div>
            </div>
            
            {/* Transformation Visual */}
            <div className="flex items-center justify-center space-x-6 pt-8">
              <div className="bg-card rounded-xl p-6 shadow-warm border-l-4 border-destructive transform -rotate-1">
                <div className="text-center">
                  <div className="text-2xl mb-2">😤</div>
                  <div className="text-sm font-semibold text-destructive">Before</div>
                  <div className="text-xs text-muted-foreground mt-1">Chaos & Confusion</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-destructive to-primary mb-2"></div>
                <div className="text-primary text-lg font-bold">→</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-destructive to-primary mt-2"></div>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-glow border-l-4 border-primary transform rotate-1">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎉</div>
                  <div className="text-sm font-semibold text-primary">After</div>
                  <div className="text-xs text-muted-foreground mt-1">Seamless Celebration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;