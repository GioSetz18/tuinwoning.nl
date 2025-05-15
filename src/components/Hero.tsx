
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 bg-beige">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              Zorgeloos dichtbij wonen
            </h1>
            <p className="text-lg md:text-xl text-brown mb-8 max-w-lg mx-auto md:mx-0">
              Tuinwoningen voor ouders die dichtbij willen wonen, met behoud van privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="btn-primary">
                <Link to="/brochure">Vraag Brochure aan</Link>
              </Button>
              <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage/10">
                <Link to="/modellen">Bekijk Modellen</Link>
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-sm font-medium text-brown mb-2">Vertrouwd door 100+ families in Nederland</p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-16 h-8 bg-white/50 rounded-md"></div>
                <div className="w-16 h-8 bg-white/50 rounded-md"></div>
                <div className="w-16 h-8 bg-white/50 rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800"
                alt="Senior met volwassen kind"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
