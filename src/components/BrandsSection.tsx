const BrandsSection = () => {
  const brands = [
    { 
      name: 'Havells', 
      tagline: 'Innovation for Life',
      color: '#1e40af'
    },
    { 
      name: 'Finolex', 
      tagline: 'Building Tomorrow',
      color: '#dc2626'
    },
    { 
      name: 'GM', 
      tagline: 'Quality First',
      color: '#059669'
    },
    { 
      name: 'Legrand', 
      tagline: 'Global Specialist',
      color: '#7c3aed'
    },
    { 
      name: 'Anchor', 
      tagline: 'Switch to the Best',
      color: '#ea580c'
    },
    { 
      name: 'Polycab', 
      tagline: 'Connecting India',
      color: '#be185d'
    }
  ];

  return (
    <section id="sales" className="py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section">Trusted Brand Partners</h2>
          <p className="text-premium">
            We only work with the most reliable electrical brands in the industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 fade-in">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-background rounded-xl p-6 shadow-card group-hover:shadow-gold transition-all duration-300">
                <div className="h-20 flex items-center justify-center mb-4">
                  <svg width="120" height="60" viewBox="0 0 120 60" className="transition-all duration-300 group-hover:scale-110">
                    <text 
                      x="60" 
                      y="35" 
                      fontFamily="Arial, sans-serif" 
                      fontSize="16" 
                      fontWeight="bold" 
                      textAnchor="middle" 
                      fill={brand.color}
                      className="transition-colors duration-300"
                    >
                      {brand.name}
                    </text>
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {brand.tagline}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;