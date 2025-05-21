
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Steps from '@/components/Steps';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import BrochureForm from '@/components/BrochureForm';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brochureUrl = 'https://www.tuinwoning.nl/app/uploads/2024/02/2024-TUINWONING_Brochure.pdf';
  
  return <main className="min-h-screen">
      <SEO />
      <Navbar />
      <Hero />
      <Benefits />
      <Steps />
      
      {/* Brochure section with split layout */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Ontdek alle details over onze tuinwoningen
              </h2>
              <p className="text-lg text-brown mb-6">
                In onze brochure vindt u uitgebreide informatie over de verschillende modellen, specificaties, mogelijkheden en prijsindicaties.
              </p>
              <div className="aspect-video bg-sage/20 rounded-xl mb-4 overflow-hidden">
                <img alt="Tuinwoning brochure" src="/lovable-uploads/c99f486b-83e0-462a-b9b4-22536804f75c.png" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <BrochureForm pdfUrl={brochureUrl} />
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>;
};
export default Index;
