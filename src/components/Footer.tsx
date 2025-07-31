import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="download" className="bg-gradient-heritage text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">R&R</span>
              </div>
              <span className="text-2xl font-bold">Raas & Roots</span>
            </div>
            <p className="text-lg opacity-90 font-medium">
              Powered by culture. Driven by community.
            </p>
            <p className="opacity-75">
              Connecting you to your heritage, one celebration at a time.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="space-y-4 animate-fade-in-delay-1">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@raasnroots.com"
                className="flex items-center space-x-3 hover:text-festival-gold transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span>info@raasnroots.com</span>
              </a>
            </div>
          </div>
          
          {/* Social & Navigation */}
          <div className="space-y-4 animate-fade-in-delay-2">
            <h3 className="text-xl font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            
            <div className="space-y-2 pt-4">
              <a
                href="#"
                className="block text-sm opacity-75 hover:opacity-100 transition-opacity duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-sm opacity-75 hover:opacity-100 transition-opacity duration-200"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center space-y-4 animate-fade-in">
            <p className="opacity-75">
              © 2024 Raas & Roots. All rights reserved.
            </p>
            <p className="text-sm opacity-60">
              Made with ❤️ for the cultural community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;