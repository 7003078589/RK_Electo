import { Zap, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-premium text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">RK Electro Hub</h3>
                <p className="text-sm opacity-80">Electrical Excellence</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner for premium electrical solutions. 
              Quality products, expert installation, and reliable service since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all">About Us</a></li>
              <li><a href="#products" className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all">Products</a></li>
              <li><a href="#services" className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all">Services</a></li>
              <li><a href="#contact" className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all">Contact</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-sm opacity-80">Electrical Installation</span></li>
              <li><span className="text-sm opacity-80">Maintenance & Repair</span></li>
              <li><span className="text-sm opacity-80">LED Lighting Solutions</span></li>
              <li><span className="text-sm opacity-80">Wiring & Rewiring</span></li>
              <li><span className="text-sm opacity-80">Emergency Service</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-sm opacity-80">No 79/32, 8th Main Road, 2nd Block Jayanagar</p>
              <p className="text-sm opacity-80">Bangalore 560011</p>
              <p className="text-sm opacity-80">Phone: +91 7353668586</p>
              <p className="text-sm opacity-80">Email: info@rkehub.com</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2024 RK Electro Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all">Privacy Policy</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all">Terms of Service</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;