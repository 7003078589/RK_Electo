import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/dc7bfef6-041e-4586-a2f9-ff696e356890.png" 
              alt="RK Electro Hub - The Hub for All Your Electrical Needs" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">RK Electro Hub</h1>
              <p className="text-sm text-muted-foreground">Electrical Excellence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sales')}
              className="text-foreground hover:text-gold font-medium transition-colors"
            >
              Sales
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-gold font-medium transition-colors"
            >
              Service
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-outline-premium"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-primary"></div>
              <div className="w-full h-0.5 bg-primary"></div>
              <div className="w-full h-0.5 bg-primary"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;