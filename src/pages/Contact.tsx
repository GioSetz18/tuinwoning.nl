
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Contact form submitted');
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-beige">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Contact
            </h1>
            <p className="text-lg md:text-xl text-brown">
              Neem contact op met ons team voor meer informatie of persoonlijk advies
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                Stuur ons een bericht
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">Voornaam</Label>
                    <Input 
                      id="firstname" 
                      placeholder="Uw voornaam" 
                      className="border-gray-300 focus:border-sage focus:ring-sage"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Achternaam</Label>
                    <Input 
                      id="lastname" 
                      placeholder="Uw achternaam" 
                      className="border-gray-300 focus:border-sage focus:ring-sage"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mailadres</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="uw.email@voorbeeld.nl" 
                    className="border-gray-300 focus:border-sage focus:ring-sage"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <Input 
                    id="phone" 
                    placeholder="+31 6 12345678" 
                    className="border-gray-300 focus:border-sage focus:ring-sage"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Onderwerp</Label>
                  <Input 
                    id="subject" 
                    placeholder="Waar gaat uw vraag over?" 
                    className="border-gray-300 focus:border-sage focus:ring-sage"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Bericht</Label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="Uw bericht..." 
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-sage hover:bg-sage/90">
                  Versturen
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                Contactgegevens
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-sage mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-charcoal">Telefoon</h3>
                    <p className="text-brown">+31 (0) 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-sage mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-charcoal">E-mail</h3>
                    <p className="text-brown">info@tuinwoning.nl</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-sage mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-charcoal">Adres</h3>
                    <p className="text-brown">
                      Voorbeeldstraat 123<br />
                      1234 AB Amsterdam<br />
                      Nederland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-sage mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-charcoal">Openingstijden</h3>
                    <p className="text-brown">
                      Maandag - Vrijdag: 9:00 - 17:00<br />
                      Zaterdag: 10:00 - 14:00 (Op afspraak)<br />
                      Zondag: Gesloten
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-sage/10 rounded-xl flex items-center justify-center">
                <p className="text-brown">Google Maps zou hier komen</p>
              </div>
              
              {/* WhatsApp Button */}
              <Button className="mt-8 w-full bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                WhatsApp direct contact
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Contact;
