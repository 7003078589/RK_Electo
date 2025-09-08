import { Cable, Lightbulb, Settings, Wrench } from 'lucide-react';
import wiresImage from '@/assets/product-wires.jpg';
import switchesImage from '@/assets/product-switches.jpg';
import ledImage from '@/assets/product-led.jpg';
import installationImage from '@/assets/service-installation.jpg';

const ProductsSection = () => {
  const products = [
    {
      title: 'Premium Wires & Cables',
      description: 'High-quality copper wires from Finolex and Polycab for safe, reliable electrical connections.',
      image: wiresImage,
      icon: Cable,
      features: ['ISI Certified', 'Fire Resistant', 'Long Lasting']
    },
    {
      title: 'Switches & Outlets',
      description: 'Elegant switches and outlets from Havells, Legrand, and GM with modern designs.',
      image: switchesImage,
      icon: Settings,
      features: ['Modern Design', '20A Rating', 'Easy Installation']
    },
    {
      title: 'LED Lighting Solutions',
      description: 'Energy-efficient LED fittings and bulbs for homes and commercial spaces.',
      image: ledImage,
      icon: Lightbulb,
      features: ['Energy Efficient', 'Long Life', 'Bright Illumination']
    },
    {
      title: 'Installation Service',
      description: 'Professional installation and maintenance services by certified electricians.',
      image: installationImage,
      icon: Wrench,
      features: ['Expert Technicians', 'Safety First', '1 Year Warranty']
    }
  ];

  return (
    <section id="products" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section">Products & Services</h2>
          <p className="text-premium">
            Complete electrical solutions for all your residential and commercial needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.title}
              className="product-card fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold/90 p-2 rounded-full">
                  <product.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-background border-2 border-primary text-primary py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;