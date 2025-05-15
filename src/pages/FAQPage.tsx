
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Vergunningen & Regelgeving",
    questions: [
      {
        question: "Heb ik een vergunning nodig?",
        answer: "Voor mantelzorgwoningen gelden versoepelde regels. In veel gevallen is een vergunning niet nodig of kan deze eenvoudig worden verkregen. Wij adviseren u graag over de specifieke situatie in uw gemeente."
      },
      {
        question: "Moet ik een mantelzorgverklaring hebben?",
        answer: "Ja, in de meeste gemeenten is een mantelzorgverklaring nodig. Deze kan worden afgegeven door een huisarts, wijkverpleegkundige of een andere erkende zorgverlener. Wij kunnen u adviseren over het verkrijgen van deze verklaring."
      },
      {
        question: "Gelden er beperkingen voor de grootte?",
        answer: "Ja, er zijn meestal regels over de maximale grootte van een mantelzorgwoning. Dit verschilt per gemeente, maar doorgaans is het maximum ongeveer 100 m². Wij kennen de lokale regelgeving en kunnen u hierover informeren."
      },
      {
        question: "Wat gebeurt er met de woning als er geen mantelzorg meer nodig is?",
        answer: "Wanneer er geen mantelzorg meer nodig is, moet de woning volgens de meeste gemeentelijke regelgeving worden verwijderd of in gebruik worden genomen als onderdeel van de hoofdwoning. Onze woningen zijn zo ontworpen dat ze relatief eenvoudig kunnen worden verwijderd of verplaatst."
      }
    ]
  },
  {
    category: "Kosten & Financiering",
    questions: [
      {
        question: "Hoeveel kost een Tuinwoning?",
        answer: "De kosten van een Tuinwoning zijn afhankelijk van het model, de afmetingen en de specifieke wensen. Prijzen beginnen vanaf €75.000. Neem contact met ons op voor een persoonlijke offerte."
      },
      {
        question: "Zijn er subsidies beschikbaar?",
        answer: "Er zijn verschillende subsidies en regelingen beschikbaar voor mantelzorgwoningen, afhankelijk van uw situatie en uw gemeente. Sommige gemeenten bieden bijvoorbeeld een mantelzorgwoning-subsidie aan. Ook zijn er mogelijkheden via de Wet maatschappelijke ondersteuning (Wmo). Wij kunnen u adviseren over de mogelijkheden in uw situatie."
      },
      {
        question: "Kan ik een hypotheek krijgen voor een mantelzorgwoning?",
        answer: "In sommige gevallen is het mogelijk om de mantelzorgwoning te financieren via een hypotheek, bijvoorbeeld door het verhogen van de bestaande hypotheek. Er zijn ook banken die specifieke leningen aanbieden voor mantelzorgwoningen. Wij werken samen met financieel adviseurs die gespecialiseerd zijn in dit onderwerp."
      },
      {
        question: "Welke kosten komen er nog meer bij?",
        answer: "Naast de aanschaf van de woning zelf, moet u rekening houden met kosten voor de fundering, aansluitingen op nutsvoorzieningen, eventuele vergunningen, en soms ook voor grondwerk. In onze offerte maken we deze kosten inzichtelijk, zodat u niet voor verrassingen komt te staan."
      }
    ]
  },
  {
    category: "Planning & Realisatie",
    questions: [
      {
        question: "Wat is de levertijd?",
        answer: "Vanaf het moment van definitieve opdracht tot oplevering duurt het proces ongeveer 3 maanden. De plaatsing zelf gebeurt in één dag."
      },
      {
        question: "Hoe gaat de plaatsing in zijn werk?",
        answer: "De woning wordt in onze fabriek volledig voorbereid en in grote elementen naar de locatie getransporteerd. Ter plaatse worden deze elementen samengevoegd en geïnstalleerd. Dit proces neemt doorgaans slechts één dag in beslag, waarna de woning direct bewoonbaar is."
      },
      {
        question: "Is er een fundering nodig?",
        answer: "Ja, er is een fundering nodig. Afhankelijk van de ondergrond en het type woning, kan dit een betonnen fundering, schroeffundering of een andere oplossing zijn. Wij verzorgen de hele fundering, inclusief het ontwerp en de aanleg."
      },
      {
        question: "Hoe worden de nutsvoorzieningen aangesloten?",
        answer: "De woning kan worden aangesloten op de bestaande nutsvoorzieningen van het hoofdgebouw of op het openbare net. Wij regelen alle aansluitingen voor water, elektra, riolering en desgewenst ook voor internet en televisie."
      }
    ]
  },
  {
    category: "Gebruik & Onderhoud",
    questions: [
      {
        question: "Is het mogelijk op huurgrond?",
        answer: "Ja, in veel gevallen is het mogelijk om een Tuinwoning te plaatsen op huurgrond. Hiervoor is wel toestemming nodig van de verhuurder of woningcorporatie. Wij kunnen u adviseren over de mogelijkheden."
      },
      {
        question: "Hoe duurzaam zijn de woningen?",
        answer: "Onze woningen zijn zeer energiezuinig en voldoen aan de huidige bouwnormen. Ze zijn goed geïsoleerd en kunnen worden uitgerust met duurzame technologieën zoals zonnepanelen en warmtepompen. We gebruiken waar mogelijk duurzame materialen."
      },
      {
        question: "Is er garantie op de woning?",
        answer: "Ja, we bieden 5 jaar garantie op constructie en afwerking. Daarnaast bieden we de mogelijkheid voor een onderhoudscontract, waarbij we jaarlijks een inspectie uitvoeren en klein onderhoud plegen."
      },
      {
        question: "Kan ik de indeling later nog wijzigen?",
        answer: "In beperkte mate is het mogelijk om de indeling na plaatsing aan te passen. Grote wijzigingen zijn echter moeilijker te realiseren. Daarom besteden we veel aandacht aan de ontwerpfase, zodat de woning vanaf het begin aan uw wensen voldoet."
      }
    ]
  }
];

const FAQPage = () => {
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
              Veelgestelde vragen
            </h1>
            <p className="text-lg md:text-xl text-brown">
              Antwoorden op de meest gestelde vragen over onze tuinwoningen
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          {faqCategories.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 pb-2 border-b border-sage/30">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`${index}-${qIndex}`}>
                    <AccordionTrigger className="text-lg font-medium text-charcoal hover:text-sage py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-brown pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          
          <div className="mt-16 bg-sage/10 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Heeft u nog andere vragen?
            </h3>
            <p className="text-brown mb-6 max-w-2xl mx-auto">
              Wij helpen u graag verder. Neem contact met ons op via onderstaande knop of bel ons direct op +31 (0) 123 456 789.
            </p>
            <Button asChild className="bg-sage hover:bg-sage/90">
              <Link to="/contact">Neem contact op</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </main>
  );
};

export default FAQPage;
