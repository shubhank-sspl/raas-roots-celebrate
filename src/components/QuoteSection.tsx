import quoteBackground from '@/assets/quote-background.jpg';

const QuoteSection = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${quoteBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <blockquote className="text-3xl md:text-5xl font-bold text-white leading-relaxed animate-fade-in">
          "The energy, the music, the people—
          <br />
          <span className="text-transparent bg-gradient-festival bg-clip-text">
            Raas & Roots brings the experience
          </span>
          <br />
          of Garba nights passes seamless."
        </blockquote>
        
        {/* Decorative elements */}
        <div className="flex justify-center mt-12 space-x-4 animate-fade-in-delay-1">
          <div className="w-2 h-2 bg-festival-orange rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-festival-gold rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-festival-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;