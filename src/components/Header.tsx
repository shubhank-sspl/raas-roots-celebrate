import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-warm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R&R</span>
          </div>
          <span className="text-xl font-bold text-foreground">Raas & Roots</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Functionality
          </button>
          <button
            onClick={() => scrollToSection('faqs')}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            FAQs
          </button>
          <Button
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('download')}
          >
            Download App
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-left text-foreground hover:text-primary transition-colors duration-200"
            >
              Functionality
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="text-left text-foreground hover:text-primary transition-colors duration-200"
            >
              FAQs
            </button>
            <Button
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full"
              onClick={() => scrollToSection('download')}
            >
              Download App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;