
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const workflowSteps = [
  {
    number: 1,
    title: "Gesprek met de opdrachtgever",
    description: "Je wordt uitgenodigd voor een oriënterend gesprek op het showterrein of bij je thuis. Tijdens dit gesprek worden je wensen besproken, zoals de uitvoering, het formaat, de situatie ter plaatse en de gewenste levertijd. Deze informatie wordt vertaald naar een plattegrond en offerte.",
    icon: "🏠"
  },
  {
    number: 2,
    title: "Advies uitwerken op papier",
    description: "Op basis van de verstrekte informatie wordt de beste indeling bepaald, rekening houdend met looproutes, doorgangen, plaatsing van ramen en technische mogelijkheden. Dit resulteert in een plattegrond en offerte, waarmee de eerste stappen naar realisatie van de mantelzorgwoning zijn gezet.",
    icon: "📝"
  },
  {
    number: 3,
    title: "Wij bezoeken u!",
    description: "Er wordt een bezoek gebracht aan de locatie, waarbij de contouren van de woning op het terrein worden uitgezet. De nutsvoorzieningen worden bekeken, de plattegrond wordt besproken en materialen worden geselecteerd om een 3D-ontwerp te maken.",
    icon: "🚗"
  },
  {
    number: 4,
    title: "Presentatie van uw woning",
    description: "Het 3D-ontwerp en de offerte voor aanpassingen met betrekking tot nutsvoorzieningen, hovenierswerkzaamheden en plaatsing worden gepresenteerd. Alle kosten zijn inzichtelijk, en er kan worden overgegaan tot het bestellen van de woning. Ondertussen wordt nagegaan of de woning qua vergunning geplaatst mag worden.",
    icon: "💻"
  },
  {
    number: 5,
    title: "Start van de bouw",
    description: "De bouw wordt gestart, een spannend moment. Na ongeveer 3 maanden is de woning klaar. Tijdens de bouw zijn er momenten waarop je wordt uitgenodigd om de voortgang te bekijken.",
    icon: "🔨"
  },
  {
    number: 6,
    title: "Uw woning is klaar",
    description: "De dag van levering is aangebroken. De woning wordt 's nachts met speciaal transport van de fabriek naar de nieuwe locatie vervoerd en binnen enkele uren geplaatst.",
    icon: "🚚"
  },
  {
    number: 7,
    title: "Periode na levering van de woning",
    description: "Er wordt contact gehouden om te vernemen of alles naar wens is. Via een servicecontract ben je jaarlijks verzekerd van een conditiecheck van alle installaties en de conditie van de woning.",
    icon: "✅"
  }
];

const Workflow = () => {
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
              Onze Werkwijze
            </h1>
            <p className="text-lg md:text-xl text-brown">
              Van eerste gesprek tot sleuteloverdracht: zo realiseren wij uw tuinwoning
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {workflowSteps.map((step, index) => (
              <div key={step.number} className="flex mb-16 last:mb-0">
                <div className="mr-6 md:mr-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-sage text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                    {step.number}
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="w-px h-16 bg-sage/30 mx-auto mt-4"></div>
                  )}
                </div>
                <div>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="hidden md:block mr-6 text-4xl">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3">
                            {step.title}
                          </h3>
                          <p className="text-brown">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Veelgestelde vragen over ons proces
            </h2>
            <p className="text-brown max-w-2xl mx-auto">
              Antwoorden op uw vragen over onze werkwijze
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-charcoal mb-3">Hoe lang duurt het hele proces?</h3>
              <p className="text-brown">
                Vanaf het eerste gesprek tot de oplevering duurt het proces gemiddeld 4-6 maanden. 
                De bouwfase zelf neemt ongeveer 3 maanden in beslag, afhankelijk van de complexiteit 
                en specifieke wensen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-charcoal mb-3">Moet ik zelf voor een vergunning zorgen?</h3>
              <p className="text-brown">
                Nee, wij verzorgen de vergunningsaanvraag voor u. Onze specialist kent de regelgeving 
                rondom mantelzorgwoningen goed en weet precies welke documenten nodig zijn voor uw gemeente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-charcoal mb-3">Kan ik de woning later weer verwijderen?</h3>
              <p className="text-brown">
                Ja, onze woningen zijn zo ontworpen dat ze relatief eenvoudig kunnen worden verwijderd 
                of verplaatst als de situatie verandert. Dit is ook een van de voorwaarden die vaak 
                gesteld wordt voor een mantelzorgwoning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-charcoal mb-3">Welke aansluitingen worden geregeld?</h3>
              <p className="text-brown">
                Wij zorgen voor alle noodzakelijke aansluitingen: water, elektra, riolering, en 
                desgewenst internet en televisie. Deze worden aangesloten op het hoofdgebouw of 
                op het openbare net, afhankelijk van de situatie.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-sage hover:bg-sage/90">
              <Link to="/contact">Heb je een andere vraag? Neem contact op</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </main>
  );
};

export default Workflow;
