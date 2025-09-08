import { Shield, Users, Truck, Headphones } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Brands Only',
      description: 'We partner exclusively with certified, ISI-approved electrical brands for guaranteed quality and safety.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Expert Installation',
      description: 'Our certified electricians have 15+ years of experience in residential and commercial installations.',
      color: 'text-green-600'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same-day delivery within the city and next-day delivery to nearby areas with our logistics network.',
      color: 'text-orange-600'
    },
    {
      icon: Headphones,
      title: 'Reliable After-Sales Service',
      description: 'Customer support and comprehensive warranty coverage on all products and installations.',
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section">Why Choose RK Electro Hub?</h2>
          <p className="text-premium">
            Your trusted partner for all electrical needs with unmatched service quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-premium text-center fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex">
                <div className="p-4 bg-gold/10 rounded-2xl">
                  <feature.icon className="h-8 w-8 text-gold" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Power Up Your Space?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get a free consultation and quote for your electrical project today
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-premium"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;