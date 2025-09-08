import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section">Get In Touch</h2>
          <p className="text-premium">
            Ready to discuss your electrical needs? Contact us for expert advice and quick quotes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Visit Our Store</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Address</h4>
                    <p className="text-muted-foreground">
                      No 79/32, 8th Main Road, 2nd Block Jayanagar<br />
                      Bangalore 560011
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/10 rounded-lg">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Phone</h4>
                    <p className="text-muted-foreground">+91 7353668586</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/10 rounded-lg">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-muted-foreground">info@rkehub.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold/10 rounded-lg">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Business Hours</h4>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-elegant">
              <iframe
                title="RK Electro Hub Location"
                src="https://www.google.com/maps?q=No%2079%2F32%2C%208th%20Main%20Road%2C%202nd%20Block%20Jayanagar%2C%20Bangalore%20560011&output=embed"
                width="100%"
                height="256"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <div className="bg-background rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your electrical needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-premium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;