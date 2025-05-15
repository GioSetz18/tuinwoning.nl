
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BrochureForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold text-charcoal mb-4">
        Vraag onze brochure aan
      </h3>
      <p className="text-brown mb-6">
        Vul uw gegevens in en ontvang de brochure direct in uw inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Voornaam</Label>
            <Input 
              id="firstName" 
              type="text" 
              placeholder="Uw voornaam"
              required
              className="border-gray-300 focus:border-sage focus:ring-sage"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Achternaam</Label>
            <Input 
              id="lastName" 
              type="text"
              placeholder="Uw achternaam"
              required
              className="border-gray-300 focus:border-sage focus:ring-sage"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">E-mailadres</Label>
          <Input 
            id="email" 
            type="email"
            placeholder="uw.email@voorbeeld.nl"
            required
            className="border-gray-300 focus:border-sage focus:ring-sage"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Telefoonnummer</Label>
          <Input 
            id="phone" 
            type="tel"
            placeholder="+31 6 12345678"
            required
            className="border-gray-300 focus:border-sage focus:ring-sage"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="postcode">Postcode</Label>
            <Input 
              id="postcode" 
              type="text"
              placeholder="1234 AB"
              required
              className="border-gray-300 focus:border-sage focus:ring-sage"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="houseNumber">Huisnummer</Label>
            <Input 
              id="houseNumber" 
              type="text"
              placeholder="123"
              required
              className="border-gray-300 focus:border-sage focus:ring-sage"
            />
          </div>
        </div>
        
        <div className="pt-2">
          <Button type="submit" className="w-full bg-sage hover:bg-sage/90">
            Brochure aanvragen
          </Button>
        </div>
        
        <p className="text-xs text-brown text-center pt-2">
          Wij gaan zorgvuldig met uw gegevens om en gebruiken deze alleen om u te voorzien van de aangevraagde informatie.
        </p>
      </form>
    </div>
  );
};

export default BrochureForm;
