
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrochureForm from '@/components/BrochureForm';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FilePdf } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const Brochure = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brochureUrl = 'https://www.tuinwoning.nl/app/uploads/2024/02/2024-TUINWONING_Brochure.pdf';

  return (
    <main className="min-h-screen">
      <SEO 
        title="Tuinwoning.nl Brochure - Vraag onze brochure aan" 
        description="Download onze uitgebreide brochure met alle details over onze tuinwoningen, plattegronden en prijsinformatie."
        canonicalUrl="https://tuinwoning.nl/brochure"
      />
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
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

              {/* Official Brochure Card */}
              <Card className="mt-8 overflow-hidden border-sage/20">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative flex-shrink-0 w-full sm:w-32 h-44 bg-beige/50 rounded overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FilePdf className="h-16 w-16 text-sage" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-charcoal mb-2">Officiële Tuinwoning Brochure</h3>
                      <p className="text-brown mb-4">Download direct onze meest recente brochure met alle informatie over tuinwoningen.</p>
                      <Button 
                        onClick={() => window.open(brochureUrl, '_blank')}
                        className="w-full sm:w-auto bg-sage hover:bg-sage/90"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="sticky top-24">
              <BrochureForm pdfUrl={brochureUrl} />
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
