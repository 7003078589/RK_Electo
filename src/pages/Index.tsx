import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandsSection from '@/components/BrandsSection';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <ProductsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
