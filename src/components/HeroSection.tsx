import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-electrical-products.jpg';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <h1 className="heading-hero">
                Power up your world with the 
                <span className="text-gold"> best in electricals</span>
              </h1>
              <p className="text-premium max-w-xl">
                From Finolex wires to GM, Legrand, and Havells switches, to stylish LED fittings – 
                only trusted brands. Sales, service, and installation with speed, skill, and reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProducts}
                className="btn-premium group"
              >
                Explore Premium Brands
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-premium"
              >
                Get Quote
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Reliable</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-in">
            <div className="absolute inset-0 bg-gradient-gold rounded-2xl transform rotate-3 opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Premium electrical products including wires, switches, and LED fittings from trusted brands"
              className="relative rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;