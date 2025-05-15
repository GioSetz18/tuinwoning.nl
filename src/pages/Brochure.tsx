
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrochureForm from '@/components/BrochureForm';

const Brochure = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-beige">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Vraag onze brochure aan
            </h1>
            <p className="text-lg md:text-xl text-brown">
              Ontdek alle details over onze tuinwoningen in onze uitgebreide brochure
            </p>
          </div>
        </div>
      </section>
      
      {/* Brochure Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Wat kunt u verwachten in onze brochure?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-sage text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span className="text-brown">Gedetailleerde beschrijvingen van alle modellen</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-sage text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span className="text-brown">Plattegronden en technische specificaties</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-sage text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span className="text-brown">Prijsindicaties en financieringsmogelijkheden</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-sage text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span className="text-brown">Uitleg over wet- en regelgeving</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-sage text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span className="text-brown">Ervaringen van klanten</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-sage text-white flex items-center justify-center mr-3 mt-0.5">✓</div>
                  <span className="text-brown">Foto's van gerealiseerde projecten</span>
                </li>
              </ul>
              
              <div className="mt-8 bg-beige rounded-xl p-6">
                <p className="text-charcoal italic">
                  "De brochure was zeer informatief en hielp ons enorm bij het maken van een keuze. Alle informatie die we nodig hadden, stond er duidelijk in uitgelegd."
                </p>
                <p className="text-brown font-bold mt-2">- Familie de Vries</p>
              </div>
            </div>
            
            <div>
              <BrochureForm />
            </div>
          </div>
          
          {/* Preview Images */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
              Impressies uit onze brochure
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="aspect-[4/3] bg-sage/20 rounded-lg overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1600000000000 + index * 10000}?w=400`}
                    alt={`Brochure impressie ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Brochure;
