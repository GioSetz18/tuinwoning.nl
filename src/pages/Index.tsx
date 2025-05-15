
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

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
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
                <img
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=800"
                  alt="Tuinwoning brochure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <BrochureForm />
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
